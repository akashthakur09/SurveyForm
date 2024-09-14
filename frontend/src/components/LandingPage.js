// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../Assets/logo.png";
// import gif from "../Assets/login.gif";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-white z-20">
//         <div className="flex items-center space-x-4">
//           <img src={logo} alt="Logo" className="w-24 " />
//         </div>
//         {/* Navbar Items */}
//         <div className="hidden flex space-x-8">
//           <Link to="/" className="text-gray-900 hover:text-teal-500 font-bold">
//             Home
//           </Link>
//           <Link to="#" className="text-gray-900 hover:text-teal-500 font-bold">
//             About us
//           </Link>
//           <Link to="#" className="text-gray-900 hover:text-teal-500 font-bold">
//             Contact
//           </Link>
//         </div>
//         {/* Login / Get Started Buttons */}
//         <div className="flex space-x-4">
//           <button className="text-gray-900 hover:text-teal-500 font-bold border-2 px-4 rounded-full border-gray-900">
//             Login
//           </button>
//           <Link to="/form">
//             <button className="bg-[#348aa7] text-white py-2 px-4 rounded-full hover:bg-teal-600 font-bold">
//               Get started
//             </button>
//           </Link>
//         </div>
//       </nav>

//       {/* GIF Section with Overlay Content */}
//       <div className="relative flex items-center w-full h-screen bg-white p-16 mt-24">
//         {/* Background GIF */}
//         <img
//           src={gif}
//           alt="Mental Health AI GIF"
//           className="absolute top-0 end-2 mt-[-60px] w-4/5 z-0"
//         />

//         {/* Overlay Content */}
//         <div className="relative z-10">
//           <div>
//             <h1 className="text-4xl text-5xl font-bold text-black">
//               Revolutionizing Mental
//             </h1>
//             <h1 className="text-4xl text-5xl font-bold text-black">
//               Health Care with AI
//             </h1>
//           </div>
//           <div className="flex items-center mt-6">
//             <Link to="/form">
//               <button className="bg-[#348aa7] text-white py-3 px-6 rounded-full hover:bg-teal-600">
//                 Get started
//               </button>
//             </Link>
//             <div className="ml-6">
//               <p className="text-black text-lg">
//                 Connect with your personal therapist
//               </p>
//               <p className="text-black text-lg mt-[-10px]">
//                 now for free
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default LandingPage;




// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../Assets/logo.png";
// import gif from "../Assets/login.gif";

// const LandingPage = () => {
//   return (
//     <div className="lg:min-h-screen lg:bg-white">
//       {/* Navbar */}
//       <nav className="lg:fixed lg:top-0 left-0lg: lg:w-full lg:flex lg:justify-between lg:items-center lg:bg-white lg:z-20">
//         <div className="lg:flex lg:items-center lg:space-x-4">
//           <img src={logo} alt="Logo" className="lg:w-24 " />
//         </div>
//         {/* Navbar Items */}
//         <div className="hidden lg:flex lg:space-x-8">
//           <Link
//             to="/"
//             className="lg:text-gray-900 lg:hover:text-teal-500 lg:font-bold"
//           >
//             Home
//           </Link>
//           <Link
//             to="#"
//             className="lg:text-gray-900 lg:hover:text-teal-500 lg:font-bold"
//           >
//             About us
//           </Link>
//           <Link
//             to="#"
//             className="lg:text-gray-900 lg:hover:text-teal-500 lg:font-bold"
//           >
//             Contact
//           </Link>
//         </div>
//         {/* Login / Get Started Buttons */}
//         <div className="lg:flex lg:space-x-4">
//           <button className="lg:text-gray-900 lg:hover:text-teal-500 lg:font-bold lg:border-2 lg:px-4 lg:rounded-full lg:border-gray-900">
//             Login
//           </button>
//           <Link to="/form">
//             <button className="lg:bg-[#348aa7] lg:text-white lg:py-2 lg:px-4 lg:rounded-full lg:hover:bg-teal-600 lg:font-bold">
//               Get started
//             </button>
//           </Link>
//         </div>
//       </nav>

