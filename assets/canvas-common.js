/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let colorPicker;
let strokePicker;
let currentFunction;
let dragging = false;

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}

// colorPicker
$("#yellow").click(function(e){
  colorPicker="yellow";
  console.log(colorPicker);
})

$("#blue").click(function(e){
  colorPicker="blue";
  console.log(colorPicker);
})

$("#green").click(function(e){
  colorPicker="green";
  console.log(colorPicker);
})

$("#black").click(function(e){
  colorPicker="black";
  console.log(colorPicker);
})

//strokePicker
$("#strokeYellow").click(function(e){
  strokePicker="yellow";
  console.log(strokePicker);
})

$("#strokeBlue").click(function(e){
  strokePicker="blue";
  console.log(strokePicker);
})

$("#strokeGreen").click(function(e){
  strokePicker="green";
  console.log(strokePicker);
})

$("#strokeBlack").click(function(e){
  strokePicker="black";
  console.log(strokePicker);
})