import {
  Avatar, Button, IconButton, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function SideNav({ brandImg, brandName, routes }) {
  const [openSideNav, setOpenSideNav] = useState(true);
  const [sidenavType, setSidenavType] = useState('dark');
  return (
    <aside
      className="bg-blue-400 h-full w-72 duration-300 border-r-black border-r-[1px]"
    >
      <div
        className={`relative border-b ${
          sidenavType === 'dark' ? 'border-white/20' : 'border-blue-gray-50'
        }`}
      >
        <Link
          className="flex items-center gap-4 py-6 px-8"
          to="/dashboard/home"
        >
          <Avatar size="md" src={brandImg} />
          <Typography color="white" variant="h6">
            {brandName}
          </Typography>
        </Link>
        <IconButton
          color="white"
          ripple={false}
          size="sm"
          variant="text"
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          // onClick={() => setOpenSidenav(dispatch, false)}
        >
          {/* <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" /> */}
        </IconButton>
      </div>
      {/* <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="">
                <Typography
                  className="font-black uppercase opacity-75"
                  color={sidenavType === 'dark' ? 'white' : 'blue-gray'}
                  variant="small"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      className="flex items-center gap-4 px-4 capitalize"
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === 'dark'
                          ? 'white'
                          : 'blue-gray'
                      }
                      fullWidth
                      variant={isActive ? 'gradient' : 'text'}
                    >
                      {icon}
                      <Typography
                        className="font-medium capitalize"
                        color="inherit"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div> */}
    </aside>
  );
}

export default SideNav;

// SideNav.defaultProps = {
//   brandImg: '',
//   brandName: 'Admin-MyAbsensi',
// };
