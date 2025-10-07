import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import { ArrowBigDownDash, BookUser, Github, House } from 'lucide-react';

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">
                <House></House>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="apps">
                <BookUser />
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="installation">
                <ArrowBigDownDash />
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className=" flex items-center gap-2">
          <img className="h-5 w-5 lg:h-10 lg:w-10" src={logo} alt="" />
          <p className="lg:text-2xl font-bold text-[#8349eb]">HERO.IO</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg">
            <NavLink to="/">
              <House></House> Home
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="apps">
              <BookUser />
              Apps
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="installation">
              <ArrowBigDownDash />
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/ahsan-habib01"
          className="btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white"
        >
          {' '}
          <Github />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Header;
