// Da lista de critérios, trazer o maior valor da propriedade "AgrupamentoOU"
// Sendo que, se tiver algum valor não numérico, traz "0"

let criterios = [
    { AgrupamentoOU: 1 },
    { AgrupamentoOU: null },
    { AgrupamentoOU: "agrupamento" },
    { AgrupamentoOU: 4 },
    { AgrupamentoOU: 3 }
];

let maiorValor = Math.max(...criterios.map(criterio => isNaN(criterio.AgrupamentoOU) ? 0 : criterio.AgrupamentoOU));

console.log(maiorValor);

