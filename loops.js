function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}

function whileLoop(num){
  while (num>0){
    num-=1
    console.log(num)
  }
  return "done"
}

function doWhileLoop(num){
  do {
    console.log("I run once regardless.")
  }while(incrementVariable()<num)
}

function incrementVariable() {
  i = i + 1;
  return i;
}