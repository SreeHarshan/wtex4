function calcular( value) {
       if (value === 'c') {
        document.getElementById('calc').value = '';
       }
       else if (value === '=') {
        document.getElementById('calc').value = eval(document.getElementById('calc').value );
       }
       else{
        document.getElementById('calc').value += value;
       }
}