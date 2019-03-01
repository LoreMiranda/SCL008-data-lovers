/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.type.includes(condition) === true;
  })
  return filter;
}

window.filterData = filterData;

const sortData = (data, sortBy, sortOrder) => {
   let sort = data
    if( )

}

// const filterData = (data, condition) => {

//}

//const sortData = (data, sortBy, sortOrder) => {

//}

//const computeStats = (data) => {

//}

//window.filterData = filterData;
//window.sortData = sortData;
//window.computeStats = computeStats;

