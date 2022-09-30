import qr from 'qrcode'
import ConfettiGenerator from "confetti-js";



const form = document.querySelector('#qr-code');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  
  
  const qrImage = await qr.toString(data.url,
    { 
      type: 'svg', 
      color: {
        light: '#3685FF',
        dark: '#ffffff'
      }
   })

   console.log(qrImage);

  document.querySelector('#svgTag').innerHTML = qrImage;
  let confettiElement = document.getElementById('my-canvas');
  let confettiSettings = { target: confettiElement };
  let confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
})