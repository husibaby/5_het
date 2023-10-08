//1.feladat

document.addEventListener("DOMContentLoaded", init);
    function init(){
            const mezo = document.getElementById("szoveg")
            const kimenet = document.getElementById("kimenet");
            mezo.addEventListener("change", () =>{
                const szoveg = document.getElementById("szoveg").value;
                kimenet.innerHTML="A Szöveg hossza:" + szoveg.length;
            })
        }


//2. feladat        
        let vezeteknev= prompt("Adja meg a vezetéknevét!");
        let keresztnev=prompt("Adja meg a keresztnevét!");

        let teljesnev= vezeteknev+ "" + keresztnev;

        alert(teljesnev);  
        

//6. feladat
var szoveg;

    do{szoveg=prompt("Írj be egy legalább 30 karaktert tartalmazó sszöveget!");
    }while (szoveg.length<30);

        var szo=prompt("Írja be a keresett szót!")

        if (szoveg.includes(szo)) {
            alert("Szerepel az adott szó a keresett szövegben!");
        }else{
            alert("A keresett szó nem szerepel a szövegben!");
        }
