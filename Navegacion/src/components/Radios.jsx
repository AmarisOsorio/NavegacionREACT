import React from "react";

const Radios = () => {
    
    return(

        <ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked></input>
    <label class="form-check-label" for="firstRadio">First radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio"></input>
    <label class="form-check-label" for="secondRadio">Second radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio"></input>
    <label class="form-check-label" for="thirdRadio">Third radio</label>
  </li>
</ul>
    );

}


export default Radios;  