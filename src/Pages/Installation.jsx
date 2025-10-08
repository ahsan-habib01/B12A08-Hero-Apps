import React, { useEffect, useState } from 'react';
import InstalledList from '../Components/InstalledList';

const Installation = () => {
  const [installList, setInstallList] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('installList'));
    if (savedList) setInstallList(savedList);
  }, []);

  




  return (
    <div className="bg-gray-200 text-center py-10">
      <div className="py-10">
        <h1 className="text-4xl font-semibold">Your Installed Apps</h1>
        <p className="text-gray-500 my-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto py-5">
        <h1 className="text-lg lg:text-2xl font-semibold">
          ({installList.length}) Apps Found
        </h1>
        <label className='form-control w-full max-w-xs'>
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Downloads</option>
            <option value="download-asc">Low &gt; High</option>
            <option value="download-desc">High &gt; Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        {installList.map(inst => (
          <InstalledList key={inst.id} inst={inst}></InstalledList>
        ))}
      </div>
    </div>
  );
};

export default Installation;
