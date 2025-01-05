import React, { useState } from 'react';
import { format } from 'date-fns';

interface Event {
    _id: string;
    name: string;
    description: string;
    startTime: string;
    registrationCap: number;
    price: number;
    registrants: any[];
}

interface Tournament {
    _id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    basePrice: number;
    location: string;
    events: Event[];
    mutuallyExclusiveEventGroups: string[][];
}

interface TournamentRegistrationProps {
    tournament: Tournament;
    onSubmit: (values: any) => Promise<void>;
    isLoading?: boolean;
    bannerImage: string;
}

interface FormData {
    preferredFirstName: string;
    preferredLastName: string;
    legalFirstName: string;
    legalLastName: string;
    email: string;
    phoneNumber: string;
    selectedEvents: string[];
    clubAffiliation: string;
    isGuardian: boolean;
    guardianFirstName: string;
    guardianLastName: string;
}

interface FormErrors {
    preferredFirstName?: string;
    preferredLastName?: string;
    legalFirstName?: string;
    legalLastName?: string;
    email?: string;
    phoneNumber?: string;
    selectedEvents?: string;
    clubAffiliation?: string;
    guardianFirstName?: string;
    guardianLastName?: string;
}

export const TournamentRegistration: React.FC<TournamentRegistrationProps> = ({
    tournament,
    onSubmit,
    isLoading = false,
    bannerImage,
}) => {
    const [formData, setFormData] = useState<FormData>({
        preferredFirstName: '',
        preferredLastName: '',
        legalFirstName: '',
        legalLastName: '',
        email: '',
        phoneNumber: '',
        clubAffiliation: '',
        selectedEvents: [],
        isGuardian: false,
        guardianFirstName: '',
        guardianLastName: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [totalPrice, setTotalPrice] = useState(tournament.basePrice);
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const validateField = (name: string, value: any): string | undefined => {
        switch (name) {
            case 'selectedEvents':
                return value.length === 0 ? 'Please select at least one event' : undefined;
            case 'preferredFirstName':
            case 'preferredLastName':
            case 'legalFirstName':
            case 'legalLastName':
                return !value.trim() ? `${name.replace(/([A-Z])/g, ' $1').trim()} is required` : undefined;
            case 'email':
                return !value.trim()
                    ? 'Email is required'
                    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                    ? 'Please enter a valid email'
                    : undefined;
            case 'phoneNumber':
                return !value.trim() ? 'Phone number is required' : undefined;
            case 'guardianFirstName':
            case 'guardianLastName':
                return formData.isGuardian && !value.trim()
                    ? `Guardian ${name.replace('guardian', '').replace(/([A-Z])/g, ' $1').trim()} is required`
                    : undefined;
            default:
                return undefined;
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        // Validate all fields
        Object.keys(formData).forEach((key) => {
            if (key === 'selectedEvents') {
                if (formData.selectedEvents.length === 0) {
                    newErrors.selectedEvents = 'Please select at least one event';
                    isValid = false;
                }
            } else {
                const error = validateField(key, formData[key as keyof FormData] as string);
                if (error) {
                    newErrors[key as keyof FormErrors] = error;
                    isValid = false;
                }
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear guardian fields when unchecking the box
        if (name === 'isGuardian' && !checked) {
            setFormData(prev => ({
                ...prev,
                guardianFirstName: '',
                guardianLastName: '',
                [name]: checked
            }));
        }

        // Always validate on change and clear error if valid
        const error = validateField(name, type === 'checkbox' ? checked : value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleEventSelection = (event: React.ChangeEvent<HTMLInputElement>, eventPrice: number) => {
        const { checked, name: selectedEventId } = event.target;
        let newSelectedEvents = [...formData.selectedEvents];
        let newTotalPrice = totalPrice;

        // Check if the selected event is part of any exclusive group
        const exclusiveGroup = tournament.mutuallyExclusiveEventGroups.find(group => 
            group.includes(selectedEventId)
        );

        if (checked) {
            // If this event is part of an exclusive group, remove any other selected events from the same group
            if (exclusiveGroup) {
                newSelectedEvents = newSelectedEvents.filter(eventId => 
                    !exclusiveGroup.includes(eventId)
                );
            }
            newSelectedEvents.push(selectedEventId);
            newTotalPrice += eventPrice;
        } else {
            newSelectedEvents = newSelectedEvents.filter(id => id !== selectedEventId);
            newTotalPrice -= eventPrice;
        }

        setFormData(prev => ({ ...prev, selectedEvents: newSelectedEvents }));
        setTotalPrice(newTotalPrice);

        // Update selectedEvents error
        setErrors(prev => ({
            ...prev,
            selectedEvents: newSelectedEvents.length === 0 ? 'Please select at least one event' : undefined
        }));
    };

    const isEventDisabled = (eventId: string) => {
        // If the event is already at capacity
        const event = tournament.events.find(e => e._id === eventId);
        if (event && event.registrants.length >= event.registrationCap) {
            return true;
        }

        // If the event is part of an exclusive group
        const exclusiveGroup = tournament.mutuallyExclusiveEventGroups.find(group => 
            group.includes(eventId)
        );

        if (exclusiveGroup) {
            // Check if any other event from the same group is already selected
            const hasSelectedFromGroup = formData.selectedEvents.some(selectedId => 
                exclusiveGroup.includes(selectedId) && selectedId !== eventId
            );
            return hasSelectedFromGroup;
        }

        return false;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Mark all fields as touched
        const fieldsToValidate = [
            'selectedEvents',
            'preferredFirstName',
            'preferredLastName',
            'legalFirstName',
            'legalLastName',
            'email',
            'phoneNumber',
            ...(formData.isGuardian ? ['guardianFirstName', 'guardianLastName'] : [])
        ];

        // Set all fields as touched
        const newTouched = fieldsToValidate.reduce((acc, field) => ({
            ...acc,
            [field]: true
        }), {});
        setTouched(newTouched);

        const newErrors: { [key: string]: string } = {};
        fieldsToValidate.forEach(field => {
            const error = validateField(field, formData[field as keyof FormData]);
            if (error) {
                newErrors[field] = error;
            }
        });

        setErrors(newErrors);

        // If there are no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
            try {
                await onSubmit(formData);
            } catch (error) {
                console.error('Form submission error:', error);
            }
        } else {
            console.log('Form has errors:', newErrors);
            // Scroll to the first error
            const firstErrorField = document.querySelector('[aria-invalid="true"]');
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner Image */}
            <div className="max-w-5xl mx-auto">
                <div className="w-full h-[300px] relative overflow-hidden mb-8">
                    <img
                        src={bannerImage}
                        alt={`${tournament.name} Banner`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto p-4 md:p-6">
                {/* Tournament Header */}
                <div className="bg-Navy text-white p-6 rounded-lg mb-8">
                    <h1 className="text-3xl font-bold text-center">{tournament.name}</h1>
                    <p className="text-center mt-2 text-gray-200">{tournament.description}</p>
                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            {format(new Date(tournament.startDate), 'MMMM d, yyyy')} - {format(new Date(tournament.endDate), 'MMMM d, yyyy')}
                        </p>
                        <p className="text-sm mt-1">{tournament.location}</p>
                    </div>
                </div>

                {/* Event Registration */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-Navy mb-6">Event Registration and Schedule</h2>
                        <div className="space-y-6">
                            {Object.entries(
                                tournament.events
                                    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
                                    .reduce((acc, event) => {
                                        const eventDate = new Date(event.startTime);
                                        const dateKey = eventDate.toDateString();
                                        
                                        if (!acc[dateKey]) {
                                            acc[dateKey] = [];
                                        }
                                        acc[dateKey].push(event);
                                        return acc;
                                    }, {})
                            ).map(([dateKey, events]) => {
                                const eventDate = new Date(dateKey);
                                return (
                                    <div key={dateKey} className="py-4 first:pt-0 last:pb-0">
                                        <div className="text-lg font-semibold text-Navy mb-3">
                                            {format(eventDate, 'EEEE, MMMM d, yyyy')}
                                        </div>
                                        <div className="space-y-4">
                                            {events.map(event => (
                                                <div
                                                    key={event._id}
                                                    className={`relative bg-white rounded-lg p-6 mb-4 border-2 transition-all duration-200 ${
                                                        formData.selectedEvents.includes(event._id)
                                                            ? 'border-green-500'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                                >
                                                    {/* Top Section: Time, Name, Price */}
                                                    <div className="flex flex-wrap items-start gap-3">
                                                        <div className="flex-1 min-w-0">
                                                            <div>
                                                                <div className="font-medium text-gray-900">
                                                                    {event.name}
                                                                </div>
                                                                <div className="text-sm text-gray-600">
                                                                    {format(new Date(event.startTime), 'h:mm a')}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-4">
                                                            <div className="flex flex-col items-end">
                                                                <span className="text-lg font-semibold">${event.price.toFixed(2)}</span>
                                                                <p className="text-sm text-gray-500">
                                                                    {event.registrants.length} / {event.registrationCap} registered
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center justify-center w-8 h-8">
                                                                <input
                                                                    type="checkbox"
                                                                    name={event._id}
                                                                    className="w-5 h-5 text-periwinkle border-gray-300 rounded focus:ring-periwinkle cursor-pointer"
                                                                    onChange={(e) => handleEventSelection(e, event.price)}
                                                                    checked={formData.selectedEvents.includes(event._id)}
                                                                    disabled={isEventDisabled(event._id)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Bottom Section: Description */}
                                                    {event.description && (
                                                        <div className="mt-6 pt-4 pl-7">
                                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                                {event.description}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {touched.selectedEvents && errors.selectedEvents && (
                            <p className="mt-2 text-sm text-red-500">{errors.selectedEvents}</p>
                        )}
                    </div>

                    {/* Personal Information */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Preferred First Name
                                </label>
                                <input
                                    type="text"
                                    name="preferredFirstName"
                                    value={formData.preferredFirstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={touched.preferredFirstName && errors.preferredFirstName ? 'true' : 'false'}
                                    className={`w-full border rounded-md h-12 px-3 focus:outline-none ${
                                        touched.preferredFirstName && errors.preferredFirstName
                                            ? 'border-red-500'
                                            : 'focus:border-periwinkle'
                                    }`}
                                />
                                {touched.preferredFirstName && errors.preferredFirstName && (
                                    <p className="mt-1 text-sm text-red-500">{errors.preferredFirstName}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Preferred Last Name
                                </label>
                                <input
                                    type="text"
                                    name="preferredLastName"
                                    value={formData.preferredLastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={touched.preferredLastName && errors.preferredLastName ? 'true' : 'false'}
                                    className={`w-full border rounded-md h-12 px-3 focus:outline-none ${
                                        touched.preferredLastName && errors.preferredLastName
                                            ? 'border-red-500'
                                            : 'focus:border-periwinkle'
                                    }`}
                                />
                                {touched.preferredLastName && errors.preferredLastName && (
                                    <p className="mt-1 text-sm text-red-500">{errors.preferredLastName}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Legal First Name
                                </label>
                                <input
                                    type="text"
                                    name="legalFirstName"
                                    value={formData.legalFirstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={touched.legalFirstName && errors.legalFirstName ? 'true' : 'false'}
                                    className={`w-full border rounded-md h-12 px-3 focus:outline-none ${
                                        touched.legalFirstName && errors.legalFirstName
                                            ? 'border-red-500'
                                            : 'focus:border-periwinkle'
                                    }`}
                                />
                                {touched.legalFirstName && errors.legalFirstName && (
                                    <p className="mt-1 text-sm text-red-500">{errors.legalFirstName}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Legal Last Name
                                </label>
                                <input
                                    type="text"
                                    name="legalLastName"
                                    value={formData.legalLastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={touched.legalLastName && errors.legalLastName ? 'true' : 'false'}
                                    className={`w-full border rounded-md h-12 px-3 focus:outline-none ${
                                        touched.legalLastName && errors.legalLastName
                                            ? 'border-red-500'
                                            : 'focus:border-periwinkle'
                                    }`}
                                />
                                {touched.legalLastName && errors.legalLastName && (
                                    <p className="mt-1 text-sm text-red-500">{errors.legalLastName}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                                    className={`w-full border rounded-md h-12 px-3 focus:outline-none ${
                                        touched.email && errors.email
                                            ? 'border-red-500'
                                            : 'focus:border-periwinkle'
                                    }`}
                                />
                                {touched.email && errors.email && (
                                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={touched.phoneNumber && errors.phoneNumber ? 'true' : 'false'}
                                    className={`w-full border rounded-md h-12 px-3 focus:outline-none ${
                                        touched.phoneNumber && errors.phoneNumber
                                            ? 'border-red-500'
                                            : 'focus:border-periwinkle'
                                    }`}
                                />
                                {touched.phoneNumber && errors.phoneNumber && (
                                    <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Club Affiliation
                                </label>
                                <input
                                    type="text"
                                    name="clubAffiliation"
                                    value={formData.clubAffiliation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={touched.clubAffiliation && errors.clubAffiliation ? 'true' : 'false'}
                                    className="w-full border rounded-md h-12 px-3 focus:outline-none focus:border-periwinkle"
                                    placeholder="Optional"
                                />
                                {touched.clubAffiliation && errors.clubAffiliation && (
                                    <p className="mt-1 text-sm text-red-500">{errors.clubAffiliation}</p>
                                )}
                            </div>
                        </div>

                        {/* Guardian Checkbox */}
                        <div className="mt-12">
                            <label className="flex items-start space-x-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="isGuardian"
                                    checked={formData.isGuardian}
                                    onChange={handleChange}
                                    className="w-4 h-4 mt-1 text-periwinkle border-gray-300 rounded focus:ring-periwinkle cursor-pointer"
                                />
                                <span className="text-sm text-gray-700">
                                    I am a guardian signing up on behalf of a minor that is at least 14 years of age
                                </span>
                            </label>
                        </div>

                        {/* Guardian Information - Conditional Rendering */}
                        {formData.isGuardian && (
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Guardian First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="guardianFirstName"
                                        value={formData.guardianFirstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={touched.guardianFirstName && errors.guardianFirstName ? 'true' : 'false'}
                                        className={`w-full border rounded-md h-12 px-3 focus:outline-none ${
                                            touched.guardianFirstName && errors.guardianFirstName
                                                ? 'border-red-500'
                                                : 'focus:border-periwinkle'
                                        }`}
                                    />
                                    {touched.guardianFirstName && errors.guardianFirstName && (
                                        <p className="mt-1 text-sm text-red-500">{errors.guardianFirstName}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Guardian Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="guardianLastName"
                                        value={formData.guardianLastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={touched.guardianLastName && errors.guardianLastName ? 'true' : 'false'}
                                        className={`w-full border rounded-md h-12 px-3 focus:outline-none ${
                                            touched.guardianLastName && errors.guardianLastName
                                                ? 'border-red-500'
                                                : 'focus:border-periwinkle'
                                        }`}
                                    />
                                    {touched.guardianLastName && errors.guardianLastName && (
                                        <p className="mt-1 text-sm text-red-500">{errors.guardianLastName}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Total Price */}
                    <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">Total Price:</span>
                            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isLoading || (Object.keys(errors).length > 0 && Object.values(errors).some(error => error !== undefined))}
                            className={`px-6 py-3 rounded-md text-white font-medium ${
                                isLoading || (Object.keys(errors).length > 0 && Object.values(errors).some(error => error !== undefined))
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-Navy hover:bg-Navy/80 active:bg-Navy/90'
                            }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </div>
                            ) : (
                                'Register'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
