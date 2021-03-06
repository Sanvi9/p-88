var canvas = new fabric.Canvas("myCanvas");
ctx = canvas.getContext("2d");

block_image_width = 30;
block_image_height = 30;

playerX = 100;
playerY = 100; 

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({

            top:playerY,
            left:playerX
        });
        canvas.add(player_object);
    }
    );
}
player_update();


function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img)
    {
      block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({

            top:playerY,
            left:playerX
        });
        canvas.add(block_image_object);
    }
    );
}

//new_image("wall.jpg");
window.addEventListener("keydown" , my_keydown);
function my_keydown(e) {
   keyPressed = e.keyCode;
   console.log(keyPressed);
   if(e.shiftKey == true && keyPressed == '80'){
       console.log("p and shift pressed together");
       block_image_width = block_image_width + 10;
       block_image_height = block_image_height + 10;
       document.getElementById("current_width").innerHTML = block_image_width;
       document.getElementById("current_height").innerHTML = block_image_height; 

   }
if(e.shiftKey == true && keyPressed == '77'){
    console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}
if (keyPressed == '37') 
{
    left();
    console.log("left"); 
}
if (keyPressed == '38') 
{
    up();
    console.log("up");
}
if (keyPressed == '39') 
{
    right();
    console.log("right");  
}
if (keyPressed == '40') 
{
    down();
    console.log("down");
}
if (keyPressed == '87') 
{
    new_image('wall.jpg');
    console.log("w");
}
if (keyPressed == '71') 
{
    new_image('groung.jpg');
    console.log("g");  
}
if (keyPressed == '84') 
{
    new_image('trunk.png');
    console.log("g");  
}
if (keyPressed == '76') 
{
    new_image('light_green.png');
    console.log("l");  
}
if (keyPressed == '82') 
{
    new_image('roof.jpg');
    console.log("r");  
}
if (keyPressed == '89') 
{
    new_image('yellow_wall.png');
    console.log("y");  
}
if (keyPressed == '68') 
{
    new_image('dark_green.png');
    console.log("d");  
}
if (keyPressed == '85') 
{
    new_image('unique.png');
    console.log("u");  
}
if (keyPressed == '67') 
{
    new_image('cloud.jpg');
    console.log("c");  
}

}
function up() {
    if (playerY>0) {
        playerY = playerY - block_image_height;
        console.log("block-image_height" + block_image_height); 
        console.log("When up arrow pressed,X = " + playerX + "Y = "+playerY);  
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (playerY<500) {
        playerY = playerY + block_image_height;
        console.log("block-image_height" + block_image_height); 
        console.log("When down arrow pressed,X = " + playerX + "Y = "+playerY);  
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (playerX<500) {
        playerX = playerX + block_image_width;
        console.log("block-image_height" + block_image_width); 
        console.log("When right arrow pressed,X = " + playerX + "Y = "+playerY);  
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (playerX>0) {
        playerX = playerX - block_image_width;
        console.log("block-image_height" + block_image_width); 
        console.log("When up arrow pressed,X = " + playerX + "Y = "+playerY);  
        canvas.remove(player_object);
        player_update();
    }
}