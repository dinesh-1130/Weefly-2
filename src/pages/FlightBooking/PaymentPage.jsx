// import { useLocation, useNavigate } from "react-router";
// import { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";

// const paymentIcons = {
//   "UPI": "/assets/paymentpage/upi.png",
//   "Debit & credit cards": "/assets/paymentpage/card.png",
//   "Net Banking": "/assets/paymentpage/netbanking.png",
//   "Wallet": "/assets/paymentpage/wallet.png",
//   "EMI": "/assets/paymentpage/emi.png",
//   "Pay later": "/assets/paymentpage/paylater.png",
// };

// export default function PaymentPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [flight, setFlight] = useState(null);

//   useEffect(() => {
//     const stored = location.state?.flight;
//     if (stored) {
//       setFlight(stored);
//     }
//   }, [location]);

//   if (!flight) return <p className="text-center mt-20 font-['Lato']">Loading...</p>;

//   return (
//   <div className="font-sans flex justify-center">
//     <div className="w-full max-w-[1140px] px-4">
//       <div className="flex flex-col lg:flex-row justify-between gap-8">
//         {/* Left Panel */}
//         <div className="w-full lg:max-w-[740px] space-y-6">
//           {/* Flight Summary */}
//           <div className="rounded-md bg-white">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 pt-4 gap-6">
//               {/* Airline Info */}
//               <div className="flex flex-col min-w-[170px] relative">
//                 <img src={flight.logo} alt={flight.airline} className="w-[120px] h-[40px] object-contain mb-[25px]" />
//                 <div className="absolute top-[38px] left-[4px] flex items-center space-x-2">
//                   <span className="text-[13px] text-gray-500">{flight.flightNumber}</span>
//                   <span className="text-[12px] bg-[#008905] text-white px-[10px] py-[2px] rounded font-semibold">{flight.class}</span>
//                 </div>
//               </div>

//               {/* Time & Route */}
//               <div className="flex flex-col sm:flex-row items-center gap-6">
//                 <div className="text-center">
//                   <p className="text-[22px] font-bold text-black">{flight.departureTime}</p>
//                   <p className="text-[13px] text-gray-500">{flight.departureCity}</p>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className="flex items-center">
//                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                     <span className="text-black text-sm">✈</span>
//                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                   </div>
//                   <span className="text-[12px] text-gray-400 mt-[4px]">{flight.duration}</span>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-[22px] font-bold text-black">{flight.arrivalTime}</p>
//                   <p className="text-[13px] text-gray-500">{flight.arrivalCity}</p>
//                 </div>
//               </div>

