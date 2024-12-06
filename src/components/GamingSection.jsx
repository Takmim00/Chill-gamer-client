import React from 'react';
import { TiSupport } from "react-icons/ti";
import { RiHandCoinFill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";


const GamingSection = () => {
    return (
        <section className="py-12">
      <div className="text-start mb-10">
        <h1 className="text-4xl font-bold">Gaming To <br /> The Next Level</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Card 1 */}
        <div className="card  shadow-lg rounded-lg p-6">
          <div className="flex  text-4xl   mb-4">
            <TiSupport className='bg-gray-200  rounded-full' />
          </div>
          <h2 className="text-xl font-semibold mb-2">Industry Best Support</h2>
          <p className="text-sm text-gray-400 mb-4">
            Get a reply in under 90 seconds from our friendly, in-house staff
            24/7.
          </p>
          <a
            href="#"
            className="text-primary hover:underline inline-flex items-center"
          >
            Play Now <span className="ml-2">→</span>
          </a>
        </div>
        {/* Card 2 */}
        <div className="card shadow-lg rounded-lg p-6">
          <div className="flex  text-3xl mb-4">
            <RiHandCoinFill className='bg-gray-200  rounded-full'/>
          </div>
          <h2 className="text-xl font-semibold mb-2">Play To Earn</h2>
          <p className="text-sm text-gray-400 mb-4">
            Earn our TXT tokens with every bet you make. TXT tokens can be
            profits.
          </p>
          <a
            href="#"
            className="text-primary hover:underline inline-flex items-center"
          >
            Play Now <span className="ml-2">→</span>
          </a>
        </div>
        {/* Card 3 */}
        <div className="card shadow-lg rounded-lg p-6">
          <div className="flex  text-3xl  mb-4">
            <FaCoins className='bg-gray-200  rounded-full'/>
          </div>
          <h2 className="text-xl font-semibold mb-2">Instant Payouts</h2>
          <p className="text-sm text-gray-400 mb-4">
            Withdraw easily with instant payouts on over 99.4% withdrawals.
          </p>
          <a
            href="#"
            className="text-primary hover:underline inline-flex items-center"
          >
            Play Now <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
    );
};

export default GamingSection;