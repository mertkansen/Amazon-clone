import React from 'react'
import './Home.css'

import {
    Product
} from '../indexer'

const Home = () => {
    return (
        <div className='home'>
            <img 
                className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" 
            />

            <div className='home__row'>
                <Product 
                    id={Math.random() * 1000}
                    title='The Protestant Ethic and the Spirit of Capitalism: and Other Writings (Penguin Twentieth-Century Classics)'
                    price='14.99' 
                    rating={4} 
                    img='https://images-na.ssl-images-amazon.com/images/I/81ed82gSxSL.jpg'
                />
                <Product 
                    id={Math.random() * 1000}
                    title='Capital: A Critique of Political Economy, Vol. 1' 
                    price='9.99' 
                    rating={5} 
                    img='https://images-na.ssl-images-amazon.com/images/I/517mMFmhhrL._SX348_BO1,204,203,200_.jpg'
                />
            </div>

            <div className='home__row'>
                <Product 
                    id={Math.random() * 1000}
                    title='Nuova edizione commentata delle opere di Dante' 
                    price='68.71' 
                    rating={5} 
                    img='https://images-na.ssl-images-amazon.com/images/I/41RGvAeIxeL._SX353_BO1,204,203,200_.jpg'
                />
                <Product 
                    id={Math.random() * 1000}
                    title='Invisible Cities by Calvino' 
                    price='12.99' 
                    rating={5} 
                    img='https://images-na.ssl-images-amazon.com/images/I/31WiGsdx4+L._SX319_BO1,204,203,200_.jpg'
                />
                <Product 
                    id={Math.random() * 1000}
                    title='Crime and Punishment' 
                    price='6.99' 
                    rating={5} 
                    img='https://images-na.ssl-images-amazon.com/images/I/41c99G44teL._SX311_BO1,204,203,200_.jpg'
                />
            </div>
            
            <div className='home__row'>
                <Product 
                    id={Math.random() * 1000}
                    title='War and Peace' 
                    price='16.08' 
                    rating={5} 
                    img='https://images-na.ssl-images-amazon.com/images/I/51vHm2jQHuL._SX329_BO1,204,203,200_.jpg'
                />
                <Product 
                    id={Math.random() * 1000}
                    title='A Tale of Two Cities' 
                    price='11.89' 
                    rating={5} 
                    img='https://images-na.ssl-images-amazon.com/images/I/51FY7MYyDwL._SX307_BO1,204,203,200_.jpg'
                />
            </div>

            <div className='home__row'>
                <Product 
                    id={Math.random() * 1000}
                    title='Merchant of Venice (2010 edition): Oxford School Shakespeare (Oxford School Shakespeare Series)' 
                    price='2.44' 
                    rating={5} 
                    img='https://images-na.ssl-images-amazon.com/images/I/419KzU7ejUL._SX391_BO1,204,203,200_.jpg'
                />
                <Product 
                    id={Math.random() * 1000}
                    title='A LA Recherche Du Temps Perdu' 
                    price='68.06' 
                    rating={5} 
                    img='https://images-na.ssl-images-amazon.com/images/I/41SLp2aaTFL._SX313_BO1,204,203,200_.jpg'
                />
                <Product 
                    id={Math.random() * 1000}
                    title='On the Docks in Braila' 
                    price='6.99' 
                    rating={5} 
                    img='https://m.media-amazon.com/images/I/41kx+JhjLFL.jpg'
                />
            </div>

            <div className='home__row'>
            <Product 
                    id={Math.random() * 1000}
                    title='Faust: A Tragedy, Parts One and Two, Fully Revised' 
                    price='19.00' 
                    rating={5} 
                    img='https://m.media-amazon.com/images/I/51bDS+B2FfL._SY346_.jpg'
                />
                <Product 
                    id={Math.random() * 1000}
                    title='Introduction to the Philosophy of History: with selections from The Philosophy of Right (Hackett Classics)' 
                    price='14.06' 
                    rating={5} 
                    img='https://images-na.ssl-images-amazon.com/images/I/41kFu7vuQ8L._SX304_BO1,204,203,200_.jpg'
                />
            </div>
        </div>
    )
}

export default Home
