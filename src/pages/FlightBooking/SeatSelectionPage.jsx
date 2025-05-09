// // import { useLocation, useNavigate } from 'react-router';
// // import { useEffect, useState } from 'react';

// // export default function SeatSelection() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const [flight, setFlight] = useState(null);
// //   const [selectedSeats, setSelectedSeats] = useState([]);
// //   const seatColumns = ['A', 'B', 'C', 'D', 'E', 'F'];
// //   const rows = 13;

// //   useEffect(() => {
// //     if (location.state && location.state.flight) {
// //       setFlight(location.state.flight);
// //     }
// //   }, [location]);

// //   const handleSeatSelect = (seatId) => {
// //     if (selectedSeats.includes(seatId)) {
// //       setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
// //     } else {
// //       setSelectedSeats([...selectedSeats, seatId]);
// //     }
// //   };

// //   const renderSeats = () => {
// //     const grid = [];
// //     for (let row = 1; row <= rows; row++) {
// //       const rowSeats = seatColumns.map((col) => {
// //         const seatId = `${col}${row}`;
// //         const isSelected = selectedSeats.includes(seatId);
// //         const isBooked = ['C2', 'C4'].includes(seatId);
// //         return (
// //           <div
// //             key={seatId}
// //             onClick={() => !isBooked && handleSeatSelect(seatId)}
// //             className={`w-5 h-5 rounded-sm border cursor-pointer ${
// //               isBooked ? 'bg-black' : isSelected ? 'bg-[#EE5128]' : 'bg-gray-300'
// //             }`}
// //           ></div>
// //         );
// //       });
// //       grid.push(
// //         <div key={row} className="flex items-center gap-2">
// //           <span className="text-xs w-4 text-right">{row}</span>
// //           <div className="flex gap-1">{rowSeats}</div>
// //           <span className="text-xs w-4 text-left">{row}</span>
// //         </div>
// //       );
// //     }
// //     return grid;
// //   };

// //   if (!flight) return <div className="text-center mt-20 font-['Lato']">Loading...</div>;

// //   return (
// //     <div className=" font-sans flex justify-center">
// //       <div className="w-full max-w-[1140px]  px-4">
     

// //         <div className="flex flex-col lg:flex-row justify-between gap-6">
// //           <div className="w-full max-w-[680px] h-[550px] rounded-md  shadow-sm overflow-hidden bg-white">
// //             <div className="flex items-center px-6 bg-[#FFE4DB] py-3 space-x-8 font-['Plus Jakarta Sans'] text-[16px]">
// //               <span className="text-black font-semibold relative">Seats <div className="w-2 h-2 bg-[#EE5128] rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2" /></span>
// //               <span className="text-gray-500">Snacks</span>
// //               <span className="text-gray-500">Extra luggage's</span>
// //             </div>

// //             <div className="flex items-start gap-6 p-6">
// //             <div className="w-[260px] flex-shrink-0">
// //   {/* Flight Time and Route */}
// //   <div className="text-[14px] font-semibold flex justify-between">
// //     <span>06:00</span>
// //     <span>19:00</span>
// //   </div>
// //   <div className="text-[12px] text-gray-500 flex justify-between mb-1">
// //     <span>Algeries</span>
// //     <span>Luanda</span>
// //   </div>
// //   <div className="text-center text-[12px] text-gray-500 bottom-9 relative ">16h 12m ✈</div>

// //   {/* Airline Info */}
// //   <img src={flight.logo} alt="logo" className="w-[110px] object-contain mt-1 mb-1 relative " />
// //   <p className="text-[13px] text-gray-400 relative left-[8px]">{flight.flightNumber}</p>
// //   <p className="bg-green-600 text-white text-[12px] px-2 py-[2px] rounded w-fit bottom-6 left-[65px] relative mt-1">Business</p>

// //   {/* Seat Fare Box */}
// //   <div className="mt-5 w-[200px] h-[100px]">
// //   <p className="font-semibold text-[14px] mb-2 relative left-2">Seat fare :</p>
// //   <div className="border rounded-md bg-white px-3 py-4 text-sm h-full flex flex-col justify-between">
// //     <div className="flex justify-between">
// //       <span>Adult 2 :</span>
// //       <span>$800</span>
// //     </div>
// //     <div className="flex justify-between font-bold">
// //       <span>Total fare :</span>
// //       <span>$800</span>
// //     </div>
// //   </div>
// // </div>


// //   {/* Seat Type Legend */}
// //   <div className="mt-12">
// //     <p className="font-semibold text-[14px] mb-2">Seat type :</p>
// //     <div className="grid grid-cols-2 text-[12px] gap-y-2 gap-x-4">
// //       <span><span className="inline-block w-6 h-4 bg-green-700 mr-2" />Free</span>
// //       <span><span className="inline-block w-6 h-4 bg-blue-500 mr-2" />$300-500</span>
// //       <span><span className="inline-block w-6 h-4 bg-purple-700 mr-2" />$300-500</span>
// //       <span><span className="inline-block w-6 h-4 bg-yellow-400 mr-2" />$300-500</span>
// //       <span><span className="inline-block w-6 h-4 bg-indigo-300 mr-2" />$300-500</span>
// //       <span><span className="inline-block w-6 h-4 bg-pink-400 mr-2" />$300-500</span>
// //       <span><span className="inline-block w-6 h-4 bg-sky-500 mr-2" />Non-Reclining</span>
// //       <span><span className="inline-block w-6 h-4 bg-black mr-2" />Exit seats</span>
// //     </div>
// //   </div>


