const temperaturas = [
    {id: 1, temperatura: 23.9},
    {id: 2, temperatura: 24.1},
    {id: 3, temperatura: 22.8},
    {id: 4, temperatura: 25.0}
]

function simularLeitura() {
   //alert("Chegou na função");
   //Math.floor faz arredondamento
   //Math.random gera um número aleatório entre 0 e 1
   const numeroSorteado = Math.floor(Math.random() * temperaturas.length);
   const tempSorteada = temperaturas[numeroSorteado].temperatura;

   const temperaturaPagina = document.getElementById("temperatura");
   temperaturaPagina.textContent =  tempSorteada + " °C";
}