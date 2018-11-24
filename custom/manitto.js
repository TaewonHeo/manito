var dbconnect = require('./sqlite');

exports.createtable = function(){
    var name_list = ['김지원','배휘동','김지선','김지나','허태원'];
    var result = [];
    for(var i=0; i < name_list.length; i++){
        var temp = Math.floor(Math.random()*5);
        while(i == temp || result.includes(temp)){
            temp = Math.floor(Math.random()*5);
        }
        result.push(temp);
        
        var ins_sql = `INSERT into member (name, manitto) VALUES (?, ?)`

        var ins_list = [name_list[i], name_list[result[i]]]
        console.log(ins_list)
        dbconnect.insert(ins_sql, ins_list, function(db){});    
    }
    
}
