var binario = document.getElementById('txtBinario');
var btn = document.getElementById('btnCalcular');
var resultado = document.getElementById('resultado');

var validar = () => {

    let text = binario.value.trim();
    let ok = true;

    if (text.length != 8) {
        alert('El numero binario debe ser una cifra de 8 numeros');

        return false;
    }

    try {
        text.split('').forEach(x => {
            if (!(x == 1 || x == 0)) {
                alert('Un numero binario debe contener solamente 1s y 0s');
                ok = false;
                throw BreakException;
            }
        });
    } catch (e) { }

    return ok;
}

btn.addEventListener('click', function () {

    if (validar()) {
        calcular();
    }
});

binario.addEventListener('keydown',() =>{ resultado.innerText = 'Resultado:'});

function calcular() {
    let text = binario.value.trim();
    let result = 0;
    let i = 0;

    text.split('').reverse().forEach(n => {
        if (n == 1) {
            result += Math.pow(2, i);
        }

        i++;
    });

    i = 0;

    resultado.innerText = 'Resultado: ' + result;

}
