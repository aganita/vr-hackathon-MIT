var socket = io();

socket.on('change cube', function(colorValue){
  console.log('changing the cube color!', colorValue)
  document.getElementById("cube").setAttribute('material', 'color', colorValue);
});

$('body').on("click", 'scene', () => {
  console.log('yyyyyyyyess!');
  document.getElementById("cube").setAttribute('material', 'color', 'red');
  let colorValueSend = 'red'
  socket.emit('change cube', colorValueSend);
});