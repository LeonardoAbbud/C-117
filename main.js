function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis

}

function preload(){

classifier = ml5.imageClassifier("DoodleNet");
}

function draw(){
    strokeWeight(13);
    stroke (0);
    if (mouseIsPressed){
  line(pmouseX, pmouseY, mouseX, mouseY);


 }
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
    
}
function clearCanvas(){
    background("white");
}
function gotResult(error,results){
if (error){
console.log("erro");
}
console.log(results);
var resultado = results[0].label;
document.getElementById("label").innerHTML="Nome: "+resultado.replace("_"," ") ;
document.getElementById("confidence").innerHTML="Precisão: " +Math.round(results[0].confidence*100)+"%";
conversão = new SpeechSynthesisUtterance(resultado.replace("_"," "));
synth.speak(conversão);
}