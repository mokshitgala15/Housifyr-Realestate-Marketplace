import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaKey, FaRegBuilding, FaMapMarkerAlt, FaBed, FaBath } from 'react-icons/fa';

const featuredListings = [
  {
    id: 1,
    name: 'Modern Family Home',
    address: 'Beverly Hills, CA',
    price: '$1,250,000',
    type: 'For Sale',
    beds: 4,
    baths: 3,
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Cozy Downtown Apartment',
    address: 'Austin, TX',
    price: '$2,400 / mo',
    type: 'For Rent',
    beds: 2,
    baths: 2,
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Luxury Beachfront Villa',
    address: 'Miami, FL',
    price: '$3,800,000',
    type: 'For Sale',
    beds: 5,
    baths: 4,
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
  },
];

const stats = [
  { label: 'Properties Listed', value: '12,500+' },
  { label: 'Happy Clients', value: '8,200+' },
  { label: 'Cities Covered', value: '120+' },
  { label: 'Expert Agents', value: '450+' },
];

const features = [
  {
    icon: <FaHome className='text-3xl text-slate-700' />,
    title: 'Buy a Home',
    desc: 'Find your place with an immersive photo experience and listings that match your lifestyle.',
  },
  {
    icon: <FaKey className='text-3xl text-slate-700' />,
    title: 'Rent a Home',
    desc: 'Browse thousands of rentals and discover the perfect space to call home.',
  },
  {
    icon: <FaRegBuilding className='text-3xl text-slate-700' />,
    title: 'Sell a Home',
    desc: 'List your property and reach genuine buyers with the right tools and exposure.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className='relative'>
        <div
          className='bg-cover bg-center'
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.65), rgba(15,23,42,0.65)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className='max-w-6xl mx-auto px-4 py-24 sm:py-32 flex flex-col gap-6'>
            <h1 className='text-white font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl'>
              Find your next <span className='text-slate-300'>perfect</span> place with ease
            </h1>
            <p className='text-slate-200 text-sm sm:text-lg max-w-2xl'>
              Housifyr is the best place to find your dream home. We have a wide
              range of properties for you to choose from — whether you want to
              buy, rent, or sell.
            </p>

            {/* Search bar */}
            <form className='bg-white p-2 rounded-lg flex items-center max-w-xl shadow-lg'>
              <input
                type='text'
                placeholder='Search by city, address, or ZIP...'
                className='bg-transparent focus:outline-none w-full px-3 text-slate-700'
              />
              <button
                type='submit'
                className='bg-slate-700 text-white p-3 rounded-lg flex items-center gap-2 hover:opacity-95'
              >
                <FaSearch />
                <span className='hidden sm:inline'>Search</span>
              </button>
            </form>

            <div className='flex gap-4 mt-2'>
              <Link
                to='/sign-up'
                className='bg-slate-100 text-slate-800 font-semibold px-6 py-3 rounded-lg hover:opacity-90'
              >
                Get Started
              </Link>
              <Link
                to='/about'
                className='border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-slate-800 transition'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className='max-w-6xl mx-auto px-4 py-16'>
        <div className='grid gap-6 sm:grid-cols-3'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition'
            >
              {feature.icon}
              <h3 className='text-xl font-semibold text-slate-800'>
                {feature.title}
              </h3>
              <p className='text-slate-600 text-sm'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats section */}
      <section className='bg-slate-700'>
        <div className='max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className='text-white text-3xl font-bold'>{stat.value}</p>
              <p className='text-slate-300 text-sm mt-1'>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured listings section */}
      <section className='max-w-6xl mx-auto px-4 py-16'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h2 className='text-2xl sm:text-3xl font-bold text-slate-800'>
              Featured Listings
            </h2>
            <p className='text-slate-600 text-sm mt-1'>
              Hand-picked properties just for you
            </p>
          </div>
          <Link
            to='/about'
            className='text-slate-700 font-semibold hover:underline whitespace-nowrap'
          >
            View all
          </Link>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {featuredListings.map((listing) => (
            <div
              key={listing.id}
              className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group'
            >
              <div className='relative'>
                <img
                  src={listing.image}
                  alt={listing.name}
                  className='h-52 w-full object-cover group-hover:scale-105 transition duration-300'
                />
                <span className='absolute top-3 left-3 bg-slate-700 text-white text-xs font-semibold px-3 py-1 rounded-full'>
                  {listing.type}
                </span>
              </div>
              <div className='p-4 flex flex-col gap-2'>
                <h3 className='text-lg font-semibold text-slate-800 truncate'>
                  {listing.name}
                </h3>
                <p className='flex items-center gap-1 text-slate-500 text-sm'>
                  <FaMapMarkerAlt className='text-slate-400' />
                  {listing.address}
                </p>
                <p className='text-slate-800 font-bold text-lg'>
                  {listing.price}
                </p>
                <div className='flex gap-4 text-slate-600 text-sm border-t pt-3'>
                  <span className='flex items-center gap-1'>
                    <FaBed /> {listing.beds} Beds
                  </span>
                  <span className='flex items-center gap-1'>
                    <FaBath /> {listing.baths} Baths
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className='max-w-6xl mx-auto px-4 pb-16'>
        <div className='bg-slate-800 rounded-2xl px-6 py-12 sm:px-12 text-center flex flex-col items-center gap-4'>
          <h2 className='text-white text-2xl sm:text-3xl font-bold'>
            Ready to find your dream home?
          </h2>
          <p className='text-slate-300 max-w-xl'>
            Join thousands of happy buyers, renters, and sellers who trust
            Housifyr to make their next move.
          </p>
          <Link
            to='/sign-up'
            className='bg-white text-slate-800 font-semibold px-8 py-3 rounded-lg hover:opacity-90 mt-2'
          >
            Create an Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-slate-200 border-t'>
        <div className='max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2'>
          <p className='font-bold text-slate-700'>Housifyr</p>
          <p className='text-slate-500 text-sm'>
            &copy; {new Date().getFullYear()} Housifyr. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
