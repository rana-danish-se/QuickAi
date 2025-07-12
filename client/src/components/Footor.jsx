import React from 'react';
import { assets } from '../assets/assets';

export const Footor = () => {
  return (
    <footer className="px-6 md:px-16 border-t-1 border-gray-500 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img src={assets.logo} alt="" />
          <p className="mt-6 text-sm">
            QuickAI provides a comprehensive suite of cutting-edge artificial
            intelligence tools designed to supercharge your creativity and
            productivity. From generating compelling articles and captivating
            blog titles to crafting stunning images and reviewing your resume,
            our platform empowers you to create, enhance, and optimize your
            content with ease.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+92 312 1615000</p>
              <p>ranadanish.se@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2024 © RANA DANISH. All Right Reserved.
      </p>
    </footer>
  );
};
