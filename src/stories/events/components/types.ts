export interface Event {
    _id: string;
    name: string;
    description: string;
    startTime: string;
    registrationCap: number;
    price: number;
    registrants: any[];
}

export interface AdditionalResource {
    name: string;
    link: string;
}

export interface Tournament {
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

export interface FormData {
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

export interface FormErrors {
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
