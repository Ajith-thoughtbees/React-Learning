const Footer = () =>{
    let year = new Date();
const arr = [1,2,3,4,4]
function reduce(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum = arr[i];
    }
    return sum;
}
console.log(reduce(arr));
    return(
        <footer style={styles}>
            Copyright &copy; {year.getFullYear()}
        </footer>
    )
}
const styles = {
    backgroundColor: 'royalblue',
    color:'#000'
}
export default Footer;