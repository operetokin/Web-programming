// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function () {
    var audioContainer = document.querySelector("#outputAudio");
    var myAudioString = "<figure>";
    if (audio.controls == true) {
        myAudioString += "<audio controls>";
        for (var i = 0; i < audio.source.length; i++) {
            myAudioString += "<source src=" + audio.source[i].src + " type= " + audio.source[i].type + " /> ";
        }
        myAudioString += "</audio>";
    }
        myAudioString += "</figure>";
        audioContainer.innerHTML = myAudioString;
};

//<figure>
//   <audio controls>
//      <source src="https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3" type="audio/mpeg" />
//      <source src="https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg" type="audio/ogg" />
//      Your browser does not support the audio tag used.
//   </audio> 
//   <figcaption>Audio Caption</figcaption> 
//</figure>
