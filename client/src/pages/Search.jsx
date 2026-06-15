import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { listings } from '../data/listings';
import ListingCard from '../components/ListingCard';
import Footer from '../components/Footer';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [term, setTerm] = useState(searchParams.get('searchTerm') || '');
  const [type, setType] = useState(searchParams.get('type') || 'all');

  // Keep local inputs in sync if the URL changes (e.g. via the header search).
  useEffect(() => {
    setTerm(searchParams.get('searchTerm') || '');
    setType(searchParams.get('type') || 'all');
  }, [searchParams]);

  const results = useMemo(() => {
    const q = (searchParams.get('searchTerm') || '').toLowerCase().trim();
    const t = searchParams.get('type') || 'all';
    return listings.filter((listing) => {
      const matchesTerm =
        !q ||
        listing.name.toLowerCase().includes(q) ||
        listing.address.toLowerCase().includes(q);
      const matchesType = t === 'all' || listing.typeKey === t;
      return matchesTerm && matchesType;
    });
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (term.trim()) params.set('searchTerm', term.trim());
    if (type !== 'all') params.set('type', type);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='max-w-6xl mx-auto px-4 py-10 w-full flex-1'>
        <h1 className='text-2xl sm:text-3xl font-bold text-slate-800 mb-6'>
          Search Listings
        </h1>

        <form
          onSubmit={handleSubmit}
          className='bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row gap-3 mb-8'
        >
          <div className='flex items-center bg-slate-100 rounded-lg px-3 flex-1'>
            <FaSearch className='text-slate-500' />
            <input
              type='text'
              placeholder='Search by name or location...'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className='bg-transparent focus:outline-none w-full p-3 text-slate-700'
            />
          </div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className='bg-slate-100 rounded-lg p-3 text-slate-700 focus:outline-none'
          >
            <option value='all'>All Types</option>
            <option value='sale'>For Sale</option>
            <option value='rent'>For Rent</option>
          </select>
          <button
            type='submit'
            className='bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-95'
          >
            Search
          </button>
        </form>

        <p className='text-slate-600 mb-6'>
          {results.length} {results.length === 1 ? 'result' : 'results'} found
        </p>

        {results.length === 0 ? (
          <div className='text-center py-16 text-slate-500'>
            No listings match your search. Try a different keyword or type.
          </div>
        ) : (
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {results.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
