const textarea = document.getElementById('textarea')
const btnConverter = document.getElementById('btnConvert')
const code = document.getElementById('code')
const copied = document.getElementById('copied')

btnConverter.addEventListener('click', convert, true)

function convert(){
  let valueText = textarea.value;
  code.textContent=valueText.replace(/\r?\n/g, '\\n');
  copied.classList.remove('copied-animated')
}

const copyButton = document.getElementById('clipboard');

copyButton.addEventListener('click', () => {
  const textToCopy = document.getElementById('code').textContent;
  copied.classList.add('copied-animated')
  navigator.clipboard.writeText(textToCopy)
  .then(() => {
    console.log('Texto copiado al portapapeles');
  })
  .catch((err) => {
    console.error('No se pudo copiar al portapapeles: ', err);
  });
  outCopied() 
});

function outCopied (){
  setTimeout(() => {
    copied.classList.remove('copied-animated');
  }, 10000); // 10 segundos en milisegundos
};