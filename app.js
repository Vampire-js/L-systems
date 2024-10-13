
const rules = []

rules[0] = {
  a: "F",
  b: "   FF"
}

rules[1] = {
a: "X",
  b: " F-[[-X]+X]+F[+FX]+X-"
}


let sentence = "X"


let len = 5
let angle = Math.PI/2

function turtle(){
    background(51);
  len *= .8
  angle *= .9
  

  resetMatrix()
  translate(width/2, height)
  console.log("yes")
  
for(let i=0; i<sentence.length; i++){
    let curr = sentence[i]
    
    if(curr == "F"){
      stroke(255)
       line(0,0,0,-len)
      translate(0,-len)
    }else if(curr == "+"){
      rotate(angle *Math.random())
    }
  else if(curr == "-"){
      rotate(-angle*Math.random())
    }else if(curr == "["){
      push()
    }else if(curr == "]"){
      pop()
    }
}
  
 
}

function generate(){
  let newsentence = ""
  
for(let i=0; i<sentence.length; i++){
  let curr = sentence[i]
  let replaced = false
  for(let j=0; j<rules.length; j++){
     if(curr == rules[j].a){
       newsentence += rules[j].b
       replaced = true
     }
  }
  
  if(!replaced){
    newsentence += curr
  }
  
 
  
}
  sentence = newsentence
  
  turtle()
}


function setup() {
  createCanvas(innerWidth, innerHeight);
turtle()
 let btn = createButton("generate")
 btn.mousePressed(generate)
  }

