function mouseOver(){
	document.getElementById('show').src="images/1f.png";
}
function mouseOut(){
	document.getElementById('show').src="images/1.png";
}

function f2(){
	document.getElementById('f2').src="images/2f.png";
}
function f2l(){
	document.getElementById('f2').src="images/2.png";
}

function f3(){
	document.getElementById('f3').src="images/3f.png";
}
function f3l(){
	document.getElementById('f3').src="images/3.png";
}

function f4() {
	document.getElementById('f4').src="images/4f.png";
}
function f4l(){
	document.getElementById('f4').src="images/4.png";
}

function f5() {
	document.getElementById('f5').src="images/5f.png";
}
function f5l(){
	document.getElementById('f5').src="images/5.png";
}

function f6() {
	document.getElementById('f6').src="images/6f.png";
}
function f6l(){
	document.getElementById('f6').src="images/6.png";
}

function f7() {
	document.getElementById('f7').src="images/7f.png";
}
function f7l(){
	document.getElementById('f7').src="images/7.png";
}

function f8() {
	document.getElementById('f8').src="images/8f.png";
}
function f8l(){
	document.getElementById('f8').src="images/8.png";
}

function f9() {
	document.getElementById('f9').src="images/9f.png";
}
function f9l(){
	document.getElementById('f9').src="images/9.png";
}

function f10() {
	document.getElementById('f10').src="images/10f.png";
}
function f10l(){
	document.getElementById('f10').src="images/10.png";
}




function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
//红红店铺的ajax
window.onload = function(){
//创建XMLHttpRequest对象。
	var xmlhttp = null;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");
	}
//连接服务器
	xmlhttp.open("GET","http://rapapi.org/mockjsdata/31800/www.baidu.com",true);
//发送数据或请求
	xmlhttp.send("");
//监听响应状态
	xmlhttp.onreadystatechange=function(){	
		if(xmlhttp.readyState==4){ //连接服务器成功
			//判断服务器响应的HTTP状态码
			if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status==304){
			//解析响应文本 （json） content（js）
	 	    var content = JSON.parse(xmlhttp.responseText) 
	 	    document.getElementById("hot1").innerHTML ='<ul id="tou">'
			+'<li>'+"<img src= '"+content.im11+"'>"+'</li>'
			+'<li class="tou1" id="tou1">'+"<img src= '"+content.im1+"'>"
			+'<div>'+'<span>'+content.h11+'</span>'+'</div>'+'</li>'
			+'<li class="tou1" >'+"<img src= '"+content.im2+"'>"
			+'<div class="tou2">'+'<span>'+content.h21+'</span>'+'</div>'+'</li>'
			+'<li class="tou1">'+"<img src= '"+content.im3+"'>"
			+'<div >'+'<span>'+content.h31+'</span>'+'</div>'+'</li>'
			+'<li class="tou1">'+"<img src= '"+content.im4+"'>"
			+'<div >'+'<span>'+content.h41+'</span>'+'</div>'+'</li>'
			+'<li class="tou1">'+"<img src= '"+content.im5+"'>"
			+'<div>'+'<span>'+content.h51+'</span>'+'</div>'+'</li>'
			+'<li class="tou1">'+"<img src= '"+content.im6+"'>"
			+'<div>'+'<span>'+content.h61+'</span>'+'</div>'+'</li>'
			+'<li class="tou1">'+"<img src= '"+content.im7+"'>"
			+'<div>'+'<span>'+content.h71+'</span>'+'</div>'+'</li>'
			+'<li class="tou1">'+"<img src= '"+content.im8+"'>"
			+'<div>'+'<span>'+content.h81+'</span>'+'</div>'+'</li>'
			+'<li class="tou1">'+"<img src= '"+content.im9+"'>"
			+'<div>'+'<span>'+content.h91+'</span>'+'</div>'+'</li>'
			+'<li class="tou1">'+"<img src= '"+content.im10+"'>"
			+'<div>'+'<span>'+content.h101+'</span>'+'</div>'+'</li>'
			+'</ul>'
	 		document.getElementById("tab1").innerHTML ='<li class="ar">'+"<img src ='"+content.image1+"'>"
			+"<div>"+'<a href="#">'+content.h1+"</a>"
			+"<p>"+content.h2+"</p>"
			+"<p>"+content.h3+"</p>"
			+"<p>"+content.h4+"</p>"+"</div>"+'</li>'+
			'<li class="ar2">'+"<img src ='"+content.image1+"'>"
			+"<div>"+'<a href="#">'+content.h1+"</a>"
			+"<p>"+content.h2+"</p>"
			+"<p>"+content.h3+"</p>"
			+"<p>"+content.h4+"</p>"+"</div>"+"</li>"+
			'<li class="ar3">'+"<img src ='"+content.image1+"'>"
			+"<div>"+'<a href="#">'+content.h1+"</a>"
			+"<p>"+content.h2+"</p>"
			+"<p>"+content.h3+"</p>"
			+"<p>"+content.h4+"</p>"+"</div>"+"</li>"
			document.getElementById("tab2").innerHTML ='<li class="ar">'+"<img src ='"+content.image2+"'>"
			+"<div>"+'<a href="#">'+content.h5+"</a>"
			+"<p>"+content.h6+"</p>"
			+"<p>"+content.h7+"</p>"
			+"<p>"+content.h8+"</p>"+"</div>"+'</li>'+
			'<li class="ar2">'+"<img src ='"+content.image2+"'>"
			+"<div>"+'<a href="#">'+content.h5+"</a>"
			+"<p>"+content.h6+"</p>"
			+"<p>"+content.h7+"</p>"
			+"<p>"+content.h8+"</p>"+"</div>"+"</li>"+
			'<li class="ar3">'+"<img src ='"+content.image2+"'>"
			+"<div>"+'<a href="#">'+content.h5+"</a>"
			+"<p>"+content.h6+"</p>"
			+"<p>"+content.h7+"</p>"
			+"<p>"+content.h8+"</p>"+"</div>"+"</li>"
			


			}else{
				alert("请求失败");
			}
		}
 
	}
