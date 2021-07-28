import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Top from './Top/Top';
import Navbar from './Navbar/Navbar.js';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Login from './components/pages/LogIn';
import Dashboard from './components/pages/Dashboard.js'
function App() {
    return (
        <Router>
            <Top />
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' component={Services} />
                <Route path='/products' component={Products} />
                <Route path='/contact-us' component={ContactUs} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/marketing' component={Marketing} />
                <Route path='/consulting' component={Consulting} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </Router>
    )
}
export default App;