var user = prompt("剪刀\/石頭\/布?");
var computer = Math.random();

if(computer <= 0.33){
    computer = "剪刀" ;
}
else if(computer<= 0.66){
    computer = "石頭" ;
}
else{
    computer = "布" ;
}

alert("電腦出" + computer );


function game(u,c){
    if(user == computer){
        return "平手!";
    }
    else if(user == "剪刀"){
        if(computer == "布"){
            return "玩家獲勝!";
        }
    
        else{
        return "電腦獲勝!";
        }
    }
    else if(user == "石頭"){
        if(computer == "剪刀"){
            return "玩家獲勝!";
        }
        else{
            return "電腦獲勝!";
        }
    }
    else if(user == "布"){
        if(computer == "石頭"){
            return "玩家獲勝!";
        }
        else{
            return "電腦獲勝!";
        }
    }
    else{
        return "error";
    }
}
alert(game(user,computer));