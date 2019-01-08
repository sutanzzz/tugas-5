import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { firebaseApp } from './firebase'

import BecomeAHost from './pages/becomeahost'
import SignIn from './pages/login'
import SignUp from './pages/signup'
import Help from './pages/help'

firebaseApp.auth().onAuthStateChanged( user => {
    if (user) {
        console.log('user has signed in or up', user);
    } else {
        console.log('user has signed out or still need to sign in.')
    }
})

const Router = () => (
    <Switch>
        <Route  exact path='/' component={BecomeAHost} />
        <Route  path='/help' component={Help} />
        <Route  path='/signup' component={SignUp} />
        <Route  path='/login' component={SignIn} />
    </Switch>
)

export default Router;