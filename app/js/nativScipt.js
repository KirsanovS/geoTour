window.addEventListener('load',function(){

 
 
		 
var menuShowHidden = function(){
		var headerMenu = document.getElementById("headerMenu");
		var blackFog = document.getElementById("blackFog");
		var toursUl = document.getElementById('toursUl');
		var agePoint = 400;
		window.addEventListener('scroll',fixedMenu ,false);
		function fixedMenu(){
			 var ScrollTop = document.documentElement.scrollTop || document.body.scrollTop;	 
			 if(ScrollTop>agePoint){	
				  headerMenu.style.position = "fixed";
	
			}
		}
		window.addEventListener('scroll',relativeMenu ,false);http://localhost/images/design/header.jpg
		function relativeMenu(){
			 var ScrollTop = document.documentElement.scrollTop || document.body.scrollTop;	 
			 if(ScrollTop<agePoint){
				headerMenu.style.position = "absolute";


			 }
		}

	}();
	

	
	
	
	window.addEventListener('scroll',scrollOnePage ,false)
	function scrollOnePage(){
		var onePage = document.getElementById('onePage');
		var ScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var heightHtml = getHeightHTML() - window.innerHeight;
		var koof = 100/heightHtml;
		if(onePage){onePage.style.backgroundPosition = "60%"+(100-ScrollTop*koof)+"%";}
		
	 
	} 
	
 

	
	
		function getHeightHTML(){ 
			return parseInt(window.getComputedStyle(document.getElementsByTagName("html")[0]).height);	
 			
		}
	
	
	


},false);