
// Crie uma variável canvas
var canvas = new fabric.Canvas('myCanvas');

//Defina as posições iniciais da bola e do buraco.
ball__y=0;
ball__x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
    fabric.Image.fromURL("golf-h.png", function(Img){
        hole_obj=Img;
        hole_obj.scaleToWidht(50);
        hole_obj.scaleToHeight(50);
        hole.obj.set({
            top:hole_y,
            left:hole_x
       });
       canvas.add(hole_obj);
    });
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
    fabric.Image.fromURL("ball.png", function(Img){
        ball_obj=Img;
        ball_obj.scaleToWidht(50);
        ball_obj.scaleToHeight(50);
        ball.obj.set({
            top:ball_y,
            left:ball_x
    });
    canvas.add(ball_obj);
});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
    if((ball_x==hole_x)&&(ball_y==hole_y)){ 
        canvas.remove(ball_obj); 
        console.log("Você atingiu o objetivo!!!");
         document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!"; 
         document.getElementById("myCanvas").style.borderColor="red";
         }
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
        if(ball_y >=5) { ball_y = ball_y - block_image_height; 
            console.log("block image height = " + block_image_height);
             console.log("When Up arrow key is pressed, X = " + ball_x + " , Y = "+ball_y);
              canvas.remove(ball_obj); new_image();
             }
	}

	function down()
	{
		 // Escreva o código para mover a bola para baixo.
         if(ball_y <=450) { ball_y = ball_y + block_image_height; 
            console.log("block image height = " + block_image_height); 
            console.log("When Down arrow key is pressed, X = " + ball_x + " , Y = "+ball_y); 
            canvas.remove(ball_obj); new_image();
         }
	}

	function left()
	{
		if(ball_X >5)
		{
			// Escreva o código para mover a bola para a esquerda.
            if(ball_x >5) { ball_x = ball_x - block_image_width;
                 console.log("block image width = " + block_image_width); 
                 console.log("When Left arrow key is pressed, X = " + ball_x + " , Y = "+ball_y);
                  canvas.remove(ball_obj);
                   new_image();
                 }
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			// Escreva o código para mover a bola para a direita.
            if(ball_x <=1050) { ball_x = ball_x + block_image_width;
                 console.log("block image width = " + block_image_width);
                  console.log("When Right arrow key is pressed, X = " + ball_x + " , Y = "+ball_y);
                   canvas.remove(ball_obj); new_image();
                 }
		}
	}
	
}
