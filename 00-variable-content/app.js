const field = document.querySelector('input');
field.addEventListener('input', event => Array
  .from(document.querySelectorAll('p'))
  .forEach(p => { p.textContent = event.target.value; })
);
