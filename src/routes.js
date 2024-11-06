// src/routes.js
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import TraineeDashboard from './pages/Trainee/TraineeDashboard';
import ViewProfile from './pages/Trainee/ViewProfile';
import Courses from './pages/Trainee/Courses'; // Import the Courses page
import Certificates from './pages/Trainee/Certificates';
import Messages from './pages/Trainee/Messages';
import Calendar from './pages/Calendar'; // Adjust the path if necessary

const routes = [
  { path: '/', element: <Login /> }, 
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/dashboard', element: <TraineeDashboard /> },
  { path: '/ViewProfile', element:<ViewProfile/>},
  { path: '/courses', element: <Courses /> }, 
  { path: '/Certificates', element: <Certificates /> }, 
  { path: '/Messages', element: <Messages /> }, 
  { path: '/Calendar', element: <Calendar /> }, 

];

export default routes;
