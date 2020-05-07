var input = document.querySelector('input')
var cont = document.getElementById('grid')
var btn = document.querySelectorAll('button')


var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', btn1_func)

var btn2 = document.getElementById('btn2')
btn2.addEventListener('click', btn2_func)

var btn3 = document.getElementById('btn3')
btn3.addEventListener('click', btn3_func)

var btn4 = document.getElementById('btn4')
btn4.addEventListener('click', btn4_func)

var btn5 = document.getElementById('btn5')
btn5.addEventListener('click', btn5_func)

var btn6 = document.getElementById('btn6')
btn6.addEventListener('click', btn6_func)

var btn7 = document.getElementById('btn7')
btn7.addEventListener('click', btn7_func)

var btn8 = document.getElementById('btn8')
btn8.addEventListener('click', btn8_func)

var btn9 = document.getElementById('btn9')
btn9.addEventListener('click', btn9_func)

var btn0 = document.getElementById('btn0')
btn0.addEventListener('click', btn0_func)
// for(var i=0; i<11; i++) {
//     btn[i].addEventListener('click',btns)
//     function btns() {
//        // var arr = ['!','@','#','$','%','^','&','*','(',')']

//            // console.log(event.target.textContent)

//                 input.value = input.value + '!'

//     }
// }
for (var i = 11; i < 38; i++) {

    btn[i].addEventListener('click', button_func)
}
var cap_count = 0
var flag
// flag1 and count1 are for shift purpose
var flag1
var count1
var pass_count = 0
var flag_pass = true
var rev_count = 0
var flag_rev = true
var clean_count = 0
var flag_clean = true

var caps = document.getElementById("caps")
caps.addEventListener('click', capslock)

var shift = document.getElementById('shift')
shift.addEventListener('click', shifted)

var space = document.getElementById('space_bar')
space.addEventListener('click', space_bar)

var passwd = document.getElementById("passwd")
passwd.addEventListener('click', password)

var del = document.getElementById('del')
del.addEventListener('click', dele)

var clean = document.getElementById('clean')
clean.addEventListener('click', clean_text)

var rev = document.getElementById('rev')
rev.addEventListener('click', reverse)

function button_func() {
    console.log("uday")

    if (flag == true) {
        input.value = input.value + event.target.textContent
    } else {
        //caps.style.color = 'black'

        input.value = input.value + event.target.textContent.toLowerCase()
    }
}
function space_bar() {
    input.value = input.value + ' '
}
function dele() {
    console.log(input.value)
    var x = input.value.split("")
    console.log(x)

    x.pop()
    console.log(x)
    var y = x.join('')
    input.value = y
}

function capslock() {

    if (cap_count % 2 == 0) {
        event.target.style.color = 'green'
        console.log(cap_count)
        flag = true
        console.log(flag)
    } else {
        event.target.style.color = 'black'
        flag = false
    }
    cap_count++
}


function btn1_func() {
    if (flag1 == false & count1 == 1) {
        console.log(event.target)
        input.value = input.value + '!'
        shift.style.color = 'black'
        count1++
    } else {
        input.value = input.value + '1'
        flag = true
    }
}

function btn2_func() {
    if (flag1 == false & count1 == 1) {
        console.log(event.target)
        input.value = input.value + '@'
        shift.style.color = 'black'
        count1++
    } else {
        input.value = input.value + '2'
        flag = true
    }
}

function btn3_func() {
    if (flag1 == false & count1 == 1) {
        console.log(event.target)
        input.value = input.value + '#'
        shift.style.color = 'black'
        count1++
    } else {
        input.value = input.value + '3'
        flag = true
    }
}

function btn4_func() {
    if (flag1 == false & count1 == 1) {
        console.log(event.target)
        input.value = input.value + '$'
        shift.style.color = 'black'
        count1++
    } else {
        input.value = input.value + '4'
        flag = true
    }
}