// //               </div>

// //               <div
// //   className="relative bottom-6 ml-12 w-[300px] h-[540px] bg-[url('/assets/seat-1.png')] bg-cover bg-center flex items-center justify-center overflow-hidden"
// // >
// //   {/* White capsule container */}
// //   <div className="w-[240px] h-[570px] bg-white rounded-t-[140px] rounded-b-[40px] shadow-inner overflow-y-auto flex flex-col items-center pt-4 relative top-[80px]">
// //     <div className="text-sm font-semibold mb-4">Front</div>

// //     {/* A–F Label Row */}
// //     <div className="flex justify-center gap-2 mb-2">
// //       {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
// //         <span key={letter} className="w-5 text-xs text-center">{letter}</span>
// //       ))}
// //     </div>

// //     {/* Seat Grid */}
// //     <div className="space-y-2 pr-2">{renderSeats()}</div>
// //   </div>
// // </div>
// // </div>


// //             {/* Booking Details Card */}
// //             <div className=" w-[360px] h-[280px] bg-white rounded-[12px]  shadow-sm overflow-hidden">
// //               <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
// //                 <h2 className="font-semibold text-[18px] font-['Plus Jakarta Sans']">Booking Details</h2>
// //               </div>
// //               <div className="flex justify-between items-center px-6 mt-[20px]">
// //                 <div className="text-center">
// //                   <p className="text-[20px] font-bold font-['Plus Jakarta Sans']">{flight.departureTime}</p>
// //                   <p className="text-xs text-gray-500 mt-1 font-['Lato']">{flight.departureCity}</p>
// //                 </div>
// //                 <div className="flex flex-col items-center relative">
// //                   <p className="text-xs text-gray-500 mb-[2px] font-['Lato']">{flight.duration}</p>
// //                   <div className="flex items-center justify-center">
// //                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
// //                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
// //                     <span className="text-black text-sm">✈</span>
// //                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
// //                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
// //                   </div>
// //                   <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded font-['Lato']">
// //                     Refundable
// //                   </div>
// //                 </div>
// //                 <div className="text-center">
// //                   <p className="text-[20px] font-bold font-['Plus Jakarta Sans']">{flight.arrivalTime}</p>
// //                   <p className="text-xs text-gray-500 mt-1 font-['Lato']">{flight.arrivalCity}</p>
// //                 </div>
// //               </div>
// //               <div className="flex justify-between px-6 mt-6">
// //                 <div className="text-left w-1/2 border-r pr-4">
// //                   <p className="text-sm font-semibold text-black font-['Plus Jakarta Sans']">Departure Flight</p>
// //                   <p className="text-xs text-gray-500 mt-[2px] font-['Lato']">Thu, 06 Jul, 2025</p>
// //                 </div>
// //                 <div className="text-left w-1/2 pl-4">
// //                   <p className="text-sm font-semibold text-black font-['Plus Jakarta Sans']">Departure Flight</p>
// //                   <p className="text-xs text-gray-500 mt-[2px] font-['Lato']">Thu, 06 Jul, 2025</p>
// //                 </div>
// //               </div>
// //               <div className="flex justify-around mt-6 text-sm font-medium font-['Plus Jakarta Sans']  ml-2 ">
// //                 <span className="relative mr-8 ">Policy</span>
// //                 <span>Refund</span>
// //                 <span>Reschedule</span>
// //               </div>
// //             </div>
           

// //           <div className="w-full lg:w-[360px] space-y-6">
// //             <div className="bg-white rounded-md  shadow-sm">
// //               <div className="bg-[#FFE4DB] p-4 font-semibold font-['Plus Jakarta Sans']">price summary</div>
// //               <div className="p-4 space-y-3 text-[14px] text-black font-['Lato']">
// //                 <div className="flex justify-between">
// //                   <span>Adult x 1</span>
// //                   <span className="font-semibold">$2500</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>Total taxes +</span>
// //                   <span className="font-semibold">$500</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>Other Charged</span>
// //                   <span className="font-semibold">$200</span>
// //                 </div>
// //                 <div className="flex justify-between border-t pt-3 text-[#EE5128] font-semibold">
// //                   <span>Total</span>
// //                   <span>$3200</span>
// //                 </div>
// //               </div>
// //             </div>
// //             </div>
// //           </div>
// //         </div>
// //  {/* Continue Button */}
// //  <div className="mt-6 w-full max-w-[656px] mx-auto text-center ml-[-215px]">
// //   <button
// //   onClick={() => navigate('/booking/payment', { state: { flight } })}

// //     className="bg-[#EE5128] text-white px-6 py-2 relative left-5 rounded font-semibold font-['Plus Jakarta Sans']"
// //   >
// //     Continue booking
// //   </button>

// //   <button className="text-[#EE5128] font-semibold text-sm relative left-16">Skip add–ons</button>
// // </div>
// //       </div>
// //     </div>
// //   );
// // }
// // import { useLocation, useNavigate } from 'react-router';
// // import { useEffect, useState } from 'react';

