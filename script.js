/*const soma = document.getElementById('somar')
const sub = document.getElementById('sub')
const multi = document.getElementById('multi')
const divi = document.getElementById('divi')
const res = document.getElementById('res') 
let display = [0,1,2,3,4,5,6,7,8,9]*/
let dis = document.getElementById('display')

function addnum(n){
    let item = document.createElement('option')
    item.tex = `${n}`
    dis.appendChild(item)
    res.innerHTML = ''
}

let ex = addnum(8)
console.log(`${ex}`)