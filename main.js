// const automobili = [
//   { marca: "Fiat", modello: "Panda", alimentazione: "Benzina" },
//   { marca: "Volkswagen", modello: "Golf", alimentazione: "Diesel" },
//   { marca: "Tesla", modello: "Model 3", alimentazione: "Elettrica" },
//   { marca: "Toyota", modello: "Yaris", alimentazione: "Ibrida" },
//   { marca: "Renault", modello: "Clio", alimentazione: "GPL" },
//   { marca: "Ford", modello: "Focus", alimentazione: "Benzina" },
//   { marca: "BMW", modello: "Serie 1", alimentazione: "Diesel" },
//   { marca: "Hyundai", modello: "Kona", alimentazione: "Elettrica" },
//   { marca: "Audi", modello: "A3", alimentazione: "Ibrida" },
//   { marca: "Opel", modello: "Corsa", alimentazione: "Metano" }
// ];

// const benzina = automobili.filter(auto => {
    
//     return (auto.alimentazione === "Benzina")
    
// })

// const diesel = automobili.filter(auto => {
    
//     return (auto.alimentazione === "Diesel")
// })

// const altreAlimentazioni = automobili.filter(auto => {
      
//     return (auto.alimentazione != "Benzina" && auto.alimentazione != "Diesel")
// })

// console.log(benzina)
// console.log(diesel)
// console.log(altreAlimentazioni)


/*******************Snack 2************************/

const nomi = ["pippo", "PLUTO", "Paperino"];

console.log(nomi)

const nomiCorretti = nomi.map(nome => {
    return lettereMinuscole = nome.toLowerCase();
})

console.log(nomiCorretti);