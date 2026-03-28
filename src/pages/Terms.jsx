import React, { useState } from 'react';
import styles from './Terms.module.css';

const sections = [
    {
        id: 'acceptance',
        number: '1',
        title: 'Acceptance of Terms',
        content: [
            {
                type: 'para',
                text: 'Welcome to VoyageMonk ("we," "our," or "us"), a premium travel concierge and corporate travel management service operated from Bengaluru, Karnataka, India. By accessing our website at voyagemonk.com, making a booking, submitting an enquiry, or using any of our services, you ("Traveller," "Client," or "User") agree to be bound by these Terms and Conditions in their entirety.'
            },
            {
                type: 'para',
                text: 'If you do not agree with any part of these Terms and Conditions, you must not use our website or services. These Terms constitute a legally binding agreement between you and VoyageMonk and supersede all prior communications, representations, or agreements relating to the subject matter herein.'
            },
            {
                type: 'para',
                text: 'VoyageMonk reserves the right to amend these Terms at any time. Continued use of our services following any such changes constitutes your acceptance of the revised Terms.'
            }
        ]
    },
    {
        id: 'definitions',
        number: '2',
        title: 'Definitions',
        content: [
            {
                type: 'para',
                text: 'For the purposes of these Terms and Conditions, the following definitions apply:'
            },
            {
                type: 'list',
                items: [
                    '"VoyageMonk," "we," "our," or "us" refers to the travel concierge business operating under the brand name VoyageMonk, with its principal place of business at HSR Layout 5th Sector, Bengaluru, Karnataka 560102, India.',
                    '"Traveller," "Client," or "User" refers to any individual, group, or corporate entity accessing our website or procuring our services.',
                    '"Booking" refers to any confirmed reservation for travel, accommodation, transport, events, or ancillary services made through VoyageMonk.',
                    '"Service Providers" refers to third-party airlines, hotels, car rental companies, event venues, ground handlers, visa agencies, and any other third parties whose services VoyageMonk arranges on behalf of clients.',
                    '"Confirmation" refers to written confirmation issued by VoyageMonk following receipt of applicable payment, evidencing a confirmed booking.',
                    '"Itinerary" refers to the agreed-upon travel plan, schedule, and service details provided to the Traveller upon confirmation.'
                ]
            }
        ]
    },
    {
        id: 'booking',
        number: '3',
        title: 'Booking and Reservations',
        content: [
            {
                type: 'subheading',
                text: '3.1  Availability and Indicative Pricing'
            },
            {
                type: 'list',
                items: [
                    'All flight, hotel, transport, and travel bookings made through VoyageMonk are subject to availability at the time of confirmation.',
                    'Prices displayed on our website, quoted verbally, or communicated via email are indicative only and may change without notice due to updates by airlines, hotels, or third-party service providers, including fare fluctuations, availability changes, taxes, surcharges, and currency exchange rate variations.',
                    'VoyageMonk is not responsible for any pricing inaccuracies arising from third-party data feeds, website errors, or typographical mistakes. We reserve the right to correct any such errors and provide revised quotes before processing payment.'
                ]
            },
            {
                type: 'subheading',
                text: '3.2  Confirmation of Booking'
            },
            {
                type: 'list',
                items: [
                    'A booking is considered confirmed only upon receipt of the applicable payment in full (or agreed deposit) and issuance of a written Confirmation by VoyageMonk.',
                    'No verbal confirmation, hold, or tentative reservation shall constitute a binding booking.',
                    'VoyageMonk reserves the right to decline or cancel any booking request at its sole discretion without liability.',
                    'Corporate clients with pre-approved credit facilities shall have bookings confirmed as per their individually negotiated credit terms.'
                ]
            },
            {
                type: 'subheading',
                text: '3.3  Booking Accuracy'
            },
            {
                type: 'list',
                items: [
                    'It is the sole responsibility of the Traveller to ensure that all names, dates, destinations, and other booking details provided to VoyageMonk are accurate and match the traveller\'s identification documents.',
                    'VoyageMonk shall not be liable for any costs, penalties, or losses arising from inaccurate information provided by the Traveller at the time of booking.',
                    'Any corrections required after a booking is confirmed may attract amendment fees as per Clause 6.'
                ]
            }
        ]
    },
    {
        id: 'payment',
        number: '4',
        title: 'Payment Terms',
        content: [
            {
                type: 'subheading',
                text: '4.1  Accepted Payment Methods'
            },
            {
                type: 'list',
                items: [
                    'Payments may be made via credit card, debit card, net banking, UPI, bank transfer (NEFT/RTGS/IMPS), or other authorised payment methods as communicated by VoyageMonk at the time of booking.',
                    'All payments are to be made in Indian Rupees (INR) unless otherwise expressly agreed in writing. International payments may be subject to additional banking fees and currency conversion charges, which are the sole responsibility of the Traveller.',
                    'VoyageMonk does not store credit or debit card details. All card payments are processed through secure, PCI-DSS compliant third-party payment gateways.'
                ]
            },
            {
                type: 'subheading',
                text: '4.2  Deposit and Full Payment'
            },
            {
                type: 'list',
                items: [
                    'Certain bookings may require a non-refundable deposit at the time of reservation, with the balance due prior to travel as communicated in the booking confirmation.',
                    'Failure to make full payment by the stipulated deadline may result in automatic cancellation of the booking, with any applicable cancellation charges levied.',
                    'VoyageMonk service fees are non-refundable once a booking has been confirmed and services rendered.'
                ]
            },
            {
                type: 'subheading',
                text: '4.3  Refunds'
            },
            {
                type: 'list',
                items: [
                    'Refunds for cancellations are governed by the cancellation and refund policies of the respective airlines, hotels, or service providers, which shall be communicated to the Traveller at the time of booking.',
                    'VoyageMonk will process eligible refunds from service providers to the Traveller\'s original payment method within a reasonable period following receipt of the refund from the service provider. This timeline is dependent on the service provider\'s refund policy and may range from 7 to 45 working days.',
                    'VoyageMonk\'s service fees, consultation fees, and transaction handling charges are non-refundable regardless of cancellation circumstances.',
                    'Refunds will not be processed for unused services, including partially completed itineraries, if the Traveller chooses to curtail the trip voluntarily.'
                ]
            }
        ]
    },
    {
        id: 'cancellation',
        number: '5',
        title: 'Cancellation Policy',
        content: [
            {
                type: 'subheading',
                text: '5.1  Cancellation by the Traveller'
            },
            {
                type: 'list',
                items: [
                    'All cancellation requests for confirmed bookings must be submitted in writing via email to info@voyagemonk.com. Cancellations communicated by telephone will not be accepted without written confirmation.',
                    'The effective date of cancellation shall be the date on which written notice is received by VoyageMonk during business hours (Monday to Saturday, 9:00 AM to 6:00 PM IST). Requests received outside business hours will be processed on the next business day.',
                    'Cancellation charges will vary depending on the type of service, the timing of the cancellation relative to the travel date, and the policies of the respective service providers. Standard cancellation timelines and associated penalty ranges are as follows:',
                ]
            },
            {
                type: 'table',
                headers: ['Notice Period Before Travel', 'Indicative Cancellation Charge'],
                rows: [
                    ['More than 30 days', 'Service fee + applicable supplier charges'],
                    ['15 – 30 days', '25% – 50% of total booking value'],
                    ['7 – 14 days', '50% – 75% of total booking value'],
                    ['Less than 7 days', '75% – 100% of total booking value'],
                    ['No-show / Day of travel', '100% of total booking value (non-refundable)'],
                ]
            },
            {
                type: 'para',
                text: 'Note: The above figures are indicative. Actual charges depend on service provider policies and will be communicated prior to finalising cancellation. Airline and hotel-specific cancellation penalties supersede the above where more restrictive.'
            },
            {
                type: 'subheading',
                text: '5.2  Cancellation by VoyageMonk'
            },
            {
                type: 'list',
                items: [
                    'VoyageMonk reserves the right to cancel any booking in the event of: (a) non-receipt of payment by the stipulated deadline; (b) failure by the Traveller to provide required documentation; (c) force majeure events; or (d) circumstances outside VoyageMonk\'s reasonable control.',
                    'In the event of cancellation by VoyageMonk due to reasons within its control, a full refund of amounts paid (excluding non-refundable third-party charges) will be provided. No further liability is accepted by VoyageMonk beyond this amount.'
                ]
            }
        ]
    },
    {
        id: 'changes',
        number: '6',
        title: 'Post-Confirmation Itinerary Changes',
        content: [
            {
                type: 'list',
                items: [
                    'Any amendments to a confirmed booking — including changes to dates, destinations, passenger names, accommodation, or transport — must be submitted in writing by the Traveller.',
                    'All post-confirmation changes are subject to availability at the time the amendment is requested. VoyageMonk will make all reasonable efforts to accommodate the requested changes but cannot guarantee that the revised arrangements will be available at the same price or quality.',
                    'Amendments will incur an administrative service charge per change request, in addition to any fare differences, supplier amendment fees, or penalties charged by the relevant airline, hotel, or service provider at the prevailing rate at the time of the change.',
                    'Changes requested within 72 hours of the scheduled departure may not be possible and may be treated as a cancellation and rebooking, subject to applicable cancellation charges.',
                    'VoyageMonk reserves the right to make minor operational adjustments to itineraries (such as changes in routing, timing, or venue) where required due to service provider operational requirements, subject to providing the Traveller with reasonable notice.'
                ]
            }
        ]
    },
    {
        id: 'documents',
        number: '7',
        title: 'Travel Documentation',
        content: [
            {
                type: 'list',
                items: [
                    'It is the sole and absolute responsibility of the Traveller to ensure they hold all valid travel documents required for their journey, including but not limited to: a valid passport (with a minimum validity as required by the destination country), appropriate visas, travel permits, health certificates, vaccination records, and travel insurance.',
                    'VoyageMonk may, upon request and subject to applicable service fees, assist with visa application support, documentation guidance, and permit procurement. However, VoyageMonk does not guarantee the grant of any visa or permit by relevant authorities and shall not be held liable for any visa refusals or delays.',
                    'VoyageMonk is not responsible for any costs, losses, or damages arising from a Traveller\'s failure to carry the correct, valid, or complete travel documentation, including but not limited to denial of boarding, denied entry at any border, deportation, or detention.',
                    'Travellers are strongly advised to verify entry requirements — including visa-on-arrival eligibility, health requirements, and customs regulations — directly with the relevant embassy, consulate, or official government source prior to travel.',
                    'VoyageMonk strongly recommends that all Travellers obtain comprehensive travel insurance covering trip cancellation, medical emergencies, personal liability, loss of baggage, and travel delays, for both domestic and international travel.'
                ]
            }
        ]
    },
    {
        id: 'safety',
        number: '8',
        title: 'Travel Safety and Conduct',
        content: [
            {
                type: 'list',
                items: [
                    'Travellers are solely responsible for their personal safety throughout the duration of their journey. VoyageMonk strongly advises all Travellers to exercise due care and diligence at all times.',
                    'Travellers must comply with all applicable local laws, regulations, customs, and guidelines of the destination country, state, or region. Any breach of local law by a Traveller is their personal responsibility.',
                    'VoyageMonk is not responsible for accidents, injuries, medical emergencies, theft, loss or damage to personal belongings, property damage, or any other incidents occurring during travel, including those arising from activities organised or facilitated by third-party service providers.',
                    'Travellers are required to conduct themselves in a lawful and respectful manner. VoyageMonk reserves the right to refuse service or terminate an ongoing trip without refund in the event of unlawful, disruptive, or abusive behaviour by a Traveller.',
                    'For female travellers, VoyageMonk applies enhanced safety protocols including background-verified chauffeurs, real-time support contact, and emergency escalation procedures. However, VoyageMonk does not accept liability for incidents outside its reasonable control.'
                ]
            }
        ]
    },
    {
        id: 'liability',
        number: '9',
        title: 'Liability and Limitation of Liability',
        content: [
            {
                type: 'subheading',
                text: '9.1  Intermediary Role'
            },
            {
                type: 'list',
                items: [
                    'VoyageMonk acts as an intermediary, travel agent, and concierge manager between the Traveller and independent third-party service providers, including airlines, hotels, transport operators, event venues, and ground handlers.',
                    'VoyageMonk does not own, operate, control, or manage the services provided by these third parties, and is not a party to the contract of carriage, accommodation, or service between the Traveller and the respective provider.'
                ]
            },
            {
                type: 'subheading',
                text: '9.2  Exclusions'
            },
            {
                type: 'list',
                items: [
                    'VoyageMonk shall not be liable — whether in contract, tort, negligence, or otherwise — for: (a) delays, cancellations, rescheduling, or overbooking by airlines, hotels, or other service providers; (b) loss, theft, or damage to luggage or personal property; (c) personal injury, illness, or death; (d) failure of third-party services; (e) adverse weather conditions, natural disasters, strikes, civil unrest, or acts of God; or (f) any other circumstance beyond VoyageMonk\'s reasonable control.',
                    'In all circumstances, VoyageMonk\'s aggregate liability to any Traveller shall not exceed the total service fees received by VoyageMonk from that Traveller in respect of the specific booking giving rise to the claim.'
                ]
            },
            {
                type: 'subheading',
                text: '9.3  Force Majeure'
            },
            {
                type: 'para',
                text: 'VoyageMonk shall not be liable for any failure to perform its obligations under these Terms arising from circumstances beyond its reasonable control, including but not limited to: acts of God, war, terrorism, pandemic, epidemic, government travel advisories or bans, natural disasters, strikes, or any other event constituting force majeure. In such events, VoyageMonk will endeavour to offer alternative arrangements where feasible.'
            }
        ]
    },
    {
        id: 'ip',
        number: '10',
        title: 'Intellectual Property Rights',
        content: [
            {
                type: 'list',
                items: [
                    'All content published on voyagemonk.com — including but not limited to text, graphics, photographs, videos, logos, icons, trademarks, trade names, service marks, itineraries, and user interface designs — is the exclusive intellectual property of VoyageMonk or its duly licensed content providers.',
                    'No part of the content on this website may be reproduced, distributed, modified, transmitted, reused, adapted, republished, or otherwise exploited — whether in whole or in part — for any commercial or non-commercial purpose without the prior written consent of VoyageMonk.',
                    'Unauthorised use of VoyageMonk\'s intellectual property constitutes an infringement of applicable copyright, trademark, and other intellectual property laws and will be subject to legal action.',
                    'VoyageMonk grants Users a limited, non-exclusive, non-transferable licence to access and use the website solely for personal, non-commercial purposes in accordance with these Terms.'
                ]
            }
        ]
    },
    {
        id: 'privacy',
        number: '11',
        title: 'Privacy and Data Protection',
        content: [
            {
                type: 'list',
                items: [
                    'VoyageMonk collects, processes, and retains personal data submitted by Users and Travellers — including names, contact details, travel preferences, and payment information — solely for the purpose of providing, administering, and improving its services.',
                    'By using our website and/or services, you consent to the collection and processing of your personal data as described in our Privacy Policy, which forms an integral part of these Terms and is available on our website.',
                    'VoyageMonk will not sell, rent, or share your personal data with unauthorised third parties. Data may be shared with service providers (airlines, hotels, etc.) solely to the extent necessary to fulfil your booking.',
                    'VoyageMonk implements appropriate technical and organisational security measures to protect personal data against unauthorised access, loss, or misuse. However, no method of transmission over the internet is entirely secure, and VoyageMonk cannot guarantee absolute data security.'
                ]
            }
        ]
    },
    {
        id: 'governing',
        number: '12',
        title: 'Governing Law and Jurisdiction',
        content: [
            {
                type: 'list',
                items: [
                    'These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India, including but not limited to the Indian Contract Act, 1872, Consumer Protection Act, 2019, and the Information Technology Act, 2000, as applicable.',
                    'Any dispute, controversy, or claim arising out of or in connection with these Terms, including any question regarding its existence, validity, breach, or termination, shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.',
                    'Prior to initiating any formal legal proceedings, both parties agree to attempt to resolve disputes through good-faith negotiation. Should negotiation fail, either party may initiate proceedings before the courts of Bengaluru.'
                ]
            }
        ]
    },
    {
        id: 'amendments',
        number: '13',
        title: 'Amendments to These Terms',
        content: [
            {
                type: 'list',
                items: [
                    'VoyageMonk reserves the sole and absolute right to update, amend, modify, or replace these Terms and Conditions at any time, with or without prior notice.',
                    'Revised Terms shall be effective immediately upon publication on the website. The "Last Updated" date at the top of this page will be amended to reflect the date of revision.',
                    'It is the User\'s responsibility to review these Terms periodically. Continued use of VoyageMonk\'s website or services following the publication of amended Terms constitutes your acceptance of those changes.',
                    'If any provision of these Terms is found to be unlawful, void, or unenforceable by a court of competent jurisdiction, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.'
                ]
            }
        ]
    },
    {
        id: 'contact',
        number: '14',
        title: 'Contact Information',
        content: [
            {
                type: 'para',
                text: 'For any questions, clarifications, or concerns regarding these Terms and Conditions, or to submit a cancellation or amendment request, please contact us:'
            },
            {
                type: 'contact',
                items: [
                    { label: 'Business Name', value: 'VoyageMonk' },
                    { label: 'Registered Address', value: 'HSR Layout 5th Sector, Bengaluru, Karnataka 560102, India' },
                    { label: 'Email', value: 'info@voyagemonk.com', href: 'mailto:info@voyagemonk.com' },
                    { label: 'Phone / WhatsApp', value: '+91 96637 11398', href: 'tel:+919663711398' },
                    { label: 'Website', value: 'voyagemonk.com', href: 'https://voyagemonk.com' },
                    { label: 'Business Hours', value: 'Monday – Saturday, 9:00 AM – 6:00 PM IST' },
                ]
            },
            {
                type: 'para',
                text: 'All formal notices, cancellation requests, and legal correspondence must be submitted via email to info@voyagemonk.com to be considered valid and effective.'
            }
        ]
    }
];

