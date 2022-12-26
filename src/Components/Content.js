
const Content = () =>{
    const handleSubmit = () =>{
        let name = ['Jack', 'Hari', 'Vino']
        let value = Math.floor(Math.random()*3)
        return name[value];
    }
    const handleSubmitName = () =>{
        console.log('Clicked submit button')
    }
    const handleSubmitName1 = (name) =>{
        console.log(`${name} clicked button2`)
    }
    const handleSubmitName2 = (e) =>{
        console.log(e.target.innerText)
    }
    return(
         <main>Hello {handleSubmit()}!
           <button style={Styles} onClick={handleSubmitName}>Click Me</button>
           <button style={Styles1} onClick={() =>handleSubmitName1('dave')}>Click Me</button>
           <button style={Styles2} onClick={(e)=>handleSubmitName2(e)}>Click Me</button>
         </main>       
    )
}

const Styles ={
    backgroundColor:'green',
    color:'#fff',
    width:'100px',
    height:'50px',
    border:' 1px solid blue',
}
const Styles1 ={
    backgroundColor:'red',
    color:'#fff',
    width:'100px',
    height:'50px',
    border:' 1px solid blue',
}
const Styles2 ={
    backgroundColor:'grey',
    color:'#fff',
    width:'100px',
    height:'50px',
    border:' 1px solid blue',
}
export default Content;