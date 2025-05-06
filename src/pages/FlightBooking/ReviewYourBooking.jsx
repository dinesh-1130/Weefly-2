// import { useLocation, useNavigate } from "react-router";

// import TakeOffPlane from "../../assets/images/TakeOffPlane.svg";
// import AirIndiaLogo from "../../assets/images/AirIndiaLogo.svg";
// import FlightLogo from "../../assets/images/FlightIcon.svg";

// import White_Concierge from "../../assets/images/ReviewYourBooking/White_Concierage.svg";
// import White_Money_Exchange from "../../assets/images/ReviewYourBooking/white_money_exchange.svg";
// import White_eSim from "../../assets/images/ReviewYourBooking/white_eSim.svg";
// import White_Extra_Luggage from "../../assets/images/ReviewYourBooking/White_Extra_luggage.svg";
// import White_Visa_Process from "../../assets/images/ReviewYourBooking/White_Visa_process.svg";
// import { useEffect, useState } from "react";

// const ServicesOfferedIcons = [
//   {
//     Image: White_Concierge,
//     label: "Concierge",
//   },
//   {
//     Image: White_Money_Exchange,
//     label: "Money exchange",
//   },
//   {
//     Image: White_eSim,
//     label: "E-sim / Internet",
//   },
//   {
//     Image: White_Extra_Luggage,
//     label: "Extra luggage",
//   },
//   {
//     Image: White_Visa_Process,
//     label: "Visa process",
//   },
// ];

// function ReviewYourBooking() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [flight, setFlight] = useState(null);
//   useEffect(() => {
//     if (location.state && location.state.flight) {
//       setFlight(location.state.flight);
//     }
//   }, [location]);
//   return (
//     <div className="">
//       <div className="flex flex-col gap-[25px]">
//         {/* Leaving Ticket */}
//         <div className="">
//           <h3 className="py-[16px] px-[44px] rounded-t-[17px] bg-[#FFE2DA] font-jakarta font-semibold text-[25px]">
//             Flight Details
//           </h3>
//           <div className="px-[44px] py-[38px] rounded-b-[17px] bg-white">
//             <div className="">
//               <h4 className="text-[20px] font-jakarta font-semibold items-center justify-center xl:justify-start xl:items-start flex gap-[8px]">
//                 <span>Leaving From</span>
//                 <img src={TakeOffPlane} alt="Take off plane" />
//               </h4>

//               <div className="max-w-[636px] font-jakarta font-semibold text-base text-white bg-[#EE5128] rounded-[7px] flex flex-col lg:flex-row items-center justify-between px-[22px] py-[14px] my-[24px]">
//                 <p>Algeria - Angola | 1 Stop</p>
//                 <p>
//                   Duration : <span>16h 12m</span>
//                 </p>
//               </div>

//               <div className="flex flex-col lg:flex-row items-center font-sans">
//                 <div className="mb-[40px] lg:mb-[0px]">
//                   <img src={AirIndiaLogo} alt="air India logo" />
//                   <div className="flex items-center gap-[14px]">
//                     <p className="font-sans font-normal text-[15px] text-neutral-500">
//                       1244595
//                     </p>
//                     <p className="rounded-[5px] bg-[#008905] text-white font-sans text-base font-normal px-[13px] py-[4px]">
//                       Business
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex-1 items-center w-full">
//                   <div className="flex xl:px-[84px]">
//                     {/* start time */}
//                     <div className="px-[20px] xl:px-[44px]">
//                       <p className="text-[25px] xl:text-[38px] font-bold">
//                         06:00
//                       </p>
//                       <p className="font-normal text-[13px] lg:text-[20px] text-neutral-500">
//                         Algeries
//                       </p>
//                     </div>
//                     <div className="flex-1 py-[40px] relative ">
//                       <div className="relative border border-neutral-200 border-dashed h-px">
//                         <div className="absolute bg-neutral-200 size-4 rounded-full -left-2 -top-2 border-2 border-white"></div>
//                         <div className="absolute bg-neutral-200 size-4 rounded-full -right-2 -top-2 border-2 border-white"></div>
//                       </div>
//                       <div className="flex flex-col items-center gap-[8px] absolute -top-[13px] left-1/3">
//                         <p className="font-normal text-[17px] text-neutral-500">
//                           16h 12m
//                         </p>
//                         <img
//                           src={FlightLogo}
//                           alt="Plane"
//                           className="h-[41px] w-[41px]"
//                         />
//                         <p className="rounded-[5px] bg-[#008905] text-white font-sans text-base font-normal px-[13px] py-[4px]">
//                           Refundable
//                         </p>
//                       </div>
//                     </div>
//                     {/* End time */}
//                     <div className="px-[20px] xl:px-[44px]">
//                       <p className="text-[25px] xl:text-[38px] font-bold">
//                         19:00
//                       </p>
//                       <p className="font-normal text-[13px] xl:text-[20px] text-neutral-500">
//                         Launda
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative my-[50px]">
//                 <div className="h-px border border-dashed border-neutral-200"></div>
//                 <div className="size-10 bg-neutral-100 absolute -top-[20px] -left-[60px] rounded-full"></div>
//                 <div className="size-10 bg-neutral-100 absolute -top-[20px] -right-[60px] rounded-full"></div>
//               </div>

