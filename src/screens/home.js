import { Box, Button, Divider, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { SlideShow } from '../components/slideshow';
import { Tabs } from '../components/tab';
import { fetchapiWithotToken, myStyles } from '../global/gbvars';

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
    const [books,setBooks]=React.useState([
        {"_id" : 1, "0" : "", "author" : "", "pages" : 0, "" : "", "rank" : "", "littledesc" : "", "owner" : { "_id" : "1", "username" : "wizif" }, "price" : 0, "type" : "", "pic" : "" },
        {"_id" : 1, "0" : "", "author" : "", "pages" : 0, "" : "", "rank" : "", "littledesc" : "", "owner" : { "_id" : "1", "username" : "wizif" }, "price" : 0, "type" : "", "pic" : "" },
        {"_id" : 1, "0" : "", "author" : "", "pages" : 0, "" : "", "rank" : "", "littledesc" : "", "owner" : { "_id" : "1", "username" : "wizif" }, "price" : 0, "type" : "", "pic" : "" },

    ])
    const [type,setType]=React.useState('book')
    const handleShowBooks=(type)=>{
        switch (type) {
            case 'book':
                fetchapiWithotToken({limit:8,type:type},'find-books')
                .then(response=>{setType('book');setBooks(response);})
                break;
            case 'vcbook':
                fetchapiWithotToken({limit:8,type:type},'find-books')
                .then(response=>{setType('vcbook');setBooks(response);})
            case 'note':
                fetchapiWithotToken({limit:8,type:type},'find-books')
                .then(response=>{setType('note');setBooks(response);})
            default:
                break;
        }
        
    }
    React.useEffect(() => {
        handleShowBooks('book')
        return () => {
            
        }
    }, [])
    const history=useHistory()
    return(
        <Box 
        className={classes.root}
        boxShadow={3}
        >
            <SlideShow images={background}/>
            <Button className={classes.buttonSelected} onClick={()=>handleShowBooks('book')}>کتاب</Button>
            <Button className={classes.buttonSelected} onClick={()=>handleShowBooks('note')}>جزوه</Button>
            <Button className={classes.buttonSelected} onClick={()=>handleShowBooks('vcbook')}>کتاب صوتی</Button>
            <Divider/>
            <Tabs title={type} books={books}/>
        </Box>
    )
}