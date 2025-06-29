import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddEvent from '../pages/AddEvent';
import MyEvents from '../pages/MyEvents';
import About from '../pages/About';
import Contact from '../pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/add-event',
        element: <AddEvent />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/my-events',
        element: <MyEvents />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
