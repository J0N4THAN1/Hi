canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")

window.addEventListener("keydown", my_keydown);
function my_keyodwn(e)
{
    keyPressed = e.keycode;
    console.log(keypressed);

        if((keyPressed >=97 && keypressed<=122)|| (keyPressed >=65 && keyPressed<=90))
        {
            alphabetkey();
            document.getElementById("d1").innerHTML="You pressed Alphabet Key";
            console.log("alphabet key");

        }
}

function alphabetkey()
{
        img_image="Aplkey.png";
    add();
}