const Queue = require('./fila');


const listaParticipantes = ['WW', 'Yhago', 'Tiaguinho', 'Ailtinho', 'Mago'];
const num = 7;

function batataQuente(listaParticipantes, num) {
    let listaEliminados = [];
    const queue = new Queue();

    listaParticipantes.forEach(name => {queue.enqueue(name)})
    console.log(queue.toString()) //  WW,Yhago,Tiaguinho,Ailtinho,Mago

    while (queue.size() > 1) {
        // pega a primeira pessoa da fila e coloca atrás
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()) 
        }   
        // remove a primeira pessoa
        listaEliminados.push(queue.dequeue())
        console.log(listaEliminados)
    }
    return {
        eliminados: listaEliminados,
        vencedor: queue.dequeue()
    }
}

const result = batataQuente(listaParticipantes, num)
result.eliminados.forEach(name => console.log(`${name} foi eliminado`))
console.log(`o vencedor é ${result.vencedor}`)