import { useRef, useState } from "react"
export default function BmiCalculate(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const[BMI,setBmi] = useState(0);
    const[BmiText,setBmiText] = useState("");
    function handleClick(){
        let weight = W_input.current.value;
        let height = H_input.current.value/100;
        setBmi(weight/Math.pow(height,2));
        if(BMI < 18.5){
            setBmiText("UnderWeight")
        }
        else if(BMI > 30){
            setBmiText("OverWeight")
        }
        else{
            if(BMI){
                setBmiText("Normal")
            }
            else{
                setBmiText("Please Input your Weight and Height")
            }

        }
    }

    return(<>
    <div style={{display: 'grid',justifyContent: 'center',alignItems: 'center',width:800,border: '5px dashed red',background:'#FEECEC'}}>
        <h1>* BMI Calculator *</h1>
        <p>Weight :<input ref={W_input} type="number" placeholder="Input your weight"></input> kg.</p>
        <p>Height :<input ref={H_input} type="number" placeholder="Input your height"></input> cm.</p>
        <div style={{display: 'grid',justifyContent: 'center',alignItems: 'center',width:'auto',marginTop:20}}>
            <button onClick={handleClick} style={{height:30,width:100,alignSelf:'center'}}>Calculate!</button>
            <p>BMI value : {BMI.toFixed(2)}</p>
            <h1>{BmiText}</h1>
        </div>
        
    </div>
    </>);
}