//       {/* GIF Section with Overlay Content */}
//       <div className="relative flex w-full h-screen bg-white p-16 mt-24">
//         {/* Background GIF */}
//         <img
//           src={gif}
//           alt="Mental Health AI GIF"
//           className="absolute top-0 end-2 mt-[-60px] w-4/5 z-0"
//         />

//         {/* Overlay Content */}
//         <div className="relative z-10 mt-24">
//           <div>
//             <h1 className="text-4xl text-5xl font-bold text-black">
//               Mannmuktt User Validation Survey
//             </h1>
//             <div className="my-5">
//               <p className="text-black text-lg">
//                 Connect with your personal therapist We are building an
//                 AI-driven. We are
//               </p>
//               <p className="text-black text-lg">
//                 building an AI-driven mental health care platform called
//                 Mannmuktt. Your feedback 
//               </p>
//               <p className="text-black text-lg">
//               will help us understand how we can better serve your mental health
//                 needs.
//               </p>
//               <p className="text-black text-lg">
//                 {" "}
//                 Your answers are anonymous, and your time is greatly appreciated.
//               </p>
//             </div>
//           </div>
//           <Link to="/form">
//             <button className="bg-[#348aa7] text-white py-3 px-6 rounded-full hover:bg-teal-600">
//               Get started
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import gif from "../Assets/login.gif";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-white z-20">
        <div className="flex items-center space-x-4">
          <Link to='/'><img src={logo} alt="Logo" className="w-24 " /></Link>
        </div>
        {/* Navbar Items */}
        <div className="hidden lg:flex space-x-8">
          <Link
            to="/"
            className="text-gray-900 hover:text-teal-500 font-bold"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-gray-900 hover:text-teal-500 font-bold"
          >
            About us
          </Link>
          <Link
            to="#"
            className="text-gray-900 hover:text-teal-500 font-bold"
          >
            Contact
          </Link>
        </div>
        {/* Login / Get Started Buttons */}
        <div className="flex space-x-4">
          <button className="text-gray-900 hover:text-teal-500 font-bold border-2 px-4 rounded-full border-gray-900">
            Login
          </button>
          <Link to="/form">
            <button className="bg-[#348aa7] text-white py-2 px-4 rounded-full hover:bg-teal-600 font-bold">
              Get started
            </button>
          </Link>
        </div>
      </nav>

      {/* GIF Section with Overlay Content */}
      <div className="relative flex w-full h-screen bg-white lg:p-4 mt-24">
        {/* Background GIF */}
        <img
          src={gif}
          alt="Mental Health AI GIF"
          className="absolute top-0 lg:end-2 sm:end-16 md:end-36 mt-[-60px] lg:w-4/5 z-0 sm:w-full "
        />

        {/* Overlay Content */}
        <div className="relative z-10 lg:mt-24 sm:mt-[200px] sm:p-4 md:mt-[450px] w-[700px] text-center md:ml-12 lg:ml-0">
          <div className="sm:mt-8">
            <h1 className="sm:text-xl md:text-4xl lg:text-4xl font-bold text-black">
              Mannmuktt User Validation Survey
            </h1>
            <div className="my-5">
              <p className="text-black lg:text-lg sm:text-sm">
                Connect with your personal therapist We are building an
                AI-driven. We are building an AI-driven mental health care platform called
                Mannmuktt. Your feedback  will help us understand how we can better serve your mental health
                needs. Your answers are anonymous, and your time is greatly appreciated.
              </p>
              {/* <p className="text-black lg:text-lg sm:text-sm">
                building an AI-driven mental health care platform called
                Mannmuktt. 
              </p>
              <p className="text-black lg:text-lg sm:text-sm">
              Your feedback  will help us understand how we can better serve your mental health
                needs.
              </p>
              <p className="text-black lg:text-lg sm:text-sm">
                {" "}
                Your answers are anonymous, and your time is greatly appreciated.
              </p> */}
            </div>
            
          </div>
          <Link to="/form">
            <button className="bg-[#348aa7] text-white py-3 px-6 rounded-full hover:bg-teal-600">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
