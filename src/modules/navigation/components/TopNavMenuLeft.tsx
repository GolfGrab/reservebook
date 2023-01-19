import Link from "next/link";
import React from "react";

type MenuItem = {
  name: string;
  link: string;
};

type TopNavMenuLeftProps = {
  numberOfShownItems?: number;
};

const TopNavMenuLeft: React.FC<TopNavMenuLeftProps> = ({
  numberOfShownItems = 6,
}) => {
  const menuItems: MenuItem[] = [
    { name: "Item 1", link: "#" },
    { name: "Item 2", link: "#" },
    { name: "Item 3", link: "#" },
    { name: "Item 4", link: "#" },
    { name: "Item 5", link: "#" },
    { name: "Item 6", link: "#" },
  ];
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
