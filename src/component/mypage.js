 import Button from "./button"
 import './home.css'
 import {useState} from 'react';

const MyPage = (props) =>{

    const mystyle = {
        fontWeight :"normal",
        fontStyle: 'normal',
        textDecorationLine: 'none',
      };
    let [style,updateStyle] = useState(mystyle);
    let [font,setFont]=useState(10);
    let [color,setColor]=useState('black');

    let tasks = [
        "Bold",
        "Italic",
        "Underline",
        "Font-size",
        "Color"
    ]
    
    let setStyle = (name) => {
        console.log(name);
        if(name === "Bold"){
            
            let value = ((style.fontWeight === "normal") ? "bold":"normal");
            updateStyle({...style, fontWeight: value });
            
         }
         else if(name === "Italic"){
            
            let value = ((style.fontStyle === "normal") ? "italic":"normal");
            updateStyle({...style, fontStyle: value });
         }
         else if(name === "Underline"){
            
            let value = ((style.textDecorationLine === "none") ? "underline":"none");
            updateStyle({...style, textDecorationLine: value });
         }
         else if(name === "Font-size"){
             if(!font){
                alert('enter valid number');
                return
             }
            let value = font;
            updateStyle({...style, fontSize: value });
            setFont('');
         }
         else if(name === "Color"){
            if(!color){
                alert('enter Color');
                return
             }
            let value = color;
           
            updateStyle({...style, color: value });
            setColor('');
         }
       
    }
    let updateFont = (e)=>{
        if(parseInt(e.target.value)){
            setFont(parseInt(e.target.value));
        }
        else{
            alert('enter valid number');
            setFont('');

        }

    }
    let updateColor = (e)=>{
        setColor(e.target.value);
    }

    return(
        <>
            <div className="grid-container">
                
                <div className="grid-item">
                    <div className="button-container" >
                        {
                        tasks.map ((task) => (
                                <Button name = {task} setStyleButt={setStyle} />
                            )

                        )}
                        
                        <div>
                            <input type="text" className="fontSize" value = {font} onChange={e=>setFont (e.target.value)} name = "fontsize" onBlur={updateFont}  placeholder="Entere Font Size" />
                        
                            <input type="text" className="color" value = {color} onChange={e=>setColor
                                 (e.target.value)} name="color" onBlur={updateColor}  placeholder="Entere Color" />
                        </div>
                        
                    </div>
                    
                    
                </div>
                
                <div className="grid-item">
                    <div>
                        <p style={style} className ="zoom">{props.content}</p>
                    </div>
                </div>
                
            </div>
           
        </>
    )
}

export default MyPage