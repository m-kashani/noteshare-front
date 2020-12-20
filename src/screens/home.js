import { Box, Divider, makeStyles } from '@material-ui/core';
import React from 'react';
import { SlideShow } from '../components/slideshow';
import { Tabs } from '../components/tab';
import { myStyles } from '../global/gbvars';

const useStyle=makeStyles({
    root:{
        padding:'3vmin',
        borderRadius:'3vmin',
        margin:'3vmin'
    }
})
const style={
    boxShadow:3
}

export function Home(props){
    const classes=myStyles();
    const [background,setBackground]=React.useState([
        {title:'yek matn',url:'https://wallpapergram.ir/wp-img/WallpaperGram.IR_1561844284_z79913.jpg'},
        {title:'do matn',url:'https://www.mizanonline.com/files/fa/news_albums/630650/31717/resized/resized_2635074_518.jpg'},
        {title:'sematn',url:'https://cdn01.zoomit.ir/2019/1/18652e96-8c7d-4f88-a671-767bfe705751.jpg?w=768'}
    ]);
    return(
        <Box 
        className={classes.root}
        boxShadow={3}
        >
            <SlideShow images={background}/>
            <Divider/>
            <Tabs books={[
                {
                    image:'https://wallpapergram.ir/wp-img/WallpaperGram.IR_1561844284_z79913.jpg',
                    desc:'lerem ipsum'
            },
                {image:'https://wallpapergram.ir/wp-img/WallpaperGram.IR_1561844284_z79913.jpg',
                desc:'lerem ipsum'
            },
                {image:'https://wallpapergram.ir/wp-img/WallpaperGram.IR_1561844284_z79913.jpg',
                desc:'lerem ipsum'
            },
                {image:'https://wallpapergram.ir/wp-img/WallpaperGram.IR_1561844284_z79913.jpg',
                desc:'lerem ipsum'
            },
                {image:'https://wallpapergram.ir/wp-img/WallpaperGram.IR_1561844284_z79913.jpg',
                desc:'lerem ipsum'
            },
                {image:'https://wallpapergram.ir/wp-img/WallpaperGram.IR_1561844284_z79913.jpg',
                desc:'lerem ipsum'
            },
            ]}
            TabNames={[{name:'کتاب'}]}
            />
        </Box>
    )
}