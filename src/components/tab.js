import React from 'react';
import { fadeIn ,fadeInLeft,fadeInRight} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Box, Button, Divider, Grid } from '@material-ui/core';
import { myStyles } from '../global/gbvars';
import { AddShoppingCartOutlined, AttachMoney, Email, MonetizationOnRounded, SpeakerPhone } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
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
function RenderBooks(props){
    const classes=myStyles();
    return(props.books.map((item,index)=>{
        return(
            <Grid item>
                <Box borderRadius='3vmin' boxShadow={3} style={{
                    width:'30vmin',
                    height:'50vmin',
                    backgroundImage:`url(${item.pic})`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    flexDirection:'row'
                }}>
                    
                </Box>
                <Box>
                    <p className={classes.boldFonts}>
                        {item.author}
                    </p>
                    <p className={classes.descriptionFonts} >
                       {item.name}
                    </p>
                    <Button variant='outlined' color='secondary'>
                        <p className={classes.warningFonts}>
                            تومان {item.price} <AddShoppingCartOutlined/>
                        </p>
                    </Button>
                    
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
    return(
        a.map((item,index)=>{
            console.log(item)
            return(
                <Grid style={{justifyContent:'left'}} spacing={6} container>
                    <RenderBooks books={props.books.slice(index*4-4,index*4)}/>
                </Grid>
            )
        })
    )
    
}
export function Tabs(props){
    const books=props.books
    const classes=myStyles()
    const history=useHistory();
    switch (props.title) {
        case 'book':
            return(
                <div>
                   
                    <Box className={classes.innerRoot} boxShadow={3} borderRadius='3vmin' 
                    style={{padding:'3vmin'}}>
                        
                        <Grid container>
                            <Grid style={{width:'80%'}} item>
                                <HandleRows books={props.books}/>
                            </Grid>
                            <Grid style={{width:'20%'}} item>
                                <center>
                                    لیست آخرین کتابها   
                                </center>
                                <p className={classes.boldFonts}>
                                    <Email style={{fontSize:'30vmin'}}/>
                                    <br/>
                                    مشخصات کتاب خود را برایمان ثبت کنید مانند عکس و توضیحات مورد نیاز
                                </p>
                                <p className={classes.warningFonts}>
                                    <SpeakerPhone style={{fontSize:'30vmin'}}/>
                                    <br/>
                                    پس از تایید ما در سایت قرار میگیرد
                                </p>
                                <p className={classes.descriptionFonts}>
                                    <MonetizationOnRounded style={{fontSize:'30vmin'}}/>
                                    <br/>
                                    خیلی راحت میتوانید کتاب هایی که نوشته اید یا دارید را بفروشید و کسب درآمد کنید
                                </p>
                            </Grid>

                        </Grid>
                        
                        <Button onClick={()=>history.push('/books')} className={classes.buttonSelected}>
                            <p className={classes.boldFonts}>
                                دیدن موارد بیشتر
                            </p>
                        </Button>

                    </Box>
                </div>
            )
        case 'vcbook':
            return(
                <div>
                    
                    <Box className={classes.innerRoot} boxShadow={3} borderRadius='3vmin' 
                    style={{padding:'3vmin'}}>
                        لیست آخرین کتابهای صوتی
                        <HandleRows books={props.books}/>
                        
                        <Button onClick={()=>history.push('/vcbooks')} className={classes.buttonSelected}>
                            <p className={classes.boldFonts}>
                                دیدن موارد بیشتر
                            </p>
                        </Button>

                    </Box>
                </div>
            )
        case 'note':
            return(
                <div>
                    
                    <Box className={classes.innerRoot} boxShadow={3} borderRadius='3vmin' 
                    style={{padding:'3vmin'}}>
                        لیست آخرین جزوه ها
                        <HandleRows books={props.books}/>
                        
                        <Button onClick={()=>history.push('/notes')} className={classes.buttonSelected}>
                            <p className={classes.boldFonts}>
                                دیدن موارد بیشتر
                            </p>
                        </Button>

                    </Box>
                </div>
            )
            
        default:
            break;
    }


    
}