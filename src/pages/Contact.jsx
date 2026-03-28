import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './Contact.module.css';
import heroImage from '../assets/images/contact_hero.png';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = useState({
        name: '', email: '', arrival_date: '', departure_date: '',
        interest: 'city', message: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const payload = {
                access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                subject: `New Enquiry from ${formData.name} — VoyageMonk`,
                from_name: 'VoyageMonk Website',
                name: formData.name,
                email: formData.email,
                arrival_date: formData.arrival_date || 'Not specified',
                departure_date: formData.departure_date || 'Not specified',
                interest: formData.interest,
                message: formData.message || 'No additional notes',
                botcheck: '',
            };

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', arrival_date: '', departure_date: '', interest: 'city', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className={styles.contact}>
            {/* Hero */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Plan Your Next Travel with Ease</h1>
                    <p className={styles.heroSubtitle}>
                        Whether it’s a family holiday, one-day city tour, corporate offsite, or a pan-India travel requirement voyagemonk.com is here to help.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.formWrapper}>
                        {status === 'success' ? (
                            <div className={styles.successMessage}>
                                <CheckCircle size={64} className={styles.successIcon} />
                                <h2>Thank You!</h2>
                                <p>Your inquiry has been received. Our concierge will contact you within 2 hours.</p>
                                <button
                                    className={styles.resetBtn}
                                    onClick={() => setStatus('idle')}
                                >
                                    Send Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" name="name" id="name" required placeholder="e.g. John Doe"
                                        value={formData.name} onChange={handleChange} />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Work Email</label>
                                    <input type="email" name="email" id="email" required placeholder="e.g. john.doe@company.com"
                                        value={formData.email} onChange={handleChange} />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="arrival_date">Arrival Date</label>
                                        <input type="date" name="arrival_date" id="arrival_date"
                                            value={formData.arrival_date} onChange={handleChange} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="departure_date">Departure Date</label>
                                        <input type="date" name="departure_date" id="departure_date"
                                            value={formData.departure_date} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="interest">Primary Interest</label>
                                    <select name="interest" id="interest" value={formData.interest} onChange={handleChange}>
                                        <option value="city">City Immersion</option>
                                        <option value="weekend">Weekend Escape</option>
                                        <option value="golf">Golf Package</option>
                                        <option value="custom">Custom Itinerary</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Special Requirements / Notes</label>
                                    <textarea name="message" id="message" rows="5" placeholder="Dietary restrictions, specific interests, etc."
                                        value={formData.message} onChange={handleChange}></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className={styles.errorMessage}>
                                        <AlertCircle size={20} />
                                        <span>Something went wrong. Please try again or email us directly.</span>
                                    </div>
                                )}

                                <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Send Inquiry'} <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
