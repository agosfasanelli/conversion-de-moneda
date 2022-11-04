let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = (dolares)=>{
    return (dolares*(oneEuroIs[JPS]/oneEuroIs[USD])) 
}
const fromEuroToDollar = (euros)=>{
    return (euros*oneEuroIs[USD]) 
}
const fromYanToPound = (yan)=>{
    return (yan*oneEuroIs[GBP]*oneEuroIs[JPS]) 
}



// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };