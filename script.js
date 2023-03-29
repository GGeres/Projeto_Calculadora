const dis = document.getElementById('display')
let alg = document.getElementsByClassName('num')
var operator = ""
let num = []
let nums = []


function addnum(n){
    if(nums.length > 0 && operator == ""){
        reset()
        nums = []
    }
    num.push(Number(n.value))
    console.log(nums)
    display(n.value)
}

function display(input){
    dis.value += input
}

function reset(){
    dis.value = ''
    num = []
    console.log(num)
    operator = ""
}

function somar(){
    fechanum()
    operator = "+"
    dis.value += " + "
}

function sub(){
    fechanum()
    operator = "-"
    dis.value += " - "
}

function multi(){
    fechanum()
    operator = "X"
    dis.value +=" X "
}

function divi(){
    fechanum()
    operator = "÷"
    dis.value += " ÷ "
}


function equal(){
    fechanum()
    let res = 0
    switch (operator){
        case "+":
            res = nums[0] + nums[1]
            nums = []
            nums.push(res)
        reset()  
        display(res)
        break;

        case "X":
            res = nums[0] * nums[1]
            nums = []
            nums.push(res)
        reset()
        display(res)
        break;

        case "-":
            res = nums[0] - nums[1]
            nums = []
            nums.push(res)
        reset()
        display(res)
        break;

        case "÷":
            res = nums[0]/nums[1]
            nums = []
            nums.push(res)
        reset()
        display(res)
        break;
    }
}

function fechanum(){
    let item = ""
    for(let i = 0; i < num.length; i++){
        item += num[i]
    }
    nums.push(Number(item))
    num = []
}