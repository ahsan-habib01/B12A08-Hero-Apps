import downloadImage from '../assets/icon-downloads.png';
import ratingImage from '../assets/icon-ratings.png';

const InstalledList = ({ inst, handleUninstall }) => {
  const { image, title, downloads, ratingAvg, size } = inst;

  

  return (
    <div className="bg-white max-w-6xl mx-auto p-4 md:flex justify-between items-center">
      <div className="flex gap-5">
        <img className="h-20 w-20 rounded overflow-hidden" src={image} alt="" />
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="flex items-center gap-5 pt-1">
            <span className="flex items-center text-[#30ab75] gap-1">
              <img className="h-3.5 w-3.5" src={downloadImage} alt="" />{' '}
              {downloads}M
            </span>
            <span className="flex items-center text-[#FF8811] gap-1">
              <img className="h-3.5 w-3.5" src={ratingImage} alt="" />
              {ratingAvg}
            </span>
            <span className="text-[#627382]">{size} MB</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleUninstall(inst)}
        className="btn bg-[#02d391] text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledList;
