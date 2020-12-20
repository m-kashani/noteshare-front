import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { fadeIn ,fadeInLeft,fadeInRight} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { ArrowBack, ArrowBackIosTwoTone, ArrowForwardIosTwoTone, ArrowForwardTwoTone } from '@material-ui/icons';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
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
function RenderImages(props){
    const classes=useStyles();
    
    return(
        props.images.map((item,index)=>{
            if(index===props.slide){
                return(
                    <StyleRoot>
                        <div className="test" style={props.direction===true ? (styles.fadeInRight):(styles.fadeInLeft)}>
                            <Box style={
                                {
                                    width:'100%',
                                    height:'50vh',
                                    backgroundImage:`url(${item.url})`,
                                    backgroundRepeat:'no-repeat',
                                    backgroundPosition:'center center',
                                    
                                    backgroundSize:'cover',
                                }
                            }
                            boxShadow={3}
                            borderRadius='3vmin'
                            >
                             
                            </Box>
                        </div>
                      </StyleRoot>
                )
            }else{
                return('')
            }
        })
    )
}
function RenderCircles(props){
    return(
        props.images.map((item,index)=>{
            if(index === props.slide){
                return(
                    <FiberManualRecordIcon style={{ color: 'rgb(82,148,226)' }}/>
                )
            }else{
                return(<FiberManualRecordIcon onClick={()=>props.state(index)}/>)
            }
        })
    )
}
export function SlideShow(props){
    const images = props.images;
    const [slide,setSlide]=React.useState(0);
    const [direction,setDirection]=React.useState(true)
    const handleSlideForward=()=>{
        if(slide+1<images.length)
        {
            setDirection(true)
            setSlide(state=>state+1);
        }else{
            setSlide(0);
        }
        }
    const handleSlideBackward=()=>{
        if(-1<slide-1)
        {
            setDirection(false)
            setSlide(state=>state-1)
        }else{
            setSlide(images.length-1)
        }
    }
    
    useEffect(() => {
        let inter=setInterval(()=>{            
            setSlide(state=>{
                if(state+1<images.length)
                {
                    setDirection(true)
                    return(state+1)
                }else{
                    return 0;
                }
            });
        
        },6000)
        return () => {
            clearInterval(inter)
        }
    }, [])
    const classes=myStyles()
    if(images){
        return(
            <div style={{padding:'2vmin',border:"1px solid black",borderRadius:'3vmin',overflowX:'hidden'}}>
                <Grid dir='rtl' container>
                    <Grid style={{width:'5%'}} item>
                        <Button onClick={handleSlideForward} >
                            <ArrowForwardIosTwoTone/>
                        </Button>
                    </Grid>
                    <Grid style={{width:'90%'}} item>
                        <RenderImages direction={direction} slide={slide} images={props.images}/>

                    </Grid>
                    <Grid style={{width:'5%'}} item>
                        <Button onClick={handleSlideBackward} >
                            <ArrowBackIosTwoTone/>
                        </Button>
                    </Grid>
                    
                </Grid>
                <RenderCircles state={setSlide} slide={slide} images={props.images}/>
            </div>
        )
    }else{
        return ('هیچ عکسی وارد نشد')
    }
}
const useStyles=makeStyles({
    root:{
        padding:'3vmin',
        borderRadius:'3vmin',
        margin:'3vmin'
    }
})
const style={
    boxShadow:3
}