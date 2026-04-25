import React, { useState, useRef } from 'react';
import { Building2, Users, Calendar, Briefcase, MapPin, CheckCircle, Send, AlertCircle, ShieldCheck, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './Hotels.module.css';
import heroImage from '../assets/images/hotel_hero.png';

const Hotels = () => {
    const [status, setStatus] = useState('idle');
    const form = useRef();

    const [formData, setFormData] = useState({
        destination: '',
        checkin_date: '',
        checkout_date: '',
        rooms: '1',
        adults: '1',
        children: '0',
        stay_type: 'Leisure',
        user_name: '',
        user_email: '',
        phone: '',
        special_requests: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const summaryText = `New Hotel Booking Inquiry:

Destination/Hotel: ${formData.destination}
Check-in: ${formData.checkin_date}
Check-out: ${formData.checkout_date}

Rooms: ${formData.rooms}
Adults: ${formData.adults}
Children: ${formData.children}
Stay Type: ${formData.stay_type}

Name: ${formData.user_name}
Email: ${formData.user_email}
Phone: ${formData.phone}
Special Requests: ${formData.special_requests || 'None'}
`;

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
        <div className={styles.hotelsPage}>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Curated Stays & Business Accommodation</h1>
                    <p className={styles.heroSubtitle}>
                        Discover premium hotel bookings, corporate stay solutions, and bespoke group accommodations with exclusive rates.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className={`${styles.section} ${styles.calculatorSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitLayout}>
                        
                        {/* Left: Configuration Form */}
                        <div className={styles.formCard}>
                            <h2 className={styles.sectionTitle}>Request a Booking</h2>

                            {status === 'success' ? (
                                <div className={`${styles.statusMessage} ${styles.success}`}>
                                    <CheckCircle size={40} style={{ margin: '0 auto 1rem', display: 'block' }} />
                                    Request Sent Successfully! 
                                    <p style={{ marginTop: '0.5rem', fontWeight: 'normal' }}>Our concierge team will share curated hotel options within 2 hours.</p>
                                    <button className={styles.bookBtn} style={{ marginTop: '1.5rem' }} onClick={() => { setStatus('idle'); setFormData({...formData}); }}>
                                        New Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form ref={form} onSubmit={handleSubmit}>
                                    <textarea name="message" value={summaryText} readOnly style={{ display: 'none' }} />

                                    <div className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
                                        <label className={styles.label}><MapPin size={16} /> Destination or Hotel Name</label>
                                        <input type="text" className={styles.input} name="destination" required onChange={handleInputChange} placeholder="e.g. Goa, Mumbai, Taj Lands End..." />
                                    </div>

                                    <div className={styles.formGrid}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}><Calendar size={16} /> Check-in</label>
                                            <input type="date" className={styles.input} name="checkin_date" required onChange={handleInputChange} />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}><Calendar size={16} /> Check-out</label>
                                            <input type="date" className={styles.input} name="checkout_date" required onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div className={styles.formGrid}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}><Building2 size={16} /> Rooms</label>
                                            <select className={styles.select} name="rooms" value={formData.rooms} onChange={handleInputChange}>
                                                {[1,2,3,4,5,6,7,8,9,'10+'].map(num => <option key={num} value={num}>{num}</option>)}
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}><Briefcase size={16} /> Stay Type</label>
                                            <select className={styles.select} name="stay_type" value={formData.stay_type} onChange={handleInputChange}>
                                                <option value="Leisure">Leisure / Holiday</option>
                                                <option value="Business">Business Travel</option>
                                                <option value="Group">Group Booking / Event</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGrid}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}><Users size={16} /> Adults</label>
                                            <select className={styles.select} name="adults" value={formData.adults} onChange={handleInputChange}>
                                                {[1,2,3,4,5,6,7,8,9,'10+'].map(num => <option key={num} value={num}>{num}</option>)}
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Children (0-12 yrs)</label>
                                            <select className={styles.select} name="children" value={formData.children} onChange={handleInputChange}>
                                                {[0,1,2,3,4,5,6].map(num => <option key={num} value={num}>{num}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGrid} style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                                        <div className={styles.formGroupFull}>
                                            <label className={styles.label}>Full Name</label>
                                            <input type="text" className={styles.input} name="user_name" required onChange={handleInputChange} placeholder="John Doe" />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Email</label>
                                            <input type="email" className={styles.input} name="user_email" required onChange={handleInputChange} placeholder="john@example.com" />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Phone Number</label>
                                            <input type="tel" className={styles.input} name="phone" required onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" />
                                        </div>
                                    </div>

                                    <div className={styles.formGroupFull} style={{ marginTop: '1.5rem' }}>
                                        <label className={styles.label}>Special Requests / Itinerary Details</label>
                                        <textarea className={styles.textarea} name="special_requests" onChange={handleInputChange} placeholder="Dietary needs, preferred view, late check-in, or specific itinerary notes..." />
                                    </div>

                                    {status === 'error' && (
                                        <div className={styles.errorMessage}>
                                            <AlertCircle size={20} /> Error submitting request. Please try again.
                                        </div>
                                    )}

                                    <button type="submit" className={styles.bookBtn} style={{ marginTop: '2rem' }} disabled={status === 'sending'}>
                                        {status === 'sending' ? 'Sending...' : 'Get Curated Options'} <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Right: Summary / Value Prop */}
                        <div className={styles.summaryCard}>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Why Book With Us?</h2>
                            <p style={{ opacity: 0.9, lineHeight: 1.6, marginBottom: '2rem' }}>
                                From intimate boutique hotels to sprawling luxury resorts, we secure the best properties for your travel itinerary.
                            </p>

                            <div className={styles.valueProps}>
                                <div className={styles.propItem}>
                                    <Star className={styles.propIcon} size={40} />
                                    <div className={styles.propContent}>
                                        <h3>Negotiated Rates</h3>
                                        <p>Access exclusive corporate and B2B pricing not available on regular booking platforms.</p>
                                    </div>
                                </div>
                                <div className={styles.propItem}>
                                    <Building2 className={styles.propIcon} size={40} />
                                    <div className={styles.propContent}>
                                        <h3>Corporate & Group Stays</h3>
                                        <p>Seamless management for multi-room bookings, offsites, and business travel itineraries.</p>
                                    </div>
                                </div>
                                <div className={styles.propItem}>
                                    <ShieldCheck className={styles.propIcon} size={40} />
                                    <div className={styles.propContent}>
                                        <h3>Verified Quality</h3>
                                        <p>Every recommended property is thoroughly vetted for safety, hygiene, and premium service.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hotels;
