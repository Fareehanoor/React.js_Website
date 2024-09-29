import { createRoutesFromElements, RouterProvider } from "react-router-dom";
import { createBrowserRouter  , Route} from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import User from "./Components/User";
import Github , {githubLoader} from "./Components/Github";

// const router = createBrowserRouter([
//   { path: "/", element: <RootLayout /> , children: [
//     { path: "" , element : <Home /> },
//     { path: "about" , element : <About />},
//     { path: "contact" , element : <Contact />}
//   ] },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<RootLayout />}>
     <Route path= '' element={<Home />} />
     <Route path= 'about' element={<About />} />
     <Route path= 'contact' element={<Contact />} />
     <Route path= "user/:userId" element={<User />} />
     <Route path = "github" loader={githubLoader} element={<Github />} />
   </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
