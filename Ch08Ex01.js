//Ch8 Ex1
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
var sentences=["Hello world","Hi there!","How are you doing?","My name is Tom", "A pleasure to meet you", 
"I'm a programmed robot", "I'm happy to talk", "please let me talk more","Well, it's a goodbye then","see you"];
function talk(){
  console.log(sentences[Math.floor(Math.random()*10)])
}

setInterval(talk, 60000);
