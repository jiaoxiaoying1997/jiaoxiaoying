 window.onload = function(){
 	var add = document.getElementsByClassName('add');
		var sub = document.getElementsByClassName('sub');
		var oEm = document.getElementsByTagName('em'); //单价
		//var oStr = document.getElementsByTagName("strong"); //数量
		var oSpan = document.getElementsByClassName('xiao'); //小计
		var totalPrice = document.getElementById('totalPrice');

		/*for(var i=0;i<add.length;i++) {
			add[i].onclick = function() {
				this.nextElementSibling.innerHTML++;
				oSpan.innerHTML = parseFloat(oEm.innerHTML) * this.nextElementSibling.innerHTML;
			}
			sub[i].onclick = function() {
				if(this.previousElementSibling.innerHTML > 0) {
					this.previousElementSibling.innerHTML--;
					oSpan.innerHTML = parseFloat(oEm.innerHTML) * this.previousElementSibling.innerHTML;
				} else {
					this.previousElementSibling.innerHTML = 0;
					oSpan.innerHTML = 0;
				}
			}
		}*/
		var prices= parseFloat(totalPrice.innerHTML);
		add[0].onclick = function() {
			this.nextElementSibling.innerHTML++;
			oSpan[0].innerHTML = parseFloat(oEm[0].innerHTML) * this.nextElementSibling.innerHTML;
			//totalPrice.innerHTML = oSpan[0].innerHTML;
			jiesuan();
		}
		sub[0].onclick = function() {
			if(this.previousElementSibling.innerHTML > 0) {
				this.previousElementSibling.innerHTML--;
				oSpan[0].innerHTML = parseFloat(oEm[0].innerHTML) * this.previousElementSibling.innerHTML;
			//	totalPrice.innerHTML = oSpan[0].innerHTML;
			jiesuan();
			
			} else {
				this.previousElementSibling.innerHTML = 0;
				oSpan[0].innerHTML = 0;
				totalPrice.innerHTML = 0
			}
		}
		prices += parseFloat(totalPrice.innerHTML);
		add[1].onclick = function() {
			this.nextElementSibling.innerHTML++;
			oSpan[1].innerHTML = parseFloat(oEm[1].innerHTML) * this.nextElementSibling.innerHTML;
			//prices = parseFloat(prices)+parseFloat(oSpan[1].innerHTML);
		//totalPrice.innerHTML = prices;
		jiesuan();
		}
		sub[1].onclick = function() {
			if(this.previousElementSibling.innerHTML > 0) {
				this.previousElementSibling.innerHTML--;
				oSpan[1].innerHTML = parseFloat(oEm[1].innerHTML) * this.previousElementSibling.innerHTML;
			//	prices = parseFloat(prices)-parseFloat(oEm[1].innerHTML);
			//	totalPrice.innerHTML = prices;
			jiesuan();
			} else {
				this.previousElementSibling.innerHTML = 0;
				oSpan[1].innerHTML = 0;
				prices =parseFloat(prices);
				totalPrice.innerHTML = prices; 
			}
		}
		prices += parseFloat(totalPrice.innerHTML);
		add[2].onclick = function() {
			this.nextElementSibling.innerHTML++;
			oSpan[2].innerHTML = parseFloat(oEm[2].innerHTML) * this.nextElementSibling.innerHTML;
			//prices = parseFloat(prices)+parseFloat(oSpan[2].innerHTML);	
		//	totalPrice.innerHTML = prices;
		jiesuan();
		}
		sub[2].onclick = function() {
			if(this.previousElementSibling.innerHTML > 0) {
				this.previousElementSibling.innerHTML--;
				oSpan[2].innerHTML = parseFloat(oEm[2].innerHTML) * this.previousElementSibling.innerHTML;
				//prices = parseFloat(prices)-parseFloat(oEm[2].innerHTML);		
			//	totalPrice.innerHTML = prices;
			jiesuan();
			} else {
				this.previousElementSibling.innerHTML = 0;
				oSpan[2].innerHTML = 0;
				prices = parseFloat(prices)
				totalPrice.innerHTML = prices;
			}
		}
		
		var jiesuan = function(){
		totalPrice.innerHTML = parseFloat(oSpan[0].innerHTML) + parseFloat(oSpan[1].innerHTML) + parseFloat(oSpan[2].innerHTML);
	}
	
		
//		totalPrice.innerHTML = parseFloat(oSpan[0].innerHTML)+parseFloat(oSpan[1].innerHTML)+parseFloat(oSpan[2].innerHTML);
				
						
						//	var deleteBtn = function(btn){	
						//  btn.parentElement.parentElement.remove(); 
						   /*function clearLocalStorage(){
  							 return localStorage= null;*/
								//		}
										
								//将数组转化为字符串，存储到本地
						    /*function (Odata,title,key){
						    	 var arr=[];
						    	 arr.push({"value":Odata,"title":title,"key":key});
						    	 if (this.setstg.length !=null)
						    	 {
						    	 	if(this.setstg.length != 0){
						    	 		this.setstg.concat(arr);
						    	 	}else{
						    	 		this.setstg = arr;
						    	 	}
						    	 }else{
						    	 	this.setstg = arr;
						    	 }
						    var str = JSON.stringify(this.setstg);
						    localStorage.setItem('local',str);
						    this.setstg = JSON.parse(localStorage.getItem('local'));//将数组转化为字符串
						    console.log('记录',this.setstg);
						    
						    }
						    //从数组中删除一条记录，其余的保存到本地
						    
						    function(index){
						    	 if(this.setstg.length != 0)
						    	 {
						    	 	this.setstg.splice(index,1);
						    	 	console.log(this.setstg)
						    	 	this.setstg = that.setstg;
						    	 }
						    	 localStorage.setItem('local',JSON.stringify(this.setstg));
						    }
						    
						    */
						    
					
}
		