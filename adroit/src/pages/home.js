import React from "react";
import Header from "./../components/Header"
export default function home(){
    return(
        <div>
        <div>
            <Header/>
        </div>
         <div>
         <img width='1550px' src="net.png" alt="net"></img>
         </div>
         <div class="row">
  <div class="column">
    <img src="elephant.png" alt="Snow" style="width:100%"/>
  </div>
  <div class="column">
    <img src="elephant.png" alt="Forest" style="width:100%"/>
  </div>
  <div class="column">
    <img src="elephant.png " alt="Mountains" style="width:100%"/>
  </div>
</div>
         </div>
         
    );
};