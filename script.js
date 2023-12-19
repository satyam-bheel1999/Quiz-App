const questions = [
    {
        'que' : "Which of these is Mark Up language",
        'a' : "HTML",
        'b' : "Css",
        'c' : "Js",
        'd' : "PHP",
        'correct' : "a"
    },
    {
        'que' : "CSS stands for",
        'a' : "Cascading Style System",
        'b' : "Core Style Sheet",
        'c' : "Cascading Style Sheet",
        'd' : "None Of These",
        'correct' : "c"
    },
    {
        'que' : "Java Script is a Language",
        'a' : "Static",
        'b' : "Dynamic",
        'c' : "Both",
        'd' : "None of these",
        'correct' : "b"
    }
];
let index = 0;
// console.log(questions[index])
// console.log(questions);
let right =0;
let wrong =0;
let total = questions.length;

let quesBox = document.getElementById("quesBox");
let option = document.querySelectorAll(".option");
let inputs = document.querySelectorAll(".input");

const loadQuestion = () =>{
    if(index == total){
        endQuez();
    }

    
    const data = questions[index];
    // console.log(data);
    quesBox.innerHTML = `${index+1}.${data.que}`;
    option[0].innerText = data.a;
    option[1].innerText = data.b;
    option[2].innerText = data.c;
    option[3].innerText = data.d;
}



const submitQuiz = () =>{
    const data = questions[index];
    let ans = getAnswer();
    if(ans == data.correct){
        right ++;
    }
    else{
        wrong ++;
    }

    index ++;
    reset();
    loadQuestion()
    return;

}

const getAnswer = () =>{
    let answer;
    inputs.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
            }

        }
    )
    return answer;
}

const reset = () =>{
    inputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

const endQuez = () =>{
    document.getElementById("box").innerHTML =
    `your score is ${right}/${total}`;
}

loadQuestion();

