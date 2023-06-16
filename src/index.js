import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { About } from "./App";
import { Contact } from "./App";
import { Home ,History } from "./App";
import { BrowserRouter ,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  {/* we create routes using these. now if we want to navigate to the page rendered in app.js we just simply have 
  to add it here with the routes and we can access them through./{whatever is the pagename in our browser} */}
  <Route path="/" element={<App />}/>               
  <Route path="/about" element={<About />}>
     <Route path="history" element={<History/>} />          
      {/* this is done to use nested routing. Here in Path we omit the "/" because it is nested like about/history */}
      {/* we still won't be able to see any of the links for this in the webpage so our next step will be to 
      go to App.js and import Outlet from react-router-dom */}
  </Route>
  <Route path="/contact" element={<Contact />}/>
  <Route path="/home" element={<Home />}/>
  </Routes>
  </BrowserRouter>
 

);

