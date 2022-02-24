import React, { useState } from 'react'


export default function
    (props) {
        
    const [text, setText] = useState("");
    const [current, setCurrent] = useState('1')
  
//value for dropdown list
      const changevalue = (e) => {
          
        setCurrent(e.target.value); 
        // console.log(current);
    
    };



   // input value for text box
      const inval = (event) => {
        // console.log("hllllllllll");
        setText(event.target.value);
        // console.log(`${text} and ${setText}`);
    };
var Percentange;

    // convert to perctange
    const ctoper = () => {
      Percentange = (((text) - 0.5) * 10);
        console.log(Percentange);
        alert(Percentange);
        // console.log(text);
    //    return Percentange;
    }
    // convert to cpi/spi
    const pertoc = () => {
     var Cpi = (text / 10) + 0.5 ;
        console.log(Cpi);
        alert(Cpi);
    
        
    }

    const convert = () => {
        if(current == "1"){
            
            pertoc();
            // console.log(current);
            // console.log("first");
            
        }else
        {
            ctoper();
            // console.log(current);
            // console.log("second");
            
        } 
    }
    
    return (
        <div className='conatiner-fluid'>
            <div className="card text-center container w-75 my-5">
                <div className="card-header">
                    <h1>{props.title}</h1>
                </div>
                <div className="card-body ">

                    <div class="input-group w-lg-50 my-lg-1 my-3 d-flex justify-content-center">
                        <span class="input-group-text ">Enter the Value</span>
                        <input type="text" aria-label="First name" onChange={inval} class="form-control" />
                    </div>
                     <select className="form-select w-lg-25 my-4 container" onChange={changevalue}
        value={current} aria-label="Default select example">
                        <option selected value="1">CPI/SPI/CGPA</option>
                        <option value="2" >Percentange</option>
                            
                    </select> 
                    <a href="#" className="btn btn-primary " onClick={convert}>Convert</a>
                
                </div>
                <div className="card-footer  text-muted" id='card'>
                    <h1>Copyright ©<a href='http://vihang8101.github.io'> Vihang Patel</a></h1>
                </div>
            </div>
        </div>
    )
}
