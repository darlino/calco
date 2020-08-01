// samedi le premier Aout 2020
// @author Noula Darlin

const btn = document.querySelector('.btn')
const out_ope = document.querySelector('.output_operation')
const out_result = document.querySelector('.output_result')
const input = document.querySelector('#text')
const plus = document.querySelector('.plus')

let value = 0
let operation_array = []
let result_array= []
function displayNum (i) {
    input.value = i
    operation_array.push(input.value)
    result_array.push(input.value)
    out_ope.innerHTML = operation_array.join('')
    console.log(operation_array);
}
let save
function result(){
    save = result_array.join('')
    out_result.innerHTML = eval(save)
    operation_array = []
    result_array = []
    
}
function reset(){
    operation_array.pop()
    result_array.pop()
}
console.log(operation_array);