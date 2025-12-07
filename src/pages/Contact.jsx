import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // These are placeholders. The user needs to replace them in .env
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (serviceId === 'service_placeholder') {
            // Simulate success for demo purposes if keys are not set
            setTimeout(() => {
                setStatus('success');
            }, 1500);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className={styles.contact}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Plan Your Trip</h1>
                    <p className={styles.heroSubtitle}>
                        Tell us about your schedule and preferences. We will design a bespoke itinerary for you.
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
                            <form className={styles.form} ref={form} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="user_name">Full Name</label>
                                    <input type="text" name="user_name" id="user_name" required placeholder="e.g. John Doe" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="user_email">Work Email</label>
                                    <input type="email" name="user_email" id="user_email" required placeholder="e.g. john.doe@company.com" />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="arrival_date">Arrival Date</label>
                                        <input type="date" name="arrival_date" id="arrival_date" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="departure_date">Departure Date</label>
                                        <input type="date" name="departure_date" id="departure_date" />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="interest">Primary Interest</label>
                                    <select name="interest" id="interest">
                                        <option value="city">City Immersion</option>
                                        <option value="weekend">Weekend Escape</option>
                                        <option value="golf">Golf Package</option>
                                        <option value="custom">Custom Itinerary</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Special Requirements / Notes</label>
                                    <textarea name="message" id="message" rows="5" placeholder="Dietary restrictions, specific interests, etc."></textarea>
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
