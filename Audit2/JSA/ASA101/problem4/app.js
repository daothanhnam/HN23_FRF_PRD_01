function mul(num1, num2) {

  
  var product = BigInt(num1) * BigInt(num2);
  return product.toString();
}

var num1 = 11234567811;
var num2 = 123; 

var result = mul(num1,num2); 
console.log(result);