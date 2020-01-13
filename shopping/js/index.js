/*
for(var i = 0, len = btns.length; i < len; i++) {
 btns[i].onclick = function() {
 var dl = this.parentNode.parentNode;
 var pid = dl.getAttribute("pid");
 var arrs = dl.children;
 if(checkObjByPid(pid)) {
  listObj = updateObjById(pid, 1)
 } else {
  var price = arrs[3].firstElementChild.innerHTML;
  var obj = {
  pid: pid,
  price: price,
  pCount: 1
  };
  listObj.push(obj)
 }
 ccount.innerHTML = getTotalCount();
 }
}

function getTotalCount() {
 /*商品数目总和*//*
 var totalCount = 1; 
 var jsonStr = cookieObj.get("datas");
 var listObj = JSON.parse(jsonStr);
 for(var i = 0, len = listObj.length; i < len; i++) {
 totalCount = listObj[i].pCount + totalCount;
 }
 return totalCount;
}
/*
  计算总价格
  *//*
 var cks = document.querySelectorAll("mid1 .ck");
 function getTotalPrice() {
  cks = document.querySelectorAll("mid1 .ck");
  var sum = 0;
  for(var i = 0, len = cks.length; i < len; i++) {
  if(cks[i].checked) {
   var tr = cks[i].parentNode.parentNode;
   var temp = tr.children[5].firstElementChild.innerHTML;
   sum = Number(temp) + sum;
  }
  }
  return sum;
 }
 /*遍历*//*
 for(var i = 0, len = cks.length; i < len; i++) {
  cks[i].onchange = function() {
  checkAllChecked();
  totalPrice.innerHTML = getTotalPrice();
  }
 }*/