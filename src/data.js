/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


const filterData = (data, condition) => {
  const filter = data.filter(element =>{
    return element.type.indexOf(condition) !== -1; 
    //return element.type.includes(condition) === true;
  })
  //console.log(filter)
  return filter;
  }


  

//const sortData = (data, sortBy, sortOrder) => {

//}

//const computeStats = (data) => {

//}

//window.data = data;

//window.sortData = sortData;
//window.computeStats = computeStats;



window.filterData = filterData;