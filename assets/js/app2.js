//API Drag and Drop
//Box Destino

var elemento = document.querySelector('.element');
var boxDestino = document.querySelector('.collage');

elemento.ondragstart = function (event) {
    event.dataTransfer.setData('key', event.target.id);
    console.log('is draging');
}

boxDestino.ondragover = function (event) {
    event.preventDefault();
    console.log('is draging over');
}

boxDestino.ondrop = function (event) {
    var dropItem = event.dataTransfer.getData('key');
    event.preventDefault();
    console.log(event);
    console.log('is dropped...');
    console.log(dropItem);
    var myElement = document.getElementById(dropItem);
    console.log(myElement);
    var myNewElement = document.createElement('img');
    boxDestino.appendChild()

}

