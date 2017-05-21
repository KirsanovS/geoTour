 window.addEventListener('load',function(){
	var headFogBlock = $('#headFogBlock')
	headFogBlock.delay(4000).animate({ opacity:0.55}, 2000, "easeOutCubic");
	
	var headText = $('#headText');
	headText.animate({right:'60%', opacity:1}, 2000, "easeOutCubic");
	
	var  headLine = $('#headLine');
	headLine.animate({right:'60%', opacity:1}, 2000, "easeOutCubic");
	
	var headTextLoz = $('#headTextLoz')
	headTextLoz.delay(2000).animate({left:'30%', opacity:1}, 2000, "easeOutCubic");
})  