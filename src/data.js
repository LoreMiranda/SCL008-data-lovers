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
// const sortData = (data, sortBy, sortOrder) => {
//   let orderAz = data.sort((a,b) => {
// return a[sortBy].localeCompare(b[sortBy]);
//     })
//   if (sortOrder === "order-za"){
//   orderAz.reverse();
//   }
//   return orderAz;
// }


//const computeStats = (data) => {

//}




//window.computeStats = computeStats;



window.filterData = filterData;
//window.sortData = sortData;
