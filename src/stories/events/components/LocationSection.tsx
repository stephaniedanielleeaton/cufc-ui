import React from 'react';

interface LocationSectionProps {
    location: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ location }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-Navy mb-4">Location</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-Navy hover:text-MediumPink transition-colors"
            >
                <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                </svg>
                {location}
            </a>
        </div>
    </div>
);
