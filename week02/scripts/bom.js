const input = document.querySelector('#favchap');
const output = document.querySelector('#output');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  if (input.value != '') {
    output.textContent = '';
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });
    input.focus();
    input.value = '';
  } else {
    output.textContent = 'Enter a book and chapter';
    input.focus();
  }

});