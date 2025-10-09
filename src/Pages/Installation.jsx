import React, { useEffect, useState } from 'react';
import InstalledList from '../Components/InstalledList';
import { toast } from 'react-toastify';
import { OctagonAlert } from 'lucide-react';
import Loading from '../Components/Loading';

const Installation = () => {
  const [installList, setInstallList] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      
      const savedList = JSON.parse(localStorage.getItem('installList')) || [];
      if (savedList) setInstallList(savedList);
      setLoading(false)
    }, 300);
    return () => clearTimeout(timer)
  }, []);

  const sortedItem = (() => {
    if (sortOrder === 'download-asc') {
      return [...installList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === 'download-desc') {
      return [...installList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installList;
    }
  })();

  const handleUninstall = app => {
    const existingList = JSON.parse(localStorage.getItem('installList')) || [];
    let updatedList = existingList.filter(p => p.id !== app.id);

    localStorage.setItem('installList', JSON.stringify(updatedList));
    toast.info(`${app.title} is Uninstalled from your device!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    setInstallList(updatedList);
  };

    if (loading) return <Loading />;

  return (
    <div className="bg-gray-200 text-center py-10">
      <div className="">
        <h1 className="text-4xl font-semibold">Your Installed Apps</h1>
        <p className="text-gray-500 my-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto py-5">
        <h1 className="text-lg lg:text-2xl font-semibold">
          ({sortedItem.length}) Apps Found
        </h1>
        <label className="form-control w-full max-w-xs">
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
        {sortedItem.length === 0 ? (
          <div className="py-20 text-center text-gray-500 text-lg space-y-4">
            <OctagonAlert className="mx-auto" size={120} color="#e5c75d" />
            <p>You have not installed any apps yet.</p>
          </div>
        ) : (
          sortedItem.map(inst => (
            <InstalledList
              key={inst.id}
              inst={inst}
              handleUninstall={handleUninstall}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
