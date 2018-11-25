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
         	document.getElementById("manitoname").value = document.getElementById("yourname").value +"님의 마니또는 "+ result[0].manitto+"님 입니다!";
			if(callback) callback(data);
		}
	});
}



