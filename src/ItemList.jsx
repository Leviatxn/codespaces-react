import { useEffect, useState } from "react";

function Item({name,isPacked}){
    return(<li>{name} {isPacked && '✅'}</li>)
}

export default function ItemList(){
    const [keyWord,setKeyword] = useState("");
    useEffect(()=>{
        console.log("this comp is loaded")

        return()=>{
            alert("comp loaded")
        }
    })
    const items=[
        {name :"Sunglasses",isPacked:true},
        {name :"Sunblock",isPacked:false},
        {name :"Swimming suit",isPacked:true},
        {name :"Towel",isPacked:false},
        {name :"Powerbank",isPacked:true}
        ]
    const filterList = items.filter(i=>i.name.toLowerCase().includes(keyWord.toLowerCase()))
    const itemList = filterList.map( i =><Item key={i.name} name={i.name} isPacked={i.isPacked}/>);
    return(
        <div>
        <input type="text" value={keyWord} onChange={e=>setKeyword(e.target.value)}></input>
        <ui>
            {itemList}

        </ui>
        </div>
    );
}