dog = 0;
bird = 0;
cat = 0;
cow =0;

function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fDUbOuPJB/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log("results");

        random_color_r = Math.floor(Math.random() * 255) + 1 ;
        random_color_g = Math.floor(Math.random() * 255) + 1 ;
        random_color_b = Math.floor(Math.random() * 255) + 1 ;

        document.getElementById("detected_animal").innerHTML='Detected voice is of : ' + results[0].label ;
        document.getElementById("detected_times").innerHTML = 'Detected Dog : ' + dog + ' Detected Cat : '
        + cat + ' Detected Bird : ' + bird + ' Detected Cow : ' + cow ;
        document.getElementById("detected_animal").style.color="rgb("+random_color_r+" , "+random_color_g+" , "+random_color_b+")";
        document.getElementById("detected_times").style.color="rgb("+random_color_r+" , "+random_color_g+" , "+random_color_b+")";

        img=document.getElementById("image");

        if(results[0].label == "barking")
        {
            img.src = "dog.webp";
            dog = dog+1;
        }

        else if(results[0].label == "chirping")
        {
            img.src = "bird.jpg";
            bird = bird+1;
        }

        else if(results[0].label == "meowing")
        {
            img.src = "cat.jpg";
            cat = cat+1;
        }

        else if(results[0].label == "mooing")
        {
            img.src = "cow.jpg";
            cow = cow+1;
        }

        else
        {
            img.src = "listen.png"
        }
    }
}