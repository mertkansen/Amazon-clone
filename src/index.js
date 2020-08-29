import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './components/App/App'
import { BrowserRouter as Router } from 'react-router-dom'

// Context
import {
    StateProvider
} from './context/StateProvider'

import  {
    reducer, initialState
} from './context/reducer'


ReactDOM.render(
    <StateProvider reducer={reducer} initialState={initialState}>
        <Router>
            <App />
        </Router>
    </StateProvider>,
    document.getElementById('mertkan')
)