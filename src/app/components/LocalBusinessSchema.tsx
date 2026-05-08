export default function LocalBusinessSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Little Aston Park Services",
    url: "https://www.littleastonparkservices.co.uk",
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LandscapingBusiness"],
    name: "Little Aston Park Services",
    description:
      "Professional jet washing, garden maintenance, lawn care, hedge trimming, and landscaping services across Sutton Coldfield, Lichfield, Tamworth and the West Midlands.",
    url: "https://www.littleastonparkservices.co.uk",
    telephone: "+447500732083",
    email: "enquiries@littleastonparkservices.co.uk",
    image: "https://www.littleastonparkservices.co.uk/laps.svg",
    logo: "https://www.littleastonparkservices.co.uk/laps.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sutton Coldfield",
      addressRegion: "West Midlands",
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "City", name: "Sutton Coldfield" },
      { "@type": "City", name: "Lichfield" },
      { "@type": "City", name: "Tamworth" },
      { "@type": "AdministrativeArea", name: "West Midlands" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/littleastonparkservices/",
      "https://maps.app.goo.gl/k8ADYSVu2BeUTUbr5",
    ],
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Card",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
