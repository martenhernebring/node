import lodash from 'lodash'
//Remove "type": "module", for CommonJS
//const lodash = require('lodash')

function printNumbers() {
  for (let i = 0; i< 100; i++){
    console.log(lodash.padStart(String(i), 5))
  }
}

export {
  printNumbers
}