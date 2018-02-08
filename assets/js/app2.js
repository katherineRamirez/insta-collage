function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var idFirst = document.querySelector('#idFirst').childElementCount;
    var idFirst2 = document.querySelector('#idFirst').children;

    console.log(idFirst);

    if (idFirst < 3) {
        alert('Faltan ' + (3 - idFirst) + ' imagenes para completar el collage');
    }
    if (idFirst === 3) {
        alert('Tiene la cantidad mínima de imagenes en su collage');
    }
}

// var converttoPdf = document.querySelector('.converttoPdf');
// converttoPdf.addEventListener('click', function () {
//     var idFirst = document.querySelector('#idFirst').childNodes;
//     console.log(idFirst);
// })