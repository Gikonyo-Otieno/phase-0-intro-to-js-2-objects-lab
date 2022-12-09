const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
      };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
  
    return obj;
  }

function deleteFromEmployeeByKey(obj, key) {
   
   let newEmployee = {...obj};
   delete newEmployee[key];
   return newEmployee;
   
   
   
    // const newObj = { ...obj};

    //  delete newObj.key

    //  return newObj;
}
deleteFromEmployeeByKey(employee, streetAddress)

function destructivelyDeleteFromEmployeeByKey(obj, key) {

    delete obj[key];
    return obj;
    

 }
 destructivelyDeleteFromEmployeeByKey(employee, streetAddress)