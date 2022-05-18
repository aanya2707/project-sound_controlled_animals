function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fDUbOuPJB/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log("got results");
}