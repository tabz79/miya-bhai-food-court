import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  schemaJson?: object;
}

export default function SEOHead({
  title = "Miya Bhai Food Court - Legendary Hyderabadi Cuisine",
  description = "Experience authentic Hyderabadi cuisine at Miya Bhai Food Court. Multiple branches serving traditional biryani, tandoori, and Nizami specialties since generations.",
  keywords = "Hyderabadi food, biryani, Nizami cuisine, Miya Bhai, food court, authentic Indian restaurant",
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg",
  canonicalUrl,
  schemaJson
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
}