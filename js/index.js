"option strict";
let s;
let ln;

window.onload = function (){
    //s= new String;
    s="Corso di javascript al Vallauri";
    console.log(s);
    console.log("Stringa in maiuscolo: " + s.toUpperCase());
    console.log(s);
    console.log("Stringa in minuscolo: " + s.toLowerCase());
    let num1 = 15;
    console.log(num1+10);
    console.log(s+10);
    console.log(parseInt(s)+10);
    console.log("Valore stringa: " + s + " - Valore numerico: " + num1);
    console.log(`Valore stringa: ${s} - Valore numerico: ${num1}`);
    console.log(`Valore stringa trimmata: ${s.trim()}`);
    console.log("la stringa di partenza contiene la parola 'javascript': " + s.toLowerCase().includes("javascript"));
    console.log("indice di posizione della parola 'javascript': " + s.indexOf("javascript"));
    console.log("indice di posizione della parola 'C#': " + s.indexOf("C#"));
    console.log("Primi 4 caratteri della stringa: " + s.slice(0,4));
    console.log("Dal 6 carattere in poi: #" + s.slice(6) + "#");
    /* Testare i seguenti metodi sulle stringhe:
        .replace()
        .search()
        .startsWith()
        .endsWith()
        .big()
        .blink()
        .bold()
        .fontsize()
        .small()
        .strike()
        .sup()
        .sub()
     */

}

function inizializza(){
    s=new String;
    s=prompt("Inserire la stringa segreta");
    s=s.trim().toUpperCase();
    ln=s.length;
    for(let i = 0;i<ln;i++){
        form1.txtCar[i].value="*"; // form1 equivale a document.getElementById("form1")
        form1.chkRis[i].checked=false;
        form1.txtCar[i].disabled=false;
        form1.chkRis[i].disabled=false;
    }
    for(let i = ln;i<15;i++){
        form1.txtCar[i].value=""; // form1 equivale a document.getElementById("form1")
        form1.txtCar[i].disabled=true;
        form1.chkRis[i].disabled=true;
    }
}