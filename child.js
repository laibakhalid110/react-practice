import{usecontext} from "react";
import{Globalinfo} from "../app";
function child(){
    var {appcolor}=usecontext(Globalinfo)
    return(
        <>
        <h1 style ={{color:appcolor}}> this is a child component</h1>
        </>

    )
}
export default child;