import Link from "next/link";
import React from "react";
import { type MenuItem } from "../types/MenuItem";

const menuItems: MenuItem[] = [
  { name: "Flight + Hotel", link: "#" },
  { name: "Hotels & Homes", link: "#" },
  { name: "Flights", link: "#" },
  { name: "Coupons & Deals", link: "#" },
  { name: "Apartments", link: "#" },
  { name: "Activities", link: "#" },
  { name: "Airport transfers", link: "#" },
  { name: "Car rentals", link: "#" },
];

type TopNavMenuLeftProps = {
  numberOfShownItems?: number;
};

const TopNavMenuLeft: React.FC<TopNavMenuLeftProps> = ({
  numberOfShownItems = menuItems.length,
}) => {
  return (
    <ul className="menu menu-horizontal px-1">
      {menuItems.slice(0, numberOfShownItems).map((item) => (
        <li key={item.name}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
      {numberOfShownItems < menuItems.length && (
        <li tabIndex={0}>
          <a>
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul className=" bg-base-100 p-2 ">
            {menuItems.slice(numberOfShownItems).map((item) => (
              <li key={item.name}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      )}
    </ul>
  );
};

export default TopNavMenuLeft;
