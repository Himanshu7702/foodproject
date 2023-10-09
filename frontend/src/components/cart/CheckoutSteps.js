import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({delivery,confirmOrder,payment}) => {
  return (
    <div>
      <div className='checkout-progress d-flex justify-content-center mt-5'>
        {/* Delivery */}
        {delivery?(
            <Link to="shipping" className='float-right'>
                <div className='triangle2-active'></div>
                <div className='step active-step'>Address</div>
                <div className='triangle-active'></div>
            </Link>
        ):(
            <Link to="#!" disabled>
                <div className='triangle2-incomplete'></div>
                <div className='step incomplete-step'>Address</div>
                <div className='triangle-incomplete'></div>
            </Link>
        )}
        {/* Confirm Order */}
        {confirmOrder?(
            <Link to="/order/confirm" className='float-right'>
                <div className='triangle2-active'></div>
                <div className='step active-step'>Confirm Order</div>
                <div className='triangle-active'></div>
            </Link>
        ):(
            <Link to="#!" disabled>
                <div className='triangle2-incomplete'></div>
                <div className='step incomplete-step'>Confirm Order</div>
                <div className='triangle-incomplete'></div>
            </Link>
        )}

        {/* Payment */}
        {payment?(
            <Link to="/payment" className='float-right'>
                <div className='triangle2-active'></div>
                <div className='step active-step'>Payment</div>
                <div className='triangle-active'></div>
            </Link>
        ):(
            <Link to="#!" disabled>
                <div className='triangle2-incomplete'></div>
                <div className='step incomplete-step'>Payment</div>
                <div className='triangle-incomplete'></div>
            </Link>
        )}
      </div>
    </div>
  )
}

export default CheckoutSteps
