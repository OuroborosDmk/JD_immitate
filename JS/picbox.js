			window.onload=function(){
					var picbox=document.getElementById("picbox");
					var list=document.getElementById("list");
					var button=document.getElementById("buttons").getElementsByTagName("span");
					var prex=document.getElementById("prev");
					var next=document.getElementById("next");
					var index=1;
					var getanimation=false;//在图片翻动的时候阻止图片的翻动
					var getinterval=3000;//设置轮播延时
					var timer;//设置定时器

					function animation(changebox){
						buttonshow();
						getanimation=true;
						var time=400;
						var interval=10;
						var speed=changebox/(time/interval);
						var left=parseInt(list.style.left)+changebox;
						function execute(){
							if((speed<0&&parseInt(list.style.left)>left)||(speed>0&&parseInt(list.style.left)<left)){
								list.style.left=parseInt(list.style.left)+speed+"px";
								setTimeout(execute,interval);//在移动到目标位置前不断调用函数
							}
							else{
								list.style.left=left+"px";
								if(left>-790){
									list.style.left="-2370px";
								}
								if(left<-2370){
									list.style.left="-790px";
								}//循环效果
								getanimation=false;
							}
						}
						execute();
					}//动画效果

					prex.onclick=function(){
						if(getanimation){
							return;
						}
						index-=1;
						if(index==0){
							index=3;
						}
						animation(790);
						
					}//向上一张图片翻动

					next.onclick=function(){
						if(getanimation){
							return;
						}
						index+=1;
						if(index==4){
							index=1;
						}
						animation(-790);
						
					}//向下一张图片翻动

					function buttonshow(){
						for(var i=0;i<button.length;i++){
							if(button[i].className='on'){
								button[i].className='';
							}
						}
						button[index-1].className='on';
					}//实现索引点随着图片的变动而变动
					
					function totate(){
						timer=setTimeout(function(){
							next.onclick();
							totate();
						},getinterval);
					}//定时器

					function stoptotate(){
						timer=clearTimeout(timer);
					}//清除定时器

					for(var i=0;i<button.length;i++){
		                button[i].onmouseover=function(){
		                    if(getanimation){
		                        return;
		                    }
		                    if(this.className=='on'){
		                        return;
		                    }
		                    var myIndex=parseInt(this.getAttribute('index'));
		                    var offset=-790*(myIndex-index);

		                    animation(offset);
		                    index=myIndex;
		                    buttonshow();
		                }
		            }

					picbox.onmouseover=stoptotate;
		            picbox.onmouseout=totate;
		            totate();

				var gg_1=document.getElementById("gg_1");
				var gg_1a=document.getElementById("gg_1a");
				var gg_2=document.getElementById("gg_2");
				var gg_3=document.getElementById("gg_3");
				var gg_3a=document.getElementById("gg_3a");
				var gg_4=document.getElementById("gg_4");
				var gg_5=document.getElementById("gg_5");

				function changeimg(){
					var time= new Date(),m,d;
					m=time.getMonth()+1;
					d=time.getDate();
					if(m==8&&d==3){
						gg_1.src="./images/男人节.jpg";
						gg_1a.src="./images/男人节.jpg";
						gg_2.src="./images/男人节_a.jpg";
						gg_3.src="./images/男人节_b.jpg";
						gg_3a.src="./images/男人节_b.jpg";
						gg_4.src="./images/男人节.jpg";
						gg_5.src="./images/男人节_a.jpg";
						return;
					}
					else if(m==3&&d==8){
						gg_1.src="./images/女人节.jpg";
						gg_1a.src="./images/女人节.jpg";
						gg_2.src="./images/女人节_a.jpg";
						gg_3.src="./images/女人节_b.jpg";
						gg_3a.src="./images/女人节_b.jpg";
						gg_4.src="./images/女人节.jpg";
						gg_5.src="./images/女人节_a.jpg";
						return;
					}
					else if(m==11&&d==11){
						gg_1.src="./images/双11.jpg";
						gg_1a.src="./images/双11.jpg";
						gg_2.src="./images/双11_a.jpg";
						gg_3.src="./images/双11_b.jpg";
						gg_3a.src="./images/双11_b.jpg";
						gg_4.src="./images/双11.gif";
						gg_5.src="./images/双11_a.jpg";
						return;
					}
					else if(m==12&&d==12){
						gg_1.src="./images/双12.jpg";
						gg_1a.src="./images/双12.jpg";
						gg_2.src="./images/双12_a.jpg";
						gg_3.src="./images/双12_b.jpg";
						gg_3a.src="./images/双12_b.jpg";
						gg_4.src="./images/双12.jpg";
						gg_5.src="./images/双12_a.jpg";
						return;
					}
					else{
						
						return;
					}
				}
				
				changeimg();
			
				}