import React from 'react'
import './CheckoutProduct.css'

import {
    useStateValue
} from '../../context/StateProvider'

import {
    actionTypes
} from '../../context/reducer'

const CheckoutProduct = ({item}) => {
    const {id, title, price, rating, img} = item

    const [{}, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: actionTypes.REMOVE_FROM_BASKET,
            item: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img src={img} alt="image" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>＄</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                                .fill()
                                .map(
                                    _ => <p>⭐️</p>
                    )}
                </div>

                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
