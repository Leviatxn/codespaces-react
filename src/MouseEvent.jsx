export default function MouseEvent(){
    return(
        <>
        <div style={{alignSelf:"center"}}>
            <h1 onClick={e => alert("Mouse Clicked")}
                onMouseEnter={e => alert("MouseEntered")}
                onMouseOver={e => alert("MouseEntered")}
                onMouseDown ={e => alert("MouseEntered")}
                onMouseUp={e => alert("MouseEntered")}
                onMouseLeave={e => alert("MouseEntered")}
                >Click me</h1>

        </div>
        </>
    );
}