var mySound;
var analyzer;
var startingColor;
var endingColor;

function preload() {
    mySong=loadSound('assets/oblivion.mp3');
}

function setup() {
  createCanvas(400,400);
    mySong.play();
    
    
    // Two lines of magic code. the "analyzer" is a sort of "function" able to perform measurements on the song and give back volumes
    
    analyzer=new p5.Amplitude();

    analyzer.setInput(mySong);
    
    startingColor=color(76,0,247,10);
    endingColor=color(76,255,210,10);
    
    background(0);
    
}

function draw() {
  
     if(mySong.isPlaying()==true){
        var myVolume = analyzer.getLevel();
        
        //if(myVolume > 0.2){
        //  background(0);
            
        //} else {
        //    background(255);
     // }
        
         
        //text(myVolume,20,20);
        var mySize=map(myVolume,0,1,0,height);
        
        var ellipseColor = lerpColor(startingColor,endingColor,myVolume*3);
        
        stroke(ellipseColor);
         noFill();
        ellipse(width/2,height/2,mySize*3,mySize*3);
        
     }
    
}


function mousePressed() {
    
    // per fare pausa-play con il mouse
    if(mySong.isPlaying()==true){
     mySong.pause(); //pause si mette in pausa e poi riprende dal punto in cui era stata interrotta
        // mySong.stop();  //stop si ferma e se riparte, riparte da capo

    } else {
        mySong.play();
        // mySong.loop();   //loop la manda in loop senza alcuna altra azione

    }
   
}