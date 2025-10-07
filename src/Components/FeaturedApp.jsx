import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';


const FeaturedApp = ({ app }) => {
  const { image, title, companyName, downloads, ratingAvg } = app;
  // console.log(app);
  return (
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
        <p className="badge bg-[#F1F5E8] text-[#00D390]">
          <ArrowDownToLine size={16} color="#00D390" strokeWidth={2} />
          {downloads}
        </p>
        <p className="badge bg-[#FFF0E1] text-[#FF8811]">
          <Star size={16} color="#FF8811" />
          {ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default FeaturedApp;
