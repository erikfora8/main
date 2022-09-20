//                                GESTION DE CLIENTES

//                                       URL
var bicURL = "https://g98a26bb1a94967-hgx3lwq58xxx8pi2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike";
var cliURL = "https://g98a26bb1a94967-hgx3lwq58xxx8pi2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/";
var msgURL = "https://g98a26bb1a94967-hgx3lwq58xxx8pi2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/";


cargarContenido(bicURL,"#listaBicis");
cargarContenido(cliURL,"#listaClientes");
cargarContenido(msgURL,"#listaClientes");

 //DATOS CLIENTE
 let clientId = $("#ID").val();
 let clientName = $("#NOMBRE").val();
 let clientEmail = $("#EMAIL").val();
 let clientAge = $("#EDAD").val();
 //DATOS FORMATEADOS
 let clientData = {
             id: clientId,
             name: clientName,
             email: clientEmail,
             age: clientAge
            };

//                            AJUSTE DE SALIDA DEL GET

function salidaClientes(id,nombre,email,Edad){
  return "<p>Id: "+id+"</p>"+
        +"<p>Nombre: "+ nombre+"</p>"
        +"<p>Email: "+ email+"</p>"
        +"<p>Edad: "+ Edad+"</p>"
}


function salidaBicicletas(id,marca,modelo,categoria,nombre){
return "<p>Id: "+id+"</p>"+
      +"<p>Marca: "+marca+"</p>"
      +"<p>Modelo: "+ modelo+"</p>"
      +"<p>Categoria: "+categoria +"</p>"
      +"<p>Nombre: "+ nombre+"</p>"

}

function salidaMensaje(id,nombre,email,Edad){
return "<p>Id: "+id+"</p>"+
      +"<p>Nombre: "+ nombre+"</p>"
      +"<p>Email: "+ email+"</p>"
      +"<p>Edad: "+ Edad+"</p>"
}

//                                 APARTADO AJAX

function cargarContenidoC(Url,IdLista){
   $.ajax( {
     //pedir data desde el API rest creado
     url: Url,
     type:'GET',
     dataType:'json',

     //Si funciona la descarga de datos entonces hacer
     success: function(cliente){
     //almacenar los datos en una variable
          let cli = cliente.items;
          console.log(cli);
          $(IdLista).empty();
          for(i = 0; i < cli.length; i++){
              $(IdLista).append("<p> Id ="+cli[i].id+"</p>");
            
          }
  
     },

     //si falla la descarga de datos del api
     error: function(xhr,status){
           alert("ups!, Algo salio mal.");
     }

  } );
}

function cargarContenidoB(Url,IdLista){
  $.ajax( {
    //pedir data desde el API rest creado
    url: Url,
    type:'GET',
    dataType:'json',

    //Si funciona la descarga de datos entonces hacer
    success: function(cliente){
    //almacenar los datos en una variable
         let cli = cliente.items;
         console.log(cli);
         $(IdLista).empty();
         for(i = 0; i < cli.length; i++){
             $(IdLista).append("<p> Id ="+cli[i].id+"</p>");         
         }
 
    },

    //si falla la descarga de datos del api
    error: function(xhr,status){
          alert("ups!, Algo salio mal.");
    }

 } );
}

function cargarContenidoC(Url,IdLista){
  $.ajax( {
    //pedir data desde el API rest creado
    url: Url,
    type:'GET',
    dataType:'json',

    //Si funciona la descarga de datos entonces hacer
    success: function(cliente){
    //almacenar los datos en una variable
         let cli = cliente.items;
         console.log(cli);
         $(IdLista).empty();
         for(i = 0; i < cli.length; i++){
             $(IdLista).append("<p> Id ="+cli[i].id+"</p>");
           
         }
 
    },

    //si falla la descarga de datos del api
    error: function(xhr,status){
          alert("ups!, Algo salio mal.");
    }

 } );
}

//METODO POST
function CrearCliente(datos){
 
  //esta linea convierte el contenido del objeto data en una string
  let dataToSend = JSON.stringify(datos);

  $.ajax( {
    //en este caso solicitamos post API rest creado
    url:'https://g98a26bb1a94967-hgx3lwq58xxx8pi2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/',
    type:'POST',
    //poner datos en la API
    data: dataToSend,
    contentType: 'application/json',
    //Si funciona la descarga de datos entonces hacer
    success: function(cliente){
    //prueba de success   
       console.log(dataToSend);
       console.log("datos subidos!");
       
    },

    //si falla el proceso
    error: function(xhr,status){
        alert("No se pudo enviar el contenido al servidor");
    },
    //al terminar el proceso
    complete: function(){
       cargarClientes();       
    }

 } );
}

//METODO PUT
function ActualizarCliente(){
  
  let clientId = $("#ID").val();
  let clientName = $("#NOMBRE").val();
  let clientEmail = $("#EMAIL").val();
  let clientAge = $("#EDAD").val();

  let data = {
              id: clientId,
              name: clientName,
              email: clientEmail,
              age: clientAge
             };
  //esta linea convierte el contenido del objeto data en una string
  let dataToSend = JSON.stringify(data);

  $.ajax( {
    //en este caso solicitamos post API rest creado
    url:'https://g98a26bb1a94967-hgx3lwq58xxx8pi2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/',
    type:'PUT',
    //poner datos en la API
    data: dataToSend,
    contentType: 'application/json',
    //Si funciona la descarga de datos entonces hacer
    success: function(cliente){
    //prueba de success   
       console.log(dataToSend);
       console.log("datos Actualizados!");
       
    },

    //si falla el proceso
    error: function(xhr,status){
        alert("No se pudo enviar el contenido al servidor");
    },
    //al terminar el proceso
    complete: function(){
       cargarClientes();       
    }

 } );
}

