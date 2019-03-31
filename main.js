// var display = document.querySelector('.display').value

// inputan angka
function insert(inputan){
    // var display = document.querySelector('.display').value
    if(document.querySelector('.display').value === "0"){
        document.querySelector('.display').value = ""
    }

    if(inputan === '÷'){
        document.querySelector('.display').value = document.querySelector('.display').value + '/'
    }
    else if(inputan === '×'){
        document.querySelector('.display').value = document.querySelector('.display').value + '*'
    }
    else{
        document.querySelector('.display').value = document.querySelector('.display').value + inputan
    }
}

// reset

var reset = document.querySelector('.reset')

reset.onclick = () => {
    document.querySelector('.display').value = "0"
}

// backspace

var backspace = document.querySelector('.backspace')

backspace.onclick = () => {
    var display = document.querySelector('.display').value
    var panjang = display.length

    if(panjang === 1){
        document.querySelector('.display').value = "0"
    }
    else{
        document.querySelector('.display').value = display.substr(0, panjang-1)
    }
}

// perhitungan

var result = document.querySelector('#result')

result.onclick = () => {
    var display = document.querySelector('.display').value
    var hasil = eval(display)

    console.log(hasil)

    document.querySelector('.display').value = hasil
}