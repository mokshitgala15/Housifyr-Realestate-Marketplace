import { Link } from 'react-router-dom';
import { FaHandshake, FaShieldAlt, FaUsers, FaLightbulb } from 'react-icons/fa';

const values = [
  {
    icon: <FaHandshake className='text-3xl text-slate-700' />,
    title: 'Trust & Transparency',
    desc: 'We believe in honest dealings and clear information so you can make confident decisions.',
  },
  {
    icon: <FaShieldAlt className='text-3xl text-slate-700' />,
    title: 'Security First',
    desc: 'Your data and transactions are protected with industry-leading security practices.',
  },
  {
    icon: <FaUsers className='text-3xl text-slate-700' />,
    title: 'Customer Focused',
    desc: 'Every feature we build starts with our customers and their real estate journey.',
  },
  {
    icon: <FaLightbulb className='text-3xl text-slate-700' />,
    title: 'Innovation',
    desc: 'We continuously improve our platform with the latest technology and ideas.',
  },
];

const team = [
  {
    name: 'Aarav Mehta',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sophia Patel',
    role: 'Head of Product',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Liam Carter',
    role: 'Lead Engineer',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section
        className='bg-cover bg-center'
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.7), rgba(15,23,42,0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className='max-w-6xl mx-auto px-4 py-20 sm:py-28 text-center flex flex-col items-center gap-4'>
          <h1 className='text-white font-bold text-3xl sm:text-5xl'>
            About Housifyr
          </h1>
          <p className='text-slate-200 max-w-2xl text-sm sm:text-lg'>
            We are on a mission to make finding, buying, renting, and selling
            homes simple, transparent, and enjoyable for everyone.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className='max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-2 items-center'>
        <img
          src='https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=900&q=80'
          alt='Modern home'
          className='rounded-2xl shadow-md w-full h-72 object-cover'
        />
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl sm:text-3xl font-bold text-slate-800'>
            Our Story
          </h2>
          <p className='text-slate-600 leading-relaxed'>
            Housifyr was born out of a simple frustration: searching for a home
            shouldn&apos;t be complicated, stressful, or full of hidden
            surprises. We set out to build a modern real estate marketplace that
            puts people first.
          </p>
          <p className='text-slate-600 leading-relaxed'>
            Today, Housifyr connects thousands of buyers, renters, and sellers
            across the country. Our platform combines beautiful design,
            powerful search, and trusted listings to help you find the place you
            will love to call home.
          </p>
          <Link
            to='/sign-up'
            className='bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg w-fit hover:opacity-95'
          >
            Join Housifyr
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className='bg-white'>
        <div className='max-w-6xl mx-auto px-4 py-16'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl sm:text-3xl font-bold text-slate-800'>
              Our Values
            </h2>
            <p className='text-slate-600 text-sm mt-2'>
              The principles that guide everything we do
            </p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {values.map((value) => (
              <div
                key={value.title}
                className='bg-slate-50 rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition'
              >
                {value.icon}
                <h3 className='text-lg font-semibold text-slate-800'>
                  {value.title}
                </h3>
                <p className='text-slate-600 text-sm'>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className='max-w-6xl mx-auto px-4 py-16'>
        <div className='text-center mb-10'>
          <h2 className='text-2xl sm:text-3xl font-bold text-slate-800'>
            Meet the Team
          </h2>
          <p className='text-slate-600 text-sm mt-2'>
            The people behind Housifyr
          </p>
        </div>
        <div className='grid gap-8 sm:grid-cols-3'>
          {team.map((member) => (
            <div key={member.name} className='flex flex-col items-center gap-3'>
              <img
                src={member.image}
                alt={member.name}
                className='h-32 w-32 rounded-full object-cover shadow-md'
              />
              <h3 className='text-lg font-semibold text-slate-800'>
                {member.name}
              </h3>
              <p className='text-slate-500 text-sm'>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='max-w-6xl mx-auto px-4 pb-16'>
        <div className='bg-slate-800 rounded-2xl px-6 py-12 sm:px-12 text-center flex flex-col items-center gap-4'>
          <h2 className='text-white text-2xl sm:text-3xl font-bold'>
            Let&apos;s find your next home together
          </h2>
          <p className='text-slate-300 max-w-xl'>
            Whether you&apos;re buying, renting, or selling, Housifyr is here to
            help every step of the way.
          </p>
          <Link
            to='/'
            className='bg-white text-slate-800 font-semibold px-8 py-3 rounded-lg hover:opacity-90 mt-2'
          >
            Explore Listings
          </Link>
        </div>
      </section>
    </div>
  );
}
