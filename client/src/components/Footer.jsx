import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  const sections = [
    {
      title: 'Explore',
      links: [
        { label: 'Buy', to: '/search?type=sale' },
        { label: 'Rent', to: '/search?type=rent' },
        { label: 'All Listings', to: '/search' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Sign Up', to: '/sign-up' },
        { label: 'Sign In', to: '/sign-in' },
      ],
    },
  ];

  return (
    <footer className='bg-slate-800 text-slate-300'>
      <div className='max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-white text-xl'>Housifyr</p>
          <p className='text-sm text-slate-400 max-w-xs'>
            The modern real estate marketplace to buy, rent, and sell homes with
            confidence.
          </p>
          <div className='flex gap-4 mt-2 text-lg'>
            <a href='#' aria-label='Twitter' className='hover:text-white'>
              <FaTwitter />
            </a>
            <a href='#' aria-label='Instagram' className='hover:text-white'>
              <FaInstagram />
            </a>
            <a href='#' aria-label='LinkedIn' className='hover:text-white'>
              <FaLinkedin />
            </a>
            <a href='#' aria-label='Facebook' className='hover:text-white'>
              <FaFacebook />
            </a>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title} className='flex flex-col gap-3'>
            <p className='font-semibold text-white'>{section.title}</p>
            {section.links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className='text-sm text-slate-400 hover:text-white w-fit'
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        <div className='flex flex-col gap-3'>
          <p className='font-semibold text-white'>Get in touch</p>
          <p className='text-sm text-slate-400'>hello@housifyr.com</p>
          <p className='text-sm text-slate-400'>+1 (555) 012-3456</p>
        </div>
      </div>

      <div className='border-t border-slate-700'>
        <div className='max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2'>
          <p className='text-sm text-slate-400'>
            &copy; {year} Housifyr. All rights reserved.
          </p>
          <p className='text-sm text-slate-400'>
            Built with React, Tailwind &amp; love.
          </p>
        </div>
      </div>
    </footer>
  );
}
