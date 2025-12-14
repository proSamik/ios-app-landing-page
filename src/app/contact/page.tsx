import React from 'react';
import Container from '@/components/Container';
import ContactInfo from '@/components/ContactInfo';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

export const metadata = {
    title: `Contact Us - ${siteDetails.siteName}`,
    description: `Get in touch with ${siteDetails.siteName}`,
};

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 manrope">
                        Contact Us
                    </h1>
                    <p className="text-foreground-accent mb-12 text-lg">
                        Have questions? We'd love to hear from you. Reach out to us through any of the channels below.
                    </p>

                    <div className="bg-hero-background rounded-2xl p-8 md:p-12">
                        <h2 className="text-2xl font-semibold mb-6 manrope">Get In Touch</h2>
                        <p className="text-foreground-accent mb-8 leading-relaxed">
                            Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                        </p>

                        <div className="flex justify-center">
                            <div className="text-left">
                                <ContactInfo
                                    email={footerDetails.email}
                                    telephone={footerDetails.telephone}
                                    socials={footerDetails.socials}
                                />
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-foreground/10">
                            <p className="text-sm text-foreground-accent">
                                We typically respond to all inquiries within 24-48 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
