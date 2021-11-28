import React from "react";
import {addTolocalStorage} from './mangeLocal';
const Inputs = (prpos) => {

  const {inpuType,inputName,inputLabel,inputValidatorFn,inpuValue,register,selectOption,checked,clear} = prpos;
 
  const validate = (val,lbl) => {
    if(inputValidatorFn && typeof(inputValidatorFn) === 'function'){
          let opts = {label:lbl,value:val};
          if(inputValidatorFn(val) === true){
              addTolocalStorage(opts,true);
          }else{
              addTolocalStorage(opts,false);
          }

        }
     }


  const getInputType =() => {

    const types = ['radio','checkbox','select'];
    if(types.includes(inpuType)){
      if(inpuType === 'checkbox' || inpuType === 'radio'){
        return (<input  {...register(inputName, {validate:(checked)=>validate(checked,inputLabel)})} type={inpuType} checked={checked} name={inputName}/>)
      }else if(inpuType === 'select'){
         return ( <select {...register(inputName, {validate:(value)=>validate(value,inputLabel)})} name={inputName} >
               {selectOption && selectOption.length > 0 && selectOption.map((optionf,i) => {
                return (<option key={i} value={optionf}>{optionf}</option>)
        })}
        </select>)
      }
    }else{
     return ( <input {...register(inputName, {validate:(value)=>validate(value,inputLabel)})} type={inpuType} name={inputName}  defaultValue={inpuValue}/>)
    }
  }   


  return ( <>
      <label>
        {inputLabel}
         {getInputType()}
      </label>  
    </>
  );
};


export default Inputs;
