import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [updates, setUpdates] = useState(true);
  const [sneakPeeks, setSneakPeeks] = useState(true);
  const [deals, setDeals] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', { email, updates, sneakPeeks, deals });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 rounded-3xl p-8 relative overflow-hidden">
           {/* Decorative shapes */}
           <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/20 dark:bg-orange-400/30 transform -rotate-45 translate-x-[-30%] translate-y-[-20%]"></div>
           <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-200/20 dark:bg-blue-300/30 rounded-full transform translate-x-[20%] translate-y-[20%]"></div>
           <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-300/20 dark:bg-blue-400/30 rounded-full transform -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
                             <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 anton-regular">JOIN OUR NEWSLETTER</h2>
              <p className="text-white text-lg">Get exclusive insights straight to your mailbox</p>
            </div>
            
            <div className="md:w-1/2">
                             <form onSubmit={handleSubmit} className="flex mb-4">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="flex-grow px-6 py-4 rounded-l-3xl text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
                   required
                 />
                 <button 
                   type="submit"
                   className="bg-green-500 dark:bg-green-600 text-black dark:text-white font-bold px-6 py-4 rounded-r-3xl whitespace-nowrap hover:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300"
                 >
                   Subscribe
                 </button>
               </form>
              
              <p className="text-white text-sm mb-4">
                By clicking Sign Up you're confirming that you agree with our 
                <a href="#" className="underline ml-1"> Terms and Conditions</a>.
              </p>
              
                             <div className="flex flex-wrap gap-6">
                 <label className="flex items-center cursor-pointer">
                   <input 
                     type="checkbox" 
                     className="h-5 w-5 text-green-500 dark:text-green-400 rounded focus:ring-green-500 dark:focus:ring-green-400"
                     checked={updates}
                     onChange={(e) => setUpdates(e.target.checked)}
                   />
                   <span className="ml-2 text-white dark:text-gray-100">Quarterly Product Updates</span>
                 </label>
                 <label className="flex items-center cursor-pointer">
                   <input 
                     type="checkbox" 
                     className="h-5 w-5 text-green-500 dark:text-green-400 rounded focus:ring-green-500 dark:focus:ring-green-400"
                     checked={sneakPeeks}
                     onChange={(e) => setSneakPeeks(e.target.checked)}
                   />
                   <span className="ml-2 text-white dark:text-gray-100">Sneak Peeks</span>
                 </label>
                 <label className="flex items-center cursor-pointer">
                   <input 
                     type="checkbox" 
                     className="h-5 w-5 text-green-500 dark:text-green-400 rounded focus:ring-green-500 dark:focus:ring-green-400"
                     checked={deals}
                     onChange={(e) => setDeals(e.target.checked)}
                   />
                   <span className="ml-2 text-white dark:text-gray-100">Exclusive Deals</span>
                 </label>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
