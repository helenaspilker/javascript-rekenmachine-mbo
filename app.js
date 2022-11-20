function BerekenSom(methode) {
    var getal_1 = document.getElementById ("getal_1").value;
    var getal_2 = document.getElementById ("getal_2").value;
    var getal_3 = document.getElementById ("getal_3").value;
    var uitkomst = document.getElementById("uitkomst");
    var eigenandwoord = document.getElementById("eigenantwoord");
    
    if(methode == "+") {
        var som = parseFloat(getal_1) + parseFloat(getal_2);
    } else if(metode == "-") {
        var som = parseFloat(getal_1) - parseFloat(getal_2);
    } else if(metode == "/") {
        var som = parseFloat(getal_1) / parseFloat(getal_2);
    } else if(metode == "*") {
        var som = parseFloat(getal_1) * parseFloat(getal_2);
    }

    if(getal_1 == 0 || getal_2 == 0){
        console.log("works");
        uitkomst.innerHTML = "Je kan niet delen door 0!";
        eigenantwoord.innerHTML = "";
        uitkomst.style.color = "red";
    }
    else if(som == parseFloat(getal_3)) {
        eigenantwoord.innerHTML ="Jouw eigen antwoord is goed!";
        eigenantwoord.style.color = "green";
        uitkomst.innerHTML = "De som van " + getal_1 + " " + methode + " " + getal_2 + " = " + som;
    } else if(som != parseFloat(getal_3)) {
        eigenantwoord.innerHTML ="Jouw eigen antwoord is fout!";
        eigenantwoord.style.color = "red";
        uitkomst.innerHTML = "De som van " + getal_1 + " " + methode + " " + getal_2 + " = " + som;
    }
}

