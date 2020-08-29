import React, { useEffect, useState } from 'react'
import './Subtotal.css'

import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../context/StateProvider'

const Subtotal = () => {
    const [{basket}] = useStateValue()

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0

        basket.map(
            item => {
                let val = parseFloat(item.price)
                total += val
            }
        )

        setTotal(total)
    }, [basket])

    return (
        <div>
            <p>
                Subtotal ({basket?.length} items): ＄{total}
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox' /> This order contains a gift
            </small>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
