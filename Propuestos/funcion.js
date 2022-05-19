function crearTabla(n){
    let a = [];
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
}
