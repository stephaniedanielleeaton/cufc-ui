declare module 'cufc-ui' {
  import * as React from 'react';

  export const BaseText: React.ComponentType<any>;
  export const BaseSelect: React.ComponentType<any>;
  export const BaseTextInput: React.ComponentType<any>;
  export const BaseButton: React.ComponentType<any>;
  export const UserPage: React.ComponentType<any>;
  export const AboutMember: React.ComponentType<any>;
  export const AdminMember: React.ComponentType<any>;
  export const CTA: React.ComponentType<any>;
  export const ContactUs: React.ComponentType<any>;
  export const Footer: React.ComponentType<any>;
  export const Hero: React.ComponentType<any>;
  export const Intro: React.ComponentType<any>;
  export const Nav: React.ComponentType<any>;
  export const Schedule: React.ComponentType<any>;
  export const LoadingPopup: React.ComponentType<any>;
  export const NewMemberSignUp: React.ComponentType<any>;
  export const SmallHero: React.ComponentType<any>;
  export const Classes: React.ComponentType<any>;
  export const AboutUs: React.ComponentType<any>;
  export const CheckInPage: React.ComponentType<any>;
  export const SwordQuench2024SignUp: React.ComponentType<any>;
  export const AboutNugget: React.ComponentType<any>;
  export const NuggetCTA: React.ComponentType<any>;
  export const LynxCup2025SignUp: React.ComponentType<any>;
  export const UpcomingStartDates: React.ComponentType<any>;
  export const SciotoOpen2024SignUp: React.ComponentType<any>;
  export const NotificationSignup: React.ComponentType<{
    onSubmit: (email: string) => Promise<void>;
  }>;
  export const UnsubscribeForm: React.ComponentType<{
    onSubmit: (email: string) => Promise<void>;
  }>;
  export const AdminNavigation: React.ComponentType<{
    activeTab: string;
    onTabChange: (tab: string) => void;
  }>;
  export const MemberStats: React.ComponentType<{
    stats: {
      total: number;
      active: number;
      coaches: number;
      checkedIn: number;
      recentlyCheckedIn: number;
    };
  }>;
  export const AdminMembers: React.ComponentType<any>;
  export const EmailSender: React.ComponentType<any>;
  export const AttendanceGraph: React.ComponentType<any>;
  export const TournamentRegistration: React.ComponentType<any>;

  export interface Event {
    _id: string;
    name: string;
    description: string;
    startTime: string;
    registrationCap: number;
    price: number;
    registrants: any[];
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

  export interface PriceBreakdown {
    basePrice: number;
    eventPrices: { eventId: string; price: number; name: string }[];
    appliedDiscounts: {
      name: string;
      description: string;
      amount: number;
      stackable: boolean;
    }[];
    totalDiscount: number;
    finalPrice: number;
  }

  export function calculatePrice(tournament: Tournament, selectedEvents: SelectedEvent[]): PriceBreakdown;
}
