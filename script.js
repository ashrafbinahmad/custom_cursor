let body = document.getElementById('body');
function moveCursor(e) {
    document.body.style.setProperty('--mouse-x', e.x + 'px')
    document.body.style.setProperty('--mouse-y', e.y + 'px')
}


function mousedown() {
    let cursor = document.getElementById('cursor');
    console.log('mouse down');
    cursor.style.filter = `brightness(0.5)`;
}
function mouseup() {
    let cursor = document.getElementById('cursor');
    cursor.style.filter = `brightness(1)`;

}