// Placeholder listings data. Replace with a real API call once the
// listing backend endpoint exists (e.g. GET /api/listings).
export const listings = [
  {
    id: 1,
    name: 'Modern Family Home',
    address: 'Beverly Hills, CA',
    price: '$1,250,000',
    type: 'For Sale',
    typeKey: 'sale',
    beds: 4,
    baths: 3,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Cozy Downtown Apartment',
    address: 'Austin, TX',
    price: '$2,400 / mo',
    type: 'For Rent',
    typeKey: 'rent',
    beds: 2,
    baths: 2,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Luxury Beachfront Villa',
    address: 'Miami, FL',
    price: '$3,800,000',
    type: 'For Sale',
    typeKey: 'sale',
    beds: 5,
    baths: 4,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Suburban Townhouse',
    address: 'Seattle, WA',
    price: '$3,100 / mo',
    type: 'For Rent',
    typeKey: 'rent',
    beds: 3,
    baths: 2,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Country Estate with Pool',
    address: 'Nashville, TN',
    price: '$2,150,000',
    type: 'For Sale',
    typeKey: 'sale',
    beds: 6,
    baths: 5,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Minimalist City Loft',
    address: 'New York, NY',
    price: '$4,500 / mo',
    type: 'For Rent',
    typeKey: 'rent',
    beds: 1,
    baths: 1,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
  },
];

export const featuredListings = listings.filter((l) => l.featured);
