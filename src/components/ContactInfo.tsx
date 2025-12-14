import Link from 'next/link';
import React from 'react';
import { ISocials } from '@/types';
import { getPlatformIconByName } from '@/utils';

interface ContactInfoProps {
    email?: string;
    telephone?: string;
    socials?: ISocials;
    className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
    email,
    telephone,
    socials,
    className = ''
}) => {
    return (
        <div className={className}>
            {email && (
                <a
                    href={`mailto:${email}`}
                    className="block text-foreground-accent hover:text-foreground mb-2"
                >
                    Email: {email}
                </a>
            )}

            {telephone && (
                <a
                    href={`tel:${telephone}`}
                    className="block text-foreground-accent hover:text-foreground mb-2"
                >
                    Phone: {telephone}
                </a>
            )}

            {socials && Object.keys(socials).some(key => socials[key]) && (
                <div className="mt-5 flex items-center gap-5 flex-wrap">
                    {Object.keys(socials).map(platformName => {
                        if (platformName && socials[platformName]) {
                            return (
                                <Link
                                    href={socials[platformName]}
                                    key={platformName}
                                    aria-label={platformName}
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    {getPlatformIconByName(platformName)}
                                </Link>
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
};

export default ContactInfo;
