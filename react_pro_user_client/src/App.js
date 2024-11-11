import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import NotFound from './component/NotFound';
import Profile from './component/Profile';
import Dashboard from './component/Dashboard';
import Layout from './component/Layout';
import Logout from './component/Logout';
import Routing from './component/engPages/Routing';
import Config from './component/engPages/Config';
import Setting from './component/adminPages/Setting';
import Product from './component/Product';
function App() {
  return (
    <div className="App">
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                  {/* Default Route */}
                  <Route index element={<Home />} />
                  <Route path="/product" element={<Product />} />
                  {/* Other Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/logout" element={<Logout />} />
                  
                  <Route path="/routing" element={<Routing />} />
                  <Route path="/config" element={<Config />} />

                  <Route path="/setting" element={<Setting />} />

                  {/* Fallback Route */}
                  <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
          </Router>
        </main>
    </div>
  );
}

export default App;
