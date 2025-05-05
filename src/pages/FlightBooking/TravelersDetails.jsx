// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router";

// function TravelersDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [flight, setFlight] = useState(null);

//   useEffect(() => {
//     if (location.state && location.state.flight) {
//       setFlight(location.state.flight);
//     }
//   }, [location]);

//   if (!flight)
//     return <p className="text-center mt-20 font-sans ">Loading...</p>;

//   return (
//     <div className=" font-sans flex justify-center">
//       <div className="w-full px-4">
//         {/* Travelers + Booking side-by-side */}
//         <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
//           {/* Travelers Details */}
//           <div className="max-w-[656px] w-full min-h-[339px] bg-white rounded-md">
//             <div className="bg-[#FFE4DB] p-3 rounded-t-md">
//               <h2 className="font-semibold font-jakarta">Travelers Details</h2>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 px-6 py-4">
//               {[
//                 "Full name",
//                 "last name",
//                 "Nationality",
//                 "Email",
//                 "Phone number",
//                 "Passport number",
//                 "Passport issuing country",
//                 "Passport entry",
//                 "Visa details",
//                 "Cancellation policy",
//               ].map((field, idx) => (
//                 <input
//                   key={idx}
//                   placeholder={field}
//                   className="border border-[#CCCCCC] rounded p-2 text-sm w-full"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Booking Details */}
//           <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
//             <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
//               <h2 className="font-semibold text-[18px] font-jakarta">
//                 Booking Details
//               </h2>
//             </div>

//             <div className="flex justify-between items-center px-6 mt-[20px]">
//               <div className="text-center">
//                 <p className="text-[20px] font-bold font-jakarta">
//                   {flight.departureTime}
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   {flight.departureCity}
//                 </p>
//               </div>
//               <div className="flex flex-col items-center relative">
//                 <p className="text-xs text-gray-500 mb-[2px]">
//                   {flight.duration}
//                 </p>
//                 <div className="flex items-center justify-center">
//                   <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                   <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                   <span className="text-black text-sm">✈</span>
//                   <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                   <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                 </div>
//                 <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
//                   Refundable
//                 </div>
//               </div>
//               <div className="text-center">
//                 <p className="text-[20px] font-bold font-jakarta">
//                   {flight.arrivalTime}
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   {flight.arrivalCity}
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-between px-6 mt-6">
//               <div className="text-left w-1/2 border-r pr-4">
//                 <p className="text-sm font-semibold text-black font-jakarta m">
//                   Departure Flight
//                 </p>
//                 <p className="text-xs text-gray-500 mt-[2px]">
//                   Thu, 06 jul, 2025
//                 </p>
//               </div>
//               <div className="text-left w-1/2 pl-4">
//                 <p className="text-sm font-semibold text-black font-jakarta ml-5">
//                   Departure Flight
//                 </p>
//                 <p className="text-xs text-gray-500 mt-[2px] ml-5">
//                   Thu, 06 jul, 2025
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
//               <span>Policy</span>
//               <span className="ml-10">Refund</span>
//               <span>Reschedule</span>
//             </div>
//           </div>
//         </div>

        

//         {/* Save Details Section */}
//         <div className="w-full max-w-[656px] bg-white rounded-md p-6 mt-6 font-sans ml-12">
//           <h3 className="font-semibold text-black mb-1 font-jakarta">
//             Save your details!
//           </h3>
//           <p className="text-sm text-gray-500 mb-3">
//             Use your contact details to create an account and speed up future
//             bookings. (We won’t save your payment information.)
//           </p>
//           <label className="flex items-start gap-2">
//             <input type="checkbox" className="accent-[#EE5128] mt-[3px]" />
//             <span className="text-sm">
//               Save my detail so I can book faster next time.
//             </span>
//           </label>
//         </div>



//         {/* Continue Button */}
//         <div className="xl:mt-6 max-w-[656px] text-left xl:ml-[29px]">
//           <button
//             onClick={() => navigate("/booking/SeatSelection", { state: { flight } })}
//             className="bg-[#EE5128] text-white px-6 py-2 relative xl:left-5 rounded font-semibold font-jakarta"
//           >
//             Continue booking
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TravelersDetails;
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router";

// function TravelersDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [flight, setFlight] = useState(null);

//   useEffect(() => {
//     if (location.state && location.state.flight) {
//       setFlight(location.state.flight);
//     }
//   }, [location]);

//   if (!flight)
//     return <p className="text-center mt-20 font-sans">Loading...</p>;

