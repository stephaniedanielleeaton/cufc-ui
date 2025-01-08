import React from 'react';
import { format } from 'date-fns';
import { Tournament } from './types';

interface TournamentHeaderProps {
    tournament: Tournament;
    bannerImage?: string;
}

export const TournamentHeader: React.FC<TournamentHeaderProps> = ({ tournament, bannerImage }) => (
    <>
        {bannerImage && (
            <div className="max-w-4xl mx-auto">
                <div className="w-full h-[200px] md:h-[150px] relative overflow-hidden mb-8">
                    <img
                        src={bannerImage}
                        alt="Tournament banner"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        )}
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-Navy mb-2">{tournament.name}</h1>
            <div className="space-y-2">
                <p className="text-xl text-gray-600">
                    {format(new Date(tournament.startDate), 'MMMM d')} - {format(new Date(tournament.endDate), 'MMMM d, yyyy')}
                </p>
                {tournament.description && (
                    <p className="text-gray-600 max-w-2xl mx-auto whitespace-pre-line">{tournament.description}</p>
                )}
            </div>
        </div>
    </>
);