//               <div className="flex gap-[42px] text-[18px] font-normal font-sans">
//                 <p>Flight Details</p>
//                 <p className="hidden xl:block">Price Details</p>
//                 <p className="hidden xl:block">Policy</p>
//                 <p className="hidden xl:block">Refund</p>
//                 <p className="hidden xl:block">Reschedule</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Returning Ticket */}
//         <div className="px-[44px] py-[38px] rounded-[17px] bg-white">
//           <div className="">
//             <h4 className="text-[20px] font-jakarta font-semibold flex items-center justify-center xl:justify-start xl:items-start gap-[8px]">
//               <span>Returning From</span>
//               <img src={TakeOffPlane} alt="Take off plane" />
//             </h4>

//             <div className="max-w-[636px] font-jakarta font-semibold text-base text-white bg-[#EE5128] rounded-[7px] flex flex-col lg:flex-row items-center justify-between px-[22px] py-[14px] my-[24px]">
//               <p>Algeria - Angola | 1 Stop</p>
//               <p>
//                 Duration : <span>16h 12m</span>
//               </p>
//             </div>

//             <div className="flex flex-col lg:flex-row items-center w-full font-sans">
//               <div className="mb-[40px] lg:mb-[0px]">
//                 <img src={AirIndiaLogo} alt="air India logo" />
//                 <div className="flex items-center gap-[14px]">
//                   <p className="font-sans font-normal text-[15px] text-neutral-500">
//                     1244595
//                   </p>
//                   <p className="rounded-[5px] bg-[#008905] text-white font-sans text-base font-normal px-[13px] py-[4px]">
//                     Business
//                   </p>
//                 </div>
//               </div>
//               <div className="flex-1 items-center w-full">
//                 <div className="flex px-0 xl:px-[84px]">
//                   {/* start time */}
//                   <div className="px-[20px] xl:px-[44px]">
//                     <p className="text-[25px] xl:text-[38px] font-bold">
//                       06:00
//                     </p>
//                     <p className="font-normal text-[13px] xl:text-[20px] text-neutral-500">
//                       Algeries
//                     </p>
//                   </div>
//                   <div className="flex-1 py-[40px] relative ">
//                     <div className="relative border border-neutral-200 border-dashed h-px">
//                       <div className="absolute bg-neutral-200 size-4 rounded-full -left-2 -top-2 border-2 border-white"></div>
//                       <div className="absolute bg-neutral-200 size-4 rounded-full -right-2 -top-2 border-2 border-white"></div>
//                     </div>
//                     <div className="flex flex-col items-center gap-[8px] absolute -top-[13px] left-1/3">
//                       <p className="font-normal text-[17px] text-neutral-500">
//                         16h 12m
//                       </p>
//                       <img
//                         src={FlightLogo}
//                         alt="Plane"
//                         className="h-[41px] w-[41px]"
//                       />
//                       <p className="rounded-[5px] bg-[#008905] text-white font-sans text-base font-normal px-[13px] py-[4px]">
//                         Refundable
//                       </p>
//                     </div>
//                   </div>
//                   {/* End time */}
//                   <div className="px-[20px] xl:px-[44px]">
//                     <p className="text-[25px] xl:text-[38px] font-bold">
//                       19:00
//                     </p>
//                     <p className="font-normal text-[13px] xl:text-[20px] text-neutral-500">
//                       Launda
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative my-[50px]">
//               <div className="h-px border border-dashed border-neutral-200"></div>
//               <div className="size-10 bg-neutral-100 absolute -top-[20px] -left-[60px] rounded-full"></div>
//               <div className="size-10 bg-neutral-100 absolute -top-[20px] -right-[60px] rounded-full"></div>
//             </div>

