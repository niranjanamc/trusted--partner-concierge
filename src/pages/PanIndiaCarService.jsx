import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Car, Clock, Navigation, CheckCircle } from 'lucide-react';
import prices from '../data/panIndiaCarService_price.json';
import styles from './PanIndiaCarService.module.css';
import heroImage from '../assets/images/car_service_hero.png';

const PanIndiaCarService = () => {
    const [selectedSlabIndex, setSelectedSlabIndex] = useState(0);
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
    const [serviceType, setServiceType] = useState('8hrs'); // '4hrs', '8hrs', 'airport'
    const [extraKm, setExtraKm] = useState(0);
    const [extraHrs, setExtraHrs] = useState(0);

    const slabs = prices.all_pricing_slabs;
    const currentSlab = slabs[selectedSlabIndex];
    const currentPlan = currentSlab.pricing_plans[selectedPlanIndex];

    const isLocationSlab = useMemo(() => {
        return currentPlan.location !== undefined;
    }, [currentPlan]);

    // Handle Slab Change
    const handleSlabChange = (e) => {
        setSelectedSlabIndex(Number(e.target.value));
        setSelectedPlanIndex(0); // Reset plan on slab change
        setServiceType('8hrs');
        setExtraKm(0);
        setExtraHrs(0);
    };

    // Calculate Pricing
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

        // Handle null base rates (e.g., some cities don't have 4hr packages)
        const isPackageAvailable = basePrice !== null;

        const extraKmCost = extraKm * (currentPlan.excess_charges.per_ex_km || 0);
        const extraHrCost = extraHrs * (currentPlan.excess_charges.per_ex_hr || 0);
        const driverAllowance = currentPlan.driver_allowance || 0;

        // If package not available, total is 0 or handled gracefully
        const total = isPackageAvailable
            ? basePrice + extraKmCost + extraHrCost + driverAllowance
            : 0;

        return {
            basePrice,
            packageName,
            extraKmCost,
            extraHrCost,
            driverAllowance,
            total,
            isPackageAvailable,
            currency: currentSlab.currency
        };
    }, [currentPlan, serviceType, extraKm, extraHrs, currentSlab.currency]);

    return (
        <div className={styles.panIndia}>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>PAN India Prime Cabs</h1>
                    <p className={styles.heroSubtitle}>
                        Seamless, transparent, and premium chauffeur services across major Indian cities.
                        Choose your city and vehicle to get an instant estimate.
                    </p>
                </div>
            </section>

            {/* Calculator Section */}
            <section className={`${styles.section} ${styles.calculatorSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitLayout}>
                        {/* Left: Configuration Form */}
                        <div className={styles.formCard}>
                            <h2 className={styles.sectionTitle}>Configure Your Ride</h2>

                            {/* 1. Select Region / Slab */}
                            <div className={styles.formGroup}>
                                <label className={styles.label}><MapPin size={16} /> Select Region</label>
                                <select
                                    className={styles.select}
                                    value={selectedSlabIndex}
                                    onChange={handleSlabChange}
                                >
                                    {slabs.map((slab, index) => (
                                        <option key={index} value={index}>
                                            {slab.city_or_region} ({slab.slab_name.split('-')[1]})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* 2. Select Vehicle or City (for Slab 5) */}
                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    {isLocationSlab ? <MapPin size={16} /> : <Car size={16} />}
                                    {isLocationSlab ? ' Select Specific City' : ' Select Vehicle Category'}
                                </label>
                                <select
                                    className={styles.select}
                                    value={selectedPlanIndex}
                                    onChange={(e) => setSelectedPlanIndex(Number(e.target.value))}
                                >
                                    {currentSlab.pricing_plans.map((plan, index) => (
                                        <option key={index} value={index}>
                                            {plan.location
                                                ? `${plan.location} - ${plan.vehicle_category}`
                                                : plan.category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* 3. Service Type */}
                            <div className={styles.formGroup}>
                                <label className={styles.label}><Navigation size={16} /> Service Package</label>
                                <div className={styles.radioGroup}>
                                    {currentPlan.base_rates['4_hrs_40_km'] !== null && (
                                        <label className={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="serviceType"
                                                value="4hrs"
                                                checked={serviceType === '4hrs'}
                                                onChange={(e) => setServiceType(e.target.value)}
                                            />
                                            Local (4hr/40km)
                                        </label>
                                    )}
                                    <label className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="serviceType"
                                            value="8hrs"
                                            checked={serviceType === '8hrs'}
                                            onChange={(e) => setServiceType(e.target.value)}
                                        />
                                        Local (8hr/80km)
                                    </label>
                                    {currentPlan.base_rates['fixed_airport_transfer'] !== null && (
                                        <label className={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="serviceType"
                                                value="airport"
                                                checked={serviceType === 'airport'}
                                                onChange={(e) => setServiceType(e.target.value)}
                                            />
                                            Airport Transfer
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* 4. Extras */}
                            <div className={styles.formGroup}>
                                <label className={styles.label}><Clock size={16} /> Extras (Estimate)</label>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <span style={{ fontSize: '0.8rem', color: '#666' }}>Extra Km ({currentPlan.excess_charges.per_ex_km}/{currentSlab.currency})</span>
                                        <input
                                            type="number"
                                            className={styles.input}
                                            min="0"
                                            value={extraKm}
                                            onChange={(e) => setExtraKm(Number(e.target.value))}
                                            placeholder="0"
                                        />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <span style={{ fontSize: '0.8rem', color: '#666' }}>Extra Hrs ({currentPlan.excess_charges.per_ex_hr}/{currentSlab.currency})</span>
                                        <input
                                            type="number"
                                            className={styles.input}
                                            min="0"
                                            value={extraHrs}
                                            onChange={(e) => setExtraHrs(Number(e.target.value))}
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Summary */}
                        <div className={styles.summaryCard}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Estimate Summary</h2>

                            {!calculation.isPackageAvailable ? (
                                <p style={{ color: '#ffaaa' }}>This package is not available for the selected vehicle/city.</p>
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
                                        {extraKm > 0 && (
                                            <div className={styles.breakdownRow}>
                                                <span>Extra Km ({extraKm} x {currentPlan.excess_charges.per_ex_km})</span>
                                                <span>{calculation.currency} {calculation.extraKmCost}</span>
                                            </div>
                                        )}
                                        {extraHrs > 0 && (
                                            <div className={styles.breakdownRow}>
                                                <span>Extra Hrs ({extraHrs} x {currentPlan.excess_charges.per_ex_hr})</span>
                                                <span>{calculation.currency} {calculation.extraHrCost}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ textAlign: 'right', fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.5rem' }}>
                                        Approximate Total
                                    </div>
                                    <div className={styles.totalPrice}>
                                        {calculation.currency} {calculation.total}
                                    </div>

                                    <p style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '1.5rem' }}>
                                        *Tolls, parking, and interstate taxes are excluded and payable on actuals.
                                    </p>

                                    <button className={styles.bookBtn}>Book This Ride</button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Outstation Request CTA */}
                    <div className={styles.outstationCta} style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
                        <h3>Planning an Outstation Trip?</h3>
                        <p style={{ marginBottom: '1.5rem', color: '#666' }}>
                            We offer premium outstation services with transparent pricing.
                        </p>
                        <Link to="/contact" className={styles.bookBtn} style={{ display: 'inline-block', maxWidth: '300px' }}>
                            Request Outstation Quote
                        </Link>
                    </div>

                    <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                        <p><strong>Note:</strong> Driver allowances are applicable for pickups before 6 AM or drops after 10 PM, irrespective of Local or Outstation trips.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PanIndiaCarService;
