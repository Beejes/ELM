// import './styles/App.css'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Progress from './components/Progress'
// import Leaderboard from './components/Leaderboard'
// import Courses from './components/Courses'
// import Login from './components/Login'
// import Signup from './components/Signup'
// import About from './components/About'
// import User from'./components/User'
// import Results from './components/Results'
// import PrivateRoute from './components/PrivateRoute';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// function App() {
//   const router =createBrowserRouter([
//     {
//       path: "/",
//       element: <><Navbar/><Home/></>
//     },
//     {
//       path: "/login",
//       element:<><Navbar/><Login/></>
//     },
//     {
//       path: "/signup",
//       element:<><Navbar/><Signup/></>
//     },
//     {
//       path:"/about",
//       element: <><Navbar/><About/></>
//     },
//     {
//       path:"/progress",
//       element:<><Navbar/><Progress/></>
//     },
//     {
//       path:"/leaderboard",
//       element:<><Navbar/><Leaderboard/></>
//     },
//     {
//       path:"/courses",
//       element:<><Navbar/><Courses/></>
//     },
//     {
//       path:"/user/:username",
//       element:<><Navbar/><User/></>
//     },
//     {
//       path:"/results",
//       element:<><Navbar/><Results/></>
//     },
    
    

//   ]);

//   return (
//     <>
  
//     <RouterProvider router={router}/>
//     </>
    
//   )
// }

// export default App


import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Progress from './components/Progress';
import Leaderboard from './components/Leaderboard';
import Courses from './components/Courses';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import User from './components/User';
import Results from './components/Results';
import PrivateRoute from './components/PrivateRoute';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
             path: "/",
             element: <><Navbar/><Home/></>
           },
    {
      path: '/login',
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: '/signup',
      element: (
        <>
          <Navbar />
          <Signup />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    // {
    //   path: '/progress',
    //   element: (
    //     <>
    //       <Navbar />
    //       <Progress />
    //     </>
    //   ),
    // },
    // {
    //   path: '/leaderboard',
    //   element: (
    //     <>
    //       <Navbar />
    //       <Leaderboard />
    //     </>
    //   ),
    // },
    // {
    //   path: '/courses',
    //   element: (
    //     <>
    //       <Navbar />
    //       <Courses />
    //     </>
    //   ),
    // },
    {
      path: '/user/:username',
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
    {
      path: '/results',
      element: (
        <>
          <Navbar />
          <Results />
        </>
      ),
    },
    {
      element: <PrivateRoute />,
      children: [
        {
          path: '/progress',
          element: (
            <>
              <Navbar />
              <Progress />
            </>
          ),
        },
        {
          path: '/leaderboard',
          element: (
            <>
              <Navbar />
              <Leaderboard />
            </>
          ),
        },
        {
          path: '/courses',
          element: (
            <>
              <Navbar />
              <Courses />
            </>
          ),
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;