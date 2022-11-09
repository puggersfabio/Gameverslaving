function resultaat(){

    var antwoord = 0;


    var v1=document.quiz.q1.value;
    var v2=document.quiz.q2.value;
    var v3=document.quiz.q3.value;
    var v4=document.quiz.q4.value;
    var v5=document.quiz.q5.value;
    var v6=document.quiz.q6.value;
    var v7=document.quiz.q7.value;
    var v8=document.quiz.q8.value;
    var v9=document.quiz.q9.value;
    var v10=document.quiz.q10.value;
    var v11=document.quiz.q11.value;
        var resultaat = document.getElementById("resultaat");
        var quiz = document.getElementById("quiz");
    

    if (v1=="Ja1") {antwoord++}
    if (v2=="Ja2") {antwoord++}
    if (v3=="Ja3") {antwoord++}
    if (v4=="Ja4") {antwoord++}
    if (v5=="Ja5") {antwoord++}
    if (v6=="Ja6") {antwoord++}
    if (v7=="Ja7") {antwoord++}
    if (v8=="Ja8") {antwoord++}
    if (v9=="Ja9") {antwoord++}
    if (v10=="Ja10") {antwoord++}
    if (v11=="Ja11") {antwoord++}

    quiz.style.display="none";


    if (antwoord<=3){
        resultaat.textContent="U bent niet verslaafd!"
        resultaat2.textContent="U kunt nog lekker veel gamen!"
    } 
    if (antwoord<= 8 && antwoord > 3){
        resultaat.textContent='U bent niet verslaafd'       
        resultaat2.textContent="Maar u moet wel oppassen met hoelang/hoeveel u gamed, anders kunt u nog in gevaar komen"
    } 
    if (antwoord <= 11 && antwoord > 8){
        resultaat.textContent='U bent verslaafd'   
        resultaat2.textContent="Helaas! Wij raden u aan om hulp te zoeken bij familie of vrienden, of bezoek deze site:https://www.afkickkliniekwijzer.nl/gameverslaving/"    
    }

    localStorage.setItem("getalopslaan!", antwoord);
    
}

function vorigeres(){
    //localStorage.getItem("getalopslaan!");
    var antwoord = localStorage.getItem("getalopslaan!");
if (antwoord<=3){
        var x = document.getElementById("res1");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }     
} 
if (antwoord<= 8 && antwoord > 3){
      var x = document.getElementById("res2");
        if (x.style.display === "none") {
              x.style.display = "block";
        } else {
          x.style.display = "none";
        }       
} 
if (antwoord <= 11 && antwoord > 8){
             var x = document.getElementById("res3");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
}
}   


    