//   return (
//     <div className="font-sans flex justify-center">
//       <div className="w-full px-4">
//         {/* Travelers + Booking side-by-side */}
//         <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
//           {/* Travelers Details */}
//           <div className="max-w-[656px] w-full min-h-[339px] bg-white rounded-md">
//             <div className="bg-[#FFE4DB] p-3 rounded-t-md">
//               <h2 className="font-semibold font-jakarta">Travelers Details</h2>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 px-6 py-4">
//               {[
//                 "Full name",
//                 "last name",
//                 "Nationality",
//                 "Email",
//                 "Phone number",
//                 "Passport number",
//                 "Passport issuing country",
//                 "Passport entry",
//                 "Visa details",
//                 "Cancellation policy",
//               ].map((field, idx) => (
//                 <input
//                   key={idx}
//                   placeholder={field}
//                   className="border border-[#CCCCCC] rounded p-2 text-sm w-full"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Panel: Booking Details + Price Summary */}
//           <div className="w-full lg:w-[360px] space-y-6">
//             {/* Booking Details */}
//             <div className="w-full bg-white rounded-[12px]">
//               <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
//                 <h2 className="font-semibold text-[18px] font-jakarta">
//                   Booking Details
//                 </h2>
//               </div>

//               <div className="flex justify-between items-center px-6 mt-[20px]">
//                 <div className="text-center">
//                   <p className="text-[20px] font-bold font-jakarta">
//                     {flight.departureTime}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">
//                     {flight.departureCity}
//                   </p>
//                 </div>
//                 <div className="flex flex-col items-center relative">
//                   <p className="text-xs text-gray-500 mb-[2px]">
//                     {flight.duration}
//                   </p>
//                   <div className="flex items-center justify-center">
//                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                     <span className="text-black text-sm">✈</span>
//                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                   </div>
//                   <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
//                     Refundable
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-[20px] font-bold font-jakarta">
//                     {flight.arrivalTime}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">
//                     {flight.arrivalCity}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-between px-6 mt-6">
//                 <div className="text-left w-1/2 border-r pr-4">
//                   <p className="text-sm font-semibold text-black font-jakarta">
//                     Departure Flight
//                   </p>
//                   <p className="text-xs text-gray-500 mt-[2px]">
//                     Thu, 06 jul, 2025
//                   </p>
//                 </div>
//                 <div className="text-left w-1/2 pl-4">
//                   <p className="text-sm font-semibold text-black font-jakarta">
//                     Departure Flight
//                   </p>
//                   <p className="text-xs text-gray-500 mt-[2px]">
//                     Thu, 06 jul, 2025
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
//                 <span>Policy</span>
//                 <span className="ml-10">Refund</span>
//                 <span>Reschedule</span>
//               </div>
//             </div>

//             {/* Price Summary */}
//             <div className="bg-white rounded-md shadow-sm ml-1">
//               <div className="bg-[#FFE4DB] p-4 font-semibold font-['Plus Jakarta Sans']">
//                 price summary
//               </div>
//               <div className="p-4 space-y-3 text-[14px] text-black font-['Lato']">
//                 <div className="flex justify-between">
//                   <span>Adult x 1</span>
//                   <span className="font-semibold">$2500</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Total taxes +</span>
//                   <span className="font-semibold">$500</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Other Charged</span>
//                   <span className="font-semibold">$200</span>
//                 </div>
//                 <div className="flex justify-between border-t pt-3 text-[#EE5128] font-semibold">
//                   <span>Total</span>
//                   <span>$3200</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Save Details Section */}
//         <div className="w-full max-w-[656px] bg-white rounded-md p-6  relative top-[-120px] font-sans ml-14">
//           <h3 className="font-semibold text-black mb-1 font-jakarta">
//             Save your details!
//           </h3>
//           <p className="text-sm text-gray-500 mb-3">
//             Use your contact details to create an account and speed up future
//             bookings. (We won’t save your payment information.)
//           </p>
//           <label className="flex items-start gap-2">
//             <input type="checkbox" className="accent-[#EE5128] mt-[3px]" />
//             <span className="text-sm">
//               Save my detail so I can book faster next time.
//             </span>
//           </label>
//         </div>

//         {/* Continue Button */}
//         <div className="xl:mt-6 max-w-[656px] text-left xl:ml-[29px]">
//           <button
//             onClick={() =>
//               navigate("/booking/SeatSelection", { state: { flight } })
//             }
//             className="bg-[#EE5128] text-white  bottom-25 px-6 py-2 relative xl:left-7 rounded font-semibold font-jakarta"
//           >
//             Continue booking
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TravelersDetails;
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router";

// function TravelersDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [flight, setFlight] = useState(null);

//   useEffect(() => {
//     if (location.state && location.state.flight) {
//       setFlight(location.state.flight);
//     }
//   }, [location]);

//   if (!flight)
//     return <p className="text-center mt-20 font-sans">Loading...</p>;

