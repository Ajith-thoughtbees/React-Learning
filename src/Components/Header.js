const Header = () =>{
    let title = 'Thoughtbees';
    const arr = [1,2,3,4,5,6];
    const output = arr.map((x)=>{
        return x *2;
    })
    console.log(output)
    return (
      <div>{title}</div>  
    )
}
export default Header;