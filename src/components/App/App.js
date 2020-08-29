import React, { useEffect } from 'react'
import './App.css'

import {
    auth
} from '../../firebaseConfig'

import {
    Switch, Route
} from 'react-router-dom'

import {
    Header, Login, Checkout, Home
} from '../indexer'

import { useStateValue } from '../../context/StateProvider'
import { actionTypes } from '../../context/reducer'

const App = () => {
    const [{user}, dispatch] = useStateValue()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: authUser
                })
            } else {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: null
                })
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div className="app">
            <Switch>
                
                <Route path='/checkout'>
                    <Header />
                    <Checkout />
                </Route>

                <Route path='/login'>
                    <Login />
                </Route>

                <Route path='/'>
                    <Header />
                    <Home />
                </Route>

            </Switch>

            
        </div>
    )
}

export default App
