import { Route, Routes } from "react-router";
import { useEffect } from "react";
import Aos from "aos";

import RootLayout from "./RootLayout";
import WebsiteLayout from "./Layouts/WebsiteLayout";

import Home from "./pages/Home/Home";
import FlightList from "./pages/FlightsList/FlightList";
import FlightBooking from "./pages/FlightBooking/FlightBooking";

// Authentication Pages
import LoginPage from "./Authentication/LoginPage";
import SignupPage from "./Authentication/SignupPage";
import LoginWithMobile from "./Authentication/LoginWithMobile";
import OTP_VerificationPage from "./Authentication/OTP_VerificationPage";
import ForgotPassword from "./Authentication/ForgotPassword";

// Booking sections
import ReviewYourBooking from "./pages/FlightBooking/ReviewYourBooking";
import TravelersDetails from "./pages/FlightBooking/TravelersDetails";
import SeatSelectionPage from "./pages/FlightBooking/SeatSelectionPage";
import PaymentPage from "./pages/FlightBooking/PaymentPage";
import TicketNotConfirm from "./pages/FlightBooking/TicketNotConfirm";
import TicketConfirm from "./pages/FlightBooking/TicketConfirm";


const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Website Route */}
        <Route path="" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/List" element={<FlightList />} />
          <Route path="/Booking" element={<FlightBooking />}>
            <Route path="ReviewYourBooking" element={<ReviewYourBooking />} />
            <Route path="TravelersDetails" element={<TravelersDetails />} />
            <Route path="SeatSelection" element={<SeatSelectionPage />} />
            <Route path="Payment" element={<PaymentPage />} />
            <Route path="TicketConfirm" element={<TicketConfirm />} />
            <Route path="TicketNotConfirm" element={<TicketNotConfirm />} />
          </Route>
        </Route>
        {/* Authentication Route */}
        <Route path="SignUp" element={<SignupPage />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="Login-with-mobile" element={<LoginWithMobile />} />
        <Route path="OTP-Verification" element={<OTP_VerificationPage />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default App;
