

let team1Score = document.getElementById("team1-score")
let team2Score = document.getElementById("team2-score")


function increment(team,quantity){
    if(team==1){
        team1Score.textContent= parseInt(team1Score.textContent)+quantity
    }else{
        team2Score.textContent= parseInt(team2Score.textContent)+quantity
    }
    f1();
}

// function increment1(){
//     team1Score.textContent= parseInt(team1Score.textContent)+1
//     f1();
// }
// function increment2(){
//     team1Score.textContent= parseInt(team1Score.textContent)+2
//     f1();

// }
// function increment3(){
//     team1Score.textContent= parseInt(team1Score.textContent)+3
//     f1();
// }

// function incrementb1(){
//     team2Score.textContent= parseInt(team2Score.textContent)+1
//     f1();
// }
// function incrementb2(){
//     team2Score.textContent= parseInt(team2Score.textContent)+2
//     f1();
// }
// function incrementb3(){
//     team2Score.textContent= parseInt(team2Score.textContent)+3
    
//     f1();
// }

let teamA = document.getElementById("team-a")
let teamB = document.getElementById("team-b")

function f1(){
    let t1 = parseInt(teamA.textContent);
    let t2 = parseInt(teamB.textContent);
    // console.log(t1,t2);
    if(t1>t2){
        teamA.style.backgroundColor = "rgb(10, 255, 140)";
        teamB.style.backgroundColor = "rgb(255, 100, 10)";
    }else if(t1<t2){
        teamA.style.backgroundColor = "rgb(255, 100, 10)";
        teamB.style.backgroundColor = "rgb(10, 255, 140)";
    }else{
        teamA.style.backgroundColor = "white";
        teamB.style.backgroundColor = "white";
    }
}

function resetFunction(){
    team1Score.textContent = 0;
    team2Score.textContent = 0;
    f1();

}


// function f1(){
// if(parseInt(team1Score.textContent)>parseInt(team2Score.textContent)){
//     document.getElementById("team-a").style.backgroundColor = "lightblue";

// }
// // else if(team1Score.textContent<team2Score.textContent){
// //     teamB.style.backgroundColor=green
// // }
// // else{
// //     teamA.style.backgroundColor=green
// //     teamB.style.backgroundColor=green
// // }
// }