const ubahWarna = document.querySelector('.ubah-warna');
ubahWarna.addEventListener('click', function () {
  document.body.style.backgroundColor = 'white';
});

// random warna
const buatTombol = document.createElement('button');
const buatText = document.createTextNode('Random Warna');
buatTombol.appendChild(buatText);
buatTombol.setAttribute('type', 'button');
const tombol = document.querySelector('.tombol');
tombol.appendChild(buatTombol);
buatTombol.style.backgroundColor = 'cadetblue';

buatTombol.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sMerah = document.querySelector('input[name=sMerah]');
sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sHijau = document.querySelector('input[name=sHijau]');
sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sBiru = document.querySelector('input[name=sBiru]');
sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const inputR = document.querySelector('.input-r');
const valueR = document.querySelector('.value-r');
valueR.textContent = inputR.value;
inputR.addEventListener('input', (event) => {
  valueR.textContent = event.target.value;
});

const inputG = document.querySelector('.input-g');
const valueG = document.querySelector('.value-g');
valueG.textContent = inputG.value;
inputG.addEventListener('input', (event) => {
  valueG.textContent = event.target.value;
});

const inputB = document.querySelector('.input-b');
const valueB = document.querySelector('.value-b');
valueB.textContent = inputB.value;
inputB.addEventListener('input', (event) => {
  valueB.textContent = event.target.value;
});
