import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Car, Clock, Navigation, CheckCircle, Send, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import prices from '../data/carRental_price.json';
import styles from './CarRental.module.css';
import heroImage from '../assets/images/car_service_hero.png';

const CarRental = () => {
    const [activeTab, setActiveTab] = useState('Outstation'); // 'Outstation', 'Local', 'Airport'
    const [selectedSlabIndex, setSelectedSlabIndex] = useState(0);
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
    const [serviceType, setServiceType] = useState('8hrs'); // '4hrs', '8hrs', 'airport'
    const [extraKm, setExtraKm] = useState(0);
    const [extraHrs, setExtraHrs] = useState(0);

    const [formData, setFormData] = useState({
        user_name: '', user_email: '', phone: '', pickup_date: '', pickup_time: '',
        from_city: '', to_city: '', pickup_location: '', drop_location: '', vehicle_type: 'Sedan'
    });
    const [status, setStatus] = useState('idle');
    const form = useRef();

    const slabs = prices.all_pricing_slabs;
    const currentSlab = slabs[selectedSlabIndex];
    const currentPlan = currentSlab.pricing_plans[selectedPlanIndex];

    const isLocationSlab = useMemo(() => {
        return currentPlan.location !== undefined;
    }, [currentPlan]);

    const handleSlabChange = (e) => {
        setSelectedSlabIndex(Number(e.target.value));
        setSelectedPlanIndex(0);
        setServiceType(activeTab === 'Airport' ? 'airport' : '8hrs');
        setExtraKm(0);
        setExtraHrs(0);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (tab === 'Airport') setServiceType('airport');
        if (tab === 'Local') setServiceType('8hrs');
        setStatus('idle');
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculation = useMemo(() => {
        let basePrice = 0;
        let packageName = '';

        if (serviceType === '4hrs') {
            basePrice = currentPlan.base_rates['4_hrs_40_km'];
            packageName = '4 Hrs / 40 Km';
        } else if (serviceType === '8hrs') {
            basePrice = currentPlan.base_rates['8_hrs_80_km'];
            packageName = '8 Hrs / 80 Km';
        } else if (serviceType === 'airport') {
            basePrice = currentPlan.base_rates['fixed_airport_transfer'];
            packageName = 'Airport Transfer';
        }

        const isPackageAvailable = basePrice !== null;
        const extraKmCost = extraKm * (currentPlan.excess_charges.per_ex_km || 0);
        const extraHrCost = extraHrs * (currentPlan.excess_charges.per_ex_hr || 0);
        const driverAllowance = currentPlan.driver_allowance || 0;

        const total = isPackageAvailable
            ? basePrice + extraKmCost + extraHrCost + driverAllowance
            : 0;

        return {
            basePrice, packageName, extraKmCost, extraHrCost,
            driverAllowance, total, isPackageAvailable, currency: currentSlab.currency
        };
    }, [currentPlan, serviceType, extraKm, extraHrs, currentSlab.currency]);

    const summaryText = useMemo(() => {
        let text = `New Booking Request: ${activeTab}\n\n`;
        text += `Name: ${formData.user_name}\nEmail: ${formData.user_email}\nPhone: ${formData.phone}\n`;
        text += `Date: ${formData.pickup_date} at ${formData.pickup_time}\n\n`;

        if (activeTab === 'Outstation') {
            text += `From: ${formData.from_city}\nTo: ${formData.to_city}\n`;
            text += `Vehicle Preferred: ${formData.vehicle_type}\n`;
        } else {
            text += `Region: ${currentSlab.city_or_region}\n`;
            text += `Vehicle: ${isLocationSlab ? currentPlan.location + ' - ' + currentPlan.vehicle_category : currentPlan.category}\n`;

            if (activeTab === 'Local') {
                text += `Package: ${calculation.packageName}\n`;
                text += `Pick-up Location: ${formData.pickup_location}\n`;
            } else if (activeTab === 'Airport') {
                text += `Pick-up Location: ${formData.pickup_location}\n`;
                text += `Drop Location: ${formData.drop_location}\n`;
            }
            if (calculation.isPackageAvailable) {
                text += `\nEstimated Total: ${calculation.currency} ${calculation.total}\n`;
            }
        }
        return text;
    }, [activeTab, formData, currentSlab, currentPlan, isLocationSlab, calculation]);

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
        <div className={styles.panIndia}>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Car Rental Services</h1>
                    <p className={styles.heroSubtitle}>
                        Reliable, transparent, and premium chauffeur-driven car rentals for local, outstation, and airport transfers across India.
                    </p>
                </div>
            </section>

            {/* Calculator Section */}
            <section className={`${styles.section} ${styles.calculatorSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitLayout}>
                        {/* Left: Configuration Form */}
                        <div className={styles.formCard}>
                            <h2 className={styles.sectionTitle}>Book Your Ride</h2>

                            <div className={styles.tabsContainer}>
                                <div className={styles.tabs}>
                                    <button
                                        type="button"
                                        className={`${styles.tabBtn} ${activeTab === 'Outstation' ? styles.activeTab : ''}`}
                                        onClick={() => handleTabChange('Outstation')}
                                    >Outstation</button>
                                    <button
                                        type="button"
                                        className={`${styles.tabBtn} ${activeTab === 'Local' ? styles.activeTab : ''}`}
                                        onClick={() => handleTabChange('Local')}
                                    >Local</button>
                                    <button
                                        type="button"
                                        className={`${styles.tabBtn} ${activeTab === 'Airport' ? styles.activeTab : ''}`}
                                        onClick={() => handleTabChange('Airport')}
                                    >Airport</button>
                                </div>
                            </div>

                            {status === 'success' ? (
                                <div className={`${styles.statusMessage} ${styles.success}`}>
                                    <CheckCircle size={40} style={{ margin: '0 auto 1rem', display: 'block' }} />
                                    Booking Request Sent! Our team will contact you shortly.
                                    <button className={styles.bookBtn} style={{ marginTop: '1.5rem' }} onClick={() => setStatus('idle')}>Book Another Ride</button>
                                </div>
                            ) : (
                                <form ref={form} onSubmit={handleSubmit}>
                                    {/* HIDDEN MESSAGE FIELD FOR EMAILJS */}
                                    <textarea name="message" value={summaryText} readOnly style={{ display: 'none' }} />

                                    {/* Dynamic Fields based on Tab */}
                                    {activeTab === 'Outstation' && (
                                        <>
                                            <div className={styles.formGrid}>
                                                <div className={styles.formGroup}>
                                                    <label className={styles.label}>From City</label>
                                                    <input type="text" className={styles.input} name="from_city" required onChange={handleInputChange} placeholder="e.g. Bangalore" />
                                                </div>
                                                <div className={styles.formGroup}>
                                                    <label className={styles.label}>To City</label>
                                                    <input type="text" className={styles.input} name="to_city" required onChange={handleInputChange} placeholder="e.g. Mysore" />
                                                </div>
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label}><Car size={16} /> Preferred Vehicle</label>
                                                <select className={styles.select} name="vehicle_type" onChange={handleInputChange}>
                                                    <option value="Sedan">Sedan (Dzire / Etios)</option>
                                                    <option value="SUV">SUV (Innova / Crysta)</option>
                                                    <option value="Luxury">Luxury (Mercedes / BMW)</option>
                                                    <option value="Tempo">Tempo Traveller</option>
                                                </select>
                                            </div>
                                        </>
                                    )}

                                    {(activeTab === 'Local' || activeTab === 'Airport') && (
                                        <>
                                            <div className={styles.formGrid}>
                                                <div className={styles.formGroup}>
                                                    <label className={styles.label}><MapPin size={16} /> Region</label>
                                                    <select className={styles.select} value={selectedSlabIndex} onChange={handleSlabChange}>
                                                        {slabs.map((slab, index) => (
                                                            <option key={index} value={index}>{slab.city_or_region} ({slab.slab_name.split('-')[1]})</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className={styles.formGroup}>
                                                    <label className={styles.label}>{isLocationSlab ? 'City & Vehicle' : 'Vehicle Category'}</label>
                                                    <select className={styles.select} value={selectedPlanIndex} onChange={(e) => setSelectedPlanIndex(Number(e.target.value))}>
                                                        {currentSlab.pricing_plans.map((plan, index) => (
                                                            <option key={index} value={index}>
                                                                {plan.location ? `${plan.location} - ${plan.vehicle_category}` : plan.category}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {activeTab === 'Local' && (
                                                <div className={styles.formGroup}>
                                                    <label className={styles.label}><Navigation size={16} /> Service Package</label>
                                                    <div className={styles.radioGroup}>
                                                        {currentPlan.base_rates['4_hrs_40_km'] !== null && (
                                                            <label className={styles.radioLabel}>
                                                                <input type="radio" name="serviceType" value="4hrs" checked={serviceType === '4hrs'} onChange={(e) => setServiceType(e.target.value)} />
                                                                Local (4hr/40km)
                                                            </label>
                                                        )}
                                                        <label className={styles.radioLabel}>
                                                            <input type="radio" name="serviceType" value="8hrs" checked={serviceType === '8hrs'} onChange={(e) => setServiceType(e.target.value)} />
                                                            Local (8hr/80km)
                                                        </label>
                                                    </div>
                                                </div>
                                            )}

                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Pick-up Location</label>
                                                <input type="text" className={styles.input} name="pickup_location" required onChange={handleInputChange} placeholder="Full address or Area" />
                                            </div>

                                            {activeTab === 'Airport' && (
                                                <div className={styles.formGroup}>
                                                    <label className={styles.label}>Drop Location (or specify Airport drop/pickup)</label>
                                                    <input type="text" className={styles.input} name="drop_location" required onChange={handleInputChange} placeholder="e.g. KIAL or Hotel Name" />
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {/* Universal Lead Fields */}
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

                                    <div className={styles.formGrid}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Date</label>
                                            <input type="date" className={styles.input} name="pickup_date" required onChange={handleInputChange} />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Time</label>
                                            <input type="time" className={styles.input} name="pickup_time" required onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    {status === 'error' && (
                                        <div className={styles.errorMessage} style={{ color: 'red', marginTop: '1rem' }}>
                                            <AlertCircle size={20} /> Error submitting request. Please try again.
                                        </div>
                                    )}

                                    <button type="submit" className={styles.bookBtn} style={{ marginTop: '1rem' }} disabled={status === 'sending'}>
                                        {status === 'sending' ? 'Sending...' : 'Submit Booking Request'} <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Right: Summary (only for Local/Airport pricing estimates) */}
                        <div className={styles.summaryCard}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Estimate Summary</h2>

                            {activeTab === 'Outstation' ? (
                                <div>
                                    <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                                        Outstation trips are customized based on the itinerary, exact drop/pickup locations, and total duration.
                                        Please submit the form and our concierge will provide a transparent, competitive quote within 2 hours.
                                    </p>
                                </div>
                            ) : (
                                !calculation.isPackageAvailable ? (
                                    <p style={{ color: '#ffaaaa' }}>This package is not available for the selected vehicle/city.</p>
                                ) : (
                                    <>
                                        <div className={styles.breakdown}>
                                            <div className={styles.breakdownRow}>
                                                <span>Base Fare ({calculation.packageName})</span>
                                                <span>{calculation.currency} {calculation.basePrice}</span>
                                            </div>
                                            <div className={styles.breakdownRow}>
                                                <span>Driver Allowance</span>
                                                <span>{calculation.currency} {calculation.driverAllowance}</span>
                                            </div>
                                            {activeTab === 'Local' && (
                                                <>
                                                    {/* Local Extras Estimator */}
                                                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#aaa' }}>Estimate extra hours/km (Optional)</p>
                                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                                            <div style={{ flex: 1 }}>
                                                                <label style={{ fontSize: '0.8rem', color: '#ccc' }}>Extra Km ({currentPlan.excess_charges.per_ex_km})</label>
                                                                <input type="number" min="0" value={extraKm} onChange={(e) => setExtraKm(Number(e.target.value))} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: 'none' }} />
                                                            </div>
                                                            <div style={{ flex: 1 }}>
                                                                <label style={{ fontSize: '0.8rem', color: '#ccc' }}>Extra Hrs ({currentPlan.excess_charges.per_ex_hr})</label>
                                                                <input type="number" min="0" value={extraHrs} onChange={(e) => setExtraHrs(Number(e.target.value))} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: 'none' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {extraKm > 0 && <div className={styles.breakdownRow} style={{ marginTop: '1rem' }}><span>Extra Km Cost</span><span>{calculation.currency} {calculation.extraKmCost}</span></div>}
                                                    {extraHrs > 0 && <div className={styles.breakdownRow}><span>Extra Hrs Cost</span><span>{calculation.currency} {calculation.extraHrCost}</span></div>}
                                                </>
                                            )}
                                        </div>

                                        <div style={{ textAlign: 'right', fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.5rem' }}>Approximate Total</div>
                                        <div className={styles.totalPrice}>{calculation.currency} {calculation.total}</div>

                                        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>*Tolls, parking, and interstate taxes are excluded and payable on actuals.</p>
                                    </>
                                )
                            )}
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
                        <p><strong>Note:</strong> Driver allowances are applicable for pickups before 6 AM or drops after 10 PM, irrespective of Local or Outstation trips.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarRental;
