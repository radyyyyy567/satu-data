import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

interface DropDownMenuProps {
  title: string;
  items: string[];
  links: string[];
  subItems?: string[][];
  subLinks?: string[][];
}

const DropDownMenu = ({
  title,
  items,
  links,
  subItems = [],
  subLinks = [],
}: DropDownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  const toggleSubDropdown = () => {
    setIsSubOpen(!isSubOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsSubOpen(false); // Close sub-dropdown when main dropdown toggles
  };

  return (
    <li >
      <button
        className="font-semibold p-2 rounded-md hover:bg-gray-200 w-full hover:text-red-500 transition duration-300 flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span>{title}</span>
        <span>
          <ChevronRightIcon
            className={`h-5 w-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </span>
      </button>
      <ul
        className={`bg-gray-100 mt-2 rounded-md overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
        style={{ maxHeight: isOpen ? "1000px" : "0" }}
      >
        {items.map((item, index) => (
          <li key={index} className="px-4 py-2">
            {subItems[index]?.length === 0 || !subItems[index] ? (
              <a  
                href={links[index]}
                className="block font-semibold p-2 rounded-md hover:bg-gray-200 w-full hover:text-red-500 transition duration-300"
              >
                {item}
              </a>
            ) : (
              <>
                <button
                  className="font-semibold p-2 rounded-md hover:bg-gray-200 w-full hover:text-red-500 transition duration-300 flex justify-between items-center"
                  onClick={toggleSubDropdown}
                >
                  <span>{item}</span>
                  <span>
                    <ChevronRightIcon
                      className={`h-5 w-5 transform transition-transform duration-300 ${
                        isSubOpen ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>
                <ul
                  className={`transition-all duration-500 ${
                    isSubOpen ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {subItems[index]?.map((subItem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2">
                      <a
                        href={subLinks[index]?.[subIndex]}
                        className="block font-semibold p-2 rounded-md hover:bg-gray-200 w-full hover:text-red-500 transition duration-300"
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropDownMenu;
