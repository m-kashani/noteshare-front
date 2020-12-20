import React from 'react';
import { fadeIn ,fadeInLeft,fadeInRight} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Box, Button, Grid } from '@material-ui/core';
import { myStyles } from '../global/gbvars';
const styles = {
    fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  fadeInRight:{
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  },
  fadeInLeft:{
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  }
}
function RenderTabs(props){
    const classes=myStyles();
    return(props.TabNames.map((item,index)=>{
        return(<Button className={classes.buttonSelected} onClick={()=>props.state(index)}>{item.name}</Button>)
    }))
}
function RenderBooks(props){
    return(props.books.map((item,index)=>{
        return(
            <Grid item>
                <Box borderRadius='3vmin' boxShadow={3} style={{
                    width:'30vmin',
                    height:'50vmin',
                    backgroundImage:`url(${item.image})`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    flexDirection:'row'
                }}>
                    
                </Box>
                <Box>
                    <p>
                        {item.desc}
                    </p>
                </Box>
            </Grid>
           
        )
    }))
}
function HandleRows(props){
    let a=[];
    for(let i=0;i<=Math.ceil(props.books.length/4);i++){
        a.push(i)
    }
    console.log(a,Math.ceil(props.books.length/4))
    return(
        a.map((item,index)=>{
            console.log(item)
            return(
                <Grid style={{justifyContent:'center'}} spacing={6} container>
                    <RenderBooks books={props.books.slice(index*4-4,index*4)}/>
                </Grid>
            )
        })
    )
    
}
export function Tabs(props){
    const TabName=props.TabNames;
    const books=props.books
    const classes=myStyles()
    return(
        <div>
            <Grid container>
                <RenderTabs TabNames={props.TabNames} books={props.books}/>

            </Grid>
            <Box className={classes.innerRoot} boxShadow={3} borderRadius='3vmin' 
            style={{padding:'3vmin'}}>
                <HandleRows books={props.books}/>
            </Box>
        </div>
    )
}