var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('valor não informado')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length ==0){
        window.alert('adicione')
    } else{
        let tot = valores.length


        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${tot} cadastrado`
    }
}