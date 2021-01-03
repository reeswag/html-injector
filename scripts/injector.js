function injector() {
    const INPUT = document.getElementById('input_id').value;
    document.getElementById('custom').innerHTML = INPUT;
}

function iframe() {
    const LOC = document.getElementById('iframe_input_id').value;
    console.log(LOC);
    document.getElementById('myframe').src = LOC;
}