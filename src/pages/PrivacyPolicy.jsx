import React, { useState } from 'react';
import styles from './PrivacyPolicy.module.css';

const sections = [
    {
        id: 'overview',
        number: '1',
        title: 'Overview',
        content: [
            {
                type: 'para',
                text: 'VoyageMonk ("we," "our," or "us") is committed to protecting your privacy and ensuring the responsible handling of your personal information. This Privacy Policy explains how we collect, use, disclose, retain, and protect personal data when you visit our website at voyagemonk.com, make a booking, or otherwise interact with our services.'
            },
            {
                type: 'para',
                text: 'This Policy is drafted in accordance with applicable Indian data protection law, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023 (to the extent applicable and notified).'
            },
            {
                type: 'para',
                text: 'By using our website or services, you acknowledge that you have read, understood, and consent to the practices described in this Privacy Policy. If you do not agree, please discontinue use of our services immediately.'
            }
        ]
    },
    {
        id: 'data-collected',
        number: '2',
        title: 'Information We Collect',
        content: [
            {
                type: 'subheading',
                text: '2.1  Information You Provide Directly'
            },
            {
                type: 'list',
                items: [
                    'Identity information: full name, date of birth, gender, nationality, and passport or government-issued ID details (required for flight and visa bookings).',
                    'Contact information: email address, phone number, WhatsApp number, and postal address.',
                    'Booking information: travel preferences, travel dates, destinations, special requests, dietary requirements, and accommodation preferences.',
                    'Payment information: billing name, billing address, and payment method details processed via secure third-party payment gateways (VoyageMonk does not store card details).',
                    'Corporate information: company name, GST number, designation, and point-of-contact details provided during corporate booking requests.',
                    'Communications: any messages, feedback, or enquiries you send to us via forms, email, phone, or WhatsApp.'
                ]
            },
            {
                type: 'subheading',
                text: '2.2  Information Collected Automatically'
            },
            {
                type: 'list',
                items: [
                    'Technical data: IP address, browser type and version, operating system, device identifiers, and referral URL.',
                    'Usage data: pages visited, time spent on pages, links clicked, search terms entered, and navigation path through our website.',
                    'Cookies and similar technologies: session cookies, preference cookies, and analytics cookies (see Section 7 for our Cookie Policy).'
                ]
            },
            {
                type: 'subheading',
                text: '2.3  Information from Third Parties'
            },
            {
                type: 'list',
                items: [
                    'Travel service providers (airlines, hotels, ground handlers) may share information relating to your travel arrangements.',
                    'Payment gateways may provide transaction status and payment confirmation details.',
                    'Corporate clients may provide traveller data on behalf of their employees for managed travel bookings.'
                ]
            }
        ]
    },
    {
        id: 'how-we-use',
        number: '3',
        title: 'How We Use Your Information',
        content: [
            {
                type: 'para',
                text: 'VoyageMonk processes your personal data only for legitimate, specified purposes. We use your information to:'
            },
            {
                type: 'list',
                items: [
                    'Process, confirm, manage, and fulfil travel bookings, itineraries, and related services.',
                    'Communicate with you regarding booking confirmations, amendments, cancellations, travel reminders, and support queries.',
                    'Process payments and issue invoices, receipts, and refunds.',
                    'Comply with legal, regulatory, and statutory obligations, including GSTN invoicing requirements and government-mandated identity verification.',
                    'Verify identity documents for airline, hotel, and visa submissions as required by third-party service providers.',
                    'Send service-related communications, operational alerts, and important notices relevant to your booking.',
                    'With your consent, send promotional offers, destination inspiration, and travel recommendations via email or WhatsApp.',
                    'Analyse website usage patterns to improve the performance, usability, and content of our website.',
                    'Detect, prevent, and investigate fraud, security breaches, or misuse of our services.',
                    'Resolve disputes, enforce our Terms and Conditions, and manage legal claims.'
                ]
            }
        ]
    },
    {
        id: 'sharing',
        number: '4',
        title: 'Sharing of Your Information',
        content: [
            {
                type: 'para',
                text: 'VoyageMonk does not sell, rent, or trade your personal information. We may share your data only in the following circumstances:'
            },
            {
                type: 'list',
                items: [
                    'Service providers: airlines, hotels, ground transport operators, visa processing agencies, and other travel service providers, to the extent strictly necessary to fulfil your booking.',
                    'Payment processors: secure, PCI-DSS compliant third-party payment gateways to process your transactions.',
                    'Technology providers: cloud hosting, email delivery, CRM, and analytics platforms that process data solely on our behalf under data processing agreements.',
                    'Legal and regulatory authorities: where required by law, court order, government directive, or regulatory investigation.',
                    'Corporate clients: where a booking is made on behalf of a corporate account, aggregated booking and invoicing data may be shared with the respective employer or travel manager.',
                    'Business transfers: in the event of a merger, acquisition, restructuring, or sale of assets, personal data may be transferred to the acquiring entity, subject to equivalent privacy protections.'
                ]
            },
            {
                type: 'para',
                text: 'All third parties with whom we share personal data are required to maintain appropriate confidentiality and security measures and to use the data solely for the specified purpose.'
            }
        ]
    },
    {
        id: 'retention',
        number: '5',
        title: 'Data Retention',
        content: [
            {
                type: 'list',
                items: [
                    'VoyageMonk retains personal data only for as long as is necessary to fulfil the purposes for which it was collected, or as required by applicable law, whichever is longer.',
                    'Booking records and associated personal data are retained for a minimum of 7 years from the date of the transaction, as required for statutory audit and GST compliance purposes under Indian law.',
                    'Identity documents submitted for visa processing or airline bookings are retained only for the duration of the engagement and deleted thereafter, unless retention is required by law.',
                    'Marketing preferences and communications data are retained until you withdraw consent or request deletion, whichever is earlier.',
                    'Website analytics data (anonymised and aggregated) may be retained indefinitely for business analytics purposes.',
                    'Upon expiry of the applicable retention period, personal data is securely deleted or anonymised.'
                ]
            }
        ]
    },
    {
        id: 'security',
        number: '6',
        title: 'Data Security',
        content: [
            {
                type: 'list',
                items: [
                    'VoyageMonk implements appropriate technical and organisational security measures to protect your personal data against unauthorised access, disclosure, alteration, loss, or destruction.',
                    'Our website uses industry-standard SSL/TLS encryption for all data transmitted between your browser and our servers.',
                    'Access to personal data within our organisation is restricted on a need-to-know basis and subject to confidentiality obligations.',
                    'Payment card data is processed exclusively through PCI-DSS compliant payment gateways and is never stored on VoyageMonk systems.',
                    'No method of electronic transmission or data storage is entirely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security. In the event of a data breach affecting your rights and interests, we will notify you as required by applicable law.'
                ]
            }
        ]
    },
    {
        id: 'cookies',
        number: '7',
        title: 'Cookie Policy',
        content: [
            {
                type: 'para',
                text: 'VoyageMonk uses cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device.'
            },
            {
                type: 'subheading',
                text: '7.1  Types of Cookies We Use'
            },
            {
                type: 'list',
                items: [
                    'Essential cookies: required for the website to function (e.g., session management, security). These cannot be disabled.',
                    'Analytics cookies: help us understand how visitors interact with the website (e.g., pages visited, time spent). We use anonymised data only.',
                    'Preference cookies: remember your settings and preferences (e.g., language, region) to personalise your experience.',
                    'Marketing cookies: used (with your consent) to deliver relevant promotional content across our website and partner platforms.'
                ]
            },
            {
                type: 'subheading',
                text: '7.2  Managing Cookies'
            },
            {
                type: 'para',
                text: 'You may disable or delete cookies through your browser settings at any time. Please note that disabling essential cookies may impair the functionality of our website. For more information on managing cookies, refer to your browser\'s help documentation.'
            }
        ]
    },
    {
        id: 'rights',
        number: '8',
        title: 'Your Rights',
        content: [
            {
                type: 'para',
                text: 'Subject to applicable Indian data protection law, you have the following rights regarding your personal data:'
            },
            {
                type: 'list',
                items: [
                    'Right of access: you may request a copy of the personal data we hold about you.',
                    'Right to correction: you may request correction of inaccurate or incomplete personal data.',
                    'Right to erasure: you may request deletion of your personal data where we no longer have a lawful basis to retain it (subject to statutory retention obligations).',
                    'Right to withdraw consent: where processing is based on your consent (e.g., marketing communications), you may withdraw consent at any time without affecting the lawfulness of prior processing.',
                    'Right to object: you may object to certain types of processing, such as direct marketing.',
                    'Right to grievance redressal: if you believe your privacy rights have been violated, you may lodge a complaint with our designated Grievance Officer (details in Section 10).'
                ]
            },
            {
                type: 'para',
                text: 'To exercise any of these rights, please submit a written request to info@voyagemonk.com. We will respond within a reasonable period, typically within 30 days of receipt of your request, subject to identity verification.'
            }
        ]
    },
    {
        id: 'children',
        number: '9',
        title: 'Children\'s Privacy',
        content: [
            {
                type: 'para',
                text: 'VoyageMonk\'s services are not directed to children under the age of 18. We do not knowingly collect personal information from minors without verifiable parental or guardian consent.'
            },
            {
                type: 'para',
                text: 'Where travel bookings include minors as travellers, personal data (such as name, date of birth, and passport details) is collected and processed solely for the purpose of fulfilling the booking, at the direction of the adult accompanying traveller or authorised guardian.'
            },
            {
                type: 'para',
                text: 'If you believe we have inadvertently collected information from a child without appropriate consent, please contact us immediately at info@voyagemonk.com and we will take prompt steps to delete such information.'
            }
        ]
    },
    {
        id: 'grievance',
        number: '10',
        title: 'Grievance Officer & Contact',
        content: [
            {
                type: 'para',
                text: 'In accordance with the Information Technology Act, 2000 and the rules thereunder, a Grievance Officer has been designated to address any privacy-related complaints or concerns. You may contact our Grievance Officer at:'
            },
            {
                type: 'contact',
                items: [
                    { label: 'Business Name', value: 'VoyageMonk' },
                    { label: 'Address', value: 'HSR Layout 5th Sector, Bengaluru, Karnataka 560102, India' },
                    { label: 'Email', value: 'info@voyagemonk.com', href: 'mailto:info@voyagemonk.com' },
                    { label: 'Phone / WhatsApp', value: '+91 96637 11398', href: 'tel:+919663711398' },
                    { label: 'Response Timeline', value: 'Within 30 days of receipt of complaint' },
                    { label: 'Business Hours', value: 'Monday – Saturday, 9:00 AM – 6:00 PM IST' }
                ]
            },
            {
                type: 'para',
                text: 'All privacy-related requests, objections, and complaints should be submitted in writing via email to the above address, clearly stating your request and providing your contact details for a prompt response.'
            }
        ]
    },
    {
        id: 'changes',
        number: '11',
        title: 'Changes to This Policy',
        content: [
            {
                type: 'list',
                items: [
                    'VoyageMonk reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices, applicable laws, or business operations.',
                    'The revised Policy will be published on our website with an updated "Last Updated" date. We encourage you to review this page periodically.',
                    'Where changes are material, we will make reasonable efforts to notify registered users via email or a prominent notice on our website prior to the changes taking effect.',
                    'Continued use of our website or services following the publication of an updated Privacy Policy constitutes your acceptance of those changes.'
                ]
            }
        ]
    }
];

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState(null);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100;
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const renderContent = (items) => {
        return items.map((item, idx) => {
            if (item.type === 'para') {
                return <p key={idx} className={styles.para}>{item.text}</p>;
            }
            if (item.type === 'subheading') {
                return <h3 key={idx} className={styles.subheading}>{item.text}</h3>;
            }
            if (item.type === 'list') {
                return (
                    <ul key={idx} className={styles.list}>
                        {item.items.map((li, i) => (
                            <li key={i} className={styles.listItem}>{li}</li>
                        ))}
                    </ul>
                );
            }
            if (item.type === 'contact') {
                return (
                    <div key={idx} className={styles.contactBlock}>
                        {item.items.map((c, i) => (
                            <div key={i} className={styles.contactRow}>
                                <span className={styles.contactLabel}>{c.label}</span>
                                {c.href
                                    ? <a href={c.href} className={styles.contactValue}>{c.value}</a>
                                    : <span className={styles.contactValue}>{c.value}</span>
                                }
                            </div>
                        ))}
                    </div>
                );
            }
            return null;
        });
    };

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBadge}>Legal</div>
                <h1 className={styles.heroTitle}>Privacy Policy</h1>
                <p className={styles.heroSubtitle}>
                    Your privacy matters to us. This Policy explains how VoyageMonk collects, uses, and protects your personal information when you use our services.
                </p>
                <div className={styles.heroDates}>
                    <span>Effective Date: 1 January 2025</span>
                    <span className={styles.dateSep}>·</span>
                    <span>Last Updated: 1 June 2025</span>
                </div>
            </section>

            <div className={styles.layout}>
                {/* Sticky TOC Sidebar */}
                <aside className={styles.toc}>
                    <h2 className={styles.tocTitle}>Contents</h2>
                    <nav>
                        {sections.map((s) => (
                            <button
                                key={s.id}
                                className={`${styles.tocItem} ${activeSection === s.id ? styles.tocActive : ''}`}
                                onClick={() => scrollToSection(s.id)}
                            >
                                <span className={styles.tocNum}>{s.number}</span>
                                <span>{s.title}</span>
                            </button>
                        ))}
                    </nav>
                    <div className={styles.tocDisclaimer}>
                        This Privacy Policy applies to voyagemonk.com and all services operated under the VoyageMonk brand.
                    </div>
                </aside>

                {/* Main Content */}
                <main className={styles.content}>
                    <div className={styles.disclaimer}>
                        <strong>Your Data, Your Trust:</strong> VoyageMonk is committed to the transparent and responsible use of your personal information. We collect only what is necessary and use it only for the purposes described in this Policy.
                    </div>

                    {sections.map((section) => (
                        <section key={section.id} id={section.id} className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionNum}>{section.number}</span>
                                <h2 className={styles.sectionTitle}>{section.title}</h2>
                            </div>
                            <div className={styles.sectionBody}>
                                {renderContent(section.content)}
                            </div>
                        </section>
                    ))}

                    {/* Footer Note */}
                    <div className={styles.footerNote}>
                        <p>
                            This Privacy Policy was last reviewed and updated on <strong>1 June 2025</strong>. For any privacy concerns or data requests, please write to <a href="mailto:info@voyagemonk.com">info@voyagemonk.com</a>.
                        </p>
                        <p style={{ marginTop: '0.75rem' }}>
                            <strong>VoyageMonk</strong> · HSR Layout 5th Sector, Bengaluru, Karnataka 560102, India
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