// // export default function SeatSelection() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const [flight, setFlight] = useState(null);
// //   const [selectedSeats, setSelectedSeats] = useState([]);
// //   const seatColumns = ['A', 'B', 'C', 'D', 'E', 'F'];
// //   const rows = 13;

// //   useEffect(() => {
// //     if (location.state && location.state.flight) {
// //       setFlight(location.state.flight);
// //     }
// //   }, [location]);

// //   const handleSeatSelect = (seatId) => {
// //     if (selectedSeats.includes(seatId)) {
// //       setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
// //     } else {
// //       setSelectedSeats([...selectedSeats, seatId]);
// //     }
// //   };

// //   const renderSeats = () => {
// //     const grid = [];
// //     for (let row = 1; row <= rows; row++) {
// //       const rowSeats = seatColumns.map((col) => {
// //         const seatId = `${col}${row}`;
// //         const isSelected = selectedSeats.includes(seatId);
// //         const isBooked = ['C2', 'C4'].includes(seatId);
// //         return (
// //           <div
// //             key={seatId}
// //             onClick={() => !isBooked && handleSeatSelect(seatId)}
// //             className={`w-5 h-5 rounded-sm border cursor-pointer ${
// //               isBooked ? 'bg-black' : isSelected ? 'bg-[#EE5128]' : 'bg-gray-300'
// //             }`}
// //           ></div>
// //         );
// //       });
// //       grid.push(
// //         <div key={row} className="flex items-center gap-2">
// //           <span className="text-xs w-4 text-right">{row}</span>
// //           <div className="flex gap-1">{rowSeats}</div>
// //           <span className="text-xs w-4 text-left">{row}</span>
// //         </div>
// //       );
// //     }
// //     return grid;
// //   };

// //   if (!flight) return <div className="text-center mt-20 font-['Lato']">Loading...</div>;

// //   return (
// //     <div className="font-sans flex justify-center">
// //       <div className="w-full max-w-[1140px] px-4">
// //         <div className="flex flex-col lg:flex-row justify-between gap-6">
// //           {/* Seat Selection Panel */}
// //           <div className="w-full max-w-[680px] h-[550px] rounded-md shadow-sm overflow-hidden bg-white">
// //             <div className="flex items-center px-6 bg-[#FFE4DB] py-3 space-x-8 font-['Plus Jakarta Sans'] text-[16px]">
// //               <span className="text-black font-semibold relative">
// //                 Seats <div className="w-2 h-2 bg-[#EE5128] rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2" />
// //               </span>
// //               <span className="text-gray-500">Snacks</span>
// //               <span className="text-gray-500">Extra luggage's</span>
// //             </div>

// //             <div className="flex items-start gap-6 p-6">
// //               <div className="w-[260px] flex-shrink-0">
// //                 <div className="text-[14px] font-semibold flex justify-between">
// //                   <span>06:00</span>
// //                   <span>19:00</span>
// //                 </div>
// //                 <div className="text-[12px] text-gray-500 flex justify-between mb-1">
// //                   <span>Algeries</span>
// //                   <span>Luanda</span>
// //                 </div>
// //                 <div className="text-center text-[12px] text-gray-500 bottom-9 relative">16h 12m ✈</div>
// //                 <img src={flight.logo} alt="logo" className="w-[110px] object-contain mt-1 mb-1 relative" />
// //                 <p className="text-[13px] text-gray-400 relative left-[8px]">{flight.flightNumber}</p>
// //                 <p className="bg-green-600 text-white text-[12px] px-2 py-[2px] rounded w-fit bottom-6 left-[65px] relative mt-1">Business</p>
// //                 <div className="mt-5 w-[200px] h-[100px]">
// //                   <p className="font-semibold text-[14px] mb-2 relative left-2">Seat fare :</p>
// //                   <div className="border rounded-md bg-white px-3 py-4 text-sm h-full flex flex-col justify-between">
// //                     <div className="flex justify-between">
// //                       <span>Adult 2 :</span>
// //                       <span>$800</span>
// //                     </div>
// //                     <div className="flex justify-between font-bold">
// //                       <span>Total fare :</span>
// //                       <span>$800</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="mt-12">
// //                   <p className="font-semibold text-[14px] mb-2">Seat type :</p>
// //                   <div className="grid grid-cols-2 text-[12px] gap-y-2 gap-x-4">
// //                     <span><span className="inline-block w-6 h-4 bg-green-700 mr-2" />Free</span>
// //                     <span><span className="inline-block w-6 h-4 bg-blue-500 mr-2" />$300-500</span>
// //                     <span><span className="inline-block w-6 h-4 bg-purple-700 mr-2" />$300-500</span>
// //                     <span><span className="inline-block w-6 h-4 bg-yellow-400 mr-2" />$300-500</span>
// //                     <span><span className="inline-block w-6 h-4 bg-indigo-300 mr-2" />$300-500</span>
// //                     <span><span className="inline-block w-6 h-4 bg-pink-400 mr-2" />$300-500</span>
// //                     <span><span className="inline-block w-6 h-4 bg-sky-500 mr-2" />Non-Reclining</span>
// //                     <span><span className="inline-block w-6 h-4 bg-black mr-2" />Exit seats</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="relative bottom-6 ml-12 w-[300px] h-[540px] bg-[url('/assets/seat-1.png')] bg-cover bg-center flex items-center justify-center overflow-hidden">
// //   <div className="w-[240px] h-[570px] bg-white rounded-t-[140px] rounded-b-[40px] shadow-inner flex flex-col pt-4 px-4 relative top-[80px]">
    
