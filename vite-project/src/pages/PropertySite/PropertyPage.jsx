import React from 'react';
import '../PropertySite/property.css';
import PropertyListItem from './PropertyListItem';
import ImageCarousel from '../../components/ImageCarousel';
import PaymentPage from '../../components/PaymentPage';

const PropertyPage = () => {
  return (
    // bg-gray-100 
    <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
      <PropertyListItem />
      <ImageCarousel />
      <PaymentPage />
    </div>
  );
};

export default PropertyPage;
