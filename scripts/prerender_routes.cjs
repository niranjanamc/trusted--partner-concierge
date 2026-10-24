const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Run vite build first.');
    process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const routes = [
    {
        path: 'car-rental',
        title: 'Chauffeur Driven Car Rental & Airport Transfers Bangalore | VoyageMonk',
        description: 'Executive car rental with verified professional chauffeurs in Bangalore. Luxury airport transfers, corporate delegate transit, and outstation trips with transparent pricing.'
    },
    {
        path: 'corporate-events',
        title: 'Corporate Offsites, Retreats & MICE Event Organizers Bangalore | VoyageMonk',
        description: 'End-to-end MICE event solutions, corporate offsite planning, executive leadership retreats, and conference logistics across Karnataka and India.'
    },
    {
        path: 'flight-booking',
        title: 'Corporate Flight Booking & Air Travel Concierge Bangalore | VoyageMonk',
        description: 'Dedicated corporate flight booking concierge. Negotiated corporate airfares, fast re-issuance, group delegate booking, and 24/7 air travel support.'
    },
    {
        path: 'hotels',
        title: 'Corporate Hotel Booking & Luxury Stays Concierge | VoyageMonk',
        description: 'Curated 4-star and 5-star corporate hotel accommodations, boutique executive retreats, and business stays across India with negotiated rates.'
    },
    {
        path: 'visa',
        title: 'Corporate Visa Assistance & Travel Documentation Concierge | VoyageMonk',
        description: 'Comprehensive corporate and business visa assistance in Bangalore. Expert document verification, biometric appointment scheduling, and fast-track processing.'
    },
    {
        path: 'about',
        title: 'About VoyageMonk | 17+ Years in Corporate Travel & Hospitality Bangalore | VoyageMonk',
        description: 'Learn about VoyageMonk: 17+ years of expertise in corporate travel management, MICE event logistics, and executive concierge services in Bangalore, India.'
    },
    {
        path: 'promise',
        title: 'The Promise & Safety Protocol | VoyageMonk Bangalore | VoyageMonk',
        description: 'Our safety commitment: Vetted chauffeurs, GPS-tracked fleet, women traveler safety standards, and 24/7 emergency response protocols.'
    },
    {
        path: 'privacy',
        title: 'Privacy Policy | VoyageMonk',
        description: 'VoyageMonk Privacy Policy - learn how we collect, handle, and protect your personal information in compliance with data privacy regulations.'
    },
    {
        path: 'terms',
        title: 'Terms & Conditions | VoyageMonk',
        description: 'VoyageMonk Terms & Conditions - booking policies, cancellations, payment terms, and user agreements for corporate and personal travel.'
    }
];

routes.forEach(route => {
    const routeDir = path.join(distDir, route.path);
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }

    const canonicalUrl = `https://voyagemonk.com/${route.path}`;
    
    let html = template
        .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
        .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
        .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`)
        .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`)
        .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
        .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`)
        .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`);

    // Ensure canonical link exists
    if (!html.includes('<link rel="canonical"')) {
        html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
    }

    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
    console.log(`[prerender] Generated ${route.path}/index.html`);
});

console.log('[prerender] Static route generation completed.');