//   return (
//     <div className="font-sans flex justify-center w-full overflow-x-hidden">
//       <div className="w-full max-w-[1280px] px-3 sm:px-4 overflow-x-hidden">
//         <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-10 justify-center items-start">
//           {/* Booking & Price Summary */}
//           <div className="w-full lg:w-[360px] flex flex-col gap-4 order-1 lg:order-none">
//             {/* Booking Details */}
//             <div className="w-full bg-white rounded-md">
//               <div className="bg-[#FFE4DB] p-3 rounded-t-md">
//                 <h2 className="font-semibold text-[18px] font-jakarta text-center sm:text-left">Booking Details</h2>
//               </div>
//               <div className="flex justify-between items-center px-4 mt-[16px]">
//                 <div className="text-center">
//                   <p className="text-[18px] font-bold font-jakarta">06:00</p>
//                   <p className="text-xs text-gray-500 mt-1">Algeria</p>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <p className="text-xs text-gray-500 mb-[2px]">1:01 Dur</p>
//                   <div className="flex items-center">
//                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                     <div className="border-t border-dashed w-6 border-gray-300 mx-1" />
//                     <span className="text-black text-sm">✈</span>
//                     <div className="border-t border-dashed w-6 border-gray-300 mx-1" />
//                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                   </div>
//                   <div className="mt-1 bg-green-600 text-white text-xs px-2 py-[2px] rounded">
//                     Refundable
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-[18px] font-bold font-jakarta">19:00</p>
//                   <p className="text-xs text-gray-500 mt-1">Latvia</p>
//                 </div>
//               </div>
//               <div className="flex justify-between px-4 mt-5">
//                 <div className="w-1/2 border-r pr-3">
//                   <p className="text-sm font-semibold font-jakarta">Departure Flight</p>
//                   <p className="text-xs text-gray-500">Thu, 06 jul, 2025</p>
//                 </div>
//                 <div className="w-1/2 pl-3">
//                   <p className="text-sm font-semibold font-jakarta">Departure Flight</p>
//                   <p className="text-xs text-gray-500">Thu, 06 jul, 2025</p>
//                 </div>
//               </div>
//               <div className="flex justify-around mt-5 pb-4 text-sm font-medium font-jakarta">
//                 <span>Policy</span>
//                 <span>Refund</span>
//                 <span>Reschedule</span>
//               </div>
//             </div>

//             {/* Price Summary */}
//             <div className="bg-white rounded-md shadow-sm">
//               <div className="bg-[#FFE4DB] p-3 rounded-t-md">
//                 <h2 className="font-semibold text-[18px] font-jakarta text-center sm:text-left">Price summary</h2>
//               </div>
//               <div className="p-3 space-y-2 text-[14px] text-black font-['Lato']">
//                 <div className="flex justify-between">
//                   <span>Adult x 1</span>
//                   <span className="font-semibold">$2500</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Total taxes +</span>
//                   <span className="font-semibold">$500</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Other Charged</span>
//                   <span className="font-semibold">$200</span>
//                 </div>
//                 <div className="flex justify-between border-t pt-2 text-[#EE5128] font-semibold">
//                   <span>Total</span>
//                   <span>$3200</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Traveler + Save Details */}
//           <div className="w-full lg:flex-1 flex flex-col gap-4 order-2 lg:order-none mt-4 lg:mt-0">
//             <div className="w-full bg-white rounded-md">
//               <div className="bg-[#FFE4DB] p-3 rounded-t-md">
//                 <h2 className="font-semibold font-jakarta text-center sm:text-left">Travelers Details</h2>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-4 py-4">
//                 {[
//                   "Full name",
//                   "Email address",
//                   "Phone number",
//                   "Gender",
//                   "Date of birth",
//                   "City",
//                   "Country",
//                   "Postal code",
//                   "Passport number",
//                   "Passport issuing country",
//                 ].map((field, idx) => (
//                   <input
//                     key={idx}
//                     placeholder={field}
//                     className="border border-[#CCCCCC] rounded p-2 text-sm w-full"
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="w-full bg-white rounded-md p-4 font-sans">
//               <h3 className="font-semibold text-black mb-1 font-jakarta">Save your details!</h3>
//               <p className="text-sm text-gray-500 mb-3">
//                 Use your contact details to create an account and speed up future bookings. (We won't save your payment information.)
//               </p>
//               <label className="flex items-start gap-2">
//                 <input type="checkbox" className="accent-[#EE5128] mt-[3px]" />
//                 <span className="text-sm">Save my detail so I can book faster next time.</span>
//               </label>
//             </div>

