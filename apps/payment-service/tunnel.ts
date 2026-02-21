import ngrok from 'ngrok';

(async function() {
  const url = await ngrok.connect(4002);
  console.log('ngrok tunnel opened at:', url);
})();