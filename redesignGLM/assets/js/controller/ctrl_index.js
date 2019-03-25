$(function () {
    var dialog;

    inicializar();

   
    function inicializar(){
        $('#btnLogin').click(function () {
            btnLogin_Click();
        });
        $('#btnIngresar').click(function(){
            btnIngresar_Click();
        })
        $('#btnCancelar').click(function(){
            btnCancelar_Click();
        });

        window.onclick= function(){
          if(event.target == $('#frmLogin')){
            $('#frmLogin').css({display: "none"});
          }
        }
    }

    function btnLogin_Click() {
        $('#frmLogin').css({display:"block"});
    }
    function btnCrearCuenta_Click(){
      
    }
    function btnIngresar_Click(){
        window.location.href = "panel.html";
    }
    function btnCancelar_Click(){
      $('#frmLogin').css({display:"none"});

    }
});