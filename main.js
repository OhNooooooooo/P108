var dog = 0;
var cat= 0;
var pigeon = 0;
var roar = 0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FvuR-6teC/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
    
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    var image = document.getElementById("animal_image").src;
        if (results[0].label=="bark") {
            image = dog.gif;
            document.getElementById("result_count").innerHTML = dog;
            document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
            document.getElementById("result_count").innerHTML='Count - '+dog;
            dog = dog+1;

        } else if (results[0].label=="meoew") {
            image = cat.gif;
            document.getElementById("result_count").innerHTML = cat;
            document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
            document.getElementById("result_count").innerHTML='Count - '+cat;
            cat = cat+1;
        } else if (results[0].label=="pigeon") {
            image = pigeon.gif;
            document.getElementById("result_count").innerHTML = pigeon;
            document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
            document.getElementById("result_count").innerHTML='Count - '+pigeon;
            pigeon = pigeon+1;
        } else if(results[0].label=="roar"){
            image = roar.gif;
            document.getElementById("result_count").innerHTML = roar;
            document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
            document.getElementById("result_count").innerHTML='Count - '+roar;
            roar = roar+1;
        }else {
            image = nothing.gif;
            document.getElementById("result_count").innerHTML = "";
            document.getElementById("result_label").innerHTML = "I can hear - nothing";
            document.getElementById("result_count").innerHTML='Count - nothing';
        }
            
    }
    }
    