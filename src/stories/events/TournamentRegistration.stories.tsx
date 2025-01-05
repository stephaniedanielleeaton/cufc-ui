import type { Meta, StoryObj } from '@storybook/react';
import { TournamentRegistration } from './TournamentRegistration';

const meta = {
    title: 'Events/Tournament Registration',
    component: TournamentRegistration,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof TournamentRegistration>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTournament = {
    _id: '1',
    name: 'Lynx Cup 2025',
    description: 'Columbus United Fencing Club is proud to bring together our best judges and event staff to host our largest and most exciting event of the year.',
    startDate: '2025-02-14T12:00:00-05:00',
    endDate: '2025-02-16T17:00:00-05:00',
    basePrice: 45.00,
    location: '6475 E Main St. #111, Reynoldsburg, OH 43068',
    mutuallyExclusiveEventGroups: [['e2', 'e1']],
    events: [
        {
            _id: 'e1',
            name: 'Open Saber',
            description: 'Open Saber competition',
            startTime: '2025-02-14T12:00:00-05:00',
            registrationCap: 32,
            price: 45.00,
            registrants: []
        },
        {
            _id: 'e2',
            name: 'Longsword Div 3',
            description: 'Longsword Division 3 competition',
            startTime: '2025-02-14T16:00:00-05:00',
            registrationCap: 32,
            price: 45.00,
            registrants: []
        },
        {
            _id: 'e3',
            name: 'Longsword Div 1',
            description: 'Longsword Division 1 competition',
            startTime: '2025-02-15T09:00:00-05:00',
            registrationCap: 32,
            price: 45.00,
            registrants: []
        },
        {
            _id: 'e4',
            name: 'Marginalized Gender Longsword',
            description: 'Open to trans and cis women, trans men, non-binary people, intersex people, and other gender expansive people underrepresented in HEMA.',
            startTime: '2025-02-16T09:00:00-05:00',
            registrationCap: 32,
            price: 0.00,
            registrants: []
        }
    ]
};

export const Default: Story = {
    args: {
        tournament: sampleTournament,
        onSubmit: async (values) => {
            console.log('Form submitted:', values);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
    },
};

export const WithSomeFullEvents: Story = {
    args: {
        tournament: {
            ...sampleTournament,
            events: sampleTournament.events.map((event, index) => ({
                ...event,
                registrants: Array(index === 1 ? 32 : 20).fill({}) // Second event is full
            }))
        },
        onSubmit: async (values) => {
            console.log('Form submitted:', values);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
    },
};

export const Loading: Story = {
    args: {
        tournament: sampleTournament,
        onSubmit: async () => {},
        isLoading: true,
    },
};
