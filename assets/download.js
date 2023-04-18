let download = function(){
  document.getElementById("canvas-real").fillStyle = "white";
  let link = document.createElement('a');
  link.download = 'filename.png';
  link.href = document.getElementById("canvas-real").toDataURL()
  link.click();
}