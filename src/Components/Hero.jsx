import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { Link } from 'react-router';
import useApps from '../Hooks/useApps';
import FeaturedApp from './FeaturedApp';

const Hero = () => {
  const { apps, loading } = useApps();

  return (
    <div className="bg-gray-200 py-10 text-center">
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
        <div className="py-10">
          <h1 className="text-4xl font-semibold">Trending Apps</h1>
          <p className="text-gray-500 my-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div>
          {apps.map(app => (
            <FeaturedApp key={app.id} app={app}></FeaturedApp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
