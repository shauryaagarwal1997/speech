var bg1,bg1I,bg2,bg2I;
var appState=0;
var startBut;
var eng,hin,rus,chi,jap,spa,ara,ger;
var butBack,help;
var output1;
var output2;
var output3;
var output4;
var output5;
var output6;
var output7;
var output8;

var output1;
var output2;
var finalText1="";   
var finalText2="";   
var finalText3="";   
var finalText4="";   
var finalText5="";   
var finalText6="";   
var finalText7="";   
var finalText8="";   

var engChose=true;
var hindChose=true;
var spaChose=true;
var japChose=true;
var rusChose=true;
var chiChose=true;
var araChose=true;
var gerChose=true;

var pg2;

function preload(){
bg1=loadImage("whitte.jpeg");
bg2=loadImage("green.png");
}
function setup(){
createCanvas(displayWidth+0.3,displayHeight-180);

output1=createElement();
output2=createElement();
output3=createElement();
output4=createElement();
output5=createElement();
output6=createElement();
output7=createElement();
output8=createElement();


startBut=createButton('LET\'S START')
startBut.size(250,50);
startBut.style('background','yellow')

  eng=createButton('ENGLISH')
  eng.size(250,50);
  eng.style('background','yellow')

  hin=createButton('HINDI')
  hin.size(250,50);
  hin.style('background','yellow')

  chi=createButton('CHINESE')
  chi.size(250,50);
  chi.style('background','yellow')

  jap=createButton('JAPANESE')
  jap.size(250,50);
  jap.style('background','yellow')

  spa=createButton('SPANISH')
  spa.size(250,50);
  spa.style('background','yellow')

  rus=createButton('RUSSIAN')
  rus.size(250,50);
  rus.style('background','yellow')

  ara=createButton('ARABIC')
  ara.size(250,50);
  ara.style('background','yellow')

  ger=createButton('GERMAN')
  ger.size(250,50);
  ger.style('background','yellow')
 
  eng.hide();
  hin.hide();
  spa.hide();
  jap.hide();
  rus.hide();
  chi.hide();
  ara.hide();
  ger.hide();

  butBack=createButton('BACK');
  butBack.position(width/2-730,height/2-330);
  butBack.size(130,50);
  butBack.style('background','yellow');
 
  butBack.hide();

  help=createButton('HELP AND GUIDE');
  help.position(width/2-200,height/2+270);
  help.size(300,50);
  help.style('background','cream');
 
  help.hide();

  pg2=createButton('NEXT PAGE');
  pg2.position(width/2-150,785);
  pg2.size(250,50);
  pg2.style('background','cream');
 
  pg2.hide();

}
function draw(){
if(appState===0){
  background(bg1);
 startBut.position(width/2-180,height/2+30);
  textSize(60);
  fill("yellow");
  stroke("yellow")
  strokeWeight(2);
  text("BY USING THIS APP, YOU CAN CONVERT SPEECH",width/2-715,height/2-170)
  text("INTO TEXT IN 8 DIFFERENT LANGUAGES",width/2-580,height/2-70)

  startBut.mousePressed(()=>{
    appState=1;
  })
}
if(appState===1){
  background(bg1);
  startBut.hide();
  help.show();
  help.mousePressed(()=>{
    appState=19;
  })
  eng.show();
  hin.show();
  spa.show();
  jap.show();
  rus.show();
  chi.show();
  ara.show();
  ger.show();

  eng.position(width/2-330,height/2-50);
  hin.position(width/2-330,height/2+10);
  spa.position(width/2-330,height/2+70);
  ara.position(width/2-330,height/2+130);

  jap.position(width/2+30,height/2-50);
  rus.position(width/2+30,height/2+10);
  chi.position(width/2+30,height/2+70);
  ger.position(width/2+30,height/2+130);

  textSize(52);
  fill("yellow");
  stroke("yellow")
  strokeWeight(1.7);
  text("CHOOSE THE LANGUAGE IN WHICH THE SPEECH",width/2-635,height/2-230)
  text("IS TO BE TRANSLATED",width/2-330,height/2-150)

  eng.mousePressed(()=>{
    appState=2;
  })
  hin.mousePressed(()=>{
    appState=3;
  })
  rus.mousePressed(()=>{
    appState=4;
  })
  spa.mousePressed(()=>{
    appState=5;
  })
  chi.mousePressed(()=>{
    appState=6;
  })
  jap.mousePressed(()=>{
    appState=7;
  })
  ara.mousePressed(()=>{
    appState=8;
  })
  ger.mousePressed(()=>{
    appState=9;
  })

}
if(appState===2 || appState===3 || appState===4 || appState===5 || appState===6 || appState===7 || appState===8 || appState===9 || appState===19){
  eng.hide();
  hin.hide();
  spa.hide();
  jap.hide();
  rus.hide();
  chi.hide();
  ara.hide();
  ger.hide();
  help.hide();
}
if(appState===2){
  if(engChose){
    english();
  }
  engChose=false;

  background(bg1);
  textSize(52);
  fill("yellow");

  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                  TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" ENGLISH",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=11;
  })
  output1.show();
  output1.position(displayWidth/2-450,280);
 line(width/2-500,50,width/2-500,815)
}
if(appState===3){
  if(hindChose){
    hindi();
  }
  hindChose=false;

  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO            TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" HINDI",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=12;
  })
  output2.show();
  output2.position(displayWidth/2-450,280);
  line(width/2-500,50,width/2-500,815)

}
if(appState===4){
  if(rusChose){
    russian();
  }
  rusChose=false;
  
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                  TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" RUSSIAN",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=16;
  })
  output6.show();
  output6.position(displayWidth/2-450,280);
  line(width/2-500,50,width/2-500,815)

}
if(appState===5){
  if(spaChose){
    spanish();
  }
  spaChose=false;
  
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                  TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" SPANISH",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=13;
  })
  output3.show();
  output3.position(displayWidth/2-450,280);
  line(width/2-500,50,width/2-500,815)

}
if(appState===6){
  if(chiChose){
    chinese();
  }
  chiChose=false;
  
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                  TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" CHINESE",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=14;
  })
  output4.show();
  output4.position(displayWidth/2-450,280);
  line(width/2-500,50,width/2-500,815)
}
if(appState===7){
  if(japChose){
    japanese();
  }
  japChose=false;
  
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                     TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" JAPANESE",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=15;
  })
  output5.show();
  output5.position(displayWidth/2-450,280);
  line(width/2-500,50,width/2-500,815)
}
if(appState===8){
  if(araChose){
    arabic();
  }
  araChose=false;
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO               TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" ARABIC",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=17;
  })
  output7.show();
  output7.position(displayWidth/2-450,280);
  line(width/2-500,50,width/2-500,815)
}
if(appState===9){
  if(gerChose){
    german();
  }
  gerChose=false;
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                  TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" GERMAN",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=18;
  })
  output8.show();
  output8.position(displayWidth/2-450,280);
  line(width/2-500,50,width/2-500,815)
}

