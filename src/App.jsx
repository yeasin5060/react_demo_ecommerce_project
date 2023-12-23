import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from './Layouts/Main/Main';
import Home from './Pages/Home/Home';
import Todatdeals from './Pages/TodayDeals/Todatdeals';
import Registry from './Pages/Registry/Registry';
import Customerservice from './Pages/CustomerService/Customerservice';
import Giftcard from './Pages/GiftCard/Giftcard';
import Sell from './Pages/Sell/Sell';
import Sing from './Layouts/Header/Sing/Sing';
import Order from './Layouts/Header/Order/Order';
import Cart from './Layouts/Header/Cart/cart';
import All from './Pages/All/All';
import Login from './Layouts/Header/Login/Login';


function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main/>}>
        <Route path='/all' element={<All/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/todaydeals' element={<Todatdeals/>}/>
        <Route path='/registry' element={<Registry/>}/>
        <Route path='/customerservice' element={<Customerservice/>}/>
        <Route path='/giftcard' element={<Giftcard/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/sgin' element={<Sing/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider
    router={router}
    />
  )
}

export default App
