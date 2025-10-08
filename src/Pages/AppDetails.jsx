import React from 'react';
import { useParams } from 'react-router';
import useApps from './../Hooks/useApps';
import Loading from './../Components/Loading';
import { ArrowDownToLine, Star, ThumbsUp } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const AppDetails = () => {
  const { id } = useParams();

  // console.log(id);
  const { apps, loading } = useApps();

  // console.log(apps);

  const app = apps.find(a => a.id === Number(id));
  console.log(app);
  if (loading) return <Loading></Loading>;

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
  } = app;

  // console.log(a);

  return (
    <div className="py-10 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Details */}
        <div className="flex gap-5 pb-10">
          <figure className=" bg-white p-5">
            <img className="h-45 w-40 object-cover" src={image} alt="" />
          </figure>
          <div>
            <div className="pb-3">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p>
                Developed by{' '}
                <span className="text-[#8349eb] my-2 font-semibold">
                  {companyName}
                </span>
              </p>
            </div>
            <hr className="text-gray-400" />

            <div className="py-3">
              <div className="flex gap-20  items-center">
                <div>
                  <ArrowDownToLine size={28} color="#23d166" />
                  <p className="text-[#001931]">Downloads</p>
                  <h2 className="text-4xl font-bold">{downloads}</h2>
                </div>
                <div>
                  <Star size={28} color="#FF8811" />
                  <p className="text-[#001931]">Average Ratings</p>
                  <h2 className="text-4xl font-bold">{ratingAvg}</h2>
                </div>
                <div>
                  <ThumbsUp size={28} color="#8257e7" />
                  <p className="text-[#001931]">Total Reviews</p>
                  <h2 className="text-4xl font-bold">{reviews}</h2>
                </div>
              </div>
            </div>
            <button className="btn bg-[#00d390] text-white ">
              Install Now ({size}MB)
            </button>
          </div>
        </div>

        {/* Ratings */}
        <hr className="pb-10 text-gray-400" />
        <div >
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
