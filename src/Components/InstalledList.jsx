import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';

const InstalledList = ({ inst }) => {
  console.log(inst);

  const { image, title, downloads, ratingAvg, size } = inst;
  return (
    <div className="bg-white max-w-6xl mx-auto p-4 flex justify-between items-center">
      <div className="flex gap-5">
        <img className="h-20 w-20 rounded overflow-hidden" src={image} alt="" />
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="flex items-center gap-5 pt-1">
            <span className="flex items-center text-[#00D390] gap-1">
              <ArrowDownToLine size={16} color="#00D390" /> {downloads}
            </span>
            <span className="flex items-center text-[#FF8811] gap-1">
              <Star size={16} color="#FF8811" />
              {ratingAvg}
            </span>
            <span className="text-[#627382]">{size} MB</span>
          </div>
        </div>
      </div>
      <button className="btn bg-[#02d391] text-white">Uninstall</button>
    </div>
  );
};

export default InstalledList;
