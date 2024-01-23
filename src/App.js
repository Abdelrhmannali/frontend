import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/aboutUs/AboutUs';
import Footer from './Components/footer/Footer';
import FluidExample from './Components/header';
import Login from './pages/login/Login';
import OTPVerification from './pages/login/Verify';
import SignUpForm from './pages/singup/Sign';
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
        element: <Login />,
      },
      {
        path: "/verify",
        element: <OTPVerification />,
      },
      {
        path: "/sign",
        element: <SignUpForm />,
      },
     
     
    ],
  },
]);

export default router;
