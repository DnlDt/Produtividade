let dias_produtivos = []
function enviar(){
    const respostas = document.getElementById("resposta_escolha").value
    if(respostas == "sim"){
        document.getElementById("respostas").innerHTML = `
        <label for="yes">O que você fez de produtivo no seu dia?</label>
        <input type="text" id ="yes">
        <button onclick="salvar()">Salvar</button>
`
    }
}
function salvar(){
    localStorage.setItem('dias_produtivos', JSON.stringify(dias_produtivos))
}