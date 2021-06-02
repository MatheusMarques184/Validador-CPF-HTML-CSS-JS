document.querySelector("#submit").addEventListener("click", function(event){
    event.preventDefault();
    validador();
  });
document.querySelector("#cpf").addEventListener("keypress", function(event){
    if(event.keyCode ===13){
    validador();
    }
  });

function validador(){
    let cpf= document.querySelector("#cpf").value
    let cpfLimpo = cpf.replace(/\D+/g, '')  //  "/\D+/g" é uma representacao numerica que apresenta tudo que nao é um número
    let cpfArray= Array.from(cpfLimpo)
    cpfArray.splice(-2, 2)
    let verificador=[11];
    let y=0;
    for(let x of cpfArray){
        verificador[y]= x*(10-y);
        y++;
    }
    let total= verificador.reduce((acumulador,valor)=> acumulador+=valor, 0);
    let elemento = 11-(total%11);
    if(elemento>9){
        elemento=0
    }
    verificador[9]= elemento;
    cpfArray[9]= elemento.toString();

    y=0;
    for(let x of cpfArray){
        verificador[y]= x*(11-y);
        y++;
    }
    total= verificador.reduce((acumulador,valor)=> acumulador+=valor, 0);

    elemento = 11-(total%11);
    if(elemento>9){
        elemento=0
    }
    verificador[10]= elemento;
    cpfArray[10]= elemento.toString();
    cpfArray= cpfArray.join('');
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = '';
    const p = document.createElement('p');
    resultado.appendChild(p);
    if (cpfArray===cpfLimpo){
        p.classList.add('valido');
        p.innerHTML = `Valido`
    } else{
        p.classList.add('invalido');
        p.innerHTML = `Invalido`
    }
}