//             <div className="mt-2 text-left px-2 sm:px-0">
//               <button
//                 onClick={() =>
//                   navigate("/booking/SeatSelection", { state: { flight } })
//                 }
//                 className="bg-[#EE5128] text-white px-6 py-2 rounded font-semibold font-jakarta w-full sm:w-auto"
//               >
//                 Continue booking
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TravelersDetails;
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function TravelersDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (location.state && location.state.flight) {
      setFlight(location.state.flight);
    }
  }, [location]);

  if (!flight)
    return <p className="text-center mt-20 font-sans">Loading...</p>;

  return (
    <div className="font-sans flex justify-center w-full overflow-x-hidden">
      <div className="w-full max-w-[1280px] px-3 sm:px-4 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-10 justify-center items-start">
          {/* Booking & Price Summary */}
          <div className="w-full lg:w-[360px] flex flex-col gap-4 md:gap-6 order-1 lg:order-none">
            <div className="w-full bg-white rounded-md py-0">
              <div className="bg-[#FFE4DB] p-3 rounded-t-md">
                <h2 className="font-semibold text-[18px] font-jakarta text-center lg:text-left">Booking Details</h2>
              </div>
              <div className="flex justify-between items-center px-4 mt-[16px]">
                <div className="text-center">
                  <p className="text-[18px] font-bold font-jakarta">{flight.departureTime || "09:30"}</p>
                  <p className="text-xs text-gray-500 mt-1">{flight.departureCity || "Mumbai"}</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-gray-500 mb-[2px]">{flight.duration || "3hr 15min"}</p>
                  <div className="flex items-center">
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    <div className="border-t border-dashed w-6 border-gray-300 mx-1" />
                    <span className="text-black text-sm">✈</span>
                    <div className="border-t border-dashed w-6 border-gray-300 mx-1" />
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                  </div>
                  <div className="mt-1 bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                    Refundable
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[18px] font-bold font-jakarta">{flight.arrivalTime || "12:45"}</p>
                  <p className="text-xs text-gray-500 mt-1">{flight.arrivalCity || "Delhi"}</p>
                </div>
              </div>
              <div className="flex justify-between px-4 mt-6 lg:mt-7">
                <div className="w-1/2 border-r pr-3">
                  <p className="text-sm font-semibold font-jakarta">Departure Flight</p>
                  <p className="text-xs text-gray-500">Thu, 06 jul, 2025</p>
                </div>
                <div className="w-1/2 pl-3">
                  <p className="text-sm font-semibold font-jakarta">Departure Flight</p>
                  <p className="text-xs text-gray-500">Thu, 06 jul, 2025</p>
                </div>
              </div>
              <div className="flex justify-around mt-5 py-3 lg:py-4 text-sm font-medium font-jakarta">
                <span>Policy</span>
                <span>Refund</span>
                <span>Reschedule</span>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white rounded-md shadow-sm">
              <div className="bg-[#FFE4DB] p-3 font-semibold font-['Plus Jakarta Sans'] text-center lg:text-left">Price summary</div>
              <div className="p-3 space-y-2 text-[14px] text-black font-['Lato']">
                <div className="flex justify-between">
                  <span>Adult x 1</span>
                  <span className="font-semibold">$2500</span>
                </div>
                <div className="flex justify-between">
                  <span>Total taxes +</span>
                  <span className="font-semibold">$500</span>
                </div>
                <div className="flex justify-between">
                  <span>Other Charged</span>
                  <span className="font-semibold">$200</span>
                </div>
                <div className="flex justify-between border-t pt-2 text-[#EE5128] font-semibold">
                  <span>Total</span>
                  <span>$3200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Traveler + Save Details */}
          <div className="w-full max-w-[656px] flex flex-col gap-4 order-2 lg:order-none">
            <div className="w-full bg-white rounded-md">
              <div className="bg-[#FFE4DB] p-3 rounded-t-md">
                <h2 className="font-semibold font-jakarta text-center lg:text-left">Travelers Details</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-4 py-4">
                {/* Desktop fields with responsive display */}
                {[
                  "Full name",
                  "last name",
                  "Nationality",
                  "Email",
                  "Phone number",
                  "Passport number",
                  "Passport issuing country",
                  "Passport entry",
                  "Visa details",
                  "Cancellation policy",
                ].map((field, idx) => (
                  <input
                    key={idx}
                    placeholder={field}
                    className="border border-[#CCCCCC] rounded p-2 text-sm w-full"
                  />
                ))}
              </div>
            </div>

            <div className="w-full bg-white rounded-md p-4 font-sans">
              <h3 className="font-semibold text-black mb-1 font-jakarta">Save your details!</h3>
              <p className="text-sm text-gray-500 mb-3">
                Use your contact details to create an account and speed up future bookings. (We won't save your payment information.)
              </p>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="accent-[#EE5128] mt-[3px]" />
                <span className="text-sm">Save my detail so I can book faster next time.</span>
              </label>
            </div>

            <div className="mt-2 text-left px-2 sm:px-0">
              <button
                onClick={() =>
                  navigate("/booking/SeatSelection", { state: { flight } })
                }
                className="bg-[#EE5128] text-white px-6 py-2 rounded font-semibold font-jakarta w-full sm:w-auto"
              >
                Continue booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelersDetails;