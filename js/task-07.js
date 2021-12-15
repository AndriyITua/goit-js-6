const textToChange = document.querySelector(`#text`);
console.log(textToChange.textContent);

const rangeInput = document.querySelector(`#font-size-control`);
console.log(rangeInput.value);

const onRangeChange = (event) => {
    const { value } = event.target;
    console.log(`${value}`);
    textToChange.style.fontSize = `${value}` + `px`;
}
rangeInput.addEventListener('input', onRangeChange);