/* Manejo del DOM */
const data = POKEMON.pokemon; //constante para manipular la data
const containerRoot = document.getElementById("root"); //todo lo que haga en el dom se muestra en el html por el id root
const showData = (data) => { //funcion para mostrar la data

data.forEach(element => {
//console.log(element.name)    
containerRoot.innerHTML += `<p>${element.name}</p>
<img class= "pokeImage" src="${element.img}" alt="${element.name}">`  
    })
}
//filtrar
document.getElementById("pokemontype").addEventListener("change", () => {
    let condition = document.getElementById("pokemontype").value;
    let result = window.filterData(data, condition);
//console.log(result)
    containerRoot.innerHTML = "";
    

    result.forEach(element => {
        containerRoot.innerHTML += `<p>${element.name}</p>
        <img class= "pokeImage" src="${element.img}" alt="${element.name}">  `

    })
});

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
*/


window.onload = showData(data); //no se ejecuta la función hasta que se asegure que esta todo listo