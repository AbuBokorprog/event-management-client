import Hero from '../components/home/Hero';
import FeaturedEvents from '../components/home/FeaturedEvents';
import Categories from '../components/home/Categories';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedEvents />
      <Categories />
    </div>
  );
};

export default Home;
