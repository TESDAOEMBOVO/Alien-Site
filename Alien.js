const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

const opentwo = document.getElementById('open-two');
const modal_containertwo = document.getElementById('modal-container-two');
const closetwo = document.getElementById('close-two');

open.onclick = function() {
    modal_container.style.display = "flex";
    return false ;
}

close.onclick = function() {
    modal_container.style.display = "none";
}

opentwo.onclick = function() {
    modal_containertwo.style.display = "flex";
    return false ;
}

closetwo.onclick = function() {
    modal_containertwo.style.display = "none";
}
