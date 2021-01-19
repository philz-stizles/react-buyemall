import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';
import ContactPage from './pages/contact/contact.component';
import DashboardPage from './pages/dashboard/dashboard.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './api/firebase/firebase.utils'

class App extends React.Component {
  authStateUnSubscription = null

  constructor(props) {
    super(props)

    this.state = {
      loggedInUser: null
    }
  }

  componentDidMount() {
    this.authStateUnSubscription = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth)
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data())
          this.setState({ loggedInUser: {
            id: snapShot.id,
            ...snapShot.data()
          }}, () => console.log(this.state))
        })

      } 
      
      this.setState({
          loggedInUser: userAuth
      })
    })
  }

  componentWillUnmount() {
    this.authStateUnSubscription()
  }

  render() {
    const { loggedInUser } = this.state
    return (
      <div>
        <Header loggedInUser={loggedInUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/sign-in' component={AuthPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/dashboard' component={DashboardPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;
