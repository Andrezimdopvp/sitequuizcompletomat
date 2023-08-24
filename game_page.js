player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML= "Jogador: "+ player1_name;
document.getElementById("player2_name").innerHTML= "Jogador: "+ player2_name;
player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML= "pontos: "+ player1_score;
document.getElementById("player2_score").innerHTML= "pontos: "+ player2_score;

document.getElementById("perguntas").innerHTML= "Quem digita os números"+ player1_name;
document.getElementById("respostas").innerHTML= "Quem digita a resposta:"+ player2_name;



function enviar()
{
    number1 = document.getElementById("numero1").value;
    number2 = document.getElementById("numero2").value;
    actual_answer = parseInt(number1) * parseInt(number2);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("numero1").value = ""; 
    document.getElementById("numero2").value = ""; 
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player2_name ;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player1_name ;
    }
}