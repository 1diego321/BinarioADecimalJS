var binario = document.getElementById('txtBinario');
var btn = document.getElementById('btnCalcular');
var resultado = document.getElementById('resultado');
var error = document.getElementById('error');

var validar = () => {

    let text = binario.value.trim();
    let ok = true;

    if (text.length != 8) {
        error.innerText = 'El numero binario debe ser una cifra de 8 numeros';
        return false;
    }

    try {
        text.split('').forEach(x => {
            if (!(x == 1 || x == 0)) {
                error.innerText = 'Un numero binario debe contener solamente 1s y 0s';
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

binario.addEventListener('keydown', function (e) {
    if (!(e.key == '1' || e.key == '0' || e.key == 'Backspace')) {
        e.preventDefault();
        return;
    }

    resultado.innerText = 'Resultado:';

    if (validar())
        error.innerHTML = '';

});

binario.addEventListener('keyup', function (e) {
    if (e.key == '1' || e.key == '0' || e.key == 'Backspace') {
        if (validar())
        error.innerHTML = '';
    }
});

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

    resultado.innerHTML = 'Resultado: <span class="result_number">' + result+'</span>';

}
