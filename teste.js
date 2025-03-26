var myArray = [
    {nome: "Julho", idade: 10},
    {nome: "Alecrim", idade: 10},
    {nome: "janaina", idade: 5},
    {nome: "Rafa", idade: 11},
    {nome: "heneiken", idade: 5}
]

myArray.sort(function(a, b) {
    console.log("comparando", a , b)
    return a.nome.localeCompare(b.nome)
})
console.log(myArray)
