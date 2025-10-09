import React from 'react';
import error404 from '../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-6xl mx-auto py-10 ">
        <img
          className="mx-auto h-50 w-50 md:h-90 md:w-100"
          src={error404}
          alt=""
        />
        <div className="text-center space-y-5">
          <h1 className=" text-5xl font-semibold">Page Not Found</h1>
          <p className="text-gray-400 text-lg">
            Sorry, The page you are looking for might removed, renamed, or it
            temporarily unavailable!
          </p>
          <div>
            <Link to="/" className="btn text-lg bg-[#9f62f2] text-white mr-3">
              Back to Home
            </Link>
            <Link
              to="/apps"
              className="btn btn-outline text-[#9f62f2] text-lg "
            >
              Browse to Apps
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;