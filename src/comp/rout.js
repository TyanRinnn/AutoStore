import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './home'
import Shop from './shop'
import Cart from './cart'
import Contact from './contact'
import Login from './login'
import Account from './account'

const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/account' element={<Account />}/>
    </Routes>
    </>
  )
}

export default Rout