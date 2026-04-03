import { Helmet } from 'react-helmet-async';

/**
 * Comprehensive SEO Component for ishu.fun-tools
 * Implements best practices for search engine optimization
 */
export default function SEO({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schemaMarkup,
  noindex = false,
  nofollow = false,
}) {
  const siteUrl = 'https://ishu.fun';
  const defaultImage = `${siteUrl}/og-default.png`;
  const fullTitle = title ? `${title} | ishu.fun` : 'ishu.fun - 120+ Free PDF Tools Online';
  const fullCanonical = canonicalUrl || `${siteUrl}${window.location.pathname}`;
  const imageUrl = ogImage || defaultImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Robots */}
      {(noindex || nofollow) && (
        <meta
          name="robots"
          content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`}
        />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="ishu.fun" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO Tags */}
      <meta name="author" content="ishu.fun" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#6366f1" />

      {/* Structured Data (JSON-LD) */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}

/**
 * Generate Schema.org structured data for a tool page
 */
export function generateToolSchema({ name, description, slug, rating = 4.8, ratingCount = 10000 }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toString(),
      ratingCount: ratingCount,
      bestRating: '5',
      worstRating: '1',
    },
    description: description,
    url: `https://ishu.fun/tools/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'ishu.fun',
      url: 'https://ishu.fun',
    },
    provider: {
      '@type': 'Organization',
      name: 'ishu.fun',
      url: 'https://ishu.fun',
    },
  };
}

/**
 * Generate FAQ Schema for tool pages
 */
export function generateFAQSchema(faqs = []) {
  if (!faqs.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(breadcrumbs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://ishu.fun${crumb.path}`,
    })),
  };
}

/**
 * Generate Organization Schema (for homepage)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ishu.fun',
    url: 'https://ishu.fun',
    logo: 'https://ishu.fun/logo.png',
    description: '120+ free PDF tools for merging, splitting, converting, and editing PDF files online',
    sameAs: [
      'https://twitter.com/ishufun',
      'https://github.com/ISHUKR41',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@ishu.fun',
    },
  };
}

/**
 * Generate WebSite Schema with SearchAction
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ishu.fun',
    url: 'https://ishu.fun',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ishu.fun/tools?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * SEO Helper: Generate keywords for a tool
 */
export function generateToolKeywords(toolName, category) {
  const baseKeywords = [
    toolName.toLowerCase(),
    `${toolName.toLowerCase()} online`,
    `${toolName.toLowerCase()} free`,
    `free ${toolName.toLowerCase()}`,
    `${toolName.toLowerCase()} tool`,
    'pdf tool',
    'pdf converter',
    'pdf editor',
  ];

  const categoryKeywords = {
    organize: ['pdf organizer', 'pdf management', 'pdf utility'],
    'convert-from-pdf': ['pdf converter', 'convert pdf', 'pdf to'],
    'convert-to-pdf': ['convert to pdf', 'pdf converter', 'to pdf'],
    'pdf-security': ['pdf security', 'protect pdf', 'pdf password'],
    'edit-pdf': ['pdf editor', 'edit pdf', 'pdf editing'],
    extract: ['pdf extraction', 'extract from pdf'],
    'ai-powered': ['ai pdf', 'pdf ai', 'smart pdf'],
    advanced: ['advanced pdf', 'pdf tools'],
  };

  return [...baseKeywords, ...(categoryKeywords[category] || [])];
}
