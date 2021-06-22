var check = document.getElementById('modo_oscuro');  //Elemento para encontrar el checkbox

check.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
  var checked = check.checked;
  if(checked){
    var elem = document.querySelector(".caja_principal");
    var elem2 = document.querySelector(".body");
    var elem3 = document.querySelector(".footer");
    var elem4 = document.querySelectorAll('.footer_oscuro');
    var elem5 = document.querySelector('.caja_izquierda');
    var elem6 = document.getElementById('derecha_twitter');
    var elem7 = document.getElementById('derecha_facebook');
    var elem8 = document.querySelectorAll('.numeracion');
    //Header
    var elem9 = document.querySelector('.header');
    var elem10 = document.querySelectorAll('.nav_elemento');
    var elem11 = document.querySelector('.caja_boton--mobile');
    var elem12 = document.querySelectorAll('.bot_head');
    var elem13 = document.querySelector('.creador');

    elem.style.color='white';
    elem2.style.background = '#0f0f0f';
    elem3.style.background = '#0f0f0f';
    elem5.style.boxShadow = '0 0 10px gray, 0 0 40px gray, 0 0 80px gray';
    elem6.style.boxShadow = '0 0 10px skyblue, 0 0 40px skyblue, 0 0 80px skyblue'; //Aca le podria gregar para ver cada vez que la caja esta hover cambiarle el boxshadow  
    elem7.style.boxShadow = '0 0 10px #1771e6, 0 0 40px #1771e6, 0 0 80px #1771e6';
    elem9.style.background = 'black';
    elem9.style.color = '#f6e200';
    elem11.style.background = 'black';
    elem11.style.color = '#f6e200';

        // Por alguna razon aca me marca error por eso lo pongo al final PERO TODO SE SOLUCIONA CON UN TRYCATCH XD
  try {//Try catch del elem4
    for(let i in elem4){
      elem4[i].style.color = 'white';}
  } catch(e){}

  try {//Try catch del elem8
    for(let i in elem8){
      elem8[i].style.textShadow = '0 0 5px rgba(0,178,255,1), 0 0 10px rgba(0,178,255,1), 0 0 20px rgba(0,178,255,1), 0 0 40px rgba(38,104,127,1), 0 0 80px rgba(38,104,127,1), 0 0 90px rgba(38,104,127,1), 0 0 100px rgba(38,104,127,1), 0 0 140px rgba(38,104,127,1), 0 0 180px rgba(38,104,127,1)';
      elem8[i].style.color = 'white';
    }
  } catch(e){}

  try {//Try catch del elem10
    for(let i in elem10){
          elem10[i].style.background = 'black';
          elem10[i].style.color = '#f6e200';}
  } catch(e){}

  try {//Try catch del elem12
    for(let i in elem12){
      elem12[i].style.background = 'black';
      elem12[i].style.color = '#f6e200';}
  } catch(e){}


//JQuery para cuando el elemento esta hover
  $(document).ready(function(){
  $(elem6).hover(function(){
    $(this).css("box-shadow", "0 0 10px #428add, 0 0 40px #428add, 0 0 80px #428add");
    }, function(){
    $(this).css("box-shadow", "0 0 10px skyblue, 0 0 40px skyblue, 0 0 80px skyblue");
    });
  });

  $(document).ready(function(){
  $(elem7).hover(function(){
    $(this).css("box-shadow", "0 0 10px #3c538c, 0 0 40px #3c538c, 0 0 80px #3c538c");
    }, function(){
    $(this).css("box-shadow", "0 0 10px #1771e6, 0 0 40px #1771e6, 0 0 80px #1771e6"); // 0 0 10px #3c538c, 0 0 40px #3c538c, 0 0 80px #3c538c
    });
  });



//HEADER
  $(document).ready(function(){
  $(elem10).hover(function(){
    $(this).css("background", "#151514");
    $(this).css("color", "white"); 
    }, function(){
    $(this).css("background", "black");
    $(this).css("color", "#f6e200");     
    });
  });

  $(document).ready(function(){
  $(elem12).hover(function(){
    $(this).css("background", "#151514");
    $(this).css("color", "white");
    }, function(){
    $(this).css("background", "black"); 
    $(this).css("color", "#f6e200");
    });
  });

  $(document).ready(function(){
  $(check).hover(function(){
    $(elem13).css("background", "#151514");
    }, function(){
    $(elem13).css("background", "black");
    });
  });






  } //Fin del IF checked

  if(!checked){
  	var elem = document.querySelector(".caja_principal"); //cambio de color de letra de la caja central
  	var elem2 = document.querySelector(".body");
  	var elem3 = document.querySelector(".footer");
    var elem4 = document.querySelectorAll('.footer_oscuro');
    var elem5 = document.querySelector('.caja_izquierda');
    var elem6 = document.getElementById('derecha_twitter');
    var elem7 = document.getElementById('derecha_facebook');
    var elem8 = document.querySelectorAll('.numeracion');
    var elem9 = document.querySelector('.header');
    var elem10 = document.querySelectorAll('.nav_elemento');
    var elem11 = document.querySelector('.caja_boton--mobile');
    var elem12 = document.querySelectorAll('.bot_head');
    var elem13 = document.querySelector('.creador');

    elem.style.color='black';
    elem2.style.background = 'white';
    elem3.style.background = 'white';
    elem5.style.boxShadow = 'none';
    elem6.style.boxShadow = 'none';
    elem7.style.boxShadow = 'none';
    elem9.style.background = '#f6e200';
    elem9.style.color = 'black';
    elem11.style.background = '#f6e200';
    elem11.style.color = 'black';

    try {//Try Catch del elem 4
      for(let i in elem4){
      elem4[i].style.color = 'black';
    }
    } catch(e) {}

    try {//Try catch del elem8
    for(let i in elem8){
      elem8[i].style.textShadow = 'none';
      elem8[i].style.color='black'
    }
    } catch(e){}

//Header
    try {//Try catch del elem10
    for(let i in elem10){
          elem10[i].style.background = '#f6e200';
          elem10[i].style.color = 'black';}
    } catch(e){}

    try {//Try catch del elem12
    for(let i in elem12){
      elem12[i].style.background = '#f6e200';
      elem12[i].style.color = 'black';}
  } catch(e){}

//Jquery para elementos hover
    $(document).ready(function(){
    $(elem6).hover(function(){
    $(this).css("box-shadow", "none");
    }, function(){
    $(this).css("box-shadow", "none");
    });
  });

    $(document).ready(function(){
    $(elem7).hover(function(){
    $(this).css("box-shadow", "none");
    }, function(){
    $(this).css("box-shadow", "none");
    });
  });

  //HEADER
  $(document).ready(function(){
  $(elem10).hover(function(){
    $(this).css("background", "#ffee2d");
    $(this).css("color", "white");
    }, function(){
    $(this).css("background", "#f6e200"); 
    $(this).css("color", "black"); 
    });
  });

  $(document).ready(function(){
  $(elem12).hover(function(){
    $(this).css("background", "#ffee2d");
    $(this).css("color", "white");
    }, function(){
    $(this).css("background", "#f6e200");
    $(this).css("color", "black");  
    });
  });

  $(document).ready(function(){
  $(check).hover(function(){
    $(elem13).css("background", "#ffee2d");
    }, function(){
    $(elem13).css("background", "#f6e200");
    });
  });  


  }


}