import React from 'react';

export const JsonLd: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LodgingBusiness',
        '@id': 'https://dfi.com.bd/#resort',
        name: 'Dhaka Fantasy Island (Eco Hotel & Resort)',
        alternateName: 'ঢাকা ফ্যান্টাসি আইল্যান্ড (ইকো হোটেল এন্ড রিসোর্ট)',
        url: 'https://dfi.com.bd',
        telephone: '+8801325074535',
        description:
          'A modern sustainable eco-hotel & resort project by Sunset Group in planned Mohammadpur, Dhaka. Offering deeded Saf-Kabala land share ownership and serene natural living.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Basila Garden City Avenue Road, near Bosila Bridge, Mohammadpur',
          addressLocality: 'Dhaka',
          postalCode: '1207',
          addressCountry: 'BD',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 23.7541,
          longitude: 90.3475,
        },
        priceRange: 'BDT 350000 - BDT 3200000',
        parentOrganization: {
          '@type': 'Organization',
          '@id': 'https://sunsetgroupbd.com/#organization',
          name: 'Sunset Kuakata Hotel & Resort Limited',
          url: 'https://sunsetgroupbd.com',
          description: 'Registered under the Company Act 1994, Bangladesh',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://dfi.com.bd/#organization',
        name: 'Dhaka Fantasy Island',
        alternateName: 'DFI',
        url: 'https://dfi.com.bd',
        logo: 'https://dfi.com.bd/onlylogo.png',
        image: 'https://dfi.com.bd/og-image.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+8801325074535',
          email: 'sunsetgroupbd@gmail.com',
          contactType: 'sales & investment desk',
          areaServed: 'BD',
          availableLanguage: ['Bengali', 'English'],
        },
        parentOrganization: {
          '@type': 'Organization',
          name: 'Sunset Kuakata Hotel & Resort Limited',
          url: 'https://sunsetgroupbd.com',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://dfi.com.bd/#website',
        url: 'https://dfi.com.bd',
        name: 'Dhaka Fantasy Island',
        alternateName: ['DFI', 'ঢাকা ফ্যান্টাসি আইল্যান্ড', 'DFI Eco Resort'],
        publisher: {
          '@id': 'https://dfi.com.bd/#organization',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
