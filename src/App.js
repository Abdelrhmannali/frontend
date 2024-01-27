import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/aboutUs/AboutUs';
import Footer from './Components/footer/Footer';
import FluidExample from './Components/header/header';
import Login from './pages/login/Login';
import OTPVerification from './pages/login/Verify';
import SignUpForm from './pages/singup/Sign';
import AfterLogin from './Components/afterLogin/HeaderAfter';
import ServiceProvider from './Components/serviceProvider/ServiceProvider';
import AccountInfo from './Components/accountInfo/AccountInfo';
import EditInfo from './Components/editInfo/editInfo';
import PhoneNumber from './Components/phonenumber/PhoneNumber';
import VerifyPass from './Components/aboutUs/verifypass/VerifyPass';
import NewPass from './Components/newpass/NewPass';
import SecurityPage from './Components/SecurityPage/SecurityPage';

const Layout = () => {
  return (
    <div className="app">
      <FluidExample />
      {/* <Outlet /> */}
      <AboutUs />
      <Footer /> 
            
    </div>
  );
};
const Ac =()=>{
  return(
    <div className="appp">
      <AfterLogin />
      
    </div>


  );
};


const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children: [
      {
        path: "frontend",
        element: <Layout />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/verify",
        element: <OTPVerification />,
      },
      {
        path: "/sign",
        element: <SignUpForm />,
      },
      
      {
        path: "/afterlogin",
        element: <Ac />,
      },
      {
        path: "/accountinfo",
        element: <AccountInfo />,
      },
      {
        path: "/editinfo",
        element: <EditInfo />,
      },
      {
        path: "/phonenumber",
        element: <PhoneNumber />,
      },
      {
        path: "/verifypass",
        element: <VerifyPass />,
      },
      {
        path: "/newpass",
        element: <NewPass />,
      },
      {
        path: "/securitypage",
        element: <SecurityPage />,
      },
      {
        path: "/serviceprovider",
        element: <ServiceProvider />,
      },
      
      
     
     
    ],
  },
]);

export default router;