// //     {/* Header: Front + Seat Labels */}
// //     <div className="flex flex-col items-center flex-shrink-0">
// //       <div className="text-sm font-semibold mb-3">Front</div>

// //       {/* A–F Label Row */}
// //       <div className="flex justify-between w-full px-2 mb-2 text-xs font-semibold">
// //         <div className="flex gap-2">
// //           {['A', 'B', 'C'].map(l => <span key={l} className="w-5 text-center">{l}</span>)}
// //         </div>
// //         <div className="flex gap-2">
// //           {['D', 'E', 'F'].map(l => <span key={l} className="w-5 text-center">{l}</span>)}
// //         </div>
// //       </div>
// //     </div>

// //     {/* Scrollable Seat Grid */}
// //     <div className="flex-1 overflow-y-auto pr-1 space-y-2">
// //       {Array.from({ length: 30 }, (_, i) => {
// //         const row = i + 1;
// //         return (
// //           <div key={row} className="flex items-center justify-between gap-2">
// //             {/* Row number left */}
// //             <span className="text-xs w-4 text-right">{row}</span>

// //             {/* Left seats */}
// //             <div className="flex gap-1">
// //               {['A', 'B', 'C'].map(col => {
// //                 const seatId = `${col}${row}`;
// //                 const isSelected = selectedSeats.includes(seatId);
// //                 const isBooked = ['C2', 'C4'].includes(seatId);
// //                 return (
// //                   <div
// //                     key={seatId}
// //                     onClick={() => !isBooked && handleSeatSelect(seatId)}
// //                     className={`w-5 h-5 rounded-sm cursor-pointer ${
// //                       isBooked ? 'bg-black' : isSelected ? 'bg-[#EE5128]' : 'bg-gray-300'
// //                     }`}
// //                   ></div>
// //                 );
// //               })}
// //             </div>

// //             <div className="w-3" />

// //             {/* Right seats */}
// //             <div className="flex gap-1">
// //               {['D', 'E', 'F'].map(col => {
// //                 const seatId = `${col}${row}`;
// //                 const isSelected = selectedSeats.includes(seatId);
// //                 const isBooked = ['C2', 'C4'].includes(seatId);
// //                 return (
// //                   <div
// //                     key={seatId}
// //                     onClick={() => !isBooked && handleSeatSelect(seatId)}
// //                     className={`w-5 h-5 rounded-sm cursor-pointer ${
// //                       isBooked ? 'bg-black' : isSelected ? 'bg-[#EE5128]' : 'bg-gray-300'
// //                     }`}
// //                   ></div>
// //                 );
// //               })}
// //             </div>

// //             {/* Row number right */}
// //             <span className="text-xs w-4 text-left">{row}</span>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   </div>
// // </div>
// // </div>
// // </div>

// //           {/* Booking + Price Column */}
// //           <div className="flex flex-col gap-6 w-full max-w-[360px]">
// //             {/* Booking Details */}
// //             <div className="h-[280px] bg-white rounded-[12px] shadow-sm overflow-hidden">
// //               <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
// //                 <h2 className="font-semibold text-[18px] font-['Plus Jakarta Sans']">Booking Details</h2>
// //               </div>
// //               <div className="flex justify-between items-center px-6 mt-[20px]">
// //                 <div className="text-center">
// //                   <p className="text-[20px] font-bold font-['Plus Jakarta Sans']">{flight.departureTime}</p>
// //                   <p className="text-xs text-gray-500 mt-1 font-['Lato']">{flight.departureCity}</p>
// //                 </div>
// //                 <div className="flex flex-col items-center relative">
// //                   <p className="text-xs text-gray-500 mb-[2px] font-['Lato']">{flight.duration}</p>
// //                   <div className="flex items-center justify-center">
// //                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
// //                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
// //                     <span className="text-black text-sm">✈</span>
// //                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
// //                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
// //                   </div>
// //                   <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded font-['Lato']">
// //                     Refundable
// //                   </div>
// //                 </div>
// //                 <div className="text-center">
// //                   <p className="text-[20px] font-bold font-['Plus Jakarta Sans']">{flight.arrivalTime}</p>
// //                   <p className="text-xs text-gray-500 mt-1 font-['Lato']">{flight.arrivalCity}</p>
// //                 </div>
// //               </div>
// //               <div className="flex justify-between px-6 mt-6">
// //                 <div className="text-left w-1/2 border-r pr-4">
// //                   <p className="text-sm font-semibold text-black font-['Plus Jakarta Sans']">Departure Flight</p>
// //                   <p className="text-xs text-gray-500 mt-[2px] font-['Lato']">Thu, 06 Jul, 2025</p>
// //                 </div>
// //                 <div className="text-left w-1/2 pl-4">
// //                   <p className="text-sm font-semibold text-black font-['Plus Jakarta Sans']">Departure Flight</p>
// //                   <p className="text-xs text-gray-500 mt-[2px] font-['Lato']">Thu, 06 Jul, 2025</p>
// //                 </div>
// //               </div>
// //               <div className="flex justify-around mt-6 text-sm font-medium font-['Plus Jakarta Sans'] ml-2">
// //                 <span className="relative mr-8">Policy</span>
// //                 <span>Refund</span>
// //                 <span>Reschedule</span>
// //               </div>
// //             </div>

