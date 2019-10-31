/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

function verander() {
    document.getElementById("hartje").classList.add("filled");
}

document.getElementById("hartje").addEventListener('click', verander);
