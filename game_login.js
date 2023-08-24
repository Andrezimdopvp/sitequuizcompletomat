function entrarNoQuiz()
{
    var player1 = document.getElementById("nomeJogador1").value;
    var player2 = document.getElementById("nomeJogador2").value;
    localStorage.setItem("player1_name",player1);
    localStorage.setItem("player2_name",player2);
    window.location="game_page.html";
}
