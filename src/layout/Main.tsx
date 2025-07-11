import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
