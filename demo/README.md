# UI-genelovesme

A re-redesing of the GeneLoves.Me

## Estructura del proyecto
1. index.html .- Fichero de inicio del sitio
2. pages.- Directorio que contiene las páginas del sitio
3. assets.- Directorio de recursos del sitio y que contiene los siguientes sub-directorios:
  1. components.- Componentes visuales que han sido desarrollados previamente a la implementación en el sitio. Estos componentes no tienen ningún enlace con el sitio. Cada componente es un módulo completo de código funcional que puede ser estudiado para poder adaptarlo en una página web. Este directorio ha sido creado como paso previo a la implementación de una funcionalidad. Una vez desarrollado y probado, el código es adaptado a la página del sitio donde se la requiere.
  2. css.- hojas de estilo de todo el sitio, incluyendo la de los componentes.
  3. fonts.- fuentes (tipo de letra) empleadas en el diseño
  4. images.- imagenes utilizadas en el diseño del sitio
  5. js.- scripts de librerías externas utilizadas en el sitio (p.ej., jquery, bootstrap). Además contiene el directoirio "controller" donde se almacenan los scripts que le dan funcionalidad a cada página del sitio
  6. less.- hojas de estilo en código less (utilizadas unicamente si se decide compilar una hoja de estilo nuevamente)
  7. pages.- paginas html del sitio
  8. plugins.- herramientas de terceros
*** 
## Navegación del sitio.

![Ver mapa](https://gitlabpros.dsic.upv.es/carii/ui-genelovesme/tree/master/assets/documentacion/navegacionSitio.png)

## Tour Demo
Para revisar las implementaciones que componen el sitio seguir los siguients pasos:
1. Iniciar página index.html
   1. Click en icono superior (forma de persona) de la página, para presentar el formulario de login
   2. Ingresar cualquier texto en usuario y contraseña.
   3. Pulsar en botón ingresar.
2. Visualizar el panel principal (panel.html). Esta página es el punto central de la aplicación. 
   1. Ir al menu izquierdo y click sobre "Diseases" (Enfermedades)
   2. Escoger la primera enfermdedad (Chron), esta acción navegará a la página disease.html.
3. Visualizar pagína de información de enfermedad.
   1. Navegar por los tabs (Dashboard, Variaciones, Visor Genómico).