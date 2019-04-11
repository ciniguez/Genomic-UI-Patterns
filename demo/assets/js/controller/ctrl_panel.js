$(function () {

    inicializar();

   
    function inicializar(){
        $('#btnSalir').click(function(){
          console.log("entro");
            btnLogOut_Click();
        });
        

       
    }

    function btnLogOut_Click() {
      console.log("entro1");
      window.location.href = "../index.html";
    }
    
});