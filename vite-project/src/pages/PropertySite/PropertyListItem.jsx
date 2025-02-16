import React from 'react';
import '../PropertySite/property.css';

export default function () {

    return (
        // max-w-4xl
        <div className="property-card w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="image-container">
                <img
                src="/Cover_Art.png"
                alt="Property"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-between">
                <div>
                <h2 className="text-2xl font-bold mb-4">Modern Family Home</h2>
                <p className="text-gray-700 mb-4">
                    Spacious 3-bedroom, 2-bathroom home located in a quiet neighborhood. This property features a large backyard, updated kitchen, and modern amenities.
                </p>
                {/* Maximum of Eight Features Displayed */}
                <div className="features-list grid grid-cols-2 gap-4">
                    <div className="feature-item flex items-center">
                    <span className="icon w-5 h-5 bg-blue-500 rounded-full mr-2"></span>
                    3 Bedrooms
                    </div>
                    <div className="feature-item flex items-center">
                    <span className="icon w-5 h-5 bg-green-500 rounded-full mr-2"></span>
                    2 Bathrooms
                    </div>
                    <div className="feature-item flex items-center">
                    <span className="icon w-5 h-5 bg-yellow-500 rounded-full mr-2"></span>
                    1 Garage
                    </div>
                    <div className="feature-item flex items-center">
                    <span className="icon w-5 h-5 bg-red-500 rounded-full mr-2"></span>
                    Large Backyard
                    </div>
                    <div className="feature-item flex items-center">
                    <span className="icon w-5 h-5 bg-red-500 rounded-full mr-2"></span>
                    Large Backyard
                    </div>
                    <div className="feature-item flex items-center">
                    <span className="icon w-5 h-5 bg-red-500 rounded-full mr-2"></span>
                    Large Backyard
                    </div>
                    <div className="feature-item flex items-center">
                    <span className="icon w-5 h-5 bg-red-500 rounded-full mr-2"></span>
                    Large Backyard
                    </div>
                    <div className="feature-item flex items-center">
                    <span className="icon w-5 h-5 bg-red-500 rounded-full mr-2"></span>
                    Large Backyard
                    </div>       
                </div>
                </div>

                <div className="mt-8">
                <button className="schedule-btn bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700">
                    Schedule a Tour
                </button>
                </div>
            </div>
            </div>
        </div>
    );
}