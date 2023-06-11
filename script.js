function result(){
    var score=0;
    if(document.getElementById('correct1').checked){
        score++;
    }
    if(document.getElementById('correct2').checked){
        score++;
    }
    if(document.getElementById('correct3').checked){
    score++;
    }
    if(document.getElementById('correct4').checked){
    score++;
    }
   if(document.getElementById('correct5').checked){
    score++;
    }
    if(document.getElementById('correct6').checked){
    score++;
    }
    if(document.getElementById('correct7').checked){
        score++;
    }
    if(document.getElementById('correct8').checked){
        score++;
    }
    if(document.getElementById('correct9').checked){
        score++;
    }
    if(document.getElementById('correct10').checked){
        score++;
    }

    if(score>=6){
        document.getElementById("output").innerHTML = "You won! Your score :" +score;
        const output = document.getElementById("output");
        const img = document.createElement("img");
        img.src = "winn.gif";
        output.appendChild(img);
    }
    else{
       
        document.getElementById("output").innerHTML = "You need to practic more! You scored:" +score;
        const output = document.getElementById("output");
        const img = document.createElement("img");
        img.src = "lose.gif";
        output.appendChild(img);
    }
    
};