// //             {/* Price Summary */}
// //             <div className="bg-white rounded-md shadow-sm">
// //               <div className="bg-[#FFE4DB] p-4 font-semibold font-['Plus Jakarta Sans']">Price Summary</div>
// //               <div className="p-4 space-y-3 text-[14px] text-black font-['Lato']">
// //                 <div className="flex justify-between">
// //                   <span>Adult x 1</span>
// //                   <span className="font-semibold">$2500</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>Total taxes +</span>
// //                   <span className="font-semibold">$500</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>Other Charged</span>
// //                   <span className="font-semibold">$200</span>
// //                 </div>
// //                 <div className="flex justify-between border-t pt-3 text-[#EE5128] font-semibold">
// //                   <span>Total</span>
// //                   <span>$3200</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Continue Button */}
// //         <div className="mt-6 w-full max-w-[656px] mx-auto text-center ml-[-215px]">
// //           <button
// //             onClick={() => navigate('/booking/payment', { state: { flight } })}
// //             className="bg-[#EE5128] text-white px-6 py-2 relative left-5 rounded font-semibold font-['Plus Jakarta Sans']"
// //           >
// //             Continue booking
// //           </button>
// //           <button className="text-[#EE5128] font-semibold text-sm relative left-16">Skip add–ons</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import { useLocation, useNavigate } from 'react-router';
// import { useEffect, useState } from 'react';

// export default function SeatSelection() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [flight, setFlight] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   useEffect(() => {
//     if (location.state && location.state.flight) {
//       setFlight(location.state.flight);
//     }
//   }, [location]);

//   const handleSeatSelect = (seatId) => {
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//     }
//   };

//   if (!flight) return <div className="text-center mt-20 font-['Lato']">Loading...</div>;

//   return (
//     <div className="font-sans flex justify-center">
//       <div className="w-full max-w-[1140px] px-4">
//         <div className="flex flex-col lg:flex-row justify-between gap-6">
//           {/* Seat Selection Panel */}
//           <div className="w-full max-w-[680px] h-[550px] rounded-md shadow-sm overflow-hidden bg-white">
//             <div className="flex items-center px-6 bg-[#FFE4DB] py-3 space-x-8 font-['Plus Jakarta Sans'] text-[16px]">
//               <span className="text-black font-semibold relative">
//                 Seats <div className="w-2 h-2 bg-[#EE5128] rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2" />
//               </span>
//               <span className="text-gray-500">Snacks</span>
//               <span className="text-gray-500">Extra luggage's</span>
//             </div>

