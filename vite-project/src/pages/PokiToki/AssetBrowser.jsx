import React, { useState } from "react";
import "daisyui/dist/full.css";

const AssetBrowser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("assets");

  const items = [
    { id: 1, name: "Asset 1", type: "image", color: "bg-blue-500" },
    { id: 2, name: "Asset 2", type: "video", color: "bg-red-500" },
    { id: 3, name: "Component A", type: "script", color: "bg-green-500" },
    { id: 4, name: "Component B", type: "audio", color: "bg-yellow-500" },
    { id: 5, name: "Component C", type: "audio", color: "bg-yellow-500" },
    { id: 6, name: "Component B", type: "audio", color: "bg-yellow-500" },
    { id: 7, name: "Component C", type: "audio", color: "bg-yellow-500" },
    { id: 8, name: "Component B", type: "audio", color: "bg-yellow-500" },
    { id: 9, name: "Component C", type: "audio", color: "bg-yellow-500" },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (activeTab === "assets" ? item.type !== "script" : item.type === "script")
  );

  return (
    <div className="p-4 w-full h-full flex flex-col">
      {/* Tabs */}
      <div className="flex justify-center space-x-2 mb-2">
        <button 
          className={`btn btn-sm ${activeTab === "assets" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setActiveTab("assets")}
        >
          Assets
        </button>
        <button 
          className={`btn btn-sm ${activeTab === "components" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setActiveTab("components")}
        >
          Components
        </button>
      </div>
      
      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search" 
        className="input input-bordered input-sm w-full mb-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      {/* Grid Display, adjust cols on tinier size with settings (in future update) */}
      <div className="grid grid-cols-2 gap-5 overflow-y-auto flex-grow items-start p-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative p-2 bg-gray-200 rounded-lg shadow w-[150px] h-[200px] flex flex-col items-center justify-end">
            <span className="text-sm pb-2">{item.name}</span>
            <span className={`absolute bottom-2 right-2 w-5 h-5 rounded-full ${item.color}`}></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetBrowser;
