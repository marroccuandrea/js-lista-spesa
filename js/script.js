// 1.
const listaSpesa = ['Salame','Verdure','Pane','Frutta','Cioccolata','Grana','Pere','Coriandoli','Termosifone']

const stampList = document.getElementById('stampa');

// 2.
let counter = 0;
//3. 
while(!(counter == listaSpesa.length)){
    stampList.innerHTML += '<li>' + listaSpesa[counter] + '</li>';

    counter++;
    console.log(listaSpesa);
    
}