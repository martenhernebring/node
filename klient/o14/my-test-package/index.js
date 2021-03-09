import lodash from 'lodash'

for (let i = 0; i< 100; i++){
  console.log(lodash.padStart(String(i), 5))
}