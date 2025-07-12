import React from 'react';
import { AiToolsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";

const Aitools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleToolClick = (tool) => {
    if (user) {
      navigate(tool.path);
    } else {
      // Optional: Handle case when user is not logged in
      console.log('User not logged in');
      // You might want to redirect to login or show a message
    }
  };

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Powerful AI Tools
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>

      {/* Changed flex to grid and added grid-cols classes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-items-center">
        {AiToolsData.map((tool, index) => (
          <div
            key={tool.id || index}
            className="p-8 max-w-xs rounded-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer w-full" // Added w-full for full width within grid cell
            onClick={() => handleToolClick(tool)}
          >
            <tool.Icon
              className="w-12 h-12 p-3 text-white rounded-xl"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`
              }}
            />
            <h3 className="mt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
            <p className="text-gray-400 text-sm max-w-[95%]">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aitools;