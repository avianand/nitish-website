import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <header className="App-header absolute top-0 z-10 w-full">
        <Navbar />
      </header>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "tours",
        element: <Tours />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      // {
      //   path: "dashboard",
      //   element: <Dashboard />,
      //   loader: ({ request }) =>
      //     fetch("/api/dashboard.json", {
      //       signal: request.signal,
      //     }),
      // },
      // {
      //   element: <AuthLayout />,
      //   children: [
      //     {
      //       path: "admin-nitish",
      //       element: <Login />,
      //       loader: redirectIfUser,
      //     },
      //     {
      //       path: "logout",
      //       action: logoutUser,
      //     },
      //   ],
      // },
    ],
  },
]);
function App() {
  return (
    <div className="App relative font-primary">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
