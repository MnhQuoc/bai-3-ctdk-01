function checksonguyen() {
    let songuyen = +document.getElementById("songuyen").value
    if (songuyen >=0 ) {
        document.getElementById("result").innerHTML = songuyen + " là số nguyên dương";
    } else {
        document.getElementById("result").innerHTML = songuyen + " là số nguyên âm";
    }
}