if(appState===11){
  engChose=true;
  butBack.hide();
appState=1;
  output1.hide();
}
if(appState===12){
  hinChose=true;
  butBack.hide();
appState=1;
  output2.hide();
}
if(appState===13){
  spaChose=true;
  butBack.hide();
appState=1;
  output3.hide();
}
if(appState===14){
  chiChose=true;
  butBack.hide();
appState=1;
  output4.hide();
}
if(appState===15){
  japChose=true;
  butBack.hide();
appState=1;
  output5.hide();
}
if(appState===16){
  rusChose=true;
  butBack.hide();
  appState=1;
  output6.hide();
}
if(appState===17){
  araChose=true;
  butBack.hide();
  appState=1;
  output7.hide();
}
if(appState===18){
  gerChose=true;
  butBack.hide();
  appState=1;
  output8.hide();
}
if(appState===19){
  background(bg2);
  help.hide();
  textSize(58);
  fill("red");
  stroke(0);
  strokeWeight(5);
  text("SPEECH TO TEXT APP - HELP / GUIDE",displayWidth/2-570,150);
  textSize(40)
  strokeWeight(2);
  fill("yellow")
  text("BY USING THIS APP, YOU CAN CONVERT YOUR SPEECH INTO 8 DIFFERENT ",width/2-750,230);
  text("LANGUAGES. THESE LANGUAGES ARE : ENGLISH, HINDI, SPANISH, JAPANESE,",width/2-780,300)
  text(" RUSSIAN, CHINESE, ARABIC AND GERMAN.",width/2-500,370)
  fill("lightblue");
  text("TO DISPLAY YOUR SPEECH AS TEXT, SPEAK SLOWLY AND CLEARLY",width/2-680,450);
  text("IN FRONT OF YOUR MICROPHONE.",width/2-450,520);
  fill("pink");
  text("YOU CAN COPY AND PASTE THE DISPLAYED TEXT TO ANY LOCATION.",width/2-680,600);
  fill("orange")
  text("INFORMATION ABOUT APPLYING PUNCTUATION MARKS IN THE TEXT HAS BEEN",width/2-760,670)
  text("GIVEN ON NEXT PAGE",width/2-250,740);
  fill("red");
  butBack.show();
  pg2.show();
  pg2.mousePressed(()=>{
  appState=20;
  })
  butBack.mousePressed(()=>{
    butBack.hide();
    appState=1;
    pg2.hide();
  })
} 
if(appState===20){
    background(bg2);
    pg2.hide();
    textSize(58);
    fill("red");
    stroke(0);
    strokeWeight(5);
    text("SPEECH TO TEXT APP - HELP / GUIDE",displayWidth/2-570,150);
    fill("lightblue");
    textSize(40);
    strokeWeight(2);
    text("IN THIS APP, PUNCTUATIONS CAN BE USED IN 4 LANGUAGES.",width/2-620,220);
    text("THEY ARE : ENGLISH, HINDI, SPANISH AND GERMAN",width/2-530,290);
    fill(0);
    text("ENGLISH ",width/2-810,360);
    text("HINDI ",width/2-760,520);
    text("SPANISH ",width/2-820,640);
    text("GERMAN ",width/2-820,750);
    fill("yellow");
    stroke("red");
    strokeWeight(3);
    text("COMMA, FULL STOP, EXCLAMATION MARK, QUESTION MARK, HYPHEN \nSEMICOLON, COLON, DOUBLE INVERTED COMMA, SINGLE INVERTED \nCOMMA, BRACKET OPEN, BRACKET CLOSE",width/2-600,360);
    fill("blue");
    stroke("black");
    strokeWeight(2);
    text("COMMA, POORNA VIRAM, EXCLAMATION MARK, QUESTION MARK, SEMICOLON, \nCOLON, DOUBLE INVERTED COMMA, SINGLE INVERTED COMMA",width/2-600,520);
    fill("yellow");
    stroke("red");
    strokeWeight(3);
    text("COMMA, FULL STOP, EXCLAMATION MARK, QUESTION MARK SEMICOLON, \nBRACKET OPEN, BRACKET CLOSE",width/2-600,640);
    fill("blue");
    stroke("black");
    strokeWeight(2);
    text("COMMA, FULL STOP, EXCLAMATION MARK, QUESTION MARK, HYPHEN \nSEMICOLON, DOUBLE INVERTED COMMA",width/2-600,750);

}
}
function english(){
  speechRec=new p5.SpeechRec('en-US',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);

  function gotSpeech(){                       
  var said=speechRec.resultString;                
  if(appState===2 && said != "coma" && said != "full stop" && said != "question mark" && said != "semicolon" && said != "colon" && said != "exclamation mark" && said != "double inverted comma" && said != "single inverted comma" && said != "hyphen" && said != "double inverted commas" && said != "single inverted commas" && said != "bracket open" && said != "bracket close"){                             
    finalText1=finalText1.concat(said+" ");       
  }
  if(said === "coma" || said === "comma"){
    finalText1=finalText1.concat(", ");    
  }
  if(said === "full stop"){
    finalText1=finalText1.concat(". ");    
  }
  if(said === "question mark"){
    finalText1=finalText1.concat("? ");    
  }
  if(said === "semicolon"){
    finalText1=finalText1.concat("; ");    
  }
  if(said === "colon"){
    finalText1=finalText1.concat(": ");    
  }
  if(said === "exclamation mark"){
    finalText1=finalText1.concat("! ");    
  }
  if(said === "double inverted comma" || said === "double inverted commas"){
    finalText1=finalText1.concat("\" ");    
  }
  if(said === "single inverted comma" || said === "single inverted commas"){
    finalText1=finalText1.concat("\' ");    
  }
  if(said === "hyphen"){
    finalText1=finalText1.concat("- ");    
  }
  if(said === "bracket open"){
    finalText1=finalText1.concat("\( ");    
  }
  if(said === "bracket close"){
    finalText1=finalText1.concat("\) ");    
  }
    console.log(speechRec);                      
    output1.html(finalText1);                 
    output1.class("out");                         
  }
}
function hindi(){
  speechRec=new p5.SpeechRec('hi-IN',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);

  function gotSpeech(){  
    var said=speechRec.resultString;
    if(appState===3 && said != "कोमा" && said != "पूर्ण विराम" && said != "क्वेश्चन मार्क" && said != "एक्सप्लेनेशन मार्क" && said != "एक्सक्लेमेशन मार्क" && said != "सिंगल इनवर्टेड कॉमा" && said !=  "डबल इनवर्टेड कॉमा"){                             
      finalText2=finalText2.concat(said+" ");       
    }
    if(said === "कोमा" || said === "comma"){
      finalText2=finalText2.concat(", ");    
    }
    if(said === "पूर्ण विराम"){
      finalText2=finalText2.concat("। ");    
    }
    if(said === "क्वेश्चन मार्क"){
      finalText2=finalText2.concat("? ");    
    }
    if(said === "semicolon" || said === "comma"){
      finalText2=finalText2.concat("; ");    
    }
    if(said === "colon"){
      finalText2=finalText2.concat(": ");    
    }
    if(said === "एक्सप्लेनेशन मार्क" || said === "एक्सक्लेमेशन मार्क"){
      finalText2=finalText2.concat("! ");    
    }
    if(said === "डबल इनवर्टेड कॉमा"){
      finalText2=finalText2.concat("\" ");    
    }
    if(said === "सिंगल इनवर्टेड कॉमा"){
      finalText2=finalText2.concat("\' ");    
    }
      console.log(speechRec);                      
      output2.html(finalText2);                 
      output2.class("out");                         
    }
}

