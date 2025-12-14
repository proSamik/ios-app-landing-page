import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div>
                <div className="mt-3">
                    <Link
                        href="https://github.com/proSamik/lighteweight-starter-kit-ios-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            type="button"
                            className="inline-flex items-center justify-center min-w-[205px] px-6 h-14 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
                        >
                            <div className="mr-3">
                                <FaGithub className="w-[30px] h-[30px]" />
                            </div>
                            <div>
                                <div className="text-xs">
                                    Get Code from
                                </div>
                                <div className="-mt-1 font-sans text-xl font-semibold">
                                    GitHub
                                </div>
                            </div>
                        </button>
                    </Link>
                </div>
                <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className='relative mt-4 md:mt-8 mx-auto z-10'
                />
            </div>
        </section>
    );
};

export default Hero;
