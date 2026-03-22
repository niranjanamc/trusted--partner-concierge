import React, { useState, useRef, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { Plane, CheckCircle, Clock, Globe, Briefcase, DollarSign, Users, Calendar, Send, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './FlightBooking.module.css';
import heroImage from '../assets/images/flight_booking_hero.png';
import loungeImage from '../assets/images/business_travel_lounge.png';
import iconFares from '../assets/images/icon_flight_fares.png';
import iconPricing from '../assets/images/icon_flight_pricing.png';
import iconSupport from '../assets/images/icon_flight_support.png';
import iconQuick from '../assets/images/icon_flight_quick.png';
import iconTeam from '../assets/images/icon_flight_team.png';

const FlightBooking = () => {
    const [activeTab, setActiveTab] = useState('One Way'); // 'One Way', 'Round Trip'
    const [status, setStatus] = useState('idle');
    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '', user_email: '', phone: '',
        from_city: '', to_city: '', depart_date: '', return_date: '',
        passengers: '1', class_type: 'Economy'
    });

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setStatus('idle');
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const summaryText = useMemo(() => {
        let text = `New Flight Booking Request: ${activeTab}\n\n`;
        text += `Name: ${formData.user_name}\nEmail: ${formData.user_email}\nPhone: ${formData.phone}\n`;
        text += `From: ${formData.from_city}\nTo: ${formData.to_city}\n`;
        text += `Depart Date: ${formData.depart_date}\n`;
        if (activeTab === 'Round Trip') {
            text += `Return Date: ${formData.return_date}\n`;
        }
        text += `Passengers: ${formData.passengers}\nClass: ${formData.class_type}\n`;
        return text;
    }, [activeTab, formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || serviceId === 'service_placeholder') {
            setTimeout(() => setStatus('success'), 1500);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then(() => setStatus('success'))
            .catch(() => setStatus('error'));
    };

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.heroContainer}>
                    <h1 className={styles.heroTitle}>Flight Booking Services</h1>
                    <p className={styles.heroSubtitle}>
                        Best fares. Smart bookings. Seamless travel.
                    </p>
                </div>
            </section>

            {/* Flight Booking Form Section */}
            <section className={styles.formSection}>
                <div className={styles.container}>
                    <div className={styles.formCard}>
                        <div className={styles.tabsContainer}>
                            <div className={styles.tabs}>
                                <button
                                    type="button"
                                    className={`${styles.tabBtn} ${activeTab === 'One Way' ? styles.activeTab : ''}`}
                                    onClick={() => handleTabChange('One Way')}
                                >One Way</button>
                                <button
                                    type="button"
                                    className={`${styles.tabBtn} ${activeTab === 'Round Trip' ? styles.activeTab : ''}`}
                                    onClick={() => handleTabChange('Round Trip')}
                                >Round Trip</button>
                            </div>
                        </div>

                        {status === 'success' ? (
                            <div className={`${styles.statusMessage} ${styles.success}`}>
                                <CheckCircle size={40} style={{ margin: '0 auto 1rem', display: 'block' }} />
                                Flight Request Sent! Our concierge will provide ticket options shortly.
                                <button className={styles.submitBtn} style={{ marginTop: '1.5rem', width: 'auto' }} onClick={() => setStatus('idle')}>Book Another Flight</button>
                            </div>
                        ) : (
                            <form ref={form} onSubmit={handleSubmit}>
                                <textarea name="message" value={summaryText} readOnly style={{ display: 'none' }} />

                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>From City / Airport</label>
                                        <input type="text" className={styles.input} name="from_city" required onChange={handleInputChange} placeholder="e.g. BLR" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>To City / Airport</label>
                                        <input type="text" className={styles.input} name="to_city" required onChange={handleInputChange} placeholder="e.g. DEL" />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Depart Date</label>
                                        <input type="date" className={styles.input} name="depart_date" required onChange={handleInputChange} />
                                    </div>

                                    {activeTab === 'Round Trip' && (
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Return Date</label>
                                            <input type="date" className={styles.input} name="return_date" required onChange={handleInputChange} />
                                        </div>
                                    )}
                                </div>

                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Passengers</label>
                                        <select className={styles.select} name="passengers" onChange={handleInputChange} value={formData.passengers}>
                                            <option value="1">1 Passenger</option>
                                            <option value="2">2 Passengers</option>
                                            <option value="3">3 Passengers</option>
                                            <option value="4">4 Passengers</option>
                                            <option value="5+">5+ Passengers</option>
                                        </select>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Class</label>
                                        <select className={styles.select} name="class_type" onChange={handleInputChange} value={formData.class_type}>
                                            <option value="Economy">Economy</option>
                                            <option value="Premium Economy">Premium Economy</option>
                                            <option value="Business">Business</option>
                                            <option value="First Class">First Class</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.formGrid} style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Full Name</label>
                                        <input type="text" className={styles.input} name="user_name" required onChange={handleInputChange} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Email</label>
                                        <input type="email" className={styles.input} name="user_email" required onChange={handleInputChange} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Phone Number</label>
                                        <input type="tel" className={styles.input} name="phone" required onChange={handleInputChange} />
                                    </div>
                                </div>

                                {status === 'error' && (
                                    <div className={`${styles.statusMessage} ${styles.error}`}>
                                        <AlertCircle size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Error submitting request. Please try again.
                                    </div>
                                )}

                                <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending Request...' : 'Get Flight Options'} <Plane size={20} style={{ marginLeft: '0.5rem' }} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Our Services Include */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.splitSection}>
                        <div className={styles.textContent}>
                            <h2>Our Services Include</h2>
                            <p style={{ marginBottom: '1.5rem', color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Reliable air travel solutions for business and leisure—backed by seamless coordination and expert support.
                            </p>
                            <ul className={styles.serviceList}>
                                <li>
                                    <Globe size={24} className={styles.serviceIcon} />
                                    <span>Domestic and international flight reservations</span>
                                </li>
                                <li>
                                    <DollarSign size={24} className={styles.serviceIcon} />
                                    <span>Competitive corporate and group fares</span>
                                </li>
                                <li>
                                    <Calendar size={24} className={styles.serviceIcon} />
                                    <span>Flexible booking and rescheduling options</span>
                                </li>
                                <li>
                                    <CheckCircle size={24} className={styles.serviceIcon} />
                                    <span>Assistance with seat selection, meals, and special requests</span>
                                </li>
                                <li>
                                    <Users size={24} className={styles.serviceIcon} />
                                    <span>Coordination for group travel and event-related bookings</span>
                                </li>
                                <li>
                                    <Briefcase size={24} className={styles.serviceIcon} />
                                    <span>Timely booking confirmations and travel documentation support</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.imageContent}>
                            <img src={loungeImage} alt="Business Travel Lounge" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whyChooseSection}>
                <div className={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                        Why Choose Us
                    </h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', color: '#666' }}>
                        We simplify the complexities of air travel so you can focus on your destination.
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><img src={iconFares} alt="Best Fares" className={styles.customFlightIcon} /></div>
                            <h3>Best Fares</h3>
                            <p>Travel smart without stretching your budget. We work behind the scenes to find the best fares and deals, so you enjoy great savings along with a seamless travel experience.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><img src={iconSupport} alt="Dedicated Support" className={styles.customFlightIcon} /></div>
                            <h3>Dedicated Support</h3>
                            <p>We’re always here when you need us. Whether it’s a last-minute change or on-trip assistance, our team ensures you’re supported with care, speed, and attention.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><img src={iconQuick} alt="Quick Turnaround" className={styles.customFlightIcon} /></div>
                            <h3>Quick Turnaround</h3>
                            <p>Time matters in travel planning. Our team ensures fast, efficient responses and swift execution—from quotations to bookings—so your plans move forward without delays.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><img src={iconPricing} alt="Transparent Pricing" className={styles.customFlightIcon} /></div>
                            <h3>Transparent Pricing</h3>
                            <p>At Voyage Monk, transparency is at the core of our approach. We offer clear, detailed pricing with no hidden costs—ensuring you always know exactly what you’re paying for, while receiving the best value for your journey.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><img src={iconTeam} alt="Experienced Team" className={styles.customFlightIcon} /></div>
                            <h3>Experienced Team</h3>
                            <p>At VoyageMonk, our experienced team is the foundation of every successful journey. With deep industry expertise and a hands-on approach, we deliver thoughtfully planned, seamlessly executed travel experiences you can rely on.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ideal For */}
            <section className={styles.idealSection}>
                <div className={styles.container}>
                    <h2>Ideal For</h2>
                    <div className={styles.idealGrid}>
                        <div className={styles.idealCard}>
                            <Briefcase size={40} style={{ marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3>Corporate Meetings</h3>
                        </div>
                        <div className={styles.idealCard}>
                            <Users size={40} style={{ marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3>Incentive Trips</h3>
                        </div>
                        <div className={styles.idealCard}>
                            <Plane size={40} style={{ marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3>Executive Travel</h3>
                        </div>
                        <div className={styles.idealCard}>
                            <Globe size={40} style={{ marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3>Group Offsites</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlightBooking;
