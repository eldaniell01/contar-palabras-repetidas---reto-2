const carta = 'bici coche balón _playstation bici coche peluche';

var tamaño= carta.split(" "); // se omite los espacios
var t = tamaño.length; // se obtiene el tamaño del objeto
var palabra = [];// donde se guardara las plabras que no contengan _

for(var i=0; i<t;i++){
    const elemento = tamaño[i]; 
    if(!palabra.includes(tamaño[i])){//se asigna el elemento si no se encuentra 
        palabra.push(elemento);
    }

}

console.log(palabra)
var p=[];
// cuenta los elementos que se repiten 
for(let valor of palabra){
    
    var contar = 0;
    for(let valor2 of tamaño){
        if(valor == valor2){
            contar++;
        }
    }
    if(valor[0]!="_"){
        p.push(valor+":"+contar);
        
    }
    
}


console.log(p);

tabla(p);

function tabla(p){
    // ciclo for en el cual va ir recorriendo todos los objetos convertidos y los va almacenar variable valor
    for(let valors of p){
        //se pintan los datos del objeto en el identificador root, se le asigna cada dato del objeto a cada campo de la tabla
        root.innerHTML +=`
        <tr>
            <th scope="row">${valors}</th>
            

        </tr>
        `
    }
}