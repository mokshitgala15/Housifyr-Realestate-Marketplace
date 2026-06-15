import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBed, FaBath } from 'react-icons/fa';

export default function ListingCard({ listing }) {
  return (
    <Link
      to={`/listing/${listing.id}`}
      className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group block'
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
        <p className='text-slate-800 font-bold text-lg'>{listing.price}</p>
        <div className='flex gap-4 text-slate-600 text-sm border-t pt-3'>
          <span className='flex items-center gap-1'>
            <FaBed /> {listing.beds} {listing.beds === 1 ? 'Bed' : 'Beds'}
          </span>
          <span className='flex items-center gap-1'>
            <FaBath /> {listing.baths} {listing.baths === 1 ? 'Bath' : 'Baths'}
          </span>
        </div>
      </div>
    </Link>
  );
}
