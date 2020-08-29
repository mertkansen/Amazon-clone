
export const initialState = {
    user: null,
    basket: [
        {
            id: 1,
            title: 'The Protestant Ethic and the Spirit of Capitalism: and Other Writings (Penguin Twentieth-Century Classics)',
            price: '14.99',
            rating: 4,
            img: 'https://images-na.ssl-images-amazon.com/images/I/81ed82gSxSL.jpg'
        }
    ]
}

export const actionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
    SET_USER: 'SET_USER'
}

export const reducer = (state, action) => {
     switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.ADD_TO_BASKET:
             return {
                ...state, 
                basket: [...state.basket, action.item]
                }

        case actionTypes.REMOVE_FROM_BASKET:
            let newBasket = [...state.basket]

            const index = state.basket.findIndex(
                item => item.id === action.item
            )

            index >= 0 && newBasket.splice(index, 1)

            return {
                ...state,
                basket: newBasket
             }
             
        default: 
            return state   
    }
}