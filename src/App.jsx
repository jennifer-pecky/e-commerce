import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CheckoutBtn from './Component/checkoutBtn';
import Hello from './Component/Hello';
function App() {
  return (
    <div className='App'>
      <CheckoutBtn text="Checkout" btnStyle="btn btn-success" />
      <CheckoutBtn text="Login" btnStyle="btn btn-primary" />
      <CheckoutBtn text="sign up" btnStyle="btn btn-warning" />
      <Hello />
    </div>

  )
}

export default App
