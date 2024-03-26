function isEven(num) {
    // Check if the number is disible by 2 using the modulo operator
    return num%2===0;
  }
  //Test cases
  console.log (isEven(4)); //Output:true
  console.log (isEven(7)); //Output:false
  console.log (isEven(-2)); //Output:true
