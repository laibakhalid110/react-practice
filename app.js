// import a from "./components/a";
// function app(){
//     var message = "laiba";
//     return(
//         <>
//         <a message = {message}/>
//         </>
//     );
// }
// export default app;


import { createContext,useState} from "react";
import child from "./components/child";
     export var GlobalInfo = createContext;
    function app(){
        var [color, Setcolor] = useState("green");
        return(
            <GlobalInfo.provider value = {{appcolor:color}}> // 1{} js k iye use ho raha ha or 1 {} obect k liye use ho raha ha...
                <child>
                <h1>app component</h1>
            </child>
                
            
            </GlobalInfo.provider>
        );
    }
   