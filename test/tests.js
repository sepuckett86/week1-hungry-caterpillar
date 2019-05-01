const test = QUnit.test;

function addCircleDiv(parent, color) {
    const div = document.createElement('div');
    div.classList.add('circle');
    div.classList.add(color);
    parent.appendChild(div);
}

test('adds div with circle and color class to dragon', assert => {
    // arrange
    const circleClass = 'circle';
    const colorClass = 'red';
    const dragonParent = document.createElement('section');
    const expected = '<div class="' + circleClass + ' ' + colorClass + '"></div>';
    // act 
    addCircleDiv(dragonParent, colorClass);
    // assert
    const actual = dragonParent.innerHTML;
    assert.equal(actual, expected);
});