import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import downloadImage from '../assets/icon-downloads.png';
import ratingImage from '../assets/icon-ratings.png';

const AppsCard = ({ app }) => {
  const { image, title, companyName, downloads, ratingAvg, id } = app;
  // console.log(app);
  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
        <figure className="px-5 pt-5">
          <img src={image} alt="Apps" className="rounded-lg" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {title} - {companyName}
          </h2>
        </div>
        <div className="flex justify-between items-center px-5 pb-5">
          <p className="badge bg-[#F1F5E8] text-[#30ab75]">
            <img className="h-3.5 w-3.5" src={downloadImage} alt="" />
            {downloads}M
          </p>
          <p className="badge bg-[#FFF0E1] text-[#FF8811]">
            <img className="h-3.5 w-3.5" src={ratingImage} alt="" />
            {ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
