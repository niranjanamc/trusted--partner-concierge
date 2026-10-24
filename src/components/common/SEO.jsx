import React from 'react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://voyagemonk.com';
const DEFAULT_TITLE = 'VoyageMonk | Corporate Travel Concierge & MICE Services Bangalore';
const DEFAULT_DESCRIPTION = 'Bengaluru’s premier B2B travel concierge for corporate delegates and global citizens. Bespoke experiences, luxury logistics, and 17 years of trusted hospitality.';
const DEFAULT_IMAGE = `${DOMAIN}/favicon.png`;

const SEO = ({
    title,
    description = DEFAULT_DESCRIPTION,
    canonicalPath = '',
    ogType = 'website',
    ogImage = DEFAULT_IMAGE,
    schema = null
}) => {
    const fullTitle = title ? `${title} | VoyageMonk` : DEFAULT_TITLE;
    const cleanPath = canonicalPath ? (canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`) : '';
    const canonicalUrl = `${DOMAIN}${cleanPath}`;
    const resolvedOgImage = ogImage.startsWith('http') ? ogImage : `${DOMAIN}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

    const schemasToRender = schema
        ? (Array.isArray(schema) ? schema : [schema])
        : [];

    return (
        <Helmet>
            {/* Standard HTML Meta */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph Tags */}
            <meta property="og:site_name" content="VoyageMonk" />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={resolvedOgImage} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={resolvedOgImage} />

            {/* Structured Data (JSON-LD) */}
            {schemasToRender.map((s, idx) => (
                <script key={idx} type="application/ld+json">
                    {JSON.stringify(s)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
