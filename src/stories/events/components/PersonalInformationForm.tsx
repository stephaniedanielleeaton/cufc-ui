import React from 'react';
import { FormData, FormErrors } from './types';

interface PersonalInformationFormProps {
    formData: FormData;
    errors: FormErrors;
    touched: Record<string, boolean>;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({
    formData,
    errors,
    touched,
    onInputChange,
    onBlur,
}) => (
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
                    onChange={onInputChange}
                    onBlur={onBlur}
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
                    onChange={onInputChange}
                    onBlur={onBlur}
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
                    onChange={onInputChange}
                    onBlur={onBlur}
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
                    onChange={onInputChange}
                    onBlur={onBlur}
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
                    onChange={onInputChange}
                    onBlur={onBlur}
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
                    onChange={onInputChange}
                    onBlur={onBlur}
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
                    onChange={onInputChange}
                    onBlur={onBlur}
                    aria-invalid={touched.clubAffiliation && errors.clubAffiliation ? 'true' : 'false'}
                    className={`w-full border rounded-md h-12 px-3 focus:outline-none ${
                        touched.clubAffiliation && errors.clubAffiliation
                            ? 'border-red-500'
                            : 'focus:border-periwinkle'
                    }`}
                />
                {touched.clubAffiliation && errors.clubAffiliation && (
                    <p className="mt-1 text-sm text-red-500">{errors.clubAffiliation}</p>
                )}
            </div>
        </div>
    </div>
);
