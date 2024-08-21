function formatarData(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

const proximoAniversario = new Date('2024-09-21');

const dataAtual = new Date();

const diferençaEmMs = proximoAniversario - dataAtual;
const diferençaEmDias = Math.ceil(diferençaEmMs / (1000 * 60 * 60 * 24)); // Convertendo milissegundos para dias

console.log(`Faltam ${diferençaEmDias} dias para o próximo aniversário.`);


console.log(`Data atual: ${formatarData(dataAtual)}`);


const novaData = new Date(dataAtual);
novaData.setDate(dataAtual.getDate() + 30);

console.log(`Data atual + 30 dias: ${formatarData(novaData)}`);