function spanish(){
  speechRec=new p5.SpeechRec('es-SP',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);

  function gotSpeech(){
 var said=speechRec.resultString;
 if(appState===5 && said != "coma" && said != "full stop" && said != "question mark" && said != "semicolon" && said != "exclamation mark" && said != "bracket open" && said != "bracket close"){                             
  finalText3=finalText3.concat(said+" ");       
}
if(said === "coma" || said === "comma"){
  finalText3=finalText3.concat(", ");    
}
if(said === "full stop"){
  finalText3=finalText3.concat(". ");    
}
if(said === "question mark"){
  finalText3=finalText3.concat("? ");    
}
if(said === "semicolon"){
  finalText3=finalText3.concat("; ");    
}
if(said === "exclamation mark"){
  finalText3=finalText3.concat("! ");    
}
if(said === "bracket open"){
  finalText3=finalText3.concat("\( ");    
}
if(said === "bracket close"){
  finalText3=finalText3.concat("\) ");    
}
 console.log(speechRec);
 output3.html(finalText3);
 output3.class("out");
}
}
function chinese(){
  speechRec=new p5.SpeechRec('zh-ZH',gotSpeech)
 let continuous=true;

 speechRec.start(continuous);
 function gotSpeech(){
   var said=speechRec.resultString;
   if(appState===6){
     finalText4=finalText4.concat(" "+said);
   }
   console.log(speechRec);
   output4.html(finalText4);
   output4.class("out");
 }
}
function japanese(){
  speechRec=new p5.SpeechRec('ja-JP',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);

  function gotSpeech(){
 var said=speechRec.resultString;
 if(appState===7){
   finalText5=finalText5.concat(" "+said);
 }
 console.log(speechRec);
 output5.html(finalText5);
 output5.class("out");
}
}

