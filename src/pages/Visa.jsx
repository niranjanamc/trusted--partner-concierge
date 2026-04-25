import React from 'react';
import { FileWarning, CheckCircle, Clock, ShieldCheck, Mail, FileText, CalendarCheck, MapPin } from 'lucide-react';
import styles from './Visa.module.css';
import heroImage from '../assets/images/visa_hero.png';

const Visa = () => {
    return (
        <div className={styles.visaPage}>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Seamless Global Access.<br />Zero Friction.</h1>
                </div>
            </section>

            {/* Pain Points vs Solutions */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>The Complexity of Indian Visa Processing</h2>
                        <p>Securing a visa from India is notoriously complex. We transform these systemic bottlenecks into a seamless, concierge-managed experience.</p>
                    </div>

                    <div className={styles.comparisonGrid}>
                        {/* Pain Point 1 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <FileWarning size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>The Documentation Maze</h3>
                            <p className={styles.cardText}>Navigating endless checklists, contradictory embassy guidelines, and strict financial proof formatting often leads to technical rejections.</p>
                        </div>

                        {/* Solution 1 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <CheckCircle size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Concierge-Level Doc Prep</h3>
                            <p className={styles.cardText}>Our experts audit, format, and organize every document before submission, ensuring 100% compliance with current embassy standards.</p>
                        </div>

                        {/* Pain Point 2 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <Clock size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Appointment Bottlenecks</h3>
                            <p className={styles.cardText}>Dealing with VFS Global slot scarcity, sudden system downtimes, and months-long waits for biometrics appointments.</p>
                        </div>

                        {/* Solution 2 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <CalendarCheck size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Priority Slot Assistance</h3>
                            <p className={styles.cardText}>We utilize dedicated tracking and established networks to secure expedited appointment bookings, saving you weeks of waiting.</p>
                        </div>
                        
                        {/* Pain Point 3 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <ShieldCheck size={32} color="#E53E3E" />
                            </div>
                            <h3 className={styles.cardTitle}>Rejection Risks</h3>
                            <p className={styles.cardText}>High stakes and non-refundable fees are at risk over minor technical errors on forms or insufficient travel itineraries.</p>
                        </div>

                        {/* Solution 3 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Expert Pre-Screening</h3>
                            <p className={styles.cardText}>We conduct rigorous pre-screening and mock interviews if required, resulting in our exceptionally high first-time approval rates.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* End-to-End Flow */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>End-to-End Service Execution</h2>
                        <p>A transparent, step-by-step workflow designed to eliminate anxiety and keep you informed.</p>
                    </div>

                    <div className={styles.processGrid}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>1</div>
                            <h3>Expert Consultation</h3>
                            <p>We analyze your travel profile, destination requirements, and identify potential red flags immediately.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>2</div>
                            <h3>Document Collection</h3>
                            <p>We provide a curated, simplified checklist and assist in gathering and formatting all required financial and personal proofs.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>3</div>
                            <h3>Application & Biometrics</h3>
                            <p>We handle the complex form filling, secure priority slots, and guide you through the biometrics process.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>4</div>
                            <h3>Stamping & Delivery</h3>
                            <p>Real-time tracking of your passport until it is securely delivered back to your hands with the approved visa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Ready to fast-track your visa?</h2>
                    <p>Stop stressing over paperwork. Let our experts handle the complexity while you pack your bags.</p>
                    <a href="mailto:info@voyagemonk.com" className={styles.ctaButton}>
                        <Mail size={20} />
                        Consult a Visa Expert
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Visa;
