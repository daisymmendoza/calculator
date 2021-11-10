/* When number is inserted */
function insert(num) {
    document.rform.textview.value = document.rform.textview.value + num;
}

/* When equal is pressed */
function equal() {
    var exp = document.rform.textview.value;

    if(exp) {
        document.rform.textview.value = eval(exp)
    }
}

/* When delete is pressed */
function backspace() {
    var exp = document.rform.textview.value;

    document.rform.textview.value = exp.substring(0, exp.length - 1);
}

/* When sin is pressed */
function sin() {
    var s = document.rform.textview.value;

    if(s) {
        let es = Math.sin(s);
        document.rform.textview.value = eval(es)
    }
}

/* When cos is pressed */
function cos() {
    var c = document.rform.textview.value;

    if(c) {
        let ec = Math.cos(c);
        document.rform.textview.value = eval(ec)
    }
}

/* When tan is pressed */
function tan() {
    var t = document.rform.textview.value;

    if(t) {
        let et = Math.tan(t);
        document.rform.textview.value = eval(et)
    }
}