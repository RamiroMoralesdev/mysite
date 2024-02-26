function abrirArchivo(rutaArchivo) {
     // Crear un objeto XMLHttpRequest para cargar el archivo
     var xhr = new XMLHttpRequest();
   
     // Abrir el archivo
     xhr.open('GET', rutaArchivo, true);
   
     // Configurar la función que se ejecutará cuando el archivo haya sido cargado
     xhr.onload = function() {
       if (xhr.status === 200) {
         // El contenido del archivo estará disponible en xhr.responseText
         var contenido = xhr.responseText;
         console.log("Contenido del archivo:", contenido);
         // Aquí puedes hacer lo que necesites con el contenido del archivo
       } else {
         console.error('Error al cargar el archivo:', xhr.statusText);
       }
     };
   
     // Enviar la solicitud para cargar el archivo
     xhr.send();
   }
   

   abrirArchivo('/assets/files/Ramiro Morales.pdf');


var Mousetrap = require('mousetrap');

Mousetrap.bind('command+shift+s'), function() {
     abrirArchivo() };


     