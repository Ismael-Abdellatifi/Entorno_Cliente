
function validarNombre(nombre) {

    let valor = nombre.value.trim();

    if (valor === "") {
        return "El nombre es obligatorio";
        //Esta funcion nos sirve para cuando el usuario deja la casilla vacia, le obligue a escribir.
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/.test(valor)) {
        return "El nombre solo puede contener letras y espacios";
        //Aqui obligamos al usuario a que solo puede contener ese recuadro por letras y espacios.
    }

    let letras = valor.replace(/\s/g, "");
    //Quitamos espacios para remplazarlo por las letras y poder contarlos.

    if (letras.length < 2) {
        return "El nombre debe tener al menos 2 letras";
    }

    return "";
    //Aqui obligamos a que el usuario tenga que poner minimo 2 letras.
}


function validarNIF(dni) {

    let valor = dni.value.trim().toUpperCase();

    if (valor === "") {
        return "El NIF es obligatorio";
        //Esta funcion nos sirve para cuando el usuario deja la casilla vacia, le obligue a escribir.
    }

    if (!/^[0-9]{8}[A-Z]$/.test(valor)) {
        return "El formato del NIF es incorrecto";
        //Tiene que tener ese formato en concreto que es 8 numeros y una letra.
    }

    let numero = parseInt(valor.substring(0, 8));

    let letra = valor.charAt(8);

    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    let letraCorrecta = letras.charAt(numero % 23);

    if (letra !== letraCorrecta) {
        return "La letra del NIF es incorrecta";
    }

    return "";
    //Aqui indicamos si la letra introducida es incorrecta o no.
}


function validarSexo(sexo) {

    if (sexo.value === "") {
        return "Debes seleccionar una opcion";
    }

    return "";
    //Aqui principalmente nos sirve para poder seleccionar una opcion correctamente.
}


function validarSugerencia(sugerencia) {

    if (sugerencia.value.trim() === "") {
        return "La sugerencia es obligatoria";
    }

    return "";
    //Aqui principalmente nos sirve para poder escribir una sugerencia.
}

