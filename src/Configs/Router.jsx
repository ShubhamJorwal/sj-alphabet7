import { createBrowserRouter } from "react-router-dom";
import Notfoundpage from "./notfound/404Notfound";
import Home from "../Views/Home/Home";
import About from "../Views/About/About";
import ConflictResolution from "../Views/Extrapages/ConflictResolution";
import Login from "../Views/Auths/Login";
import Register from "../Views/Auths/Register";
import OnlineCasinoGames from "../Views/OnlineCasinoGames/OnlineCasinoGames";
import PlayerProfile from "../Views/Account/PlayerProfile/PlayerProfile";
import ChangePassword from "../Views/Account/PlayerProfile/ChangePassword";
import Promotions from "../Views/Account/PlayerProfile/Promotions";
import Notifications from "../Views/Account/PlayerProfile/Notifications";
import Deposit from "../Views/Account/Finances/Deposit";
import DepositHistory from "../Views/Account/Finances/DepositHistory";
import Withdraw from "../Views/Account/Withdraw/Withdraw";
import WithdrawHistory from "../Views/Account/Withdraw/WithdrawHistory";
import BankDetails from "../Views/Account/Withdraw/BankDetails";
import KycVerification from "../Views/Account/Withdraw/KycVerification";
import { ProtectedRouteForUser } from "./AuthRoutes";
import Fairness from "../Views/Extrapages/Fairness";
import Payout from "../Views/Extrapages/Payout";
import RegisterationKycBD from "../Views/Extrapages/RegisterationKycBD";
import ResponsibleGambling from "../Views/Extrapages/ResponsibleGambling";
import SelfExclusion from "../Views/Extrapages/SelfExclusion";
import PrivacyPolicy from "../Views/Extrapages/PrivacyPolicy";
import TermsAndConditions from "../Views/Extrapages/TermsAndConditions";
import AntiMoneyLau from "../Views/Extrapages/AntiMoneyLau";
import ContactUs from "../Views/ContactUs/ContactUs";
import BetDetails from "../Views/Account/BetDetails/BetDetails";
import BetGames, { SpecBetGames } from "../Views/OnlineCasinoGames/betgames/BetGames";
import Asd from "../../public/test/Asd";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Notfoundpage />,
  },
  {
    path: "/2",
    element: <Asd />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/:refer_id",
    element: <Register />,
  },
  {
    path: "/notifications",
    element: <ProtectedRouteForUser ><Notifications /></ProtectedRouteForUser>,
  },
  {
    path: "/online-casino-games/:providerName",
    element: <OnlineCasinoGames />,
  },
  {
    path: "/online-casino-games/BetGames/:GameId",
    element: <SpecBetGames />,
  },
  {
    path: "/player/profile",
    element: <ProtectedRouteForUser ><PlayerProfile /></ProtectedRouteForUser>,
  },
  {
    path: "/player/change-password",
    element: <ProtectedRouteForUser ><ChangePassword /></ProtectedRouteForUser>,
  },
  {
    path: "/player/promotions",
    element: <ProtectedRouteForUser ><Promotions /></ProtectedRouteForUser>,
  },
  {
    path: "/player/deposit",
    element: <ProtectedRouteForUser ><Deposit /></ProtectedRouteForUser>,
  },
  {
    path: "/player/deposit-history",
    element: <ProtectedRouteForUser ><DepositHistory /></ProtectedRouteForUser>,
  },
  {
    path: "/player/bank-details",
    element: <ProtectedRouteForUser ><BankDetails /></ProtectedRouteForUser>,
  },
  {
    path: "/player/kyc-verification",
    element: <ProtectedRouteForUser ><KycVerification /></ProtectedRouteForUser>,
  },
  {
    path: "/player/withdraw",
    element: <ProtectedRouteForUser ><Withdraw /></ProtectedRouteForUser>,
  },
  {
    path: "/player/withdraw-history",
    element: <ProtectedRouteForUser ><WithdrawHistory /></ProtectedRouteForUser>,
  },
  {
    path: "/player/bet-details",
    element: <ProtectedRouteForUser ><BetDetails /></ProtectedRouteForUser>,
  },


  {
    path: "/conflict-resolution",
    element: <ConflictResolution />,
  },
  {
    path: "/fairness",
    element: <Fairness />,
  },
  {
    path: "/payout",
    element: <Payout />,
  },
  {
    path: "/registeration-kyc-bank-details",
    element: <RegisterationKycBD />,
  },
  {
    path: "/be-responsible",
    element: <ResponsibleGambling />,
  },
  {
    path: "/self-exclusion",
    element: <SelfExclusion />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/antimoney",
    element: <AntiMoneyLau />,
  },
  
]);

export default router;