//               {/* Price */}
//               <div className="text-right space-y-[2px]">
//                 <p className="text-[#EE5128] text-[26px] font-black leading-none">
//                   {flight.currency}{flight.price.toLocaleString()}
//                   <span className="text-[12px] text-black font-normal">/pax</span>
//                 </p>
//                 <p className="text-[13px] text-gray-400 line-through font-normal leading-none">
//                   {flight.currency}{flight.originalPrice.toLocaleString()}
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap sm:justify-between items-center px-4 py-2 border-t border-[#CCCCCC] text-sm font-medium text-[#EE5128] gap-4">
//               <div className="flex flex-wrap gap-4">
//                 <span>Flight Details</span>
//                 <span>Price Details</span>
//                 <span>Policy</span>
//                 <span>Refund</span>
//                 <span>Reschedule</span>
//               </div>
//               <button className="bg-[#EE5128] text-white px-4 py-1.5 rounded font-semibold">
//                 Book now
//               </button>
//             </div>
//           </div>

//           {/* Payment Timing */}
//           <div className="bg-white p-6 rounded-md shadow-sm">
//             <h2 className="text-[18px] font-semibold text-black mb-1">When would you like to pay?</h2>
//             <p className="text-sm text-gray-500 mb-3">Lorem ipsum Lorem ipsum Lorem ipsum</p>
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" checked className="accent-[#EE5128]" readOnly />
//                 <span className="text-sm text-black">Pay now</span>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" disabled className="accent-[#ccc]" />
//                 <span className="text-sm text-gray-400">Pay later</span>
//               </label>
//             </div>
//           </div>

//           {/* Payment Methods */}
//           <div className="bg-white rounded-md shadow-sm overflow-hidden">
//             <div className="bg-[#FFE4DB] p-4 font-semibold">Payment methods</div>
//             <div className="divide-y divide-gray-300">
//               {Object.entries(paymentIcons).map(([method, icon]) => (
//                 <div key={method} className="flex items-center justify-between px-4 py-4">
//                   <div className="flex items-center gap-3">
//                     <img src={icon} alt={method} className="w-6 h-6 object-contain" />
//                     <div>
//                       <p className="font-semibold">{method}</p>
//                       <p className="text-sm text-gray-500">Lorem ipsum Lorem ipsum Lorem</p>
//                     </div>
//                   </div>
//                   <ChevronDown className="text-gray-400" size={20} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Panel */}
//         <div className="w-full lg:max-w-[360px] space-y-6">
//           {/* Booking Details Box */}
//           <div className="bg-white rounded-[12px] shadow-sm overflow-hidden">
//             <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
//               <h2 className="font-semibold text-[18px]">Booking Details</h2>
//             </div>
//             <div className="flex justify-between items-center px-6 mt-[20px]">
//               <div className="text-center">
//                 <p className="text-[20px] font-bold">{flight.departureTime}</p>
//                 <p className="text-xs text-gray-500 mt-1">{flight.departureCity}</p>
//               </div>
//               <div className="flex flex-col items-center relative">
//                 <p className="text-xs text-gray-500 mb-[2px]">{flight.duration}</p>
//                 <div className="flex items-center justify-center">
//                   <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                   <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                   <span className="text-black text-sm">✈</span>
//                   <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                   <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                 </div>
//                 <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">Refundable</div>
//               </div>
//               <div className="text-center">
//                 <p className="text-[20px] font-bold">{flight.arrivalTime}</p>
//                 <p className="text-xs text-gray-500 mt-1">{flight.arrivalCity}</p>
//               </div>
//             </div>
//             <div className="flex justify-between px-6 mt-6">
//               <div className="text-left w-1/2 border-r pr-4">
//                 <p className="text-sm font-semibold">Departure Flight</p>
//                 <p className="text-xs text-gray-500 mt-[2px]">Thu, 06 Jul, 2025</p>
//               </div>
//               <div className="text-left w-1/2 pl-4">
//                 <p className="text-sm font-semibold">Departure Flight</p>
//                 <p className="text-xs text-gray-500 mt-[2px]">Thu, 06 Jul, 2025</p>
//               </div>
//             </div>
//             <div className="flex justify-around mt-6 text-sm font-medium ml-2">
//               <span className="relative mr-8">Policy</span>
//               <span>Refund</span>
//               <span>Reschedule</span>
//             </div>
//           </div>

//           {/* Price Summary Box */}
//           <div className="bg-white rounded-md shadow-sm overflow-hidden">
//             <div className="bg-[#FFE4DB] p-4 font-semibold">Price summary</div>
//             <div className="p-4 space-y-3 text-[14px] text-black">
//               <div className="flex justify-between">
//                 <span>Adult x 1</span>
//                 <span className="font-semibold">$2500</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Total taxes +</span>
//                 <span className="font-semibold">$500</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Other Charged</span>
//                 <span className="font-semibold">$200</span>
//               </div>
//               <div className="flex justify-between border-t pt-3 text-[#EE5128] font-semibold">
//                 <span>Total</span>
//                 <span>$3200</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const paymentIcons = {
  "UPI": "/assets/paymentpage/upi.png",
  "Debit & credit cards": "/assets/paymentpage/card.png",
  "Net Banking": "/assets/paymentpage/netbanking.png",
  "Wallet": "/assets/paymentpage/wallet.png",
  "EMI": "/assets/paymentpage/emi.png",
  "Pay later": "/assets/paymentpage/paylater.png",
};

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [flight, setFlight] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const stored = location.state?.flight;
    if (stored) {
      setFlight(stored);
    }
    
    // Check if screen width is for mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [location]);

  if (!flight) return <p className="text-center mt-20 font-['Lato']">Loading...</p>;

  // Mobile layout
  if (isMobile) {
    return (
      <div className="font-sans bg-gray-50 px-3">
        {/* Booking Details - Mobile */}
        <div className="bg-white mb-4 rounded-md shadow-sm">
          <div className="bg-[#FFE4DB] p-4">
            <h2 className="font-semibold text-[17px]">Booking Details</h2>
          </div>
          <div className="p-5 pb-7">
            <div className="flex justify-between items-center mb-6">
              <div className="text-center">
                <p className="text-[18px] font-bold">06:00</p>
                <p className="text-[12px] text-gray-500 mt-1">Algeries</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[11px] text-gray-500 mb-[2px]">12hr</p>
                <div className="flex items-center">
                  <span className="w-[5px] h-[5px] bg-gray-300 rounded-full" />
                  <div className="border-t border-dashed w-8 border-gray-300 mx-1" />
                  <span className="text-black text-xs">✈</span>
                  <div className="border-t border-dashed w-8 border-gray-300 mx-1" />
                  <span className="w-[5px] h-[5px] bg-gray-300 rounded-full" />
                </div>
                <div className="mt-[8px] bg-green-600 text-white text-[10px] px-2 py-[2px] rounded">Refundable</div>
              </div>
              <div className="text-center">
                <p className="text-[18px] font-bold">19:00</p>
                <p className="text-[12px] text-gray-500 mt-1">Launda</p>
              </div>
            </div>
            
            <div className="flex justify-between mb-6">
              <div className="text-left w-1/2 border-r pr-2">
                <p className="text-[13px] font-semibold">Departure Flight</p>
                <p className="text-[11px] text-gray-500 mt-1">Thu, 06 Jul, 2025</p>
              </div>
              <div className="text-left w-1/2 pl-4">
                <p className="text-[13px] font-semibold">Departure Flight</p>
                <p className="text-[11px] text-gray-500 mt-1">Thu, 06 Jul, 2025</p>
              </div>
            </div>
            
            <div className="flex justify-between text-[13px] font-medium text-gray-600">
              <span>Policy</span>
              <span>Refund</span>
              <span>Reschedule</span>
            </div>
          </div>
        </div>
        
        {/* Price Summary - Mobile */}
        <div className="bg-white mb-4 rounded-md shadow-sm">
          <div className="bg-[#FFE4DB] p-4">
            <h2 className="font-semibold text-[17px]">Price summary</h2>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex justify-between text-[14px]">
              <span>Adult x 1</span>
              <span className="font-semibold">$2500</span>
            </div>
            <div className="flex justify-between text-[14px]">
              <span>Total taxes +</span>
              <span className="font-semibold">$500</span>
            </div>
            <div className="flex justify-between text-[14px]">
              <span>Other Charged</span>
              <span className="font-semibold">$200</span>
            </div>
            <div className="flex justify-between border-t pt-3 mt-1 text-[#EE5128] font-semibold">
              <span>Total</span>
              <span>$3200</span>
            </div>
          </div>
        </div>

        {/* Flight Summary - Mobile */}
        <div className="bg-white mb-4 rounded-md shadow-sm">
          <div className="flex flex-col px-4 pt-5 pb-3">
            <div className="flex items-center justify-between mb-5">
              <img src={flight.logo} alt={flight.airline} className="w-[120px] h-[40px] object-contain" />
              <div className="text-right">
                <p className="text-[#EE5128] text-[24px] font-black leading-none">
                  {flight.currency}{flight.price.toLocaleString()}
                  <span className="text-[11px] text-black font-normal">/pax</span>
                </p>
                <p className="text-[12px] text-gray-400 line-through font-normal">
                  {flight.currency}{flight.originalPrice.toLocaleString()}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="text-center">
                <p className="text-[18px] font-bold">{flight.departureTime}</p>
                <p className="text-[12px] text-gray-500">{flight.departureCity}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <span className="w-[5px] h-[5px] bg-gray-300 rounded-full" />
                  <div className="border-t border-dashed w-6 border-gray-300 mx-1" />
                  <span className="text-black text-xs">✈</span>
                  <div className="border-t border-dashed w-6 border-gray-300 mx-1" />
                  <span className="w-[5px] h-[5px] bg-gray-300 rounded-full" />
                </div>
                <span className="text-[10px] text-gray-400 mt-[2px]">{flight.duration}</span>
              </div>
              <div className="text-center">
                <p className="text-[18px] font-bold">{flight.arrivalTime}</p>
                <p className="text-[12px] text-gray-500">{flight.arrivalCity}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-2">
              <span className="text-[12px] text-gray-500">{flight.flightNumber}</span>
              <span className="text-[10px] bg-[#008905] text-white px-[8px] py-[1px] rounded font-semibold ml-2">{flight.class}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center px-4 py-3 border-t border-[#CCCCCC]">
            <span className="text-[14px] font-medium text-[#EE5128]">Flight Details</span>
            <button className="bg-[#EE5128] text-white px-5 py-2 rounded text-[14px] font-semibold">
              Book now
            </button>
          </div>
        </div>
        
        {/* Payment Options - Mobile */}
        <div className="bg-white mb-4 rounded-md shadow-sm">
          <div className="p-5">
            <h2 className="text-[17px] font-semibold mb-2">When would you like to pay?</h2>
            <p className="text-[13px] text-gray-500 mb-4">Lorem ipsum Lorem ipsum Lorem ipsum</p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked className="accent-[#EE5128] w-4 h-4" readOnly />
                <span className="text-[14px]">Pay now</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" disabled className="accent-[#ccc] w-4 h-4" />
                <span className="text-[14px] text-gray-400">Pay later</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Payment Methods - Mobile */}
        <div className="bg-white mb-4 rounded-md shadow-sm">
          <div className="bg-[#FFE4DB] p-4">
            <h2 className="font-semibold text-[17px]">Payment methods</h2>
          </div>
          <div>
            {Object.entries(paymentIcons).map(([method, icon]) => (
              <div key={method} className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <img src={icon} alt={method} className="w-6 h-6 object-contain" />
                  <div>
                    <p className="font-medium text-[15px]">{method}</p>
                    <p className="text-[12px] text-gray-500">Lorem ipsum Lorem ipsum Lorem</p>
                  </div>
                </div>
                <ChevronDown className="text-gray-400" size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout (unchanged)
  return (
    <div className="font-sans flex justify-center">
      <div className="w-full max-w-[1140px] px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Panel */}
          <div className="w-full lg:max-w-[740px] space-y-6">
            {/* Flight Summary */}
            <div className="rounded-md bg-white">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 pt-4 gap-6">
                {/* Airline Info */}
                <div className="flex flex-col min-w-[170px] relative">
                  <img src={flight.logo} alt={flight.airline} className="w-[120px] h-[40px] object-contain mb-[25px]" />
                  <div className="absolute top-[38px] left-[4px] flex items-center space-x-2">
                    <span className="text-[13px] text-gray-500">{flight.flightNumber}</span>
                    <span className="text-[12px] bg-[#008905] text-white px-[10px] py-[2px] rounded font-semibold">{flight.class}</span>
                  </div>
                </div>
  
                {/* Time & Route */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="text-center">
                    <p className="text-[22px] font-bold text-black">{flight.departureTime}</p>
                    <p className="text-[13px] text-gray-500">{flight.departureCity}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="text-black text-sm">✈</span>
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    </div>
                    <span className="text-[12px] text-gray-400 mt-[4px]">{flight.duration}</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[22px] font-bold text-black">{flight.arrivalTime}</p>
                    <p className="text-[13px] text-gray-500">{flight.arrivalCity}</p>
                  </div>
                </div>
  
                {/* Price */}
                <div className="text-right space-y-[2px]">
                  <p className="text-[#EE5128] text-[26px] font-black leading-none">
                    {flight.currency}{flight.price.toLocaleString()}
                    <span className="text-[12px] text-black font-normal">/pax</span>
                  </p>
                  <p className="text-[13px] text-gray-400 line-through font-normal leading-none">
                    {flight.currency}{flight.originalPrice.toLocaleString()}
                  </p>
                </div>
              </div>
  
              <div className="flex flex-wrap sm:justify-between items-center px-4 py-2 border-t border-[#CCCCCC] text-sm font-medium text-[#EE5128] gap-4">
                <div className="flex flex-wrap gap-4">
                  <span>Flight Details</span>
                  <span>Price Details</span>
                  <span>Policy</span>
                  <span>Refund</span>
                  <span>Reschedule</span>
                </div>
                <button className="bg-[#EE5128] text-white px-4 py-1.5 rounded font-semibold">
                  Book now
                </button>
              </div>
            </div>
  
            {/* Payment Timing */}
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h2 className="text-[18px] font-semibold text-black mb-1">When would you like to pay?</h2>
              <p className="text-sm text-gray-500 mb-3">Lorem ipsum Lorem ipsum Lorem ipsum</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked className="accent-[#EE5128]" readOnly />
                  <span className="text-sm text-black">Pay now</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" disabled className="accent-[#ccc]" />
                  <span className="text-sm text-gray-400">Pay later</span>
                </label>
              </div>
            </div>
  
            {/* Payment Methods */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="bg-[#FFE4DB] p-4 font-semibold">Payment methods</div>
              <div className="divide-y divide-gray-300">
                {Object.entries(paymentIcons).map(([method, icon]) => (
                  <div key={method} className="flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img src={icon} alt={method} className="w-6 h-6 object-contain" />
                      <div>
                        <p className="font-semibold">{method}</p>
                        <p className="text-sm text-gray-500">Lorem ipsum Lorem ipsum Lorem</p>
                      </div>
                    </div>
                    <ChevronDown className="text-gray-400" size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Right Panel */}
          <div className="w-full lg:max-w-[360px] space-y-6">
            {/* Booking Details Box */}
            <div className="bg-white rounded-[12px] shadow-sm overflow-hidden">
              <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                <h2 className="font-semibold text-[18px]">Booking Details</h2>
              </div>
              <div className="flex justify-between items-center px-6 mt-[24px]">
                <div className="text-center">
                  <p className="text-[22px] font-bold">{flight.departureTime}</p>
                  <p className="text-xs text-gray-500 mt-1">{flight.departureCity}</p>
                </div>
                <div className="flex flex-col items-center relative">
                  <p className="text-xs text-gray-500 mb-[2px]">{flight.duration}</p>
                  <div className="flex items-center justify-center">
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                    <span className="text-black text-sm">✈</span>
                    <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                  </div>
                  <div className="mt-[8px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">Refundable</div>
                </div>
                <div className="text-center">
                  <p className="text-[22px] font-bold">{flight.arrivalTime}</p>
                  <p className="text-xs text-gray-500 mt-1">{flight.arrivalCity}</p>
                </div>
              </div>
              <div className="flex justify-between px-6 mt-8 mb-2">
                <div className="text-left w-1/2 border-r pr-4">
                  <p className="text-sm font-semibold">Departure Flight</p>
                  <p className="text-xs text-gray-500 mt-[2px]">Thu, 06 Jul, 2025</p>
                </div>
                <div className="text-left w-1/2 pl-4">
                  <p className="text-sm font-semibold">Departure Flight</p>
                  <p className="text-xs text-gray-500 mt-[2px]">Thu, 06 Jul, 2025</p>
                </div>
              </div>
              <div className="flex justify-around mt-6 mb-6 text-sm font-medium ml-2">
                <span className="relative mr-8">Policy</span>
                <span>Refund</span>
                <span>Reschedule</span>
              </div>
            </div>
  
            {/* Price Summary Box */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="bg-[#FFE4DB] p-4 font-semibold">Price summary</div>
              <div className="p-4 space-y-3 text-[14px] text-black">
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
      </div>
    </div>
  );
}