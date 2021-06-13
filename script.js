var questions = [
    {img:'https://static.dw.com/image/19103314_303.jpg',question:'What city do The Beatles come from?',answer1:'New York',answer2:'Liverpool',answer3:'Los Angeles',answer4:'Paris',true: odgovor2},
    {img:'https://wallpapercave.com/wp/PCInmNP.jpg',question:'Which football team is known as ‘The Red Devils’? ',answer1:'Manchester United',answer2:'Sarajevo',answer3:'Juventus',answer4:'Real Madrid',true:odgovor1},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctQJwzO39zV1NeCWxAooZ4CuDgiuRq8h5RA&usqp=CAU',question:'Which driver has won the most Formula 1 championships?',answer1:'Lewis Hamilton',answer2:'Daniel Ricciardo',answer3:'Esteban Ocon',answer4:'Michael Schumacher',true:odgovor4},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxiaB1AY4K9zFDhCKpfUwL_GOafdaQCKI9A&usqp=CAU',question:'Name Disney’s first film? ',answer1:'Snow White',answer2:'Peter Pan',answer3:'Old Yeller',answer4:'Sleeping Beauty',true:odgovor1},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflDryRgtUJijdKdveAgS8oDPES9D4XCgmUg&usqp=CAU',question:'How many time zones are there in Russia? ',answer1:'3',answer2:'5',answer3:'20',answer4:'11',true:odgovor4},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MB34bSSxMi4oZFCrn58yF2MsLeXFCMn5bQ&usqp=CAU',question:'What’s the national animal of Australia? ',answer1:'Lion',answer2:'Red Kangaroo',answer3:'Panda',answer4:'Giraffe',true:odgovor2},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VyCGln0TtFpZSnor_ilhdSQ6f1MmTiPm1w&usqp=CAU',question:'How many days does it take for the Earth to orbit the Sun?',answer1:'365',answer2:'7',answer3:'30',answer4:'2',true:odgovor1},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS5g4k0-CFqX4_UoA6PV60GXd_tDju3DhPA&usqp=CAU',question:'What country has the most islands in the world?',answer1:'Russia',answer2:'Serbia',answer3:'Sweden',answer4:'France',true:odgovor3},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAB11jIMeVnNKUmmai91Hok4M1IAtgFtRcg&usqp=CAU',question:'Who invented the World Wide Web?',answer1:'Tim Berners-Lee',answer2:'Elon Musk',answer3:'Jeff Bezos',answer4:'Bernard Arnault',true:odgovor1},
];

var questionContainer = document.querySelector('.questionContainer');
var startContainer = document.querySelector('.startContainer');

function startQuiz(){
    questionContainer.classList.remove('none');
    startContainer.classList.add('none');

}


var i = 0;
var correctAnswers = 0;
var correctAnswers = 0;
var containerheader = document.querySelector('.container-header');
containerheader.innerHTML = `${i+1}/${questions.length}`;



function showQuestions(){
        var questionImg = document.querySelector('#questionImage')
        var questionP = document.querySelector('#questionId');
        var answer1 = document.querySelector('#odgovor1');
        var answer2 = document.querySelector('#odgovor2');
        var answer3 = document.querySelector('#odgovor3');
        var answer4 = document.querySelector('#odgovor4');
        

        questionImg.src = questions[i].img;
        questionP.innerHTML = questions[i].question;
        answer1.innerHTML = `A:${questions[i].answer1}`;
        answer2.innerHTML = `A:${questions[i].answer2}`;
        answer3.innerHTML = `A:${questions[i].answer3}`;
        answer4.innerHTML = `A:${questions[i].answer4}`;  
};

var resultsDiv = document.querySelector('.results');
function nextQuestion(){
    i++;
    if(i==questions.length) {
      questionContainer.classList.add('none');
      resultsDiv.innerHTML = `
      <h2>Kviz je zavrsen</h2>
      <div>Odgovorili ste na ${correctAnswers} od ${questions.length} mogucih tacnih odgovora!</div>
      `;
     };
     answers.forEach(answer =>{
        answer.classList.remove('correct');
        answer.classList.remove('incorrect');
     })
     containerheader.innerHTML = `${i+1}/${questions.length}`;
     showQuestions();
};

showQuestions();

var answers = document.querySelectorAll('.answer');
var answered = false;
answers.forEach(answer => {
    answer.addEventListener('click',e =>{
        if(e.target.id==questions[i].true.id){
         e.target.classList.add('correct');  
         correctAnswers += 1;  
         answered = true;
         correctAnswers += 1;
        }
        else{
            e.target.classList.add('incorrect');
            answered = true;
        }
        if(answered){
          setTimeout(nextQuestion,100);
        }
    });

});



