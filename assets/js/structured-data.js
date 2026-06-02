(() => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Creations & Details Limited',
    description: 'Full-service interior design and construction firm in Nairobi, Kenya.',
    url: 'https://creationsanddetails.co.ke',
    telephone: '+254715194483',
    email: 'creationdetails20@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2nd Floor Mountain Mall Building, Rosters - Off Thika Road',
      addressLocality: 'Nairobi',
      addressCountry: 'KE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.286389,
      longitude: 36.817223
    },
    openingHours: 'Mo-Sa 08:00-18:00',
    priceRange: 'KES 500K–5M+',
    image: 'https://creationsanddetails.co.ke/assets/images/portfolio/katani_exterior_01_completed_front.jpg',
    sameAs: [
      'https://www.instagram.com/creationsanddetails',
      'https://www.facebook.com/creationsanddetails'
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
})();
