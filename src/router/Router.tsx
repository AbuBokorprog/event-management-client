import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyEvents from '../pages/MyEvents';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PrivateRoute from '../provider/PrivateRoute';
import EventError from '../pages/EventError';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <EventError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/events',
        element: (
          <PrivateRoute>
            <Events />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <MyEvents />
          </PrivateRoute>
        ),
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
