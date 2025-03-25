import React from "react";

const CheckBox = () => {
    
    return(

        <ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
    <label class="form-check-label" for="firstCheckbox">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
    <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"></input>
    <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
  </li>
</ul>

    );

}


export default CheckBox;  