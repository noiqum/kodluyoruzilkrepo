const prompt = require('prompt-sync')();

const radius = prompt('What is your radius?');

function calculateCircumference() {
   
    return 2 * Math.PI * +radius;
  }

  const daireAlani=calculateCircumference()

  console.log("dairenin alanı:" , daireAlani)