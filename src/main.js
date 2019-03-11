
const data = window.POKEMON.pokemon; //constante para manipular la data
const containerRoot = document.getElementById("root"); //todo lo que haga en el dom se muestra en el html por el id root
const showData = (data) => { //funcion para mostrar la data

//BOTONES

//const btnObjetos = document.getElementsByTagName("button")[0];
const btnPokedex = document.getElementById("boton-pokedex");
//const btnMapa = document.getElementById("boton-map");
//const btnEventos = document.getElementsByTagName("button")[3];

//INICIO BOTON POKEDEX Y TEMPLATE DE LA DATA
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
        <p> Tipo: ${element.type}</p>
        <p class="card-text">Débil contra: ${element.weaknesses.join(", ")}</p>
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
      // AGREGUÉ 3 DIVS 
      })
  });
  //FIN BOTON POKEDEX Y TEMPLATE DE LA DATA

  //INICIO DE FILTRO POR TIPO
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
                <p> Tipo: ${element.type}</p>
                <p class="card-text">Débil contra: ${element.weaknesses.join(", ")}</p>
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

/*INICIO ORDEN DE POKEDEX POR ABC Y AL REVES

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
*/


window.onload = showData(data);

/* INICIO BOTON OBJETOS*/
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

/*
//INICIO BOTON OBJETOS
btnObjetos.addEventListener("click", () => {
  document.getElementById("root").innerHTML = "";
  
  data.forEach(element => {
    containerRoot.innerHTML += `
    <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div>
`
*/

