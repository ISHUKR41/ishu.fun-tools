import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for Tool Pages
 * Comprehensive meta tags, Open Graph, Twitter Cards, and Schema.org structured data
 * Optimized for Google, social media, and AI search engines
 */
export default function ToolSEO({
  toolName,
  description,
  slug,
  category,
  keywords = [],
  rating = 4.9,
  reviewCount = 24750,
}) {
  const url = `https://ishu.fun/tools/${slug}`;
  const imageUrl = `https://ishu.fun/og/${slug}.png`;

  // Generate comprehensive keywords
  const allKeywords = [
    toolName.toLowerCase(),
    `${toolName.toLowerCase()} online`,
    `${toolName.toLowerCase()} free`,
    `${toolName.toLowerCase()} no watermark`,
    `pdf ${slug.replace(/-/g, ' ')}`,
    category.toLowerCase(),
    ...keywords,
  ].join(', ');

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: toolName,
    url,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency': 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    description,
    featureList: [
      'No file size limits',
      'No watermarks',
      'Free forever',
      'Secure processing',
      'No signup required',
      'Works on any device',
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ishu.fun',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools',
        item: 'https://ishu.fun/tools',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: toolName,
        item: url,
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{toolName} Online Free — ishu.fun</title>
      <meta name="title" content={`${toolName} Online Free — ishu.fun`} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${toolName} Online Free`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="ishu.fun" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={`${toolName} Online Free`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@ishufun" />
      <meta name="twitter:creator" content="@ishufun" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content="ishu.fun" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* AI Search Engines */}
      <meta name="ai-content-declaration" content="ai-generated-tools" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </Helmet>
  );
}
