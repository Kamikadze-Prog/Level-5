import {sayHello} from "./greet";
import {clickChecker} from "./greet";


function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

function showChecker() {
    clickChecker();
}

showChecker();
showHello("greeting", "Точная дата и время:");
