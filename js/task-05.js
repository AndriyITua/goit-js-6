const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
}
refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) { 
    if (refs.inputEl.value === '') {
        refs.outputEl.textContent = 'Anonymous';
    } else { 
        refs.outputEl.textContent = event.currentTarget.value;
    }
}