const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function encontrarEndereco(arrayEnderecos, cep) {
    const endereco = arrayEnderecos.find((objeto) => {
        return objeto.cep === cep;
    })

    console.log(endereco.rua);
}

encontrarEndereco(endereços, 00111333);