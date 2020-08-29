import React from 'react'
import './Header.css'

import {
    Link
} from 'react-router-dom'

import {
    useStateValue
} from '../../context/StateProvider'

import {
    SearchIcon, ShoppingBasketIcon
} from '../indexer'

import {
    auth
} from '../../firebaseConfig'

const Header = () => {
    const [{user, basket}] = useStateValue()

    const login = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img 
                    className='header__logo'
                    src='https://cdn.worldvectorlogo.com/logos/amazon-com-light.svg'
                    alt="amazon page logo" 
                />
            </Link>

            <div className='header__search'>
                <input className='header__searchInput' />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            <div className='header__nav'>
                <Link className='header__link' to={!user && '/login'}>
                    <div onClick={login} className='header__option'>
                        <span className='header__optionLineOne'>Hello {user?.email}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link className='header__link' to='/login'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <Link className='header__link' to='/login'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>

                <Link className='header__link' to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
