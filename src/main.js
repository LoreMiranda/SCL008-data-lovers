
const data = window.POKEMON.pokemon; //constante para manipular la data
const containerRoot = document.getElementById("root"); //todo lo que haga en el dom se muestra en el html por el id root
const showData = (data) => { //funcion para mostrar la data

//BOTON POKEDEX DONDE SE MUESTRA LA DATA
const btnPokedex = document.getElementById("boton-pokedex");
btnPokedex.addEventListener("click", () => {
document.getElementById("root").innerHTML = "";
containerRoot.innerHTML = "";   
data.forEach(element => {
  containerRoot.innerHTML += 
  `<div class="col-md-3">
  <div class="card-with-modal">
  <div class="card">
      <img src=${element.img} class="card-img-top" alt="${element.name}">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">Número: ${element.num}</p>
        <p> Tipo: ${element.type}</p>
         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter${element.id}">
            Más Info!
          </button>
          
          <div class="modal fade" id="exampleModalCenter${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="card mb-4" style="width: 400px;">
                      <div class="row no-gutters">
                        <div class="col-md-6">
                          <img src=${element.img} class="card-img" alt="${element.name}">
                        </div>
                        
                        <div class="card-inside-modal">
                        <div class="col-md-12">
                          <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text">Número: ${element.num}</p>
                            <p class="card-text">Tipo: ${element.type}</p>
                            <p class="card-text">Caramelo: ${element.candy}</p>
                            <p class="card-text">Caramelos para evolución: ${element.candy_count}</p>
                            <p class="card-text">Aparece en huevos de: ${element.egg}</p>                      
                            <p class="card-text">Debilidades: ${element.weaknesses.join(", ")}</p>
              
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>`   
      })
  });
 
  //FUNCIÓN FILTRAR POR TIPO - FILTER DATA
  document.getElementById("pokemontype").addEventListener("change", () => {
      let condition = document.getElementById("pokemontype").value;
      let result = window.filterData(data, condition);
      containerRoot.innerHTML = "";
      
      result.forEach(element => {
          containerRoot.innerHTML += ` <div class="col-3">
          <div class="card-with-modal">
          <div class="card">
              <img src=${element.img} class="card-img-top" alt="${element.name}">
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">Número: ${element.num}</p>
                <p> Tipo: ${element.type}</p>
                <button type="button" class="btn-primary" data-toggle="modal" data-target="#exampleModalCenter${element.id}">
                    Más Info!
                  </button>
                                    
                  <div class="modal fade" id="exampleModalCenter${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document"
                          <div class="card mb-3" style="max-width: 500px;">
                              <div class="row no-gutters">
                                <div class="col-md-6">
                                  <img src=${element.img} class="card-img" alt="${element.name}">
                                </div>
                                                                
                                <div class="card-inside-modal">
                                <div class="col-md-12">
                                  <div class="card-body">
                                    <h5 class="card-title">${element.name}</h5>
                                    <p class="card-text">N° ${element.num}</p>
                                    <p class="card-text">Tipo: ${element.type}</p>
                                    <p class="card-text">Caramelos: ${element.candy}</p>
                                    <p class="card-text">Caramelos para Evolución: ${element.candy_count}</p>
                                    <p class="card-text">Aparece en huevos de: ${element.egg}</p>
                                    <p class="card-text">Debilidades: ${element.weaknesses.join(", ")}</p>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`    
      })
  })
};

/*ORDEN DE AZ Y ZA

 document.getElementById("pokemonOrder").addEventListener("change", () => {
 let condition = document.getElementById("pokemonOrder").value;
let pokeOrder = window.sortData(data, "pokemonChoose", condition);
     containerRoot.innerHTML = "";
      
  pokeOrder.forEach(element => {
      containerRoot.innerHTML += `<div class="card-with-modal">
      <div class="card">
          <img src=${element.img} class="card-img-top" alt="${element.name}">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p> Tipo: ${element.type}</p>
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
*/

window.onload = showData(data);
