var marks = [35,38,42,45,43,34,46,41,48,32];


function setup() 
{
  createCanvas(400,400);
  check();

}

function draw() 
{
  background(30);
}

function check(){
  for(i=0; i< marks.length; i++){
    if(marks[i]>=45){
      console.log("pass,",+marks[i]);
    }
    else{
      console.log("fail,",+marks[i]);
    }
  }

}
 

