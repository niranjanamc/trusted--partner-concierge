/**
 * Structured Data Schemas (JSON-LD) for voyagemonk.com
 * Conforms to schema.org standards for TravelAgency, LocalBusiness, and Service entities.
 */

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': 'https://voyagemonk.com/#organization',
    'name': 'VoyageMonk',
    'legalName': 'VoyageMonk Bleisure Concierge',
    'url': 'https://voyagemonk.com',
    'logo': 'https://voyagemonk.com/favicon.png',
    'image': 'https://voyagemonk.com/favicon.png',
    'description': 'Premier B2B Corporate Travel Concierge and MICE Services specialist based in Bengaluru, India with over 17 years of trusted hospitality experience.',
    'telephone': '+919663711398',
    'email': 'info@voyagemonk.com',
    'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'HSR Layout, 5th Sector',
        'addressLocality': 'Bengaluru',
        'addressRegion': 'Karnataka',
        'postalCode': '560102',
        'addressCountry': 'IN'
    },
    'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '12.9116',
        'longitude': '77.6474'
    },
    'openingHoursSpecification': [
        {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            'opens': '00:00',
            'closes': '23:59'
        }
    ],
    'priceRange': '₹₹₹',
    'sameAs': [
        'https://wa.me/919663711398'
    ]
};

export const serviceSchemas = {
    carRental: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Corporate Chauffeur Car Rental & Airport Transfers',
        'provider': {
            '@id': 'https://voyagemonk.com/#organization'
        },
        'areaServed': {
            '@type': 'State',
            'name': 'Karnataka, India'
        },
        'description': 'Premium chauffeur-driven fleet, airport transfers, corporate delegate transit, and pan-India car rentals with verified professional chauffeurs and transparent billing.'
    },
    corporateEvents: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Corporate Offsites, Retreats & MICE Event Management',
        'provider': {
            '@id': 'https://voyagemonk.com/#organization'
        },
        'areaServed': {
            '@type': 'Country',
            'name': 'India'
        },
        'description': 'End-to-end management for leadership offsites, executive retreats, team building getaways, and large-scale MICE events across Karnataka and premier Indian destinations.'
    },
    flightBooking: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Corporate Flight Booking & Management',
        'provider': {
            '@id': 'https://voyagemonk.com/#organization'
        },
        'areaServed': 'Worldwide',
        'description': 'Dedicated air travel concierge offering negotiated corporate airfares, fast re-issuance/cancellations, group passenger booking, and 24/7 flight coordination.'
    },
    hotels: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Corporate Hotel Accommodations & Luxury Stays',
        'provider': {
            '@id': 'https://voyagemonk.com/#organization'
        },
        'areaServed': 'Worldwide',
        'description': 'Handpicked 4-star and 5-star corporate hotels, boutique heritage properties, and business retreats with guaranteed executive amenities and negotiated rates.'
    },
    visa: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Business & Tourist Visa Assistance',
        'provider': {
            '@id': 'https://voyagemonk.com/#organization'
        },
        'areaServed': 'Worldwide',
        'description': 'Comprehensive corporate visa processing, document verification, appointment scheduling, and consulate guidance for outbound business delegations and leisure travelers.'
    }
};
