let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dolares)=>{
    return (dolares*106.58) 
}
const fromEuroToDollar = (euros)=>{
    return (euros*1.2) 
}
const fromYanToPound = (yan)=>{
    return (yan*0.006) 
}



// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };