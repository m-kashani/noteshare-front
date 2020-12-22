import { makeStyles } from "@material-ui/core";

export const myStyles=makeStyles({
    root:{
        backgroundColor:'rgb(56,60,74)',
        fontColor:'rgb(82,148,226)',
        padding:'2vmin',
        
    },
    innerRoot:{
        margin:'3vmin',
        backgroundColor:'rgb(64,69,82)'
    },
    buttonSelected:{
        border:'1px solid rgb(82,148,226)',
        margin:'3vmin'
    },
    boldFonts:{
        color:'rgb(82,148,226)'
    },
    descriptionFonts:{
        color:'rgb(124,129,140)'
    },
    warningFonts:{
        color:'rgb(255,111,89)'
    }
})
export const api="http://localhost:5000/api"
export const fetchapiWithotToken=(data,action)=>{
    return(
        fetch(api,
            {
                headers: {
                    "Content-Type":"application/json",
                    'action':action
                },
                method: "POST",
                mode: "cors",
                body:JSON.stringify(data)
            })
        .then(response => response.json())
        .then(response => response)
    )
}