// importar la función sum del archivo app.js
const { fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./app.js');

// comienza tu primera prueba
test('un euro deberian ser 1.206 dolares', () => {
       // esperamos que la suma de esos 2 números sea 23
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});
test("un dolar deberian ser 106.58 yenes", () => {
    expect(fromDollarToYen(30)). toBe(3197.4)
})
test("un yen deberian ser 0.006 libras", () => {
    expect(fromYanToPound(120)).toBe(0.72)
})