const Terms = () => {
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
            if (item.type === 'table') {
                return (
                    <div key={idx} className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    {item.headers.map((h, i) => (
                                        <th key={i} className={styles.th}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {item.rows.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                                        {row.map((cell, j) => (
                                            <td key={j} className={styles.td}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
                <h1 className={styles.heroTitle}>Terms & Conditions</h1>
                <p className={styles.heroSubtitle}>
                    Please read these Terms carefully before using our services. By accessing VoyageMonk or making a booking, you agree to be bound by these Terms.
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
                        This document is for informational purposes only and does not constitute legal advice.
                    </div>
                </aside>

                {/* Main Content */}
                <main className={styles.content}>
                    <div className={styles.disclaimer}>
                        <strong>Important Notice:</strong> VoyageMonk acts as a travel intermediary. These Terms govern your use of our services and your relationship with us. Your contract of carriage, accommodation, and ancillary services is directly with the respective service provider (airline, hotel, etc.) and subject to their individual terms.
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

                    {/* Footer note */}
                    <div className={styles.footerNote}>
                        <p>
                            These Terms and Conditions were last reviewed and updated on <strong>1 June 2025</strong>. For any queries, please write to <a href="mailto:info@voyagemonk.com">info@voyagemonk.com</a>.
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

export default Terms;
