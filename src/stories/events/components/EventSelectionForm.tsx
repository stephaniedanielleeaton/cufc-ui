import React from 'react';
import { format } from 'date-fns';
import { Tournament, Event } from './types';
import { Tooltip } from '../../components/Tooltip';

interface EventSelectionFormProps {
    tournament: Tournament;
    selectedEvents: string[];
    errors: { selectedEvents?: string };
    touched: { selectedEvents?: boolean };
    onEventSelection: (event: React.ChangeEvent<HTMLInputElement>, eventPrice: number) => void;
}

export const EventSelectionForm: React.FC<EventSelectionFormProps> = ({
    tournament,
    selectedEvents,
    errors,
    touched,
    onEventSelection,
}) => {
    const isEventDisabled = (event: Event) => {
        const isAtCapacity = event.registrants.length >= event.registrationCap;
        const exclusiveGroup = tournament.mutuallyExclusiveEventGroups.find(group => 
            group.includes(event._id)
        );
        const hasSelectedFromGroup = exclusiveGroup && selectedEvents.some(selectedId => 
            exclusiveGroup.includes(selectedId) && selectedId !== event._id
        );
        
        return isAtCapacity || hasSelectedFromGroup;
    };

    const eventsByDate = tournament.events
        .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
        .reduce<Record<string, Event[]>>((acc, event) => {
            const eventDate = new Date(event.startTime);
            const dateKey = eventDate.toDateString();
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(event);
            return acc;
        }, {});

    return (
        <div>
            <h2 className="text-2xl font-bold text-Navy mb-6">Event Registration and Schedule</h2>
            <div className="space-y-6">
                {Object.entries(eventsByDate).map(([dateKey, events]) => {
                    const eventDate = new Date(dateKey);
                    return (
                        <div key={dateKey} className="py-4 first:pt-0 last:pb-0">
                            <div className="text-lg font-semibold text-Navy mb-3">
                                {format(eventDate, 'EEEE, MMMM d, yyyy')}
                            </div>
                            <div className="space-y-4">
                                {events.map(event => {
                                    const disabled = isEventDisabled(event);
                                    const isAtCapacity = event.registrants.length >= event.registrationCap;
                                    const tooltipText = disabled 
                                        ? isAtCapacity 
                                            ? "This event is full"
                                            : "You are already signed up for an event in this category"
                                        : "";

                                    return (
                                        <Tooltip key={event._id} text={tooltipText}>
                                            <div
                                                className={`p-4 rounded-lg border-2 transition-all ${
                                                    selectedEvents.includes(event._id)
                                                        ? 'bg-lightGreen border-darkGreen selected-event'
                                                        : 'bg-white border-gray-200 hover:border-Navy unselected-event'
                                                } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                                                onClick={() => {
                                                    if (!disabled) {
                                                        const syntheticEvent = {
                                                            target: {
                                                                checked: !selectedEvents.includes(event._id),
                                                                name: event._id,
                                                                type: 'checkbox',
                                                            }
                                                        } as React.ChangeEvent<HTMLInputElement>;
                                                        onEventSelection(syntheticEvent, event.price);
                                                    }
                                                }}
                                            >
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
                                                            <span className="text-lg font-semibold">
                                                                ${event.price.toFixed(2)}
                                                            </span>
                                                            <p className={`text-sm ${isAtCapacity ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                                                                {isAtCapacity ? 'Event Full' : `${event.registrants.length} / ${event.registrationCap} registered`}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center justify-center w-8 h-8">
                                                            <input
                                                                type="checkbox"
                                                                name={event._id}
                                                                className="w-5 h-5 text-periwinkle border-gray-300 rounded focus:ring-periwinkle cursor-pointer"
                                                                onChange={(e) => onEventSelection(e, event.price)}
                                                                checked={selectedEvents.includes(event._id)}
                                                                disabled={disabled}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {event.description && (
                                                    <div className="mt-6 pt-4 pl-7">
                                                        <p className="text-sm text-gray-700 leading-relaxed">
                                                            {event.description}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </Tooltip>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            {touched.selectedEvents && errors.selectedEvents && (
                <p className="mt-2 text-sm text-red-500">{errors.selectedEvents}</p>
            )}
        </div>
    );
};
