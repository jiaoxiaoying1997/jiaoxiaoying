window.onload = function() {
	var add = document.getElementsByClassName('add');
	var sub = document.getElementsByClassName('sub');
	var oEm = document.getElementsByTagName('em'); //单价
	//var oStr = document.getElementsByTagName("strong"); //数量
	var oSpan = document.getElementsByClassName('xiao'); //小计
	var totalPrice = document.getElementById('totalPrice');
//console.log(add);
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
	add[0].onclick = function() {
		this.nextElementSibling.innerHTML++;
		oSpan[0].innerHTML = parseFloat(oEm[0].innerHTML) * this.nextElementSibling.innerHTML;
		jiesuan();
		//totalPrice.innerHTML = oSpan[0].innerHTML;
	}
	sub[0].onclick = function() {
		if(this.previousElementSibling.innerHTML > 0) {
			this.previousElementSibling.innerHTML--;
			oSpan[0].innerHTML = parseFloat(oEm[0].innerHTML) * this.previousElementSibling.innerHTML;
			jiesuan();
			//totalPrice.innerHTML = oSpan[0].innerHTML;
		} else {
			this.previousElementSibling.innerHTML = 0;
			oSpan[0].innerHTML = 0;
		}
	}

	add[1].onclick = function() {
		this.nextElementSibling.innerHTML++;
		oSpan[1].innerHTML = parseFloat(oEm[1].innerHTML) * this.nextElementSibling.innerHTML;
		jiesuan();
		//totalPrice.innerHTML = parseFloat(oSpan[0].innerHTML) + parseFloat(oSpan[1].innerHTML);
	}
	sub[1].onclick = function() {
		if(this.previousElementSibling.innerHTML > 0) {
			this.previousElementSibling.innerHTML--;
			oSpan[1].innerHTML = parseFloat(oEm[1].innerHTML) * this.previousElementSibling.innerHTML;
			jiesuan();
			//totalPrice.innerHTML = parseFloat(oSpan[0].innerHTML) + parseFloat(oSpan[1].innerHTML);
		} else {
			this.previousElementSibling.innerHTML = 0;
			oSpan[1].innerHTML = 0;
		}
	}

	add[2].onclick = function() {
		this.nextElementSibling.innerHTML++;
		oSpan[2].innerHTML = parseFloat(oEm[2].innerHTML) * this.nextElementSibling.innerHTML;
		jiesuan();
		//totalPrice.innerHTML = parseFloat(oSpan[0].innerHTML) + parseFloat(oSpan[1].innerHTML) + parseFloat(oSpan[2].innerHTML);
	}
	sub[2].onclick = function() {
		if(this.previousElementSibling.innerHTML > 0) {
			this.previousElementSibling.innerHTML--;
			oSpan[2].innerHTML = parseFloat(oEm[2].innerHTML) * this.previousElementSibling.innerHTML;
			jiesuan();
			//totalPrice.innerHTML = parseFloat(oSpan[0].innerHTML) + parseFloat(oSpan[1].innerHTML) + parseFloat(oSpan[2].innerHTML);
		} else {
			this.previousElementSibling.innerHTML = 0;
			oSpan[2].innerHTML = 0;
		}
	}	
	
	var jiesuan = function(){
		totalPrice.innerHTML = parseFloat(oSpan[0].innerHTML) + parseFloat(oSpan[1].innerHTML) + parseFloat(oSpan[2].innerHTML);
	}
	

}