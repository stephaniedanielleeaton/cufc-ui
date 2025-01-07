import React from 'react';
import { FormData, FormErrors } from './types';

interface GuardianInformationFormProps {
    formData: FormData;
    errors: FormErrors;
    touched: Record<string, boolean>;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const GuardianInformationForm: React.FC<GuardianInformationFormProps> = ({
    formData,
    errors,
    touched,
    onInputChange,
    onBlur,
}) => (
    <div className="mb-8">
        <div className="mt-12">
            <label className="flex items-start space-x-3 mt-2 cursor-pointer">
                <input
                    type="checkbox"
                    name="isGuardian"
                    checked={formData.isGuardian}
                    onChange={onInputChange}
                    className="w-4 h-4 mt-1 text-periwinkle border-gray-300 rounded focus:ring-periwinkle cursor-pointer"
                />
                <span className="text-sm text-gray-700">
                    I am a guardian signing up on behalf of a minor that is at least 14 years of age
                </span>
            </label>
        </div>

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
                        onChange={onInputChange}
                        onBlur={onBlur}
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
                        onChange={onInputChange}
                        onBlur={onBlur}
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
);
