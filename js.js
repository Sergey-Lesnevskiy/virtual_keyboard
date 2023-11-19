function soundClick() {
  const sound = new Audio('./sound/sound (mp3cut.net).mp3');
  sound.play();
}
function soundClack() {
  const sound = new Audio('./sound/zvuk2 (mp3cut.net).mp3');
  sound.play();
}

const divContainer = document.createElement('div');
divContainer.id = 'keyBlock';
document.body.append(divContainer);
const divText = document.createElement('div');
divText.classList.add('text');
document.body.before(divText);
divText.innerHTML = 'VIRTUAL KEYBOARD';
const divAboutVirtual = document.createElement('div');
divAboutVirtual.classList.add('descriptionKeyboard');
document.body.after(divAboutVirtual);
divAboutVirtual.innerHTML = 'Клавиатура создана в операционной системе Windows';
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
  divContainer.innerHTML = out;
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
const letters = document.querySelectorAll('.key-key');
document.addEventListener('keydown', (event) => {
  const actKey = document.querySelector(`#${event.code}`);
  if (actKey.id === 'Backspace') {
    const select = inputText.selectionEnd;
    const textj = textAr.split('');
    textj.splice(select - 1, 1);
    textAr = textj.join('');
    inputIn();
    inputText.selectionStart = select;
    inputText.selectionEnd = select;
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'Delete') {
    const select = inputText.selectionEnd;
    const textj = textAr.split('');
    textj.splice(select, 1);
    textAr = textj.join('');
    inputIn();
    inputText.selectionStart = select;
    inputText.selectionEnd = select;
    event.preventDefault();
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
    // a -= 1;
    inputText.focus();
    inputIn();
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'ArrowRight') {
    // a += 1;
    inputText.focus();
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'ArrowUp') {
    inputText.focus();
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'ArrowDown') {
    inputText.focus();
    actKey.classList.add('active');
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
    soundClack();
  } else if (actKey.id === 'AltLeft') {
    actKey.classList.add('active');
    event.preventDefault();
    soundClack();
  } else if (actKey.id === 'AltRight') {
    actKey.classList.add('active');
    event.preventDefault();
    soundClack();
  } else if (actKey.id === 'MetaLeft') {
    actKey.classList.add('active');
    soundClack();
  } else if (letters[17].classList.value === ('key-key active_Upper')) {
    inputText.focus();
    actKey.classList.add('active');
    textAr += event.key.toUpperCase();
    inputIn();
    soundClack();

  } else {
    textAr += event.key.toLowerCase();
    inputIn();
    soundClick();
  }
});

divContainer.addEventListener('mouseover', (event) => {
  const actKey = document.querySelector(`#${event.target.id}`);
  if (event.target.id !== 'keyBlock') {
    actKey.classList.add('activeMouse');
  }
});
divContainer.addEventListener('mouseout', (event) => {
  const actKey = document.querySelector(`#${event.target.id}`);
  if (event.target.id !== 'keyBlock') {
    actKey.classList.remove('activeMouse');
  }
});
divContainer.addEventListener('mousedown', (event) => {
  const actKey = document.querySelector(`#${event.target.id}`);
  if (actKey.id === 'Backspace') {
    const select = inputText.selectionEnd;
    const textj = textAr.split('');
    textj.splice(select - 1, 1);
    textAr = textj.join('');
    inputIn();
    inputText.selectionStart = select;
    inputText.selectionEnd = select;
    actKey.classList.add('active');
    soundClack();
  } else if (actKey.id === 'Delete') {
    const select = inputText.selectionEnd;
    const textj = textAr.split('');
    textAr = textj.join('');
    inputIn();
    inputText.selectionStart = select;
    inputText.selectionEnd = select;
    event.preventDefault();
    actKey.classList.add('active');
    soundClack();
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
    inputText.focus();
    let select = inputText.selectionEnd;
    select -= 1;
    inputText.selectionStart = select;
    inputText.selectionEnd = select;
    actKey.classList.add('active');
  } else if (actKey.id === 'ArrowRight') {
    inputText.focus();
    actKey.classList.add('active');
  } else if (actKey.id === 'ArrowUp') {
    inputText.focus();
    actKey.classList.add('active');
  } else if (actKey.id === 'ArrowDown') {
    inputText.focus();
    actKey.classList.add('active');
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
  } else if (actKey.id === 'AltLeft') {
    actKey.classList.add('active');
    event.preventDefault();
  } else if (actKey.id === 'AltRight') {
    actKey.classList.add('active');
    event.preventDefault();
  } else if (actKey.id === 'MetaLeft') {
    actKey.classList.add('active');
  } else if (letters[17].classList.value === ('key-key active_Upper')) {
    actKey.classList.add('active');
    textAr += event.target.innerText.toUpperCase();
    inputIn();
  } else if (event.target.id === 'keyBlock') {
    event.preventDefault();
  } else {
    textAr += event.target.innerText;
    actKey.classList.add('active');
    inputIn();
    soundClick();
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
