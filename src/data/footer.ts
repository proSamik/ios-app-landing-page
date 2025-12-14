import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "footer1 [subheading text]",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Contact",
            url: "/contact"
        },
        {
            text: "Privacy Policy",
            url: "/privacy"
        }
    ],
    email: 'placeholder@email.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        x: 'https://x.com/',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}