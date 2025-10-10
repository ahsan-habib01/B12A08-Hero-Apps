import { CircleAlert } from 'lucide-react';
import { Link } from 'react-router';

const AppNotFound = () => {
  return (
    <div className="bg-gray-200">
      <title>Page Not Found</title>
      <div className="max-w-6xl mx-auto py-20">
        <CircleAlert className="mx-auto" size={164} color="#c51616" />
        <div className="text-center space-y-5">
          <h1 className=" text-5xl font-semibold">Page Not Found</h1>
          <p className="text-gray-400 text-lg">
            The app you are looking for does not exist or has been removed!
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

export default AppNotFound;