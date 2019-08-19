// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo(quant) {
  var aux = 0;
  while (aux < quant) {
    await delay();
    console.log(`${aux + 1}s`);
    aux++;
  }
}

umPorSegundo(5);
