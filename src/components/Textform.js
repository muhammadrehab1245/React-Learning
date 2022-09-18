import React,{useState} from 'react';

const Textform = (props) => {
    const [text, settext] = useState("Enter Text Here");
    
   // settext('Text Is Set')
    const change=(event)=>{
     //   console.log(data)
        settext(event.target.value)
       
    }

    const upclick=()=>{
        settext(text.toUpperCase())
        props.showalert('Converted Into Upper Case',"success")

    }

    const downclick=()=>{
        settext(text.toLowerCase())
        props.showalert('Converted Into Lower Case',"danger")

    }

    const copy=()=>{
        navigator.clipboard.writeText(text).then(()=>{

            props.showalert('Text copied',"primary")
        })
    }

    const fontfam1=()=>{
        const d=document.querySelector('#idbox')
   d.style.fontFamily='Franklin Gothic Medium'

    }

    const fontfam2=()=>{
        const d=document.querySelector('#idbox')
        d.style.fontFamily='Lucida Sans'
       
    }

    const fontfam3=()=>{
        const d=document.querySelector('#idbox')
        d.style.fontFamily='Candara'
    }

    const len=(text)=>{
        let t=text.trim().split(' ')
        console.log(t)
        let words=0;
        for (const e of t) {
            if(e!==''){
                words+=1
            }
            else{
                continue;
            }
        }
       return words;
   
    }

    
      
    return (<div>
    
    
<div className="mb-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
  <textarea  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} value={text}  onChange={change} className="form-control" id="idbox" rows="8"></textarea>
  <button type="button"onClick={upclick} className={`btn btn-${props.mode} my-4`}>Uppercase</button>
  <button type="button"onClick={downclick} className={`btn btn-${props.mode} mx-2 my-4`}>Lowercase</button>
  <button type="button"onClick={copy} className={`btn btn-${props.mode} mx-2 my-4`}>Copy</button>
  <button className={`btn btn-${props.mode} mx-2 my-4`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
   Change fonts
  </button>

<div className="collapse" id="collapseExample">
  <div className="card card-body">
  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button id='f1' type="button" onClick={fontfam1} className="btn btn-light">Franklin Gothic Medium</button>
  <button id='f2' type="button" onClick={fontfam2}  className="mx-4 btn btn-light">Lucida Sans</button>
  <button id='f3' type="button" onClick={fontfam3} className="mx-4 btn btn-light">Candara</button>
</div>
  </div>
</div>
</div>
<p>Text Length : {text.length}</p>
{/* <p>{parseInt(text.split(" ").length)-1} words and {text.length}  characters</p> */}
 <p>{len(text)} words and {text.length}  characters</p> 

    </div>);

}



export default Textform;