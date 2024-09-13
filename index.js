let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];

function chauchat(cargador) {

    for (let i = 0; i < cargador.length; i++) {

        let probabilidadBloqueo = Math.random(); 

        if (probabilidadBloqueo >= 0.8) {
            console.log("Illo, me he quedao pillá!");
            break;
        }

        console.log(cargador[i]);

        if ((i + 1) % 3 === 0) {
            console.log("");
        }
    }
}

chauchat(cargador);