/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/


class DrawingStraightLine extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {

    // Allows you to actually draw out your squares
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.contextDraft.strokeStyle = strokePicker;
    // Kind of line
    this.contextDraft.lineJoin = "round";
    // Width of line
    this.contextDraft.lineWidth = 5;
    // Drawing the line here
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(coord[0], coord[1]);


    // Fill in the color
    this.contextReal.strokeStyle = strokePicker;
    // Kind of line
    this.contextReal.lineJoin = "round";
    // Width of line
    this.contextReal.lineWidth = 5;
    // Drawing the line here
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
    
  }
  onDragging(coord, event) {
    // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
    this.contextDraft.lineTo(
      coord[0],
      coord[1]
    );
    this.contextDraft.stroke();
  }

  onMouseMove() {
  }

  // Clicking and removing your mouse
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );

    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}

}
