let a = [];
function crearTabla(n){
    for(let i=0; i<n; i++){
        a.push(Math.floor(Math.random()*(100 - 1) + 1));  
    }
    let html="";
    for(let j=0; j<n; j++){
        let aux = `
        <tr>
            <th>${a[j]}</th>
        </tr>
        `;
        html = html + aux;
    }
    document.getElementById('tabla').innerHTML = html;
    document.getElementById('suma').innerHTML = "";
}
function sumarTabla(){
    let acum=0;
    for(let i=0; i<a.length;i++){
        acum = acum + a[i];
    }
    let html =`La suma de la tabla es: ${acum}`;
    document.getElementById('suma').innerHTML = html;
    a.splice(0,a.length);
}
