/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var toevoegen = document.querySelector("header button");
var toggle = false; //favoAan bevat antwoord op de vraag "is het verhaal geliked?"

function veranderHartje(){
    console.log("Hallo test");
    if(toggle == true){

        document.querySelector("header button").classList.add("filled");
        document.querySelector("span").style.display = "block";
            toggle = false;

       } else { //dan is het lampje uit

        document.querySelector("header button").classList.remove("filled");
        document.querySelector("span").style.display = "none";
           toggle = true;

       }
}

toevoegen.addEventListener('click',veranderHartje);

