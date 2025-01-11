import React from 'react';

interface PriceBreakdownProps {
    basePrice: number;
    eventPrices: { eventId: string; price: number; name?: string }[];
    appliedDiscounts: {
        name: string;
        description: string;
        amount: number;
    }[];
    totalDiscount: number;
    finalPrice: number;
}

export const PriceBreakdown: React.FC<PriceBreakdownProps> = ({
    basePrice,
    eventPrices,
    appliedDiscounts,
    totalDiscount,
    finalPrice,
}) => {
    const formatPrice = (price: number) => `$${(price / 100).toFixed(2)}`;
    const subtotal = basePrice + eventPrices.reduce((sum, event) => sum + event.price, 0);

    return (
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            {/* Base Registration */}
            <div className="flex justify-between items-center text-gray-700">
                <span>Base Registration</span>
                <span>{formatPrice(basePrice)}</span>
            </div>

            {/* Event Prices */}
            {eventPrices.map((event, index) => (
                <div key={event.eventId} className="flex justify-between items-center text-gray-700">
                    <span>{event.name || `Event ${index + 1}`}</span>
                    <span>{formatPrice(event.price)}</span>
                </div>
            ))}

            {/* Subtotal */}
            <div className="flex justify-between items-center font-medium pt-2 border-t border-gray-200">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
            </div>

            {/* Applied Discounts */}
            {appliedDiscounts.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-gray-200">
                    <h4 className="font-medium text-green-700">Applied Discounts:</h4>
                    {appliedDiscounts.map((discount, index) => (
                        <div key={index} className="flex justify-between items-center text-green-700">
                            <div>
                                <span>{discount.name}</span>
                                <p className="text-sm text-green-600">{discount.description}</p>
                            </div>
                            <span>-{formatPrice(discount.amount)}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Total Savings */}
            {totalDiscount > 0 && (
                <div className="flex justify-between items-center text-green-700 font-medium">
                    <span>Total Savings</span>
                    <span>-{formatPrice(totalDiscount)}</span>
                </div>
            )}

            {/* Final Price */}
            <div className="flex justify-between items-center text-lg font-bold pt-2 border-t border-gray-200">
                <span>Final Price</span>
                <span>{formatPrice(finalPrice)}</span>
            </div>
        </div>
    );
};
