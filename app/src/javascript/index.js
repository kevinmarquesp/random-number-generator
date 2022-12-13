const $genBtn = document.querySelector('#gen-btn');
const $txtOut = document.querySelector('#txt-out');
const $modalErr = document.querySelector('#modal-error');
const $btnCopy = document.querySelector('#btn-copy-out');

const $minInput = document.querySelector('#min-input');
const $maxInput = document.querySelector('#max-input');
const $repeatInput = document.querySelector('#repeat-input');
const $leftMod = document.querySelector('#leftstr-input');
const $rightMod = document.querySelector('#rightstr-input');

function updateUI(arr, left, right) {
    let strOut = '';

    arr.forEach((elm) => {
        strOut += `${left}${elm}${right}`;
    });

    $txtOut.innerText = strOut;
}

function genRandomNum(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    );
}

$genBtn.onclick = () => {
    let min = Number($minInput.value.replace(',', '.'));
    let max = Number($maxInput.value.replace(',', '.'));
    let repeat = Number($repeatInput.value);
    let left = $leftMod.value.replace('\\n', '\n');
    let right = $rightMod.value.replace('\\n', '\n');

    min = Math.floor(min);
    max = Math.floor(max) + 1;
    repeat = repeat === 0 ? 1 : repeat;

    if (min !== NaN && max !== NaN && max > min) {
        let arr = new Array();

        for (let i = 0; i < repeat; i++) {
            arr.push(genRandomNum(min, max));
            updateUI(arr, left, right);
        }

    } else {
        let modalErr = new bootstrap.Modal($modalErr, {});
        modalErr.show();

        console.log(`Debug::min:\t\t\t"${min}"`);
        console.log(`Debug::max:\t\t\t"${max}"`);
        console.log(`Debug::repeat:\t\t"${repeat}"`);
        console.log(`Debug::leftMod:\t\t"${left}"`);
        console.log(`Debug::rightMod:\t"${right}"`);
    }
};

$btnCopy.onclick = () => {
    let tmpInput = document.createElement('input');
    tmpInput.value = $txtOut.innerText;

    document.body.appendChild(tmpInput);

    tmpInput.select();
    document.execCommand('copy');

    document.body.removeChild(tmpInput);
};
