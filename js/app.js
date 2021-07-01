/* let questions = [
    'Combien de joueurs jouent sur un terrain de football (en Ligue 1 par exemple) ?',
    'Combien font 6 x 12 ?',
    'L\'eau est composée de combien d\'atomes ?'
];

let responses = [
    22,
    72,
    3
];
 */

for (let index = 0; index < questions.length; index++) {
    const reponse = askQuestion(index);
    console.log(reponse);
    let isCorrect = checkResponse(index, reponse);
    // inserer le compteur de réponses


    console.log(isCorrect);
    addResponseToDom(index, isCorrect);
}

function askQuestion(index){
     let question = prompt(questions[index]);
     return question;
}

function checkResponse(index, response){
    if (Number(response) == responses[index]) {
        return true
    }else{
       return false
    }
}

function addResponseToDom(index, isCorrect){
    if (isCorrect == true) {
       
        let reponseBonne = document.createElement("li");
        reponseBonne.textContent = questions[index];
        document.querySelector("#right>ul").appendChild(reponseBonne);
      
    }else {
       
        let reponseMauvaise = document.createElement("li");
        reponseMauvaise.textContent = questions[index];
        document.querySelector("#wrong>ul").appendChild(reponseMauvaise);


    }

}