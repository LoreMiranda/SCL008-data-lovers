global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('Funcion filterData', () => {
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
  
  it('debería ser una función', () => {
    assert.deepEqual ( typeof filterData, 'function');
  });

  it('deberia retornar el objeto "Squirtle" para primer pokemon tipo "Water"', () => {
    assert.deepEqual(window.filterData(data, "Water"), [{name:"Squirtle", type: "Water"}]);
  });
})

  

