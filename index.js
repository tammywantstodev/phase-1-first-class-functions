function receivesAFunction(callback){
    callback();
  }
  let sayHi=function(){
    console.log("hi");
  }
  
  function returnsANamedFunction() {
    return function myName(){
      console.log("My name is Tamara");
    }
  }
  function returnsAnAnonymousFunction() {
    return function(){
      console.log("Cool jacket");
    }
  }
  