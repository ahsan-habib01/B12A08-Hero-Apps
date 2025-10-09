import { useParams } from 'react-router';
import useApps from './../Hooks/useApps';
import Loading from './../Components/Loading';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import AppNotFound from './AppNotFound';
import downloadImage from '../assets/icon-downloads.png'
import ratingImage from '../assets/icon-ratings.png'
import reviewImage from '../assets/icon-review.png'

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [toggle, setToggle] = useState(true);

  const app = apps.find(a => a.id === Number(id));

  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem('installList')) || [];
    const isInstalled = installedList.some(p => p.id === Number(id));
    if (isInstalled) setToggle(false);
  }, [id]);

  if (loading) return <Loading></Loading>;

  if(!app) return <AppNotFound></AppNotFound>

  const {
    title,
    image,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = app || {};

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem('installList'));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some(p => p.id === app.id);
      if (isDuplicate) return toast.warning('sorry vai');
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }

    localStorage.setItem('installList', JSON.stringify(updatedList));
    toast.success(`${title} is Installed Successfully!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <div className="py-10 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Details */}
        <div className="md:flex gap-10 pb-10">
          <figure className="">
            <img className="w-60 md:h-full object-cover mx-auto" src={image} alt="" />
          </figure>
          <div>
            <div className="pb-3 ">
              <h1 className="text-3xl text-center md:text-left font-bold">{title}</h1>
              <p>
                Developed by{' '}
                <span className="text-[#8349eb] my-2  font-semibold">
                  {companyName}
                </span>
              </p>
            </div>
            <hr className="text-gray-400" />

            <div className="py-3">
              <div className="md:flex space-y-3 gap-20 mx-2 items-center">
                <div className="space-y-0.5">
                  <img className="h-8 w-8" src={downloadImage} alt="" />
                  <p className="text-[#001931]">Downloads</p>
                  <h2 className="text-4xl font-bold">{downloads}M</h2>
                </div>
                <div className="space-y-0.5">
                  <img className="h-8 w-8" src={ratingImage} alt="" />
                  <p className="text-[#001931]">Average Ratings</p>
                  <h2 className="text-4xl font-bold">{ratingAvg}</h2>
                </div>
                <div>
                <img className="h-8 w-8" src={reviewImage} alt="" />
                  <p className="text-[#001931]">Total Reviews</p>
                  <h2 className="text-4xl font-bold">{reviews}</h2>
                </div>
              </div>
            </div>
            {toggle ? (
              <button
                onClick={() => {
                  setToggle(false);
                  handleAddToInstallation();
                }}
                className="btn bg-[#00d390] text-white "
              >
                Install Now ({size}MB)
              </button>
            ) : (
              <button className="btn bg-[#00d390] text-white ">
                Installed
              </button>
            )}
          </div>
        </div>

        {/* Ratings */}
        <hr className="pb-10 text-gray-400" />
        <div>
          <h1 className="text-2xl font-semibold pb-2">Ratings</h1>
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[...ratings].reverse()}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={60} />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="#FF8C00"
                  barSize={30}
                  radius={[0, 0, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description */}
        <hr className="pb-10 text-gray-400" />
        <div></div>
        <div>
          <h1 className="text-2xl font-semibold pb-2">Description</h1>
          <p className="text-[#627382]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
