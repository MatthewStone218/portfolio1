window.gml_Script_gmcallback_scaling();

function loadingBar_hook(ctx, width, height, total, current, image)
{
	const img = new Image();
	img.src = 'https://cdn.pixabay.com/photo/2014/06/03/19/38/test-361512_960_720.jpg';
	
	var time = window.gml_Script_gmcallback_current_time();
	var imgWidth = 200;
	var imgHeight = 200;

	var backgroundColor = "#333333";
	
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, width, height);

	ctx.translate(width*0.5,height*0.5);
	ctx.rotate((Math.PI/180)*floor(time/80)*30);
	ctx.translate(-width*0.5,-height*0.5);
	ctx.drawImage(img.src,(width/2)-(imgWidth/2),(height/2)-(imgHeight/2),imgWidth,imgHeight);

	ctx.translate(width*0.5,height*0.5);
	ctx.rotate(-(Math.PI/180)*floor(time/80)*30);
	ctx.translate(-width*0.5,-height*0.5);
}