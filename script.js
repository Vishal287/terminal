const body = document.getElementById("body");
const mainText = document.getElementById("mainText");
const history = document.getElementById("history");
const html = `
<div class="current">$Vishal<spen style="color: white;">@</spen><spen style="color: blue;">ubantu:</spen>  </div>
<div class="current" id="text"></div>
<div class="courser" id="courser"></div>
`;

let commandText = '';
let commandHistory = {};
let command = 0;
mainText.innerHTML = html;

/**
 * This function is read command text.
 * @param {*} event 
 */
function readCommandText(event) {
    const text = document.getElementById("text");
    commandText += event.key;
    text.innerText = commandText;

}

/**
 * This function is handle command execution 
 * @param {*} event 
 */
function handleEnterEvent(event) {
    const node = document.createElement('div');
    node.className = 'current';
    node.innerText = `$Vishal@ubantu: ${commandText}`;
    history.appendChild(node)
    mainText.innerHTML = html;
    commandText = '';
    body.scrollTop = body.scrollHeight;
}

/**
 * This function is hadel event.
 * @param {*} event 
 */
function watchEvent(event) {
    if (event.keyCode === 13) {
        handleEnterEvent(event);
    } else if (event) {
        readCommandText(event)
    }
}