//搜索框的value切换
	var titles= $('menu').getElementsByTagName('li'),
	
	 inputs= $('search_a').getElementsByTagName('input');
	 
     for(var i = 0; i < titles.length; i++){
    	titles[i].id=i;
    	titles[i].onclick=function(){
    		for (var j = 0; j< titles.length; j++){
    			titles[j].className=''; 
    			inputs[j].style.display='none';
    		}
    		this.className='select';
    		inputs[this.id].style.display='block';
    	}
   }


   
//红红店铺的tab切换
   	var ts= $('con_ab1').getElementsByTagName('li'),
	
	 uls= $('con_ab2').getElementsByTagName('ul');
	 
     for(var i = 0; i < ts.length; i++){
    	ts[i].id=i;
    	ts[i].onclick=function(){
    		for (var j = 0; j< ts.length; j++){
    			ts[j].className=''; 
    			uls[j].style.display='none';
    		}
    		this.className='select';
    		uls[this.id].style.display='block';
    	}
   }

   //每日活动的切换
   	var hs= $('nom').getElementsByTagName('img'),
	
	 ls= $('to').getElementsByTagName('li');
	 
     for(var i = 0; i < hs.length-1; i++){
    	hs[i+1].id=i;
    	hs[i+1].onmouseover=function(){
    		for (var j = 0; j< hs.length-1; j++){ 
    			ls[j].style.display='none';
    		}
    		ls[this.id].style.display='block';
    	}
    	hs[i+1].onmouseout=function(){
    		ls[this.id].style.display='none';
    	}
   }

//自动播放的轮播图
   var index=0;
  var timer=null;

  var pic_b=$('pic_b').getElementsByTagName('li');
  var pic_a=$('pic_a').getElementsByTagName('li');
  var pic_c=$('fade').getElementsByTagName('p'); 
  for(var i=0;i<pic_b.length;i++){
    pic_b[i].id=i;
    pic_b[i].onmouseover=function(){
      clearInterval(timer);
      changeOption(this.id);
    }
    pic_b[i].onmouseout=function(){  
      timer=setInterval(autoPlay,2000);    
    }
  }
  
  if(timer){
    clearInterval(timer);
    timer=null;
  } 
 
  timer=setInterval(autoPlay,2000);

  function autoPlay(){
      index++;
      if(index>=pic_b.length){
         index=0;
      }
      changeOption(index);
  }

  function changeOption(curIndex){
    for(var j=0;j<pic_b.length;j++){
       pic_b[j].className='';
       pic_a[j].style.display='none';
       pic_c[j].style.display='none';
    }
    
    pic_b[curIndex].className='active';
    pic_a[curIndex].style.display='block';
     pic_c[curIndex].style.display='block';
    index=curIndex;
  }
//生活圈及交通地铁的切换
  var options_a= $('options_a').getElementsByTagName('li'),
	
	 options_b= $('options_b').getElementsByTagName('img');
	 
     for(var i = 0; i < options_a.length; i++){
    	options_a[i].id=i;
    	options_a[i].onclick=function(){
    		for (var j = 0; j< options_a.length; j++){
    			options_a[j].className=''; 
    			options_b[j].style.display='none';
    		}
    		this.className='select';
    		options_b[this.id].style.display='block';
    	}
   }
//bbs切换 

  var bbs = $('bbs').getElementsByTagName('li');
  for (var i = 0; i < bbs.length; i++) {
  	bbs[i].index = i;
  	bbs[i].onmouseover = function(){
  		var bbsdiv = bbs[this.index].getElementsByTagName('div');
  		bbsdiv[1].style.display="block";
  		bbsdiv[0].style.display="none";
  	}
  	bbs[i].onmouseout = function(){
  		var bbsdiv = bbs[this.index].getElementsByTagName('div');
  		bbsdiv[0].style.display="block";
  		bbsdiv[1].style.display="none";
  	}
  }
//知道分子的tab切换
   var tab= $('tab').getElementsByTagName('li'),
	
	 optionsr= $('optionsr').getElementsByTagName('ul');
	 
     for(var i = 0; i < tab.length; i++){
    	tab[i].id=i;
    	tab[i].onclick=function(){
    		for (var j = 0; j< tab.length; j++){
    			tab[j].className=''; 
    			optionsr[j].style.display='none';
    		}
    		this.className='acti';
    		optionsr[this.id].style.display='block';
    	}
   }
 //   var tou = $('hot1').getElementsByTagName('li');
 //   // alert(tou.length);

	// for (var i = 0; i <tou.length; i++) {
 //  	tou[i+1].index = i;
 //  	tou[i+1].onmouseover = function(){
 //  		var tous = tou[this.index].getElementsByTagName('div');
 //  		tous.style.display="block";
  	
 //  	}
 //  	tou[i+1].onmouseout = function(){
 //  		var tous = tou[this.index].getElementsByTagName('div');
 //  		tous.style.display="none";
  		
 //  	}
 //  }

var tab_a= $('tab_a').getElementsByTagName('li'),
  
   wrap_section1= $('wrap_section1').getElementsByTagName('ul');
   
     for(var i = 0; i < tab_a.length; i++){
      tab_a[i].id=i;
      tab_a[i].onmouseover=function(){
        for (var j = 0; j< tab_a.length; j++){
          tab_a[j].className=''; 
          wrap_section1[j].style.display='none';
        }
        this.className='active_a';
        wrap_section1[this.id].style.display='block';
      }
   }
}


























