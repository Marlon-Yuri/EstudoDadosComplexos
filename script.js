// Crie um objeto que receba ao menos três propriedades sobre você.
let euMesmo = {
    name: "Yuri",
    job: "Musician",
    age: 28 
}


// Adicione uma nova propriedade sem alterar seu objeto inicial.

euMesmo.hair = "black"

// Remova uma propriedade desse objeto.

delete euMesmo.hair

//Mostre no console todas as propriedades desse objeto.

console.log(euMesmo)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "Yuri",
        idade: "28",
        telefone: "9999999",
        amigos: ["Edu", "Marcos", "Danda", "Pam"]
    },
    {
        nome: "Marlon",
        idade: "27",
        telefone: "6666666",
        amigos: ["Pri", "Marcus", "Rhayssa", "Chris"]

    },
    {
        nome: "Gian",
        idade: "29",
        telefone: "8888888",
        amigos: ["Adriel", "Luan" , "Pedro", "Carlos"]

    },
    {
        nome: "Luan",
        idade: "30",
        telefone: "7777777",
        amigos: ["Juca", "Marcelo", "Diogo", "Paulo"]

    },
    {
        nome: "Max",
        idade: "28",
        telefone: "9999999",
        amigos: ["Edu", "Marcos", "Danda", "Pam"]

    },
]


// Mostre no console o nome de um amigo de cada lista.

console.log("Os amigos selecionados são" ,cadastro[0].amigos[2], cadastro[1].amigos[0], cadastro[2].amigos[1], cadastro[3].amigos[3], cadastro[4].amigos[0])