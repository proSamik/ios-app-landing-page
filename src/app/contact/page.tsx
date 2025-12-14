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
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 manrope">
                        Contact Us
                    </h1>
                    <p className="text-foreground-accent mb-12 text-lg">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-semibold mb-6 manrope">Get In Touch</h2>
                            <p className="text-foreground-accent mb-6 leading-relaxed">
                                Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 manrope">Contact Information</h3>
                                    <ContactInfo
                                        email={footerDetails.email}
                                        telephone={footerDetails.telephone}
                                        socials={footerDetails.socials}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-hero-background rounded-2xl p-8">
                            <h2 className="text-2xl font-semibold mb-6 manrope">Send a Message</h2>
                            <form className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                        placeholder="Tell us what's on your mind..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-background font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all"
                                >
                                    Send Message
                                </button>

                                <p className="text-sm text-foreground-accent text-center">
                                    We'll get back to you within 24-48 hours.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