//             <div className="flex items-start gap-6 p-6">
//               {/* Left Info */}
//               <div className="w-[260px] flex-shrink-0">
//                 <div className="text-[14px] font-semibold flex justify-between">
//                   <span>06:00</span>
//                   <span>19:00</span>
//                 </div>
//                 <div className="text-[12px] text-gray-500 flex justify-between mb-1">
//                   <span>Algeries</span>
//                   <span>Luanda</span>
//                 </div>
//                 <div className="text-center text-[12px] text-gray-500 bottom-9 relative">16h 12m ✈</div>
//                 <img src={flight.logo} alt="logo" className="w-[110px] object-contain mt-1 mb-1 relative" />
//                 <p className="text-[13px] text-gray-400 relative left-[8px]">{flight.flightNumber}</p>
//                 <p className="bg-green-600 text-white text-[12px] px-2 py-[2px] rounded w-fit bottom-6 left-[65px] relative mt-1">Business</p>
//                 <div className="mt-5 w-[200px] h-[100px]">
//                   <p className="font-semibold text-[14px] mb-2 relative left-2">Seat fare :</p>
//                   <div className="border rounded-md bg-white px-3 py-4 text-sm h-full flex flex-col justify-between">
//                     <div className="flex justify-between">
//                       <span>Adult 2 :</span>
//                       <span>$800</span>
//                     </div>
//                     <div className="flex justify-between font-bold">
//                       <span>Total fare :</span>
//                       <span>$800</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-12">
//                   <p className="font-semibold text-[14px] mb-2">Seat type :</p>
//                   <div className="grid grid-cols-2 text-[12px] gap-y-2 gap-x-4">
//                     <span><span className="inline-block w-6 h-4 bg-green-700 mr-2" />Free</span>
//                     <span><span className="inline-block w-6 h-4 bg-blue-500 mr-2" />$300-500</span>
//                     <span><span className="inline-block w-6 h-4 bg-purple-700 mr-2" />$300-500</span>
//                     <span><span className="inline-block w-6 h-4 bg-yellow-400 mr-2" />$300-500</span>
//                     <span><span className="inline-block w-6 h-4 bg-indigo-300 mr-2" />$300-500</span>
//                     <span><span className="inline-block w-6 h-4 bg-pink-400 mr-2" />$300-500</span>
//                     <span><span className="inline-block w-6 h-4 bg-sky-500 mr-2" />Non-Reclining</span>
//                     <span><span className="inline-block w-6 h-4 bg-black mr-2" />Exit seats</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Seat Capsule with external scrollbar */}
//               <div className="relative bottom-6 ml-12 w-[300px] h-[540px] bg-[url('/assets/seat-1.png')] bg-cover bg-center overflow-hidden">
//                 <div className="h-full w-full overflow-y-auto pr-1">
//                   <div className="w-[240px] h-[900px] bg-white rounded-t-[140px] rounded-b-[40px] mt-15 shadow-inner flex flex-col pt-4 px-4 mx-auto">
//                     <div className="flex flex-col items-center flex-shrink-0">
//                       <div className="text-sm font-semibold mb-3">Front</div>
//                       <div className="flex justify-between w-full px-2 mb-2 text-xs font-semibold">
//                         <div className="flex gap-2">
//                           {['A', 'B', 'C'].map((l) => (
//                             <span key={l} className="w-5 text-center">{l}</span>
//                           ))}
//                         </div>
//                         <div className="flex gap-2">
//                           {['D', 'E', 'F'].map((l) => (
//                             <span key={l} className="w-5 text-center">{l}</span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       {Array.from({ length: 30 }, (_, i) => {
//                         const row = i + 1;
//                         return (
//                           <div key={row} className="flex items-center justify-between gap-2">
//                             <span className="text-xs w-4 text-right">{row}</span>
//                             <div className="flex gap-1">
//                               {['A', 'B', 'C'].map((col) => {
//                                 const seatId = `${col}${row}`;
//                                 const isSelected = selectedSeats.includes(seatId);
//                                 const isBooked = ['C2', 'C4'].includes(seatId);
//                                 return (
//                                   <div
//                                     key={seatId}
//                                     onClick={() => !isBooked && handleSeatSelect(seatId)}
//                                     className={`w-5 h-5 rounded-sm cursor-pointer ${
//                                       isBooked ? 'bg-black' : isSelected ? 'bg-[#EE5128]' : 'bg-gray-300'
//                                     }`}
//                                   ></div>
//                                 );
//                               })}
//                             </div>
//                             <div className="w-3" />
//                             <div className="flex gap-1">
//                               {['D', 'E', 'F'].map((col) => {
//                                 const seatId = `${col}${row}`;
//                                 const isSelected = selectedSeats.includes(seatId);
//                                 const isBooked = ['C2', 'C4'].includes(seatId);
//                                 return (
//                                   <div
//                                     key={seatId}
//                                     onClick={() => !isBooked && handleSeatSelect(seatId)}
//                                     className={`w-5 h-5 rounded-sm cursor-pointer ${
//                                       isBooked ? 'bg-black' : isSelected ? 'bg-[#EE5128]' : 'bg-gray-300'
//                                     }`}
//                                   ></div>
//                                 );
//                               })}
//                             </div>
//                             <span className="text-xs w-4 text-left">{row}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col gap-6 w-full max-w-[360px]">
//             <div className="h-[280px] bg-white rounded-[12px] shadow-sm overflow-hidden">
//               <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
//                 <h2 className="font-semibold text-[18px] font-['Plus Jakarta Sans']">Booking Details</h2>
//               </div>
//               <div className="flex justify-between items-center px-6 mt-[20px]">
//                 <div className="text-center">
//                   <p className="text-[20px] font-bold font-['Plus Jakarta Sans']">{flight.departureTime}</p>
//                   <p className="text-xs text-gray-500 mt-1 font-['Lato']">{flight.departureCity}</p>
//                 </div>
//                 <div className="flex flex-col items-center relative">
//                   <p className="text-xs text-gray-500 mb-[2px] font-['Lato']">{flight.duration}</p>
//                   <div className="flex items-center justify-center">
//                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                     <span className="text-black text-sm">✈</span>
//                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                   </div>
//                   <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded font-['Lato']">
//                     Refundable
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-[20px] font-bold font-['Plus Jakarta Sans']">{flight.arrivalTime}</p>
//                   <p className="text-xs text-gray-500 mt-1 font-['Lato']">{flight.arrivalCity}</p>
//                 </div>
//               </div>
//               <div className="flex justify-between px-6 mt-6">
//                 <div className="text-left w-1/2 border-r pr-4">
//                   <p className="text-sm font-semibold text-black font-['Plus Jakarta Sans']">Departure Flight</p>
//                   <p className="text-xs text-gray-500 mt-[2px] font-['Lato']">Thu, 06 Jul, 2025</p>
//                 </div>
//                 <div className="text-left w-1/2 pl-4">
//                   <p className="text-sm font-semibold text-black font-['Plus Jakarta Sans']">Departure Flight</p>
//                   <p className="text-xs text-gray-500 mt-[2px] font-['Lato']">Thu, 06 Jul, 2025</p>
//                 </div>
//               </div>
//               <div className="flex justify-around mt-6 text-sm font-medium font-['Plus Jakarta Sans'] ml-2">
//                 <span className="relative mr-8">Policy</span>
//                 <span>Refund</span>
//                 <span>Reschedule</span>
//               </div>
//             </div>

