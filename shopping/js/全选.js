window.onload = function(){
	
var allcheck = document.getElementById("allcheck");//获取全选框
allcheck.addEventListener("click",chickHandler);//给全选框按钮点击添加属性
for(var i=0;i<4;i++)//遍历按钮
{
	var check = document.getElementById("check"+i);
	console.log(check);
     check.addEventListener("click",chickHandler);
	//check.addEventListener("check",chickHandler);//给按钮添加属性
	
}
function chickHandler(){
	if(allcheck == this){//如果点击按钮，实现全选
		for(var i=0;i<4;i++)
		{
			var check = document.getElementById("check"+i);
			check.checked = allcheck.checked;
		}
		return ;
	}
	for(var j=0;j<4;j++){
		var checks = document.getElementById("check"+j);
		if(!checks.checked){//判断是否选中全选按钮
			allcheck.cheched = false;
			return;
		}
	}
	allcheck.cheched = true;
}

}
