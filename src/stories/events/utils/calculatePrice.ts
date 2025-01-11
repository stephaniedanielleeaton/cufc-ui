import { Tournament, SelectedEvent } from '../components/types';

interface DiscountRule {
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

interface PriceBreakdown {
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

export function calculatePrice(
    tournament: Tournament,
    selectedEvents: SelectedEvent[]
): PriceBreakdown {
    const selectedEventIds = selectedEvents.map(event => event.id);
    const eventPrices = selectedEvents.map(selectedEvent => {
        const event = tournament.events.find(e => e._id === selectedEvent.id);
        return {
            eventId: selectedEvent.id,
            price: event?.price || 0,
            name: event?.name || 'Unknown Event'
        };
    });

    // Start with base price
    let finalPrice = tournament.basePrice;
    // Add individual event prices
    finalPrice += eventPrices.reduce((sum, event) => sum + event.price, 0);

    // Sort discount rules by priority (highest first)
    const sortedRules = [...(tournament.discountRules || [])].sort(
        (a, b) => b.priority - a.priority
    );

    const appliedDiscounts: PriceBreakdown['appliedDiscounts'] = [];
    let totalDiscount = 0;

    // Helper function to check if a discount can be applied
    const canApplyDiscount = (rule: DiscountRule): boolean => {
        switch (rule.type) {
            case 'QUANTITY':
                return selectedEvents.length >= (rule.minimumEvents || 0);
            
            case 'COMBINATION':
            case 'PACKAGE':
                return rule.requiredEventIds?.every(id => 
                    selectedEventIds.includes(id)
                ) || false;
            
            default:
                return false;
        }
    };

    // Calculate discount amount for a rule
    const calculateDiscountAmount = (rule: DiscountRule): number => {
        const subtotal = tournament.basePrice + 
            eventPrices.reduce((sum, event) => sum + event.price, 0);

        if (rule.isPercentage) {
            return (subtotal * rule.discountAmount) / 100;
        }
        return rule.discountAmount;
    };

    // Apply discounts
    for (const rule of sortedRules) {
        if (!canApplyDiscount(rule)) continue;

        // If we already applied a non-stackable discount and this one isn't stackable, skip it
        if (!rule.stackable && appliedDiscounts.some(d => !d.stackable)) continue;

        const discountAmount = calculateDiscountAmount(rule);
        appliedDiscounts.push({
            name: rule.name,
            description: rule.description,
            amount: discountAmount,
            stackable: rule.stackable
        });

        totalDiscount += discountAmount;
    }

    finalPrice -= totalDiscount;

    return {
        basePrice: tournament.basePrice,
        eventPrices,
        appliedDiscounts,
        totalDiscount,
        finalPrice: Math.max(0, finalPrice) // Ensure price doesn't go below 0
    };
};
