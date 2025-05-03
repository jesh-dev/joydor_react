import React from "react";
import walls from "../assets/walls.jpg"
import AOS from 'aos';
    import 'aos/dist/aos.css';
    AOS.init();


export const Header = () => {
    return (
      <div className="relative  flex flex-col py-16 lg:pt-0 mt-19 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p data-aos="fade-up" data-aos-duration="3000"  className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Jeshrun Collaboration
                </p>
              </div>
              <h2 data-aos="fade-up" data-aos-duration="2000" className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  a lazy dog
                </span>
              </h2>
              <p data-aos="zoom-in" data-aos-duration="2000" className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                data-aos="slide-right" data-aos-duration="2000"
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-violet-700 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Apply Now
              </a>
              <a
              data-aos="flip-left" data-aos-duration="2000"
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img data-aos="zoom-in" data-aos-duration="2000"
            className="object-cover w-full h-56 rounded-xl shadow-lg lg:rounded lg:shadow-none sm:h-96 lg:h-full"
            src={walls}
            alt=""
          />
        </div>

      </div>
    );
  };