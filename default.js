/**
  * default, param created in function args and passed a default value
  */

function foo(msg="I am default"){
  return msg;
}

foo(); // I am default

function foo2({ msg = "I am default" }){
  return msg;
}

foo2({}); // I am default

function foo3({ msg = "I am default" } = {}){
  return msg;
}

foo3(); // I am default
