import React from 'react'
import './Checkout.css'

import {
    useStateValue
} from '../../context/StateProvider'

import {
    CheckoutProduct
} from '../indexer'

import {
    Subtotal
} from '../indexer'


const Checkout = () => {
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className='checkout__left'>
                <img 
                    className="checkout__banner"
                    src="https://www.hhpl.on.ca/en/rotatingimages/defaultInterior/defaultInteriorBanner.jpg" 
                    alt="book image" 
                />
                {
                    basket?.length === 0 ? (
                        <>
                            <h2>Your basket is empty</h2>
                            <p>You haven't got any items in your shopping basket.</p> 
                            <p>You should definitely add some!</p>
                        </>
                    ) : (
                        <div>
                            <h2 className='checkout__title'>Your Basket</h2>
                            {
                                basket?.map(
                                    item => <CheckoutProduct key={item.id} item={item} />
                                )
                            }
                        </div>
                    )
                }
            </div>
            {
                basket?.length > 0 && (
                    <div className='checkout__right'>
                        <Subtotal />
                    </div>
                )
            }
            
        </div>
    )
}

export default Checkout
