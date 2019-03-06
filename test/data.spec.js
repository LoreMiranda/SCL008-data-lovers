global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('Funcion filterData', () => { // a quien voy a testear//
 const data = [
   {

     name: "Squirtle",
     type: "Water"

   },
   {
     name:"Dratini",
     type:"Dragon"

   }
 ]

 it('debería ser una función', () => { // que voy a testear o probar//
   assert.deepEqual ( typeof filterData, 'function'); //assert: es quien se encarga de evaluar que el test haga lo que tiene que hacer, metodos son una funcion, ejem deepequal, esa funcion la entrega chai, en chai se ven ejemplos//
 });

 it('deberia retornar el objeto "Squirtle" para primer pokemon tipo "Water"', () => {
   assert.deepEqual(window.filterData(data, "Water"), [{name:"Squirtle", type: "Water"}]);
 });
})