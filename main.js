canvas = document.getElementById("olympicrings");
ctx = canvas.getContext("2d");

function ringMAKE(){
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(300, 210, 40, 0, 2 * Math.PI);
    ctx.stroke()

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(400, 210, 40, 0, 2 * Math.PI);
    ctx.stroke()

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(500, 210, 40, 0, 2 * Math.PI);
    ctx.stroke()

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(350, 250, 40, 0, 2 * Math.PI);
    ctx.stroke()

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(450, 250, 40, 0, 2 * Math.PI);
    ctx.stroke()

    //make it 300 for the first ring, below 210 by a certain amount for all of them, etc.
}