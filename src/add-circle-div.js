function addCircleDiv(parent, color) {
    const div = document.createElement('div');
    div.classList.add('circle');
    div.classList.add(color);
    parent.appendChild(div);
}

export default addCircleDiv;