function populate() {
	if (quiz.isEnded()) {
			//nilai
			showScores();
	}
	else{
		//pertanyaan
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//pilihan choice
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById("pilihan" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
	showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function () {
		quiz.guess(guess);
		populate();
	}
};

function showProgress(){
	var cureenQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Pertanyaan " + cureenQuestionNumber + " dari " + quiz.questions.length;
}

function showScores() {
	var gameOverHtml = "<h2>HASIL</h2>";
			gameOverHtml += "<h2 id='score'>NILAI ANDA : " + quiz.score + " dari 10"+ "</h2";

	var element = document.getElementById("isi");
	element.innerHTML = gameOverHtml;
};

var questions = [
	new Question("17 + 3 =____", ["20","15","14","19"], "20"),
	new Question("ada sebuah layang-layang warna hijau 7 buah dan warna kuning 9 buah, berapakah banyak layang-layang semuanya?", ["12","17","16","15"], "16" ),
	new Question("8.	ayam dalam kandang ada 19 ekor, dipotong 5 ekor. sisa ayam yang masih hidup?____", ["5","8","14","3"], "14"),
	new Question("9 - 8 =____", ["2","1","3","17"], "1"),
	new Question("Adi mempunyai 5 buah permen, kemudian ibunya memberikan 2 permen kepadanya berapakah jumlah permen Adi sekarang?", ["2","5","7","9"], "7"),
	new Question("21 x 2 =____", ["23","19","42","40"], "42"),
	new Question("7 x 8 =____", ["40","56","15","24"], "56"),
	new Question("16 / 4 =____", ["4","5","12","20"], "4"),
	new Question("2 x 2 x 2 =____", ["4","8","12","6"], "8"),
	new Question("ada 15 buah apel, kemudian apel tersebut di bagikan kepada Adit, Dina, dan Ronald. berapakah apel yang di dapat masing-masing anak? ", ["2","3","4","5"], "5")
];
var quiz = new Quiz(questions);

populate();