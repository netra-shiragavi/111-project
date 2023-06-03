prediction="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image" src="'+data_uri+'">';
    });
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pVBeBDP42/model.json",model_loaded);

function model_loaded()
{
    console.log("model loaded");

}

function speak(){
    synth = window.speechSynthesis;
    speak12 = "The prediction is " + prediction;
    var utter_this = new SpeechSynthesisUtterance(speak12);
    
    synth.speak(utter_this);
}

