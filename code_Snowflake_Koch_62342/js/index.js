var canvas=null;
var context=null;
window.onload = init()

function init()
{
W = 600
H = 600

var arg1 = document.getElementById("iter").value;

var flen = document.getElementById("size").value;

//var nlen = flen*13.4;

colorarg1 = document.getElementById("scolor").value;
//colorarg2 = document.getElementById("bcolor").value;

canvas = document.getElementById("imageView");
    context = canvas.getContext('2d');
    canvas.width=W;
    canvas.height=H;
    container.appendChild(canvas);
    context = canvas.getContext("2d");
    context.beginPath();
    context.stroke();
    context.closePath();

    fractal([5*flen,15*flen], [50*flen,15*flen],arg1);
    fractal([27*flen,49*flen], [5*flen,15*flen],arg1);
    fractal([50*flen,15*flen],[27*flen,49*flen],arg1);

};

function fractal(A, B, depth){

    if (depth < 0){
        return null;
    }

    var C = divide(add(multiply(A, 2), B), 3);
    var D = divide(add(multiply(B, 2), A), 3);
    var F = divide(add(A, B), 2);

    var V1 = divide(minus(F, A), length(F, A));
    var V2 = [V1[1], -V1[0]];

    var E = add(multiply(V2, Math.sqrt(3)/6 * length(B, A)), F);

    DrawLine(A, B, colorarg1);

    if (depth !=0){
        for (var i=0;i<10;i++)
            DrawLine(C, D, '#FFFFFF');
    };

    fractal(A, C, depth-1);
    fractal(C, E, depth-1);
    fractal(E, D, depth-1);
    fractal(D, B, depth-1);

};

function multiply(v, num){
    return [v[0]*num, v[1]*num];
};

function divide(v, num){
    return [v[0]/num, v[1]/num];
};

function add(a, b){
    return [a[0]+b[0], a[1]+b[1]];
};

function minus(a, b){
    return [a[0]-b[0], a[1]-b[1]];
};

function length(a, b){
    return Math.sqrt(Math.pow(a[0] - b[0],2) +
                     Math.pow(a[1] - b[1],2));
};

function DrawLine(a, b, c){
    context.beginPath();
    context.strokeStyle = c;
    context.lineWidth=3;
    context.moveTo(a[0], a[1]);
    context.lineTo(b[0], b[1]);
    context.stroke();
    context.closePath();


};


function ResetFlake() {
context.clearRect(0,0, canvas.width, canvas.height);
};

