var mouseevent="";
var last_x="";
var last_y="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="black"
width=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(event){
    colour=document.getElementById("Colour").value;
    width=document.getElementById("Width").value;
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(event){
        mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(event){
        mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(event){
    current_x=event.clientX-canvas.offsetLeft;
current_y=event.clientY-canvas.offsetTop;
if (mouseevent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width;
    ctx.moveTo(last_x,last_y)
    ctx.lineTo(current_x,current_y)
    ctx.stroke();    
}
last_x=current_x;
last_y=current_y;
}
function Clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}