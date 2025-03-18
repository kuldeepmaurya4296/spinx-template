'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
  };

  return (
    <div className="flex flex-col px-6 md:px-20 lg:flex-row gap-10 items-center justify-between py-16 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl md:text-4xl w-full lg:w-1/2 font-semibold text-gray-900 text-center lg:text-left">
        Get awesome web-related content every week
      </h2>
      <form onSubmit={handleSubmit} className="relative w-full lg:w-1/2 flex items-center border-b border-gray-300">
        <label
          className={`absolute left-4 transition-all ${
            isFocused || email ? 'top-0 text-xs text-gray-500' : 'top-1/2 -translate-y-1/2 text-gray-400'
          }`}
        >
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(email.length > 0)}
          className="w-full px-4 pt-5 pb-2 outline-none text-gray-700 bg-transparent"
          required
        />
        <button type="submit" className="p-2">
          <ArrowRight className="text-gray-700" />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
