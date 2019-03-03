/* Manejo del DOM */

const data = window.POKEMON.pokemon;
const container = document.getElementById('root');

const showData = (data) => {
  // nombre y foto
  data.forEach(element => {
    // data[i]
    container.innerHTML += `<img class="img" src="${element.img}" alt="${element.name}">
    <p> Número: ${element.num}</p>
    <p> Nombre: ${element.name}</p>
    <p> Tipo: ${element.type}</p>
    <p> Dulce: ${element.candy}</p>
    <p> Huevo: ${element.egg}</p>
    <p> Debilidad: ${element.weaknesses}</p>`
   
  })
  
}

// const showData = (data) => {
//   for (let i = 0; i < data.length; i++) {
//     container.innerHTML += `<p>${data[i].name}</p>
//                             <img class="image" src="${data[i].image}" alt="${data[i].name}">`
//   }
// }

document.getElementById('select-type').addEventListener('change', () => {
  let condition = document.getElementById('select-type').value;
  let result = window.filterData(data, condition);

  container.innerHTML = '';
  result.forEach(element => {
    container.innerHTML += `<img class="img" src="${element.img}" alt="${element.name}">
                            <p> Número: ${element.num}</p>
                            <p> Nombre: ${element.name}</p>
                            <p> Tipo: ${element.type}</p>
                            <p> Dulce: ${element.candy}</p>
                            <p> Huevo: ${element.egg}</p>
                            <p> Debilidad: ${element.weaknesses}</p>`
                            

  })

});



window.onload = showData(data);
