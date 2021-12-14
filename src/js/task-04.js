let counterValue = 0;
const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    value: ducument.querySelector('#value'),
};
console.log(refs.btnDecrement);
console.log(refs.btnIncrement);
console.log(refs.value);

const onBtn = (num) => {
    counterValue += num;
    refs.value.textContent = counterValue;
}
refs.btnDecrement.addEventListener('click', () => onBtn(-1));
refs.btnIncrement.addEventListener('click', () => onBtn(+1));