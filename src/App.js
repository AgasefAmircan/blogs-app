// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Outlet,
// } from "react-router-dom";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Single from "./pages/Single";
// import Write from "./pages/Write";
// import './assets/main.css'
// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };
// function App() {
//   return (
//     <div className="app">
//       <div className="container">
//         <Router>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route path="/" element={<Home />} />
//               <Route path="/post/:id" element={<Single />} />
//               <Route path="/write" element={<Write />} />
//             </Route>
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </Router>
//       </div>
//     </div>
//   );
// }

// export default App;
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './assets/main.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;


