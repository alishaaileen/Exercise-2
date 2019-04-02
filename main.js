// inputan angka
function insert(inputan){
    var display = document.querySelector('.display')
    var panjang = display.value.length
    var temp = display.value.charAt(panjang-1)

    if(panjang <= 15){      // batas panjang karakter agar tidak terlalu panjang
        if(display.value === "0"){  // Jika display kalkulator memang baru "0" saja
            display.value = ""      // tidak akan menambah angka 0 jika diinput 0 lagi
        }
    
        if(temp === "+" || temp === "-" || temp === "/" || temp === "*"){ // mengecek jika akhirannya operator
            if(typeof inputan === "number"){            // hanya bisa input kalau inputan selanjutnya angka
                display.value = display.value + inputan // agar penulisan operator tidak terjadi 2 kali berturut-turut
            }
        }
        else{
            if(inputan === '÷'){
                display.value = display.value + '/' // biar bisa dihitung menggunakan fungsi eval()
            }
            else if(inputan === '×'){
                display.value = display.value + '*' // biar bisa dihitung menggunakan fungsi eval()
            }
            else{
                display.value = display.value + inputan
            }
        }
    }
}

// reset atau AC

var reset = document.querySelector('.reset')

reset.onclick = () => {
    document.querySelector('.display').value = "0"
}

// backspace

var backspace = document.querySelector('.backspace')

backspace.onclick = () => {
    var display = document.querySelector('.display')
    var panjang = display.value.length

    if(panjang === 1){      // Jika menghapus angka terakhir
        display.value = "0" // atau memang 0, display-nya 0
    }
    else{
        display.value = display.value.substr(0, panjang-1)
    }
}

// perhitungan

var result = document.querySelector('#result')

result.onclick = () => {
    var display = document.querySelector('.display')
    var hasil = eval(display.value)
    var temp = hasil.toString() // Agar bisa memakai .length

    if(temp.length > 15){ // Agar hasil tidak melebihi display
        display.value = "too long!"
    }
    else{
        display.value = hasil
    }
}