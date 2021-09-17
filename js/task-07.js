// elements
const fontSizeControlerRef = document.querySelector('#font-size-control');
const outputTextRef = document.querySelector('#text');

// functions

function changeFontSize() {
  outputTextRef.style.fontSize = `${fontSizeControlerRef.value}px`;
}

// function changeFontSizeAlt() {
//     const defaultFontSize = parseInt(
//       window.getComputedStyle(document.body).getPropertyValue('font-size')
//     );
//     fontSizeControlerRef.min = defaultFontSize / 2;
//     fontSizeControlerRef.max = defaultFontSize * 2;

//     outputTextRef.style.fontSize = `${fontSizeControlerRef.value}px`;
//   }

// operations
fontSizeControlerRef.value = parseInt(
  window.getComputedStyle(document.body).getPropertyValue('font-size')
);

fontSizeControlerRef.addEventListener('input', changeFontSize);
