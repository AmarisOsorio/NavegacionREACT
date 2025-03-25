import React from "react";

const Collapse = ({nombre}) => {
    
    return (

        <>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                {nombre}
          </button>
 
          <div>
           <div class="collapse collapse-horizontal" id="collapseWidthExample">
             <div class="card card-body">
                This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
             </div>
           </div>
         </div>
        </>
        
    );

}


export default Collapse;  