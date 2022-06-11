const d = document;
const dolar = d.getElementById('dolar');
const dolaresAUsar = ['Dolar Oficial', 'Dolar Blue', 'Dolar Contado con Liqui', 'Dolar Bolsa','Dolar turista'];

function getDolar(){
    
    dolar.innerHTML = '';

    // fetch viene con el método get por defecto
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(res => res.json()) 
    .then(datos => {
        //Filtrar
        datos = datos.filter(dato => dolaresAUsar.indexOf(dato.casa.nombre) !== -1);
        for(let dato of datos){
            // al agregar el más está concatenando
            dolar.innerHTML += createDolarCardHTML(dato);
        }  
    })
}

function createDolarCardHTML(dato){
    // Asignando icono dependiendo el valor de la variación
    let variacionIcon;
    let variacion = normalizeNumber(dato.casa.variacion);
    if(variacion > 0){
     variacionIcon = "bi bi-arrow-up text-primary";
    }else if(variacion < 0){
        variacionIcon = "bi bi-arrow-down text-primary";
    }else{
        variacionIcon = "bi bi bi-pause text-primary rotado90";
    };

    // Primera parte invariable de las cards
    let result = ` 
    <div class="card text-center text-dark m-3" style="width: 18rem;">
        <div class="card-body">
        <h2 class="card-title">${dato.casa.nombre}</h2>
            <div class="row">`;
    
    // Parte variable de las cards
    // Varía según si cotiza la compra
    if(dato.casa.compra !== "No Cotiza"){
        result += `
        <div class="col-6">
            <p class="card-text">Compra <b>$${dato.casa.compra}</b></p>
        </div>
        <div class="col-6">
            <p class="card-text">Venta <b>$${dato.casa.venta}</b></p>
        </div>`
    }
    else{
        result += `
        <div class="col-12">
            <p class="card-text">Venta<br><b>$${dato.casa.venta}</b></p>
        </div> `
        
    }

    // Última parte invariable de las cards
    result += `
    <div class="col-12">
            <p class="card-text d-flex align-items-center justify-content-center">
                <span>${variacion}</span>
                <i class="${variacionIcon}"></i>
            </p>
        </div>
            </div>
        </div>
    </div>`
    
    return result;
    
}

//Transforma las strings de los números que vienen con coma para que tengan punto, y los transforma en number
function normalizeNumber(num){
    return Number(num.replace(',','.'))
}

function minutosAMilsegundos(mins){
    return mins * 60000; 
}

getDolar();
var intervalID = window.setInterval(getDolar,minutosAMilsegundos(10));
 