//             <div className="bg-white rounded-md shadow-sm">
//               <div className="bg-[#FFE4DB] p-4 font-semibold font-['Plus Jakarta Sans']">Price Summary</div>
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

//         {/* Buttons */}
//         <div className="mt-6 w-full max-w-[656px] mx-auto text-center ml-[-215px]">
//           <button
//             onClick={() => navigate('/booking/payment', { state: { flight } })}
//             className="bg-[#EE5128] text-white px-6 py-2 relative left-5 rounded font-semibold font-['Plus Jakarta Sans']"
//           >
//             Continue booking
//           </button>
//           <button className="text-[#EE5128] font-semibold text-sm relative left-16">Skip add–ons</button>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export default function SeatSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const [flight, setFlight] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (location.state && location.state.flight) {
      setFlight(location.state.flight);
    }
  }, [location]);

  const handleSeatSelect = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  if (!flight) return <div className="text-center mt-20 font-['Lato']">Loading...</div>;

  return (
    <div className="font-sans flex justify-center">
      <div className="w-full max-w-[1140px] px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Mobile Order: First booking details, then price summary, then seat selection */}
          <div className="w-full lg:max-w-[680px] order-2 lg:order-1">
            {/* Seat Selection Panel */}
            <div className="w-full h-auto lg:h-[550px] rounded-md shadow-sm overflow-hidden bg-white">
              <div className="flex items-center px-6 bg-[#FFE4DB] py-3 space-x-8 font-['Plus Jakarta Sans'] text-[16px]">
                <span className="text-black font-semibold relative">
                  Seats <div className="w-2 h-2 bg-[#EE5128] rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2" />
                </span>
                <span className="text-gray-500">Snacks</span>
                <span className="text-gray-500">Extra luggage's</span>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6 p-6">
                {/* Left Info */}
                <div className="w-full md:w-[260px] flex-shrink-0">
                  <div className="text-[14px] font-semibold flex justify-between">
                    <span>06:00</span>
                    <span>19:00</span>
                  </div>
                  <div className="text-[12px] text-gray-500 flex justify-between mb-1">
                    <span>Algeries</span>
                    <span>Luanda</span>
                  </div>
                  <div className="text-center text-[12px] text-gray-500 bottom-9 relative">16h 12m ✈</div>
                  <img src={flight.logo} alt="logo" className="w-[110px] object-contain mt-1 mb-1 relative" />
                  <p className="text-[13px] text-gray-400 relative left-[8px]">{flight.flightNumber}</p>
                  <p className="bg-green-600 text-white text-[12px] px-2 py-[2px] rounded w-fit bottom-6 left-[65px] relative mt-1">Business</p>
                  <div className="mt-5 w-full md:w-[200px] h-[100px]">
                    <p className="font-semibold text-[14px] mb-2 relative left-2">Seat fare :</p>
                    <div className="border rounded-md bg-white px-3 py-4 text-sm h-full flex flex-col justify-between">
                      <div className="flex justify-between">
                        <span>Adult 2 :</span>
                        <span>$800</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Total fare :</span>
                        <span>$800</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12">
                    <p className="font-semibold text-[14px] mb-2">Seat type :</p>
                    <div className="grid grid-cols-2 text-[12px] gap-y-2 gap-x-4">
                      <span><span className="inline-block w-6 h-4 bg-green-700 mr-2" />Free</span>
                      <span><span className="inline-block w-6 h-4 bg-blue-500 mr-2" />$300-500</span>
                      <span><span className="inline-block w-6 h-4 bg-purple-700 mr-2" />$300-500</span>
                      <span><span className="inline-block w-6 h-4 bg-yellow-400 mr-2" />$300-500</span>
                      <span><span className="inline-block w-6 h-4 bg-indigo-300 mr-2" />$300-500</span>
                      <span><span className="inline-block w-6 h-4 bg-pink-400 mr-2" />$300-500</span>
                      <span><span className="inline-block w-6 h-4 bg-sky-500 mr-2" />Non-Reclining</span>
                      <span><span className="inline-block w-6 h-4 bg-black mr-2" />Exit seats</span>
                    </div>
                  </div>
                </div>

                {/* Right Seat Capsule - Mobile: fixed height with no scrollbar */}
                <div className="relative w-full md:w-[300px] md:ml-12 md:bottom-6 mx-auto">
                  <div className="relative h-[500px] md:h-[540px] bg-[url('/assets/seat-1.png')] bg-cover bg-center overflow-hidden">
                    <div className="h-full w-full overflow-x-hidden overflow-y-auto md:pr-1 no-scrollbar">
                      <style jsx>{`
                        /* Hide scrollbar for Chrome, Safari and Opera */
                        .no-scrollbar::-webkit-scrollbar {
                          display: none;
                        }
                        /* Hide scrollbar for IE, Edge and Firefox */
                        .no-scrollbar {
                          -ms-overflow-style: none;  /* IE and Edge */
                          scrollbar-width: none;  /* Firefox */
                        }
                      `}</style>
                      <div className="w-[240px] h-[900px] bg-white rounded-t-[140px] rounded-b-[40px] mt-15 shadow-inner flex flex-col pt-4 px-4 mx-auto">
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className="text-sm font-semibold mb-3">Front</div>
                          <div className="flex justify-between w-full px-2 mb-2 text-xs font-semibold">
                            <div className="flex gap-2">
                              {['A', 'B', 'C'].map((l) => (
                                <span key={l} className="w-5 text-center">{l}</span>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              {['D', 'E', 'F'].map((l) => (
                                <span key={l} className="w-5 text-center">{l}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {Array.from({ length: 30 }, (_, i) => {
                            const row = i + 1;
                            return (
                              <div key={row} className="flex items-center justify-between gap-2">
                                <span className="text-xs w-4 text-right">{row}</span>
                                <div className="flex gap-1">
                                  {['A', 'B', 'C'].map((col) => {
                                    const seatId = `${col}${row}`;
                                    const isSelected = selectedSeats.includes(seatId);
                                    const isBooked = ['C2', 'C4'].includes(seatId);
                                    return (
                                      <div
                                        key={seatId}
                                        onClick={() => !isBooked && handleSeatSelect(seatId)}
                                        className={`w-5 h-5 rounded-sm cursor-pointer ${
                                          isBooked ? 'bg-black' : isSelected ? 'bg-[#EE5128]' : 'bg-gray-300'
                                        }`}
                                      ></div>
                                    );
                                  })}
                                </div>
                                <div className="w-3" />
                                <div className="flex gap-1">
                                  {['D', 'E', 'F'].map((col) => {
                                    const seatId = `${col}${row}`;
                                    const isSelected = selectedSeats.includes(seatId);
                                    const isBooked = ['C2', 'C4'].includes(seatId);
                                    return (
                                      <div
                                        key={seatId}
                                        onClick={() => !isBooked && handleSeatSelect(seatId)}
                                        className={`w-5 h-5 rounded-sm cursor-pointer ${
                                          isBooked ? 'bg-black' : isSelected ? 'bg-[#EE5128]' : 'bg-gray-300'
                                        }`}
                                      ></div>
                                    );
                                  })}
                                </div>
                                <span className="text-xs w-4 text-left">{row}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - On mobile, will display at the top */}
          <div className="flex flex-col gap-6 w-full lg:max-w-[360px] order-1 lg:order-2">
            {/* Booking Details - First on mobile */}
            <div className="h-auto md:h-[280px] bg-white rounded-[12px] shadow-sm overflow-hidden">
              <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                <h2 className="font-semibold text-[18px] font-['Plus Jakarta Sans']">Booking Details</h2>
              </div>
              <div className="flex justify-between items-center px-6 mt-[20px]">
                <div className="text-center">
                  <p className="text-[20px] font-bold font-['Plus Jakarta Sans']">{flight.departureTime}</p>
                  <p className="text-xs text-gray-500 mt-1 font-['Lato']">{flight.departureCity}</p>
                </div>
                <div className="flex flex-col items-center relative">
                  <p className="text-xs text-gray-500 mb-[2px] font-['Lato']">{flight.duration}</p>
                  <div className="flex items-center justify-center">
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                    <span className="text-black text-sm">✈</span>
                    <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                  </div>
                  <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded font-['Lato']">
                    Refundable
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[20px] font-bold font-['Plus Jakarta Sans']">{flight.arrivalTime}</p>
                  <p className="text-xs text-gray-500 mt-1 font-['Lato']">{flight.arrivalCity}</p>
                </div>
              </div>
              <div className="flex justify-between px-6 mt-6">
                <div className="text-left w-1/2 border-r pr-4">
                  <p className="text-sm font-semibold text-black font-['Plus Jakarta Sans']">Departure Flight</p>
                  <p className="text-xs text-gray-500 mt-[2px] font-['Lato']">Thu, 06 Jul, 2025</p>
                </div>
                <div className="text-left w-1/2 pl-4">
                  <p className="text-sm font-semibold text-black font-['Plus Jakarta Sans']">Departure Flight</p>
                  <p className="text-xs text-gray-500 mt-[2px] font-['Lato']">Thu, 06 Jul, 2025</p>
                </div>
              </div>
              <div className="flex justify-around mt-6 mb-4 text-sm font-medium font-['Plus Jakarta Sans'] ml-2">
                <span className="relative mr-8">Policy</span>
                <span>Refund</span>
                <span>Reschedule</span>
              </div>
            </div>

            {/* Price Summary - Second on mobile */}
            <div className="bg-white rounded-md shadow-sm">
              <div className="bg-[#FFE4DB] p-4 font-semibold font-['Plus Jakarta Sans']">Price Summary</div>
              <div className="p-4 space-y-3 text-[14px] text-black font-['Lato']">
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
                <div className="flex justify-between border-t pt-3 text-[#EE5128] font-semibold">
                  <span>Total</span>
                  <span>$3200</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 w-full lg:max-w-[656px] mx-auto text-center lg:ml-[-215px] flex flex-col md:flex-row justify-center items-center gap-4">
          <button
            onClick={() => navigate('/booking/payment', { state: { flight } })}
            className="bg-[#EE5128] text-white px-6 py-2 lg:relative lg:left-5 rounded font-semibold font-['Plus Jakarta Sans'] w-full md:w-auto"
          >
            Continue booking
          </button>
          <button className="text-[#EE5128] font-semibold text-sm lg:relative lg:left-16 mt-2 md:mt-0">Skip add–ons</button>
        </div>
      </div>
    </div>
  );
}