//             <div className="flex gap-[42px] text-[18px] font-normal font-sans">
//               <p>Flight Details</p>
//               <p className="hidden xl:block">Price Details</p>
//               <p className="hidden xl:block">Policy</p>
//               <p className="hidden xl:block">Refund</p>
//               <p className="hidden xl:block">Reschedule</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-[17px] px-[44px] py-[38px] mt-[30px]">
//         <div className="flex flex-col xl:flex-row justify-between xl:items-center items-start gap-[40px]">
//           <p className="font-sans text-[17px] font-normal bg-[#FFE2DA] rounded-[13px] px-[28px] py-[14px]">
//             Weefly pro Enjoy Zero Convenience Fee and More @ $2000 rupees
//           </p>
//           <div className="flex gap-[12px] items-center">
//             <input
//               type="checkbox"
//               name="add-now"
//               className="accent-[#EE5128] size-[20px]"
//             />
//             <p className="font-medium font-jakarta text-[21px]">Add now</p>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 xl:grid-cols-5  w-full justify-between mt-[42px]">
//           {ServicesOfferedIcons.map((service) => (
//             <div className="flex flex-col items-center gap-[21px] mt-[21px]">
//               <div className="size-[55px] bg-[#EE5128] rounded-full flex justify-center items-center">
//                 <img src={service.Image} alt={service.label} />
//               </div>
//               <p className="font-jakarta text-center text-[13px] xl:text-[17px] font-medium">
//                 {service.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         className="font-jakarta font-semibold text-[15px] bg-[#EE5128] rounded-[5px] text-white px-[37px] py-[14px] tracking-wide mt-[57px]"
//         onClick={() =>
//           navigate("/booking/TravelersDetails", {
//             state: {
//               flight,
//             },
//           })
//         }
//       >
//         Continue Booking
//       </button>
//     </div>
//   );
// }

// export default ReviewYourBooking;
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import TakeOffPlane from "../../assets/images/TakeOffPlane.svg";
import AirIndiaLogo from "../../assets/images/AirIndiaLogo.svg";
import FlightLogo from "../../assets/images/FlightIcon.svg";
import White_Concierge from "../../assets/images/ReviewYourBooking/White_Concierage.svg";
import White_Money_Exchange from "../../assets/images/ReviewYourBooking/white_money_exchange.svg";
import White_eSim from "../../assets/images/ReviewYourBooking/white_eSim.svg";
import White_Extra_Luggage from "../../assets/images/ReviewYourBooking/White_Extra_luggage.svg";
import White_Visa_Process from "../../assets/images/ReviewYourBooking/White_Visa_process.svg";

const ServicesOfferedIcons = [
  { Image: White_Concierge, label: "Concierge" },
  { Image: White_Money_Exchange, label: "Money exchange" },
  { Image: White_eSim, label: "E-sim / Internet" },
  { Image: White_Extra_Luggage, label: "Extra luggage" },
  { Image: White_Visa_Process, label: "Visa process" },
];

