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
// ------------------------------------------------------

// import { createContext,useState} from "react";
// import child from "./components/child";
//      export var GlobalInfo = createContext;
//     function app(){
//         var [color, Setcolor] = useState("green");
//         return(
//             <GlobalInfo.provider value = {{appcolor:color}}> // 1{} js k iye use ho raha ha or 1 {} obect k liye use ho raha ha...
//                 <child>
//                 <h1>app component</h1>
//             </child>
                
            
//             </GlobalInfo.provider>
//         );
//     }
//    -----------------------------------------------
import about from "./components/about";
import home from "./components/home";
import forms from "./components/forms";
import {BrowserRouter,Route, Routes,link,NavLink,useParams} from 'react-router-dom';
 function app(){
   function user(){
      // console.log(useParams())
      let {id} = useParams() // in {id} is use as a object
      return<h2>
         userId:{id}
      </h2>
   }
   function NotFound(){
      return(
         <h2>
            404 page not found
         </h2>
      )
   }
    return(
     <>
      <BrowserRouter>
      <nav>
         {/* <a href="/home"></a>  a tag se buffering hotii haa refresh krta ha .
             <a href="/about"></a>
                 <a href="/forms"></a> */}
          {/* <link to="/">home</link> // link tag ma css ni apply hotii us k liye ham nav link use krte hain.....this is use to stop bufring.
          <link to="/">about</link> 
          <link to="/">forms</link>        */}
          <NavLink to="/">about</NavLink> // navlink se hm css de skte hain....
          <NavLink to="/">forms</NavLink> 
           <NavLink to="/">forms</NavLink> 
            <NavLink to="/user/10">user</NavLink> 
      </nav>
      <Routes>
        <Route path="/" element={<home/>}/>       // in this / for home page.this is like props. home ko call krne k liye usko {} ma lekh diya ha...
        <Route path="/ab" element={<about/>}/> // anchor tag ki jaga link use karen ge yeh nav link........
        <Route path="/fo" element={<form/>}/> 
        <Route path="/user/:id" element={<user/>}/>
         <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
       </>
    )
 }
 export default app;
