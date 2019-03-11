/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.type.includes(condition) === true;
    /*return element.type.indexOf(condition) !== -1;*/
  })
  return filter;
}

window.filterData = filterData;

 // sortby: que va a ordenar: por nombre
 // sortorder: de la a a la z
 
/* const sortData = (data, sortBy, sortOrder) => {
   let sort = data
    if( )

} */

/* CAMBIOS LORE */

const sortData = (data, sortBy, sortOrder) => {
  let orderAz = data.sort((a,b) => {
return a[sortBy].localeCompare(b[sortBy]);
    })
  if (sortOrder === "order-za"){
  orderAz.reverse();
  }
  return orderAz;
}

window.sortData = sortData;

//const computeStats = (data) => { // esto es para sacar el calculo
//window.computeStats = computeStats;
