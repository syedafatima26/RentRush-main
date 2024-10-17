import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 relative bottom-0 z-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div className="col-span-1">
          <img src="/src/assets/logo.svg" alt="RentRush Logo" className="mb-4" />
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:underline">Rent Details</a></li>
            <li><a href="#" className="text-sm hover:underline">Why Choose Us</a></li>
            <li><a href="#" className="text-sm hover:underline">Register</a></li>
            <li><a href="#" className="text-sm hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>

        
        <div className=''>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm break-words py-1">syedafatimamansoori@gmail.com</p>
          <p className="text-sm">+92 316 1500304</p>
          <p className="text-sm">Syeda Fatima Mansoor</p>
        </div>
      </div>

      
      <div className="border-t pt-4 text-xs lg:text-sm md:text-sm text-gray-500 text-center">
        <p>&copy; 2024 RentRush. All rights reserved</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">Privacy & Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
