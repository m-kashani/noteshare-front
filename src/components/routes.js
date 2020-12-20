import { Divider, makeStyles } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import { Home } from '../screens/home';
import TopNav, { TopNavRight } from './topnav';
const useStyles=makeStyles({
    root:{
        width: '50%'
    }
})
const screens=[
    {
        path: '/search',
        render:<h1>sdsa</h1>
    },
    {
        path:'/',
        render:<Home/>
    }
]
export function Routes(){
    const classes=useStyles();
    function HandleRoutes(){
        return(screens.map((i,k)=><Route exact path={i.path} >{i.render}</Route>))
        
    }
    return(
        <Router>
            
                    <TopNav/>
                
            <Divider />
            <HandleRoutes/>
        </Router>
    )
}