import { useDispatch, useSelector } from "react-redux"
import { addElement, reducerFunction } from "./app/features/addEle";
export default function DispatchAndSelect(){
const myState =  useSelector((state)=>{return state})
const dispatch = useDispatch()
// const[data,setData] = useState([1,2,3,4]);
  let click = (e) =>{
  let x = parseInt(prompt("Enter "))
//   console.log(e)
  dispatch( addElement(x))
 }
 
return(
    <>
    <button type='button' onClick={(e)=>{click(e);}}>Click!</button> 
    {
     myState.rootReducer.value.map((cv,idx,arr)=>{
          
       })
    } 
    <h1>{ myState.rootReducer.value}</h1>
     </>
)
}