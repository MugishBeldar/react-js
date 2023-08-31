import React from 'react';
import { Routes, Route } from 'react-router-dom'
//  commented for lazy loading 
// import About from './001ConfigureRouter/About';
import Home from './001ConfigureRouter/Home';
import Navbar from './002Links/Navbar';
import OrderSummary from './003NavigateProgramaticaly/orderSummary';
import NoMatch from './004NoMatchFound/NoMatch';
import Product from './005NestedRoute/Product';
import FeaturedProducts from './005NestedRoute/FeaturedProducts';
import NewProducts from './005NestedRoute/NewProducts';
import User from './006DinamicRouting/User';
import UserDetails from './006DinamicRouting/UserDetails';
import AdminUser from './006DinamicRouting/AdminUser';
import Profile from './007Profile.js/Profile';
const LazyAbout = React.lazy(() => import('./001ConfigureRouter/About'));

function App() {
  return (
    <div className="App">
      {/* 002 navigate using links  */}
      <Navbar />

      <Routes>
        {/* 001 configure Router  */}
        <Route path='/' element={<Home />} />
        <Route path='About' element={<LazyAbout />} />
        {/* 003 navigate programmatically */}
        <Route path='Order-summary' element={<OrderSummary />} />
        {/* 005 nested routes  */}
        <Route path='Products' element={<Product />}>
          {/* index routing when we hit product by default feature is displayed */}
          <Route index element={<FeaturedProducts />} />

          <Route path='Feature' element={<FeaturedProducts />} />
          <Route path='New' element={<NewProducts />} />
        </Route>
        {/* 006 dinamic routeing  */}
        <Route path='users' element={<User />}>
          {/* <Route path='users/1' element={<UserDetails />} />
        <Route path='users/2' element={<UserDetails />} />
        <Route path='users/3' element={<UserDetails />} /> */}

          {/* nested this route also  */}
          {/* <Route path='users/:userId' element={<UserDetails />} />
        <Route path='users/admin' element={<AdminUser />} /> */}
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<AdminUser />} />

        </Route>
        {/* 007 profile page  */}
        <Route path='Profile' element={<Profile />} />
        {/* 004 no match found  */}
        <Route path='*' element={<NoMatch />} />
      </Routes>

    </div>
  );
}

export default App;
