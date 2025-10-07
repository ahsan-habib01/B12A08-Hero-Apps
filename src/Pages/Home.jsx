import React from 'react';
import { FaAppStoreIos, FaDownload, FaGooglePlay, FaStar } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { Link } from 'react-router';
import useApps from '../Hooks/useApps';
import FeaturedApp from '../Components/FeaturedApp';
import Loading from '../Components/Loading';

const Home = () => {
  const { apps, loading } = useApps();

  const featuredApps = apps.slice(0, 8);

  return (
    <div className="bg-gray-200 py-10 text-center ">
      <h1 className="text-4xl lg:text-5xl text-center font-bold">
        We Build <br />
        <span className="text-[#8349eb]"> Productive</span> Apps
      </h1>
      <p className="text-gray-500 py-5 lg:mx-50">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div>
        <Link to="https://play.google.com/store/apps/" className="btn mr-2">
          <IoLogoGooglePlaystore />
          Play Store
        </Link>
        <Link to="https://www.apple.com/app-store/" className="btn">
          <FaAppStoreIos />
          App Store
        </Link>

        <section className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-15 my-10">
          <h1 className="text-white text-4xl font-semibold">
            Trusted by Millions, Built for You
          </h1>
          <div className="py-5 flex justify-between items-center max-w-6xl mx-auto px-45">
            <div className="text-white">
              <p>
                <small>Total Downloads</small>
              </p>
              <p className="text-5xl flex gap-2 font-bold py-2">
                <FaDownload />
                30.2M
              </p>
              <p>
                <small>21% more than last month</small>
              </p>
            </div>
            <div className="text-white">
              <p>
                <small>Total Reviews</small>
              </p>
              <p className="text-5xl flex gap-2 font-bold py-2">
                <FaStar />
                960K
              </p>
              <p>
                <small>46% more than last month</small>
              </p>
            </div>
            <div className="text-white">
              <p>
                <small>Active Apps</small>
              </p>
              <p className="text-5xl flex gap-2 font-bold py-2">
                <FaGooglePlay />
                132+
              </p>
              <p>
                <small>31 more will Launch</small>
              </p>
            </div>
          </div>
        </section>

        <div className="py-10">
          <h1 className="text-4xl font-semibold">Trending Apps</h1>
          <p className="text-gray-500 my-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {featuredApps.map(app => (
              <FeaturedApp key={app.id} app={app}></FeaturedApp>
            ))}
          </div>
        )}
        <div className="pt-10">
          <Link
            to="/apps"
            className="btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
