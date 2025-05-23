import { Outlet, useLocation, useNavigate } from "react-router";

function FlightBooking() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="px-4 xl:px-40 py-[59px] bg-neutral-100 overflow-x-hidden">
      {["/booking/TicketConfirm", "/booking/TicketNotConfirm"].includes(
        location.pathname
      ) ? (
        ""
      ) : (
        <div className="">
          <div className="flex justify-between items-center">
            <h3 className="hidden lg:block font-jakarta font-semibold text-[30px]">
              Complete Your Booking
            </h3>
            <button
              className="hidden lg:block font-jakarta text-[18px] px-[22px] py-[10px] rounded-[5px] bg-[#EE5128] text-white"
              onClick={() => {
                location.pathname === "/booking/ReviewYourBooking"
                  ? navigate("/list")
                  : location.pathname === "/booking/TravelersDetails"
                  ? navigate("/booking/ReviewYourBooking")
                  : location.pathname === "/booking/SeatSelection"
                  ? navigate("/booking/TravelersDetails")
                  : location.pathname === "/booking/payment"
                  ? navigate("/booking/SeatSelection")
                  : "";
              }}
            >
              {location.pathname === "/booking/ReviewYourBooking"
                ? "Back"
                : location.pathname === "/booking/TravelersDetails"
                ? "Back"
                : location.pathname === "/booking/SeatSelection"
                ? "Back"
                : location.pathname === "/booking/payment"
                ? "Back"
                : ""}
            </button>
          </div>

          {/* Stages */}
          <div className="flex py-[58px]">
            <div className="flex flex-col items-center">
              <p
                className={`text-[30px] font-sans font-bold size-[62px]  rounded-full flex justify-center items-center text-white ${
                  location.pathname === "/booking/ReviewYourBooking"
                    ? "bg-[#EE5128]"
                    : "bg-neutral-400"
                }`}
              >
                01
              </p>
              <p
                className={`mt-[19px] text-[14px] lg:text-base font-jakarta font-medium text-center lg:text-nowrap ${
                  location.pathname === "/booking/ReviewYourBooking"
                    ? ""
                    : "text-neutral-400"
                }`}
              >
                Review your Booking
              </p>
            </div>

            <div className="w-full border border-dashed h-px mt-[36px]"></div>

            <div className="flex flex-col items-center">
              <p
                className={`text-[30px] font-sans font-bold text-white size-[62px]  rounded-full flex justify-center items-center ${
                  location.pathname === "/booking/TravelersDetails"
                    ? "bg-[#EE5128]"
                    : "bg-neutral-400"
                }`}
              >
                02
              </p>
              <p
                className={`mt-[19px] font-jakarta font-medium text-center lg:text-nowrap ${
                  location.pathname === "/booking/TravelersDetails"
                    ? ""
                    : "text-neutral-400"
                }`}
              >
                Travelers Details
              </p>
            </div>
            <div className="w-full border border-dashed h-px mt-[36px]"></div>
            <div className="flex-col items-center flex">
              <p
                className={`text-[30px] font-sans font-bold text-white size-[62px]  rounded-full flex justify-center items-center ${
                  location.pathname === "/booking/SeatSelection"
                    ? "bg-[#EE5128]"
                    : "bg-neutral-400"
                }`}
              >
                03
              </p>
              <p
                className={`mt-[19px] font-jakarta font-medium text-center lg:text-nowrap ${
                  location.pathname === "/booking/SeatSelection"
                    ? ""
                    : "text-neutral-400"
                }`}
              >
                Seat Selection
              </p>
            </div>
            <div className="w-full border border-dashed h-px mt-[36px]"></div>
            <div className="flex flex-col items-center px-4">
              <p
                className={`text-[30px] font-sans font-bold text-white size-[62px] rounded-full flex justify-center items-center ${
                  location.pathname === "/booking/payment"
                    ? "bg-[#EE5128]"
                    : "bg-neutral-400"
                }`}
              >
                04
              </p>
              <p
                className={`mt-[19px] font-jakarta font-medium text-center lg:text-nowrap ${
                  location.pathname === "/booking/payment"
                    ? ""
                    : "text-neutral-400"
                }`}
              >
                Payment
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default FlightBooking;
