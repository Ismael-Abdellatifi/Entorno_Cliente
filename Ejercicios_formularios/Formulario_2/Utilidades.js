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

    for (let i = 0; i < sexo.length; i++) {

        if (sexo[i].checked) {

            return "";

        }

    }

    return "Debes seleccionar una opcion";

    //Aqui principalmente nos sirve para poder seleccionar una opcion correctamente.

}



function validarSugerencia(sugerencia) {

    if (sugerencia.value.trim() === "") {

        return "La sugerencia es obligatoria";

    }

    return "";

    //Aqui principalmente nos sirve para poder escribir una sugerencia.

}



function validarApellidos(apellidos) {

    let valor = apellidos.value.trim();

    if (valor === "") {

        return "Los apellidos son obligatorios";

        //Esta funcion nos sirve para cuando el usuario deja la casilla vacia, le obligue a escribir.

    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/.test(valor)) {

        return "Los apellidos solo pueden contener letras y espacios";

        //Aqui obligamos al usuario a que solo puede contener ese recuadro por letras y espacios.

    }

    let letras = valor.replace(/\s/g, "");

    //Quitamos espacios para remplazarlo por las letras y poder contarlos.

    if (letras.length < 4) {

        return "El apellido debe tener al menos 4 letras";

    }

    return "";

    //Aqui obligamos a que el usuario tenga que poner minimo 4 letras.

}



function validarFecha(dia, mes, ano) {

    let valorDia = dia.value.trim();

    let valorMes = mes.value.trim();

    let valorAno = ano.value.trim();

    if (valorDia === "" || valorMes === "" || valorAno === "") {

        return "Debes rellenar dia, mes y año";

        //Comprueba que tengas relleno las cajas.

    }

    if (!/^\d{1,2}$/.test(valorDia) ||
        !/^\d{1,2}$/.test(valorMes) ||
        !/^\d{4}$/.test(valorAno)) {

        return "Error: formato";

    }

    //Comprueba que el formato que has puesto esta correctamente puesto.

    let numeroDia = parseInt(valorDia);

    let numeroMes = parseInt(valorMes);

    let numeroAno = parseInt(valorAno);

    let fecha = new Date(numeroAno, numeroMes - 1, numeroDia);

    if (fecha.getFullYear() !== numeroAno ||
        fecha.getMonth() !== numeroMes - 1 ||
        fecha.getDate() !== numeroDia) {

        return "Error: la fecha no existe";

    }

    //Comprobamos que la fecha realmente existe

    return "";

}



function validarEstatura(estatura) {

    let valor = estatura.value.trim().replace(',', '.');

    if (valor.length === 0) {

        return "La estatura es obligatoria.";

    }

    const num = parseFloat(valor);

    if (isNaN(num) || !/^\d+(\.\d+)?$/.test(valor)) {

        return "Debe ser un número válido.";

    }

    if (num < 0.50 || num > 2.50) {

        return "Estatura fuera de rango (entre 0.50 y 2.50 m).";

    }

    return "";

}



// 6. Validar Cuenta

function validarCCC(ccc) {

    let valor = ccc.value.trim();

    if (valor.length === 0) {

        return "La cuenta corriente es obligatoria.";

    }

    if (!/^\d{20}$/.test(valor)) {

        return "Debe contener exactamente 20 dígitos sin espacios ni letras.";

    }

    return "";

}