import React from 'react';
import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';

export const metadata = {
    title: `Terms of Service - ${siteDetails.siteName}`,
    description: `Terms of Service for ${siteDetails.siteName}`,
};

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 manrope">
                        Terms of Service
                    </h1>
                    <p className="text-foreground-accent mb-8">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">1. Acceptance of Terms</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                By accessing and using {siteDetails.siteName} (the "App"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">2. Use License</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Permission is granted to temporarily download one copy of the App for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for any commercial purpose or for any public display</li>
                                <li>Attempt to decompile or reverse engineer any software contained in the App</li>
                                <li>Remove any copyright or other proprietary notations from the materials</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed mt-4">
                                This license shall automatically terminate if you violate any of these restrictions and may be terminated by {siteDetails.siteName} at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">3. User Accounts</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                            </p>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                You are responsible for safeguarding the password that you use to access the App and for any activities or actions under your password.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">4. Age Requirements</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Our App is rated 4+ and suitable for all ages. However, if you are under the age of 13 (or the applicable age of consent in your jurisdiction), you must have your parent or guardian's permission to use the App.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                We comply with the Children's Online Privacy Protection Act (COPPA) and similar laws worldwide. Parents and guardians are responsible for monitoring their children's use of the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">5. Prohibited Activities</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                You agree not to engage in any of the following prohibited activities:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Violating laws, regulations, or third-party rights</li>
                                <li>Impersonating any person or entity or falsely stating or misrepresenting your affiliation with a person or entity</li>
                                <li>Interfering with or disrupting the App or servers or networks connected to the App</li>
                                <li>Using the App to transmit any harmful code, viruses, or malware</li>
                                <li>Attempting to gain unauthorized access to any portion of the App or any other systems or networks</li>
                                <li>Using the App for any illegal or unauthorized purpose</li>
                                <li>Harassing, abusing, or harming another person through the App</li>
                                <li>Collecting or storing personal data about other users without their consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">6. Intellectual Property</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                The App and its original content, features, and functionality are and will remain the exclusive property of {siteDetails.siteName} and its licensors. The App is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of {siteDetails.siteName}.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">7. User Content</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                You retain all rights to any content you submit, post, or display on or through the App. By submitting, posting, or displaying content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute such content in connection with the App.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                You represent and warrant that you own or have the necessary rights to use and authorize us to use all content you submit, and that such content does not violate any third-party rights or applicable laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">8. Third-Party Services</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                The App may contain links to third-party websites or services (including Sign in with Apple and Sign in with Google) that are not owned or controlled by {siteDetails.siteName}.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such third-party services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">9. Termination</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Upon termination, your right to use the App will immediately cease. If you wish to terminate your account, you may simply discontinue using the App or contact us to request account deletion.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">10. Disclaimer of Warranties</h2>
                            <div className="bg-hero-background p-6 rounded-lg">
                                <p className="text-foreground-accent leading-relaxed mb-3">
                                    THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. {siteDetails.siteName.toUpperCase()} AND ITS SUPPLIERS AND LICENSORS HEREBY DISCLAIM ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                                </p>
                                <p className="text-foreground-accent leading-relaxed">
                                    NEITHER {siteDetails.siteName.toUpperCase()} NOR ITS SUPPLIERS AND LICENSORS MAKES ANY WARRANTY THAT THE APP WILL BE ERROR FREE OR THAT ACCESS THERETO WILL BE CONTINUOUS OR UNINTERRUPTED.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">11. Limitation of Liability</h2>
                            <div className="bg-hero-background p-6 rounded-lg">
                                <p className="text-foreground-accent leading-relaxed mb-3">
                                    IN NO EVENT WILL {siteDetails.siteName.toUpperCase()}, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                    <li>Errors, mistakes, or inaccuracies of content</li>
                                    <li>Personal injury or property damage resulting from your access to and use of the App</li>
                                    <li>Any unauthorized access to or use of our secure servers and/or any personal information stored therein</li>
                                    <li>Any interruption or cessation of transmission to or from the App</li>
                                    <li>Any bugs, viruses, or the like that may be transmitted through the App by any third party</li>
                                    <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the App</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">12. Indemnification</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                You agree to defend, indemnify, and hold harmless {siteDetails.siteName}, its officers, directors, employees, and agents, from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from: (i) your use of and access to the App; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right, including any copyright, property, or privacy right; or (iv) any claim that your content caused damage to a third party.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">13. Governing Law</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">14. Changes to Terms</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                By continuing to access or use our App after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">15. Contact Information</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <div className="bg-hero-background p-6 rounded-lg">
                                <p className="text-foreground-accent mb-2">
                                    <strong>Email:</strong> <a href="mailto:legal@yoursite.com" className="text-primary hover:underline">legal@yoursite.com</a>
                                </p>
                                <p className="text-foreground-accent">
                                    <strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours
                                </p>
                            </div>
                        </section>

                        <section className="mt-8 p-6 bg-hero-background rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 manrope">Acknowledgment</h3>
                            <p className="text-foreground-accent leading-relaxed">
                                BY USING THE APP, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TermsOfService;
