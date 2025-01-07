import React from 'react';
import { AdditionalResource } from './types';

interface AdditionalResourcesSectionProps {
    resources: AdditionalResource[];
}

export const AdditionalResourcesSection: React.FC<AdditionalResourcesSectionProps> = ({ resources }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-Navy mb-4">Additional Information</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-3">
                {resources.map((resource, index) => (
                    <a
                        key={index}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-Navy hover:text-MediumPink transition-colors group"
                    >
                        <svg 
                            className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                        {resource.name}
                    </a>
                ))}
            </div>
        </div>
    </div>
);
