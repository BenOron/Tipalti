


 //Add new entry to localStorage
 export const addTolocalStorage = (inputField,isValdate) => {
    let localdb = [];
    if (!localStorage.getItem("inputs")) {
        localStorage.setItem("inputs", "[]");
        localdb = JSON.parse(localStorage.getItem("inputs"));      
     }else{         
        localdb = JSON.parse(localStorage.getItem("inputs"));      
     }

    localdb.push({    
      id: new Date().getMilliseconds(),    
      isValdate: isValdate,
      label:inputField.label,
      value:inputField.value
    });

    localStorage.setItem("inputs", JSON.stringify(localdb));
  };