function calcular(type, value) {
    if( type === 'action'){
       if (value === 'c') {
        
        document.getElementById('calc').value = ''//botão limpar
       }
       if (value === '*' || value === '/' || value === '.' || value === '+' || value === '-') {
        document.getElementById('calc').value += value
       }
       if (value === '=') {
        document.getElementById('calc').value = eval(document.getElementById('calc').value )       
       }
    
    } else if(type === 'num'){
      
      document.getElementById('calc').value += value//concatenar a equação no visor
    }
   }