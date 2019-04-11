var data = [
    { 'chr': 1, 'value': 6 },
    { 'chr': 2, 'value': 9 },
    { 'chr': 3, 'value': 6 },
    { 'chr': 4, 'value': 5 },
    { 'chr': 5, 'value': 2 },
    { 'chr': 12, 'value': 1 }];

mostrarGraficoBarras(data);
/**
 * Muestra gráfico de barras con los datos enviados como parámetro.
 * @param {*} datos 
 */
function mostrarGraficoBarras(datos) {

    /**
    * DAR FORMATO A LOS DATOS
    */
    // Crear un array con los nombres de cromosomas y otro con los valores de las variaciones en cada uno de ellos.
    var etiquetasChomosomas = [];
    var dataVariations = [];

    datos.forEach(iterarDatos);

    function iterarDatos(item, index) {
        etiquetasChomosomas[index] = 'chr ' + item.chr;
        dataVariations[index] = item.value;
    }
    /**
     * CREACION DE GRAFICO DE BARRAS
     */
    var densityCanvas = document.getElementById("densityChart").getContext('2d');

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 15;
    var densityData = {
        label: 'Number of Variations by Chromosome',
        data: dataVariations,
        "fill": false,
        "backgroundColor": [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)"],
        "borderColor": [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)"],
        "borderWidth": 1,
        "hoverBackgroundColor": "rgb(255,0,0)",
        "options": { 
            "scales": { 
                "xAxes": [ { "ticks": { "beginAtZero": true } } ] 
            } 
        } 
    };

    var barChart = new Chart(densityCanvas, {
        type: 'bar',
        data: {
            labels: etiquetasChomosomas,
            datasets: [densityData]
        }
    });
    document.getElementById("densityChart").addEventListener("click", function (evt) {
        var activePoints = barChart.getElementAtEvent(evt);
        if (activePoints) {
            if (activePoints.length > 0) { //Si no se pulsó en una barra, no ejecutar nada.
                var label = barChart.data.labels[activePoints[0]._index];
                // el label es por ejemplo "chr 12", para obtener unicamente el núemro (i.e., 12) realizo un split 
                var numeroCromosoma = label.split(" ")[1];
                document.getElementById("tituloCromosoma").innerHTML = "Chromosome "+ numeroCromosoma;

                createIdeogram('human', numeroCromosoma, 800, [{
                    name: 'BRCA1',
                    chr: numeroCromosoma,
                    start: 43044294,
                    stop: 43125482
                }]);
            }else{
            
                document.getElementById("tituloCromosoma").innerHTML ="";
                var nodoIdeograma= document.getElementById("_ideogramOuterWrap");
                document.getElementsByClassName("container-ideogram")[0].removeChild(nodoIdeograma);
            }

        }
    });

}

// IDEOGRAMA
/**
 * Muestra cromosoma indicado en sentido horizontal.
 * @param crhId Número del cromosoma a mostrar  
 * @param tamanioCromosoma  Longitud del cromosoma
 * @param anotaciones   Arreglo de anotaciones a mostrar
 * @example of use: createIdeogram ('human','17', 600, [{
        name: 'BRCA1',
        chr: '17',
        start: 43044294,
        stop: 43125482
    }])
 */
function createIdeogram(especie, chrId, tamanioCromosoma, anotaciones) {
    var config = {
        container: '.container-ideogram',
        organism: especie,
        chromosome: chrId,
        chrHeight: tamanioCromosoma,
        orientation: 'horizontal',
        annotations: anotaciones
    };
    var ideogram = new Ideogram(config);
}


