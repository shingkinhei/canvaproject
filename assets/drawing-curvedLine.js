/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/
class DrawingCurvedLine extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    // Fill in the color
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
    this.contextDraft.quadraticCurveTo(20, 40,coord[0], coord[1]);
    // Draw the line onto the page
    this.contextDraft.stroke();
  }

  onMouseMove() {}
  // Clicking and removing your mouse
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.draw(coord[0], coord[1]);
  }
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    //
    this.contextReal.quadraticCurveTo(20, 40,x, y);
    // Draw the line onto the page
    this.contextReal.stroke();
  }
}