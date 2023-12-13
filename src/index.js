import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
       <App/>
     </BrowserRouter>

 
);

// reportWebVitals();


// for practice below upper for real projects


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
// import {BrowserRouter, RouterProvider, createBrowserRouter} from "react-router-dom"
// import Home from './components/Home/Home';
// import About from './components/About';
// import Login from './components/Login/Login';
// import Contact from './components/Contact';
// import User from './components/User';
// import Github from './components/Github';
// const router = createBrowserRouter([
//      {
//       path:"/",
//       element: <App />,
//       children:[
//         {
//           path : "/",
//           element : <Home />
//         },
//         {
//           path:"/about",
//           element:<About />
//         },
//         {
//           path:"/login",
//           element:<Login />
//         },
//         {
//           path:"contact",
//           element:<Contact />
//         },
//         {
//           path:"user",
//           element:<User />
//         },
//         {
//           path:"github",
//           element: <Github />
//         }
//       ]
//      }
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <>
//     <RouterProvider router={router}/>
//  </>
    

 
// );

// reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
// import {BrowserRouter} from "react-router-dom"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
 
// );

// export default index

