//challenge one 


function agetodays(){
    let days = 0;
    let year = prompt("Enter the year you were born");
    let month = prompt("enter the month number you were born");
    let day = prompt("enter the day you were born");
    let present = new Date();
    presentyear = present.getFullYear();
    presentmonth = present.getMonth();
    presentday = present.getDate();
    days = totaldaysthatyear(day, month) + totaldaysthisyear(presentday,presentmonth) + (presentyear - year - 1)*365 + parseInt((presentyear - year)/4 , 10);
    document.getElementById("flex-box-result").innerHTML = days;
} 
function reset(){
    document.getElementById("flex-box-result").innerHTML = 0;
}
function totaldaysthatyear(d,m){
    let daynos = [31, 28, 31, 30,31,30,31,31,30,31,30,31];
    let sum = 0;
    if(m===12)
    {
        return 31-(d-1);
    }
    else{
        for (let i = m; i<12; i++)
        {
            sum += daynos[i];
        }
        return (sum + daynos[m-1]-(d-1));
    }
}
function totaldaysthisyear(d,m){
    let daynos = [0,31, 28, 31, 30,31,30,31,31,30,31,30,31];
    let sum = 0;
    if(m===1)
    {
        return d;
    }
    else{
        for (let i = 1; i<=m; i++)
        {
            sum += daynos[i];
        }
        return (sum + d);
    }
}

//heisenberg generator
function generateCat(){
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen")
    image.src = "download4.jpg";
    div.appendChild(image);
}

//rock paper scissors
function rpsgame(choice)
{
    let humanchoice = choice.id;
    let botchoice = (['rock','paper','scissor'][Math.floor(Math.random() * 3)]);
    results = getwinner(humanchoice,botchoice);
    message = finalmessage(results);
    rpsfrontend(humanchoice, botchoice, message);
}
function getwinner(human,bot){
    let databse = {
        'rock':{'scissor':1, 'rock':0.5,'paper':0},
        'paper':{'scissor':0,'rock':1,'paper':0.5},
        'scissor':{'scissor':0.5, 'rock':0,'paper':1}
    };
    let yourscore = databse[human][bot];
    let botscore = databse[bot][human];
    return [yourscore, botscore];
}
function finalmessage([human, bot]){
    if(human === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }
    else if (human === 0.5){
        return {'message': 'tied', 'color':'yellow'};
    }
    else{
        return {'message':'You Won', 'color':'green'};
    }
}
function rpsfrontend(human, bot, finalmessage){
    var image = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

     var humandiv = document.createElement('div');
     var messagediv = document.createElement('div');
     var botdiv = document.createElement('div');

     humandiv.innerHTML = "<img src = '"+ image[human] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
     messagediv.innerHTML = "<h1 style ='color:" +finalmessage['color']+ "; font-size : 60px; padding:30px ' >"+ finalmessage['message'] + "</h1>";
     botdiv.innerHTML = "<img src = '"+ image[bot] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 233, 1)' >";

     document.getElementById('flex-box-rps-div').appendChild(humandiv);
     document.getElementById('flex-box-rps-div').appendChild(messagediv);
     document.getElementById('flex-box-rps-div').appendChild(botdiv);
}

//challenge 4
var allbtn = document.getElementsByTagName('button');
var copyallbtn = [];
for (let i = 0; i < allbtn.length; i++){
    copyallbtn.push(allbtn[i].classList[1]);
}
function buttoncolorchange(id){
    if(id.value === 'red'){
        buttonRed();
    }
    else if(id.value === 'green'){
        buttonGreen();
    }
    else if(id.value === 'reset'){
        buttonReset();
    }
    else{
        buttonRandom();
    }
}
function buttonRed(){
        for (let i = 0;i< allbtn.length; i++){
            allbtn[i].classList.remove(allbtn[i].classList[1]);
            allbtn[i].classList.add('btn-danger');
        }
}
function buttonGreen(){
    for (let i = 0;i< allbtn.length; i++){
        allbtn[i].classList.remove(allbtn[i].classList[1]);
        allbtn[i].classList.add('btn-success');
    }
}
function buttonReset(){
    for (let i = 0;i< allbtn.length; i++){
        allbtn[i].classList.remove(allbtn[i].classList[1]);
        allbtn[i].classList.add(copyallbtn[i]);
    }
}
function buttonRandom(){
    var choice = ["btn-primary", "btn-danger", "btn-success","btn-warning"];
    for (let i = 0;i< allbtn.length; i++){
        allbtn[i].classList.remove(allbtn[i].classList[1]);
        allbtn[i].classList.add(choice[Math.floor(Math.random() * choice.length)]);
    }
}

// challenge 5
let blackjack = {
    'you': {'scorespan': '#your-blackjack-result', 'div': '#your-box', 'score':0 },
    'dealer': {'scorespan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score':0 },
    'cards': ['2','3','4','5','6','7','8','9','K','J','Q','A'],
};

const YOU = blackjack['you'];
const DEALER = blackjack['dealer'];

document.querySelector('#hit').addEventListener('click',blackjackhit);
//document.querySelector('#stand').addEventListener('click',blackjackstand);
//document.querySelector('#deal').addEventListener('click',blackjackdeal) ;

function blackjackhit(){
    let cardimg = new Image();
    cardimg.src = "static/images/Q.png"
    document.getElementById('your-box').appendChild(cardimg);
    console.log("document yourBox", document.getElementById('your-box'))
}
function showcard(){
    
}