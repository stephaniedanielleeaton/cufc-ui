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

export interface DiscountRule {
    name: string;
    description: string;
    type: 'QUANTITY' | 'COMBINATION' | 'PACKAGE';
    minimumEvents?: number;
    requiredEventIds?: string[];
    discountAmount: number;
    isPercentage: boolean;
    priority: number;
    stackable: boolean;
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
    discountRules: DiscountRule[];
}

export interface SelectedEvent {
    id: string;
    name: string;
}

export interface FormData {
    preferredFirstName: string;
    preferredLastName: string;
    legalFirstName: string;
    legalLastName: string;
    email: string;
    phoneNumber: string;
    selectedEvents: SelectedEvent[];
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
