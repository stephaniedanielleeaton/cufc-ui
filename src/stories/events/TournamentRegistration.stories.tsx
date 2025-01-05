import type { Meta, StoryObj } from '@storybook/react';
import { TournamentRegistration } from './TournamentRegistration';
import bannerImage from '../assets/lynxcup2025_keyart.png';

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
    _id: "6779cd35ca216b1769e11c40",
    name: "Lynx Cup 2025",
    description: "Columbus United Fencing Club is proud to bring together our best judges and event staff to host our largest and most exciting event of the year.",
    startDate: "2025-02-14T12:00:00-05:00",
    endDate: "2025-02-16T17:00:00-05:00",
    basePrice: 45,
    location: "6475 E Main St. #111, Reynoldsburg, OH 43068",
    mutuallyExclusiveEventGroups: [
        ["6779cd35ca216b1769e11c43", "6779cd35ca216b1769e11c44", "6779cd35ca216b1769e11c42"]  // Longsword Div 1, 2, and 3
    ],
    events: [
        {
            _id: "6779cd35ca216b1769e11c41",
            name: "Open Saber",
            description: "Open Saber competition",
            startTime: "2025-02-14T12:00:00-05:00",
            registrationCap: 32,
            price: 45,
            registrants: []
        },
        {
            _id: "6779cd35ca216b1769e11c42",
            name: "Longsword Div 3",
            description: "Longsword Div 3 is recommended if you have never competed before, or if you typically get knocked out in the first round of brackets.",
            startTime: "2025-02-14T16:00:00-05:00",
            registrationCap: 32,
            price: 45,
            registrants: []
        },
        {
            _id: "6779cd35ca216b1769e11c43",
            name: "Longsword Div 1",
            description: "Division 1 is required for any fencer with a Longsword HEMA Rating above 1400.",
            startTime: "2025-02-15T09:00:00-05:00",
            registrationCap: 32,
            price: 45,
            registrants: []
        },
        {
            _id: "6779cd35ca216b1769e11c44",
            name: "Longsword Div 2",
            description: "",
            startTime: "2025-02-15T12:00:00-05:00",
            registrationCap: 32,
            price: 45,
            registrants: []
        },
        {
            _id: "6779cd35ca216b1769e11c45",
            name: "Marginalized Gender Longsword",
            description: "Open to trans and cis women, trans men, non-binary people, intersex people, and other gender expansive people underrepresented in HEMA.",
            startTime: "2025-02-16T09:00:00-05:00",
            registrationCap: 32,
            price: 0,
            registrants: []
        },
        {
            _id: "6779cd35ca216b1769e11c46",
            name: "Rapier And Dagger",
            description: "Rapier and Dagger competition",
            startTime: "2025-02-16T12:00:00-05:00",
            registrationCap: 32,
            price: 45,
            registrants: []
        },
        {
            _id: "6779cd35ca216b1769e11c47",
            name: "Sword and Buckler",
            description: "Sword and Buckler competition",
            startTime: "2025-02-16T14:00:00-05:00",
            registrationCap: 32,
            price: 45,
            registrants: []
        }
    ]
};

export const Default: Story = {
    args: {
        tournament: sampleTournament,
        onSubmit: async (values) => {
            console.log('Form submitted:', values);
        },
        bannerImage: bannerImage,
    },
};

export const WithSomeFullEvents: Story = {
    args: {
        tournament: {
            ...sampleTournament,
            events: sampleTournament.events.map((event, index) => ({
                ...event,
                registrants: index === 0 ? Array(event.registrationCap).fill({}) : [],
            })),
        },
        onSubmit: async (values) => {
            console.log('Form submitted:', values);
        },
        bannerImage: bannerImage,
    },
};

export const Loading: Story = {
    args: {
        tournament: sampleTournament,
        onSubmit: async () => {},
        isLoading: true,
        bannerImage: bannerImage,
    },
};
