import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from '../Components/AppsCard';
import Loading from '../Components/Loading';
import notFoundImage from '../assets/App-Error.png';

const Apps = () => {
  const { apps, loading } = useApps();

  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedApps, setSearchedApps] = useState(apps);

  useEffect(() => {
    setSearchLoading(true); 

    const delay = setTimeout(() => {
      const term = search.trim().toLocaleLowerCase();
      const filtered = term
        ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
        : apps;

      setSearchedApps(filtered);
      setSearchLoading(false); 
    }, 500); 

    return () => clearTimeout(delay); 
  }, [search, apps]);

  return (
    <div className="bg-gray-200 py-10 text-center">
      <h1 className="text-4xl font-semibold">Our All Applications</h1>
      <p className="text-gray-500 my-2">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center max-w-6xl mx-auto py-10">
        <h1 className="text-lg lg:text-2xl font-semibold">
          ({searchedApps?.length || 0}) Apps Found
        </h1>
        <label className="input mr-2 lg:mr-0">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div>
        {loading || searchLoading ? (
          <Loading></Loading>
        ) : searchedApps.length === 0 && search.trim() !== '' ? (
          <div>
            <img className="mx-auto" src={notFoundImage} alt="" />
            <p className="text-gray-500 mt-3 text-2xl">No apps found!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {searchedApps.map(app => (
              <AppsCard key={app.id} app={app}></AppsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
