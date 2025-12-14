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
                                Welcome to {siteDetails.siteName}. We are committed to protecting your privacy and the privacy of all our users, including children. This privacy policy explains how we collect, use, and protect your personal information when you use our mobile application.
                            </p>
                            <p className="text-foreground-accent leading-relaxed mt-3">
                                Our app is rated 4+ and suitable for all ages. We take special care to ensure compliance with children's privacy laws including the Children's Online Privacy Protection Act (COPPA) in the United States and similar laws worldwide.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">2. Information We Collect</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We collect minimal information necessary to provide our service. The following data is collected and linked to your identity:
                            </p>

                            <div className="bg-hero-background p-6 rounded-lg mb-4">
                                <h3 className="text-xl font-semibold mb-3 manrope">Contact Information</h3>
                                <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                    <li><strong>Name</strong> - Used for app functionality and personalization</li>
                                    <li><strong>Email Address</strong> - Used for app functionality, account creation, and communication</li>
                                </ul>
                            </div>

                            <p className="text-foreground-accent leading-relaxed">
                                We do NOT collect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Physical addresses or phone numbers</li>
                                <li>Payment information (we do not process payments directly)</li>
                                <li>Browsing history or search history</li>
                                <li>Location data</li>
                                <li>Photos or videos</li>
                                <li>Health or fitness data</li>
                                <li>Contacts or social graph information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">3. How We Collect Information</h2>

                            <h3 className="text-xl font-semibold mb-3 manrope">Authentication Methods</h3>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We offer the following sign-in methods:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent mb-4">
                                <li><strong>Sign in with Apple</strong> - When you sign in with Apple, we receive your name (if you choose to share it) and email address (or Apple's private relay email). Apple Sign In provides enhanced privacy protections.</li>
                                <li><strong>Sign in with Google</strong> - When you sign in with Google, we receive your name and email address from your Google account.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 manrope mt-6">Data Storage</h3>
                            <p className="text-foreground-accent leading-relaxed">
                                We use <strong>Supabase</strong> as our backend service provider for database and storage. Supabase provides enterprise-grade security and is compliant with major privacy regulations including GDPR. Your data is encrypted both in transit (using TLS/SSL) and at rest.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">4. How We Use Your Information</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We use the information we collect solely for app functionality:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>To create and manage your account</li>
                                <li>To provide personalized app experience</li>
                                <li>To communicate important updates about the app</li>
                                <li>To provide customer support when you contact us</li>
                                <li>To improve our app and develop new features</li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed mt-4">
                                We do NOT use your information for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Third-party advertising</li>
                                <li>Behavioral advertising or tracking across apps/websites</li>
                                <li>Selling or sharing your data with third parties for their marketing purposes</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">5. Children's Privacy</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Our app is designed to be safe for users of all ages, including children under 13. We are committed to complying with the Children's Online Privacy Protection Act (COPPA) and similar laws worldwide.
                            </p>

                            <div className="bg-hero-background p-6 rounded-lg mb-4">
                                <h3 className="text-xl font-semibold mb-3 manrope">For Parents and Guardians</h3>
                                <p className="text-foreground-accent leading-relaxed mb-3">
                                    If your child is under 13 (or the applicable age of consent in your jurisdiction), we require verifiable parental consent before collecting any personal information.
                                </p>
                                <p className="text-foreground-accent leading-relaxed">
                                    Parents and guardians have the right to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-foreground-accent mt-2">
                                    <li>Review the personal information collected from your child</li>
                                    <li>Request deletion of your child's personal information</li>
                                    <li>Refuse to allow further collection of your child's information</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                            </div>

                            <p className="text-foreground-accent leading-relaxed mb-3">
                                <strong>What We Collect from Children:</strong> We collect only the minimal information necessary (name and email address) to provide app functionality. We do not collect any additional information beyond what is described in Section 2.
                            </p>

                            <p className="text-foreground-accent leading-relaxed mb-3">
                                <strong>Third-Party Services:</strong> We do not enable third-party analytics, advertising, or any services that track children in our app.
                            </p>

                            <p className="text-foreground-accent leading-relaxed">
                                To exercise any of these rights or if you have questions about your child's data, please contact us at the email address provided in Section 11.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">6. Data Sharing and Third Parties</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We do not sell, rent, or share your personal information with third parties for their marketing purposes. We only share data with the following service providers who help us operate the app:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li><strong>Supabase</strong> - Database and storage hosting (processes data on our behalf)</li>
                                <li><strong>Apple</strong> - Authentication services (when you use Sign in with Apple)</li>
                                <li><strong>Google</strong> - Authentication services (when you use Sign in with Google)</li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed mt-4">
                                These service providers are bound by contractual obligations to keep your information confidential and use it only for the purposes we specify.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">7. Data Security</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We take the security of your personal information seriously and implement industry-standard security measures:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>All data transmission is encrypted using TLS/SSL protocols</li>
                                <li>Data at rest is encrypted in Supabase's secure database</li>
                                <li>Access to personal data is restricted to authorized personnel only</li>
                                <li>We regularly review and update our security practices</li>
                                <li>We use authentication services from Apple and Google that provide additional security layers</li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed mt-4">
                                While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the best of our ability.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">8. Data Retention</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                We retain your personal information only for as long as necessary to provide you with our services and as described in this privacy policy. When you delete your account, we will delete your personal information within 30 days, except where we are required to retain it by law or for legitimate business purposes (such as fraud prevention or record-keeping requirements).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">9. Your Rights and Choices</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li><strong>Access</strong> - Request a copy of the personal information we hold about you</li>
                                <li><strong>Correction</strong> - Request correction of inaccurate or incomplete information</li>
                                <li><strong>Deletion</strong> - Request deletion of your personal information</li>
                                <li><strong>Data Portability</strong> - Request a copy of your data in a structured, machine-readable format</li>
                                <li><strong>Withdraw Consent</strong> - Withdraw your consent to data processing at any time</li>
                                <li><strong>Object</strong> - Object to certain types of data processing</li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed mt-4">
                                To exercise any of these rights, please contact us using the information in Section 11. We will respond to your request within 30 days.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">10. International Data Transfers</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy and applicable laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">11. Changes to This Privacy Policy</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                We may update this privacy policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new privacy policy in the app and updating the "Last updated" date at the top of this policy. We encourage you to review this policy periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">12. Contact Us</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
                            </p>
                            <div className="bg-hero-background p-6 rounded-lg">
                                <p className="text-foreground-accent mb-2">
                                    <strong>Email:</strong> <a href="mailto:privacy@yoursite.com" className="text-primary hover:underline">privacy@yoursite.com</a>
                                </p>
                                <p className="text-foreground-accent mb-2">
                                    <strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours
                                </p>
                                <p className="text-foreground-accent">
                                    <strong>For Parental Consent Requests:</strong> Please include "Parental Consent" in the email subject line
                                </p>
                            </div>
                        </section>

                        <section className="mt-8 p-6 bg-hero-background rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 manrope">Compliance</h3>
                            <p className="text-foreground-accent leading-relaxed">
                                This privacy policy complies with:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-foreground-accent mt-2">
                                <li>Apple App Store Review Guidelines (Section 5.1 - Privacy)</li>
                                <li>Children's Online Privacy Protection Act (COPPA)</li>
                                <li>General Data Protection Regulation (GDPR)</li>
                                <li>California Consumer Privacy Act (CCPA)</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;
