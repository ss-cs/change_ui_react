import './buttoncss.css'

const Button = (props) =>{
    
    const setStyle = ()=>{
        console.log("hello world");
        props.setStyleButt(props.name);
    }
    return(
        <input type = "button" name = {props.name} id="bold" 
                            className = "button" onClick={setStyle} value = {props.name}/>
    )
}

export default Button