import React from 'react'
import './Product.css'

import {
    useStateValue
} from '../../context/StateProvider'

import {
    actionTypes
} from '../../context/reducer'

const Product = ({id, title, price, rating, img}) => {
    const [{}, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id: id, 
                title: title, 
                price: price, 
                rating: rating, 
                img: img
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>

                <p className='product__price'>
                    <small>＄</small>
                    <strong>{price}</strong>
                </p>

                <div className='product__rating'>
                    {Array(rating)
                            .fill()
                            .map(
                                _ => <p>⭐️</p>
                    )}
                </div>
            </div>

            <img
                src={img} 
                alt="" 
            />

            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
