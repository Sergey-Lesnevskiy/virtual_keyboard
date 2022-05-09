function soundClick() {
  const sound = new Audio('./sound/sound (mp3cut.net).mp3');
  sound.play();
}
function soundClack() {
  const sound = new Audio('./sound/zvuk2 (mp3cut.net).mp3');
  sound.play();
}

const divConteiner = document.createElement('div');
divConteiner.id = 'keyblock';
document.body.append(divConteiner);
const divText = document.createElement('div');
divText.classList.add('text');
document.body.before(divText);
divText.innerHTML = 'VIRTUAL KEYBOARD';
const divAboutVirtual = document.createElement('div');
divAboutVirtual.classList.add('descriptionKeyboard');
document.body.after(divAboutVirtual);
divAboutVirtual.innerHTML = 'Клавиатура создана в операционной системе Windows\nДля переключения языка комбинация: ещё не работает';
const inputText = document.createElement('textarea');
inputText.id = 'textArea';
document.body.prepend(inputText);

const keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
  'P', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n',
  'm', ',', '.', '/', '&uarr;', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;'];
const keyboardData = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8',
  'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU',
  'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp',
  'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      out += '<div class="clearFix"></div>';
    }
    out += `<div class ="key-key" id ="${keyboardData[i]}" > ${keyboard[i].toLowerCase()} </div>`;
  }
  divConteiner.innerHTML = out;
}
let textAr = '';
init();
function remuveElem(element) {
  element.classList.remove('active');
}
function remuveSHift(element) {
  element.classList.remove('active_Upper');
}
function inputIn() {
  inputText.value = textAr;
}
const allButton = document.querySelectorAll('.key-key');
// let a = 0;
const letters = document.querySelectorAll('.key-key');
document.addEventListener('keydown', (event) => {
  // allButton.forEach(remuveElem);
  const actKey = document.querySelector(`#${event.code}`);
  if (actKey.id === 'Backspace') {
    textAr = textAr.slice(0, textAr.length - 1);
    inputText.innerText = '';
    inputIn();
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'Tab') {
    textAr += '  ';
    inputIn();
    event.preventDefault();
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'Enter') {
    textAr += '\n';
    inputIn();
    actKey.classList.add('active');
    event.preventDefault();
    soundClack();
  } else if (actKey.id === 'ArrowLeft') {
    // a += 1;
    inputText.focus();
    // inputText.selectionStart = inputText.value.length - a;
    // inputIn();
    actKey.classList.add('active');
    // event.preventDefault();
    soundClack();
  } else if (actKey.id === 'ArrowRight') {
    inputText.focus();
    // inputText.selectionStart = inputText.value.length - a;
    // a -= 1;
    // inputIn();
    actKey.classList.add('active');
    // event.preventDefault();
    soundClack();
  } else if (actKey.id === 'ArrowUp') {
    // const b = 45;
    inputText.focus();
    // inputText.selectionStart = inputText.value.length - b;
    // inputIn();
    // a += b;
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'ArrowDown') {
    // const b = 45;
    inputText.focus();
    // inputText.selectionStart = inputText.value.length - b;
    // inputIn();
    actKey.classList.add('active');
    // // a = ;
    // event.preventDefault();
    soundClack();
  } else if (actKey.id === 'CapsLock') {
    for (let i = 0; i < keyboard.length; i += 1) {
      if (keyboardData[i].startsWith('Key')) {
        letters[i].classList.toggle('active_Upper');
      }
    }
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'ShiftLeft') {
    event.preventDefault();
    for (let i = 0; i < keyboard.length; i += 1) {
      if (keyboardData[i].startsWith('Key')) {
        letters[i].classList.add('active_Upper');
      }
    }
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'ShiftRight') {
    event.preventDefault();
    for (let i = 0; i < keyboard.length; i += 1) {
      if (keyboardData[i].startsWith('Key')) {
        letters[i].classList.add('active_Upper');
      }
    }
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'ControlLeft') {
    actKey.classList.add('active');
    console.log('a');
    soundClack();
  } else if (actKey.id === 'AltLeft') {
    actKey.classList.add('active');
    event.preventDefault();
    console.log('b');
    soundClack();
  } else if (actKey.id === 'AltRight') {
    actKey.classList.add('active');
    event.preventDefault();
    console.log('b');
    soundClack();
  } else if (actKey.id === 'MetaLeft') {
    actKey.classList.add('active');
    soundClack();
  } else if (letters[17].classList.value === ('key-key active_Upper')) {
    actKey.classList.add('active');
    textAr += event.key.toUpperCase();
    inputIn();
    soundClack();
  } else {
    actKey.classList.add('active');
    textAr += event.key.toLowerCase();
    inputIn();
    soundClick();
  }
});
divConteiner.addEventListener('mousedown', (event) => {
  const actKey = document.querySelector(`#${event.target.id}`);
  if (actKey.id === 'Backspace') {
    textAr = textAr.slice(0, textAr.length - 1);
    inputText.innerText = '';
    inputIn();
    actKey.classList.add('active');
  } else if (actKey.id === 'Tab') {
    textAr += '  ';
    inputIn();
    event.preventDefault();
    actKey.classList.add('active');
  } else if (actKey.id === 'Enter') {
    textAr += '\n';
    inputIn();
    actKey.classList.add('active');
    event.preventDefault();
  } else if (actKey.id === 'ArrowLeft') {
    // a += 1;
    inputText.focus();
    // inputText.selectionStart = inputText.value.length - a;
    // inputIn();
    actKey.classList.add('active');
    // event.preventDefault();
  } else if (actKey.id === 'ArrowRight') {
    inputText.focus();
    // inputText.selectionStart = inputText.value.length - a;
    // a -= 1;
    // inputIn();
    actKey.classList.add('active');
    // event.preventDefault();
  } else if (actKey.id === 'ArrowUp') {
    // const b = 45;
    inputText.focus();
    // inputText.selectionStart = inputText.value.length - b;
    // inputIn();
    // a += b;
    actKey.classList.add('active');
  } else if (actKey.id === 'ArrowDown') {
    // const b = 45;
    inputText.focus();
    // inputText.selectionStart = inputText.value.length - b;
    // inputIn();
    actKey.classList.add('active');
    // // a = ;
    // event.preventDefault();
  } else if (actKey.id === 'CapsLock') {
    for (let i = 0; i < keyboard.length; i += 1) {
      if (keyboardData[i].startsWith('Key')) {
        letters[i].classList.toggle('active_Upper');
      }
    }
    actKey.classList.add('active');
  } else if (actKey.id === 'ShiftLeft') {
    event.preventDefault();
    for (let i = 0; i < keyboard.length; i += 1) {
      if (keyboardData[i].startsWith('Key')) {
        letters[i].classList.add('active_Upper');
      }
    }
    actKey.classList.add('active');
  } else if (actKey.id === 'ShiftRight') {
    event.preventDefault();
    for (let i = 0; i < keyboard.length; i += 1) {
      if (keyboardData[i].startsWith('Key')) {
        letters[i].classList.add('active_Upper');
      }
    }
    actKey.classList.add('active');
  } else if (actKey.id === 'ControlLeft') {
    actKey.classList.add('active');
    console.log('a');
  } else if (actKey.id === 'AltLeft') {
    actKey.classList.add('active');
    event.preventDefault();
    console.log('b');
  } else if (actKey.id === 'AltRight') {
    actKey.classList.add('active');
    event.preventDefault();
    console.log('b');
  } else if (actKey.id === 'MetaLeft') {
    actKey.classList.add('active');
  } else if (letters[17].classList.value === ('key-key active_Upper')) {
    actKey.classList.add('active');
    textAr += event.target.innerText.toUpperCase();
    inputIn();
  } else if (event.target.id === 'keyblock') {
    // console.log('a');
    event.preventDefault();
  } else {
    actKey.classList.add('active');
    textAr += event.target.innerText;
    inputIn();
  }
});
document.addEventListener('keyup', (event) => {
  document.querySelectorAll('.key-key').forEach(remuveElem);
  const actKey = document.querySelector(`#${event.code}`);
  if (actKey.id === 'ShiftLeft') {
    allButton.forEach(remuveSHift);
  }
});

document.addEventListener('mouseup', (event) => {
  document.querySelectorAll('.key-key').forEach(remuveElem);
  const actKey = document.querySelector(`#${event.target.id}`);
  if (actKey.id === 'ShiftLeft') {
    allButton.forEach(remuveSHift);
  }
});
// отрисовали ширину кнопок
function fixClass(IdFind, textButt) {
  const find = document.querySelector(`#${IdFind}`);
  find.innerHTML = textButt;
}

fixClass('Backspace', 'Backspace');
fixClass('Tab', 'Tab');
fixClass('Delete', 'Del');
fixClass('CapsLock', 'Caps Lock');
fixClass('Enter', 'Enter');
fixClass('ShiftRight', 'Shift');
fixClass('ShiftLeft', 'Shift');
fixClass('Space', ' ');
fixClass('ControlLeft', 'Ctrl');
fixClass('MetaLeft', 'Meta');
fixClass('AltLeft', 'Alt');
fixClass('AltRight', 'Alt');
// отрисовали ширину

// document.onkeydown = function (event) {
// console.log(event);
//   // console.log(even);
// };
