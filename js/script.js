//  selezione ul
 const listaUl = document.getElementById("listaspesa");
// Lista della spesa
 const listaSpesa = ["Pane", "Latte", "Frutta", "Verdura", "Pasta"];

// scorro tra la lista

// for (let i = 0; i < listaSpesa.length; i++) {
    
//     // salvo l'elemento 

//     let item = listaSpesa[i];

//     // creo li

//     const elementLi = document.createElement("li");
//     // inserisco il contenuto dentro li
//     elementLi.append(item);
//     // inserisco l'li dentro l'ul

//     listaUl.append(elementLi);


// }


let i = 0;
while (i < listaSpesa.length) {
    let item = listaSpesa[i];
    const elementLi = document.createElement("li");
    elementLi.textContent = item;
    listaUl.appendChild(elementLi);
    i++;
}