function btn5_func() {
    if (flag1 == false & count1 == 1) {
        console.log(event.target)
        input.value = input.value + '%'
        shift.style.color = 'black'
        count1++
    } else {
        input.value = input.value + '5'
        flag = true
    }
}

function btn6_func() {
    if (flag1 == false & count1 == 1) {
        console.log(event.target)
        input.value = input.value + '^'
        shift.style.color = 'black'
        count1++
    } else {
        input.value = input.value + '6'
        flag = true
    }
}

function btn7_func() {
    if (flag1 == false & count1 == 1) {
        console.log(event.target)
        input.value = input.value + '&'
        shift.style.color = 'black'
        count1++
    } else {
        input.value = input.value + '7'
        flag = true
    }
}

function btn8_func() {
    if (flag1 == false & count1 == 1) {
        console.log(event.target)
        input.value = input.value + '*'
        shift.style.color = 'black'
        count1++
    } else {
        input.value = input.value + '8'
        flag = true
    }
}

function btn9_func() {
    if (flag1 == false & count1 == 1) {
        console.log(event.target)
        input.value = input.value + '('
        shift.style.color = 'black'
        count1++
    } else {
        input.value = input.value + '9'
        flag = true
    }
}

function btn0_func() {
    if (flag1 == false & count1 == 1) {
        console.log(event.target)
        input.value = input.value + ')'
        shift.style.color = 'black'
        count1++
    } else {
        input.value = input.value + '0'
        flag = true
    }
}


function shifted() {
    shift.style.color = 'green'
    flag1 = false
    count1 = 1

}


var ori_input
function password() {

    if (flag_pass == true) {
        ori_input = input.value
        flag_pass = false
        console.log(ori_input)
    }
    if (pass_count % 2 == 0) {
        passwd.style.color = 'green'
        var pass = input.value.split("")
        var len = pass.length
        var str2 = pass[len - 1]
        var str1 = ''
        for (var i = 0; i < len - 1; i++) {
            pass[i] = '*'
            str1 = str1 + pass[i]
        }
        str1 = str1 + str2
        input.value = str1
    } else {
        passwd.style.color = 'black'
        input.value = ori_input
        console.log(ori_input)
        flag_pass = true
    }
    pass_count++
}
var str
function reverse() {
    if (flag_rev == true) {
        str = input.value
        flag_rev = false
        console.log(str)
    }


    if (rev_count % 2 == 0) {
        var str1 = input.value
        event.target.style.color = 'green'
        var len = str1.length
        var out = ''
        for (var i = len - 1; i >= 0; i--) {
            out = out + str1[i]
        }
        input.value = out
    } else {
        event.target.style.color = 'black'
        input.value = str
    }

    rev_count++

}

var bad_text
function clean_text() {
    if (flag_clean == true) {
        bad_text = input.value
        flag_clean = false
    }
    if (clean_count % 2 == 0) {
        var bad  = ""
        console.log(bad)
        var len = bad.length
        event.target.style.color = 'green'
        var bad_arr = ["yiffy", "wank", "xx", "yellow showers", "twinkie", "titty", "swinger", "spic", "snatch"]
        var flagC
        for (var i = 0; i < bad_arr.length; i++) {
            if (bad_text == bad_arr[i])
                flagC = true
        }
        console.log(bad_text)
         bad += bad_text[0]
        if (flagC == true) {
            console.log(bad_text.length)
            for (var i = 1; i<bad_text.length-1; i++) {
                // if (i == 0) {
                //     newstr = newstr + bad[0]
                // } else if (i == len - 1) {
                //     newstr = newstr + bad[len - 1]

                // } else {
                bad += '*'
                // newstr = newstr + bad[i]
                //     }
                
            }
            bad = bad + bad_text[bad_text.length-1]
            console.log(bad)

            input.value = bad
        }
    } else {
        event.target.style.color = 'black'
        input.value = bad_text
        flagC=false
    }
    clean_count++
}