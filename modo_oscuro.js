var check = document.getElementById('modo_oscuro');

check.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
  var checked = check.checked;
  if(checked){
    var elem = document.querySelector(".caja_principal");
    var elem2 = document.querySelector(".body");
    var elem3 = document.querySelector(".footer");
    var elem4 = document.querySelectorAll('.footer_oscuro');
    elem.style.color='white';
    elem2.style.background = '#0f0f0f';
    elem3.style.background = '#0f0f0f';
    for(let i in elem4){
    	elem4[i].style.color = 'white';
    }

  }

  if(!checked){
  	var elem = document.querySelector(".caja_principal"); //cambio de color de letra de la caja central
  	var elem2 = document.querySelector(".body");
  	var elem3 = document.querySelector(".footer");
    var elem4 = document.querySelectorAll('.footer_oscuro');
    elem.style.color='black';
    elem2.style.background = 'white';
    elem3.style.background = 'white';
    for(let i in elem4){
    	elem4[i].style.color = 'black';
    }
  }


}