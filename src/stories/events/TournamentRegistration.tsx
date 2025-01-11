import React, { useState } from 'react';
import {
    Tournament,
    FormData,
    FormErrors,
    AdditionalResource,
    SelectedEvent
} from './components/types';
import { TournamentHeader } from './components/TournamentHeader';
import { LocationSection } from './components/LocationSection';
import { AdditionalResourcesSection } from './components/AdditionalResourcesSection';
import { PersonalInformationForm } from './components/PersonalInformationForm';
import { GuardianInformationForm } from './components/GuardianInformationForm';
import { EventSelectionForm } from './components/EventSelectionForm';
import { PriceBreakdown } from './components/PriceBreakdown';
import LoadingPopup from '../components/LoadingPopup';
import { calculatePrice } from './utils/calculatePrice';

interface TournamentRegistrationProps {
    tournament: Tournament;
    onSubmit: (formData: FormData) => Promise<void>;
    bannerImage?: string;
    isLoading?: boolean;
    additionalResources?: AdditionalResource[];
}

const TournamentRegistration = ({
    tournament,
    onSubmit,
    bannerImage,
    isLoading: propIsLoading = false,
    additionalResources,
}: TournamentRegistrationProps) => {
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
    const [priceBreakdown, setPriceBreakdown] = useState(() => calculatePrice(tournament, []));
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isLoading, setIsLoading] = useState(propIsLoading);

    const validateField = (name: keyof FormData, value: string | boolean | SelectedEvent[]) => {
        let error: string | undefined;

        switch (name) {
            case 'preferredFirstName':
                if (!value) {
                    error = 'Preferred first name is required';
                }
                break;
            case 'preferredLastName':
                if (!value) {
                    error = 'Preferred last name is required';
                }
                break;
            case 'legalFirstName':
                if (!value) {
                    error = 'Legal first name is required';
                }
                break;
            case 'legalLastName':
                if (!value) {
                    error = 'Legal last name is required';
                }
                break;
            case 'email':
                if (!value) {
                    error = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(value as string)) {
                    error = 'Please enter a valid email address';
                }
                break;
            case 'phoneNumber':
                if (!value) {
                    error = 'Phone number is required';
                }
                break;
            case 'selectedEvents':
                if ((value as SelectedEvent[]).length === 0) {
                    error = 'Please select at least one event';
                }
                break;
            case 'guardianFirstName':
                if (formData.isGuardian && !value) {
                    error = 'Guardian first name is required';
                }
                break;
            case 'guardianLastName':
                if (formData.isGuardian && !value) {
                    error = 'Guardian last name is required';
                }
                break;
        }

        return error;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: inputValue
        }));

        // If unchecking guardian, clear the guardian fields and their errors
        if (name === 'isGuardian' && !checked) {
            setFormData(prev => ({
                ...prev,
                guardianFirstName: '',
                guardianLastName: '',
                isGuardian: checked
            }));
            setErrors(prev => ({
                ...prev,
                guardianFirstName: undefined,
                guardianLastName: undefined
            }));
            return;
        }

        // Only validate if the field has been touched
        if (touched[name as keyof FormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: validateField(name as keyof FormData, inputValue)
            }));
        }
    };

    const handleEventSelection = (event: React.ChangeEvent<HTMLInputElement>, eventPrice: number) => {
        const { checked, name: selectedEventId } = event.target;
        let newSelectedEvents = [...formData.selectedEvents];

        const selectedEvent = tournament.events.find(e => e._id === selectedEventId);
        if (!selectedEvent) return;

        if (checked) {
            newSelectedEvents.push({ id: selectedEventId, name: selectedEvent.name });
        } else {
            newSelectedEvents = newSelectedEvents.filter(event => event.id !== selectedEventId);
        }

        setFormData(prev => ({ ...prev, selectedEvents: newSelectedEvents }));
        setPriceBreakdown(calculatePrice(tournament, newSelectedEvents));

        setErrors(prev => ({
            ...prev,
            selectedEvents: newSelectedEvents.length === 0 ? 'Please select at least one event' : undefined
        }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name as keyof FormData, value);
        setErrors(prev => ({ ...prev, [name]: error }));
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
            const error = validateField(field as keyof FormData, formData[field as keyof FormData]);
            if (error) {
                newErrors[field] = error;
            }
        });

        setErrors(newErrors);

        // If there are no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
            try {
                setIsLoading(true);
                await onSubmit(formData);
            } catch (error) {
                console.error('Form submission error:', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            console.log('Form has errors:', newErrors);
            // Scroll to the first error - check both input fields and containers
            const firstErrorField = document.querySelector('[aria-invalid="true"]');
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <LoadingPopup isOpen={isLoading} message="Redirecting to checkout..." />
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm px-4 py-8 sm:px-6 lg:px-8">
                <TournamentHeader tournament={tournament} bannerImage={bannerImage} />
                
                <div className="max-w-4xl mx-auto p-4 md:p-6">
                    <LocationSection location={tournament.location} />
                    
                    {additionalResources && additionalResources.length > 0 && (
                        <AdditionalResourcesSection resources={additionalResources} />
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <EventSelectionForm
                            tournament={tournament}
                            selectedEvents={formData.selectedEvents}
                            errors={errors}
                            touched={touched}
                            onEventSelection={handleEventSelection}
                        />

                        <PersonalInformationForm
                            formData={formData}
                            errors={errors}
                            touched={touched}
                            onInputChange={handleInputChange}
                            onBlur={handleBlur}
                        />

                        <GuardianInformationForm
                            formData={formData}
                            errors={errors}
                            touched={touched}
                            onInputChange={handleInputChange}
                            onBlur={handleBlur}
                        />

                        {/* Price Display */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Price Breakdown</h3>
                            <PriceBreakdown {...priceBreakdown} />
                        </div>

                        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-medium">Total Price:</span>
                                <span className="text-2xl font-bold">${(priceBreakdown.finalPrice / 100).toFixed(2)}</span>
                            </div>
                        </div>

                        {Object.values(errors).some(error => error !== undefined) && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-red-800">
                                            Please fix the following errors:
                                        </h3>
                                        <div className="mt-2 text-sm text-red-700">
                                            <ul className="list-disc pl-5 space-y-1">
                                                {Object.entries(errors).map(([field, error]) => (
                                                    error && (
                                                        <li key={field} className="cursor-pointer hover:text-red-900" onClick={() => {
                                                            const errorField = document.querySelector(`[name="${field}"], [data-field="${field}"]`);
                                                            if (errorField) {
                                                                errorField.scrollIntoView({ block: 'start', behavior: 'smooth' });
                                                            }
                                                        }}>
                                                            {error}
                                                        </li>
                                                    )
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isLoading || (Object.keys(errors).length > 0 && Object.values(errors).some(error => error !== undefined))}
                                className={`w-full py-3 px-6 md:rounded-lg text-center font-semibold transition-all ${
                                    isLoading || (Object.keys(errors).length > 0 && Object.values(errors).some(error => error !== undefined))
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-Navy text-white hover:bg-MediumPink'
                                }`}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TournamentRegistration;
