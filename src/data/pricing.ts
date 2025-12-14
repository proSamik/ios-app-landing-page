import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'pricing1 [tier name]',
        price: 29,
        features: [
            'pricing1 [feature 1]',
            'pricing1 [feature 2]',
            'pricing1 [feature 3]',
            'pricing1 [feature 4]',
        ],
    },
    {
        name: 'pricing2 [tier name]',
        price: 99,
        features: [
            'pricing2 [feature 1]',
            'pricing2 [feature 2]',
            'pricing2 [feature 3]',
            'pricing2 [feature 4]',
            'pricing2 [feature 5]',
        ],
    },
    {
        name: 'pricing3 [tier name]',
        price: 'Custom',
        features: [
            'pricing3 [feature 1]',
            'pricing3 [feature 2]',
            'pricing3 [feature 3]',
            'pricing3 [feature 4]',
            'pricing3 [feature 5]',
            'pricing3 [feature 6]',
        ],
    },
]