export default function ReviewYourBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (location.state && location.state.flight) {
      setFlight(location.state.flight);
    }
  }, [location]);

  return (
    <div className="w-full px-4 sm:px-6 xl:px-0 font-sans">
      {/* Desktop Layout */}
      <div className="hidden xl:block">
        <FlightDetailCard title="Leaving from" />
        <FlightDetailCard title="Returning from" />
      </div>

      {/* Mobile Layout */}
      <div className="xl:hidden">
        <FlightPriceCard title="Leaving from" />
        <FlightPriceCard title="Returning from" />
      </div>

      {/* Services Section */}
      <div className="bg-white rounded-[17px] px-[20px] sm:px-[44px] py-[30px] mt-[30px]">
        <div className="flex flex-col xl:flex-row justify-between xl:items-center items-start gap-[30px]">
          <p className="text-sm sm:text-[17px] bg-[#FFE2DA] rounded-[13px] px-6 py-3">
            Weefly pro Enjoy Zero Convenience Fee and More @ $2000 rupees
          </p>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#EE5128] size-[20px]" />
            <p className="text-base sm:text-[21px] font-medium">Add now</p>
          </div>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-5 gap-5 mt-8">
          {ServicesOfferedIcons.map((service, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-[55px] h-[55px] bg-[#EE5128] rounded-full flex justify-center items-center">
                <img src={service.Image} alt={service.label} />
              </div>
              <p className="text-xs sm:text-[15px] text-center">{service.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="text-center xl:text-right px-4 sm:px-[44px] mt-[40px]">
        <button
          onClick={() =>
            navigate("/booking/TravelersDetails", {
              state: { flight },
            })
          }
          className="bg-[#EE5128] text-white text-[15px] px-[37px] py-[14px] rounded-[5px] font-semibold"
        >
          Continue Booking
        </button>
      </div>
    </div>
  );
}

function FlightDetailCard({ title }) {
  return (
    <div className="rounded-[17px] bg-white px-[44px] py-[38px] mt-6">
      <h4 className="text-[20px] font-semibold flex gap-2 items-center mb-4">
        {title} <img src={TakeOffPlane} alt="plane" />
      </h4>

      <div className="max-w-[636px] font-semibold text-base text-white bg-[#EE5128] rounded-[7px] flex flex-col sm:flex-row items-center justify-between px-[22px] py-[14px] mb-[24px]">
        <p>ALGERIA - ANGOLA | 1 Stop</p>
        <p>Duration : 16h 12m</p>
      </div>

      <div className="flex justify-between items-center mt-6 px-[44px]">
        {/* Left: Airline */}
        <div className="flex flex-col items-start gap-2 min-w-[100px]">
          <img src={AirIndiaLogo} alt="Airline" className="h-[30px] object-contain" />
          <p className="text-gray-500 text-sm">1244595</p>
          <p className="bg-[#008905] text-white text-xs px-2 py-1 rounded">Business</p>
        </div>

        {/* Center: Times and Plane */}
        <div className="flex-1 flex justify-between items-center">
          <div className="text-center min-w-[80px]">
            <p className="text-[32px] font-bold">06:00</p>
            <p className="text-sm text-gray-500">Algeries</p>
          </div>

          <div className="flex flex-col items-center gap-2 px-4">
            <div className="relative w-[120px] border-t border-dashed border-gray-300">
              <div className="absolute left-0 w-3 h-3 bg-gray-300 rounded-full -top-[6px] border-2 border-white"></div>
              <div className="absolute right-0 w-3 h-3 bg-gray-300 rounded-full -top-[6px] border-2 border-white"></div>
              <img src={FlightLogo} alt="Plane" className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 w-[24px] h-[24px] bg-white" />
            </div>
            <p className="text-sm text-gray-500">16h 12m</p>
            <p className="bg-[#008905] text-white text-xs px-2 py-1 rounded">Refundable</p>
          </div>

          <div className="text-center min-w-[80px]">
            <p className="text-[32px] font-bold">19:00</p>
            <p className="text-sm text-gray-500">Launda</p>
          </div>
        </div>
      </div>

      <div className="h-px border border-dashed border-gray-300 my-10 relative">
        <div className="w-10 h-10 bg-gray-100 rounded-full absolute -left-[60px] -top-[20px]"></div>
        <div className="w-10 h-10 bg-gray-100 rounded-full absolute -right-[60px] -top-[20px]"></div>
      </div>

      <div className="flex gap-[42px] text-[18px]">
        <p>Flight Details</p>
        <p>Price Details</p>
        <p>Policy</p>
        <p>Refund</p>
        <p>Reschedule</p>
      </div>
    </div>
  );
}

function FlightPriceCard({ title }) {
  return (
    <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden w-full p-4">
      <div className="flex items-center gap-2 mb-3">
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <img src={TakeOffPlane} alt="plane" className="w-4 h-4" />
      </div>

      <div className="bg-[#EE5128] text-white text-xs font-medium rounded-lg px-4 py-2">
        ALGERIA - ANGOLA | 1 Stop <span className="ml-2">Duration : 16h 12m</span>
      </div>

      <div className="flex flex-col items-center mt-4 gap-1">
        <img src={AirIndiaLogo} alt="Air India" className="h-[30px] object-contain" />
        <p className="text-[11px] text-gray-500">1244595</p>
        <span className="text-[11px] bg-[#008905] text-white px-2 py-1 rounded">Business</span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-center">
          <p className="text-xl font-bold">06:00</p>
          <p className="text-[11px] text-gray-500">Algeries</p>
        </div>

        <div className="flex-1 flex flex-col items-center mx-2">
          <div className="w-full border-t border-dashed border-gray-300 relative">
            <img src={FlightLogo} alt="flight" className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white" />
          </div>
          <p className="text-[11px] text-gray-500 mt-1">12hr</p>
        </div>

        <div className="text-center">
          <p className="text-xl font-bold">19:00</p>
          <p className="text-[11px] text-gray-500">Launda</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[#EE5128] font-extrabold text-lg">$1,00,000 <span className="text-sm font-medium">/pax</span></p>
        <p className="text-[13px] text-gray-400 line-through">$1,50,000</p>
      </div>

      <div className="flex justify-between items-center mt-4 border-t pt-3 border-gray-100">
        <button className="text-[#EE5128] text-sm font-medium">Flight Details ▼</button>
        <button className="bg-[#EE5128] text-white text-sm font-semibold px-4 py-2 rounded">Book now</button>
      </div>
    </div>
  );
}