function arabic(){
  speechRec=new p5.SpeechRec('ar-AR',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);

  function gotSpeech(){
var said=speechRec.resultString;
if(appState===8){
  finalText7=finalText7.concat(" "+said);
}
console.log(speechRec);
output7.html(finalText7)
output7.class("out");
}
}
function russian(){
  speechRec=new p5.SpeechRec('ru-RU',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);

  function gotSpeech(){
 var said=speechRec.resultString;
 if(appState===4){
   finalText6=finalText6.concat(" "+said);
 }
 console.log(speechRec);
 output6.html(finalText6);
 output6.class("out");
}
}
function german(){
  speechRec=new p5.SpeechRec('de-DE',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);

  function gotSpeech(){
 var said=speechRec.resultString;
 if(appState===9 && said != "Komma" && said != "full stop" && said != "fullstop" && said != "question mark" && said != "Semikolon" && said != "exclamation mark" && said != "double inverted comma" && said != "heißen" && said != "double inverted commas"){                             
  finalText8=finalText8.concat(said+" ");       
}
if(said === "Komma"){
  finalText8=finalText8.concat(", ");    
}
if(said === "full stop" || said === "fullstop"){
  finalText8=finalText8.concat(". ");    
}
if(said === "question mark"){
  finalText8=finalText8.concat("? ");    
}
if(said === "Semikolon"){
  finalText8=finalText8.concat("; ");    
}
if(said === "exclamation mark"){
  finalText8=finalText8.concat("! ");    
}
if(said === "double inverted comma" || said === "double inverted commas"){
  finalText8=finalText8.concat("\" ");    
}
if(said === "heißen"){
  finalText8=finalText8.concat("- ");    
}
 console.log(speechRec);
 output8.html(finalText8);
 output8.class("out");
}
}
