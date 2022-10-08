function readSingleFile(e) {
    img = e.target.files[0];
    if (!img) {
      return;
    }
    reader = new FileReader();
    reader.onload = function(e) {
      contents = e.target.result;
      displayContents(contents);
    };
    reader.readAsDataURL(img);
  }

function displayContents(contents) {
    document.getElementById('image').src=contents;
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pwFKOpUVv/model.json", modelLoaded);

function modelLoaded() {
    console.log("model is loaded");
}

function check () {
    img = document.getElementById("image");
    classifier.classify(img,getResult);
}

function getResult (error, results) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(results);
        document.getElementById("result").innerHTML = results[0].label;
    }
}

document.getElementById('file-input').addEventListener('change', readSingleFile, false);
