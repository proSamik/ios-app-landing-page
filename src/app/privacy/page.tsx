import React from 'react';
import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';

export const metadata = {
    title: `Privacy Policy - ${siteDetails.siteName}`,
    description: `Privacy Policy for ${siteDetails.siteName}`,
};

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 manrope">
                        Privacy Policy
                    </h1>
                    <p className="text-foreground-accent mb-8">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">1. Introduction</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                Welcome to {siteDetails.siteName}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our mobile application, and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">2. Information We Collect</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We may collect, use, store and transfer different kinds of personal data about you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Identity Data: first name, last name, username</li>
                                <li>Contact Data: email address, telephone number</li>
                                <li>Technical Data: IP address, browser type, device information</li>
                                <li>Usage Data: information about how you use our app and services</li>
                                <li>Marketing Data: your preferences in receiving marketing from us</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">3. How We Use Your Information</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>To provide and maintain our service</li>
                                <li>To notify you about changes to our service</li>
                                <li>To provide customer support</li>
                                <li>To gather analysis or valuable information to improve our service</li>
                                <li>To monitor the usage of our service</li>
                                <li>To detect, prevent and address technical issues</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">4. Data Security</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">5. Data Retention</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">6. Your Legal Rights</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Request access to your personal data</li>
                                <li>Request correction of your personal data</li>
                                <li>Request erasure of your personal data</li>
                                <li>Object to processing of your personal data</li>
                                <li>Request restriction of processing your personal data</li>
                                <li>Request transfer of your personal data</li>
                                <li>Right to withdraw consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">7. Third-Party Links</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                Our app may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">8. Children's Privacy</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">9. Changes to This Privacy Policy</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">10. Contact Us</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                If you have any questions about this privacy policy, please contact us at:
                            </p>
                            <div className="mt-4 text-foreground-accent">
                                <p>Email: <a href="mailto:privacy@yoursite.com" className="text-primary hover:underline">privacy@yoursite.com</a></p>
                                <p className="mt-2">Address: [Your Company Address]</p>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;
