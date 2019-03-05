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
/*
const data = POKEMON.pokemon; //constante para manipular la data
const containerRoot = document.getElementById("root"); //todo lo que haga en el dom se muestra en el html por el id root
const showData = (data) => { //funcion para mostrar la data



//BOTONES

const btnObjetos = document.getElementsByTagName("button")[0];
const btnPokedex = document.getElementsByTagName("button")[1];
const btnMapa = document.getElementsByTagName("button")[2];
const btnEventos = document.getElementsByTagName("button")[3];


//INICIO BOTON POKEDEX Y TEMPLATE DE LA DATA
btnPokedex.addEventListener("click", () => {
document.getElementById("root").innerHTML = "";

data.forEach(element => {
  containerRoot.innerHTML += `<div class="card-with-modal">
  <div class="card">
      <img src=${element.img} class="card-img-top" alt="${element.name}">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p> Tipo: ${element.type}</p>
        <p class="card-text">Débil contra: ${element.weaknesses.join(", ")}</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter${element.id}">
            Más Info!
          </button>
          
          
          <div class="modal fade" id="exampleModalCenter${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="card mb-3" style="max-width: 540px;">
                      <div class="row no-gutters">
                        <div class="col-md-4">
                          <img src=${element.img} class="card-img" alt="${element.name}">
                        </div>
                        
                        
                        <div class="card-inside-modal">
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text">Tipo: ${element.type}</p>
                            <p class="card-text">Debilidades: ${element.weaknesses.join(", ")}</p>
                            <p class="card-text">Aparece en huevos de: ${element.egg}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>`    
      })
  });
  //FIN BOTON POKEDEX Y TEMPLATE DE LA DATA

  //INICIO DE FILTRO POR TIPO
  document.getElementById("pokemontype").addEventListener("change", () => {
      let condition = document.getElementById("pokemontype").value;
      let result = window.filterData(data, condition);
      containerRoot.innerHTML = "";
      
      result.forEach(element => {
          containerRoot.innerHTML += `<div class="card-with-modal">
          <div class="card">
              <img src=${element.img} class="card-img-top" alt="${element.name}">
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p> Tipo: ${element.type}</p>
                <p class="card-text">Débil contra: ${element.weaknesses.join(", ")}</p>
                <button type="button" class="btn-primary" data-toggle="modal" data-target="#exampleModalCenter${element.id}">
                    Más Info!
                  </button>
                                    
                  <div class="modal fade" id="exampleModalCenter${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                          <div class="card mb-3" style="max-width: 540px;">
                              <div class="row no-gutters">
                                <div class="col-md-4">
                                  <img src=${element.img} class="card-img" alt="${element.name}">
                                </div>
                                                                
                                <div class="card-inside-modal">
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <h5 class="card-title">${element.name}</h5>
                                    <p class="card-text">Tipo: ${element.type}</p>
                                    <p class="card-text">Debilidades: ${element.weaknesses.join(", ")}</p>
                                    <p class="card-text">Aparece en huevos de: ${element.egg}</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`    
      })
  })
};

//INICIO ORDEN DE POKEDEX POR ABC Y AL REVES



// document.getElementById("pokemonOrder").addEventListener("change", () => {
// let condition2 = document.getElementById("pokemonOrder").value;
// let pokeOrder = window.sortData(data, condition2);
//       containerRoot.innerHTML = "";
  
      
//   pokeOrder.forEach(element => {
//       containerRoot.innerHTML += `<div class="card-with-modal">
//       <div class="card">
//           <img src=${element.img} class="card-img-top" alt="${element.name}">
//           <div class="card-body">
//             <h5 class="card-title">${element.name}</h5>
//             <p> Tipo: ${element.type}</p>
//             <p class="card-text">Débil contra: ${element.weaknesses.join(", ")}</p>
//             <button type="button" class="btn-primary" data-toggle="modal" data-target="#exampleModalCenter${element.id}">
//                 Más Info!
//               </button>
                                
//               <div class="modal fade" id="exampleModalCenter${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//                 <div class="modal-dialog modal-dialog-centered" role="document">
//                   <div class="modal-content">
//                       <div class="card mb-3" style="max-width: 540px;">
//                           <div class="row no-gutters">
//                             <div class="col-md-4">
//                               <img src=${element.img} class="card-img" alt="${element.name}">
//                             </div>
                                                            
//                             <div class="card-inside-modal">
//                             <div class="col-md-8">
//                               <div class="card-body">
//                                 <h5 class="card-title">${element.name}</h5>
//                                 <p class="card-text">Tipo: ${element.type}</p>
//                                 <p class="card-text">Debilidades: ${element.weaknesses.join(", ")}</p>
//                                 <p class="card-text">Aparece en huevos de: ${element.egg}</p>
//                                 <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                     <div class="modal-footer">
//                       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>`    
// })
// })


/*for (let i = 0; i < data.length; i++) {
    console.log(data[i].name)
    console.log(data[i].type)
    console.log(data[i].weaknesses)
    console.log(data[i].egg)
}
const filterData = [];
for (let i = 0; i < data.length; i++) {
}
/*const sortData = sort.data ( a,  b );
for (let i = 0; i < data.length; i++) {
    if (data.name[i] <= a){
    }
}

window.onload = showData(data); 
//no se ejecuta la función hasta que se asegure que esta todo listo
*/




