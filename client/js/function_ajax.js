function ajax_selectmanitto(name,callback){
	var data = `names=${name}`;
	$.ajax({
		url:'db/selectmanitto',
		dataType:'text',
		type:'post',
		data: data,
		error:function(){
			alert("문제가 생겼어요ㅠ");
		},
		success:function(data){
			var result = JSON.parse(data); 
         	document.getElementById("manitoname").value = result[0].manitto;
			if(callback) callback(data);
		}
	});
}



