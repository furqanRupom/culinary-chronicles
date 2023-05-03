import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({to,children}) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? " border-b-4 border-red-400 w-fit lg:w-auto" : " ")}>
        {children}
    </NavLink>
  );
};

export default ActiveLink;