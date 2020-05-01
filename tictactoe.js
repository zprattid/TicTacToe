var tablero = [["-", "-", "-"],
				["-","-","-"],
				["-","-","-"]]

var player = function(name,sign){
	this.name = name
	this.sign = sign
	this.turn = undefined
}

var displayTableroConsole = function(tab){
	for (var i = 0; i<tab.length; i++){
		console.log(tablero[i])
	}
}

var putSign = function(coord){
	if (tablero[coord[0]][coord[1]] == "-"){
		tablero[coord[0]][coord[1]] = turn.sign
		id = coord[0].toString()+coord[1].toString()
		//console.log(id)
		var cell = document.getElementById(id)
		cell.innerHTML = turn.sign
		return true
	} else {
		return false
	}
}

var changeTurn = function(){
	var t = document.getElementById("turn")
	if (turn.sign == "X"){
		turn = player2
	} else if (turn.sign == "O") {
		turn = player1
	}
	t.innerHTML = "Turno de: "+turn.name
	alert("Turno de: "+turn.name)
}

var checkEnd = function(){
	var row1 = tablero[0][0]+tablero[0][1]+tablero[0][2]
	var row2 = tablero[1][0]+tablero[1][1]+tablero[1][2]
	var row3 = tablero[2][0]+tablero[2][1]+tablero[2][2]
	var col1 = tablero[0][0]+tablero[1][0]+tablero[2][0]
	var col2 = tablero[0][1]+tablero[1][1]+tablero[2][1]
	var col3 = tablero[0][2]+tablero[1][2]+tablero[2][2]
	var dia1 = tablero[0][0]+tablero[1][1]+tablero[2][2]
	var dia2 = tablero[0][2]+tablero[1][1]+tablero[2][0]
	var posibles = [row1, row2, row3, col1, col2, col3, dia1, dia2]
	for(var i = 0; i<posibles.length; i++){
		if (posibles[i] == turn.sign+turn.sign+turn.sign){
			//console.log(sign+" WINS")
			winner = document.getElementById("winner")
			winner.innerHTML = turn.name+" GANA"
		}
	}
}

var routineClick = function(coord){
	if (putSign(coord) == true){
		checkEnd()
		changeTurn()
	}
}

var restart = function(){
	var tab = document.getElementById("tablero")
	var rows = tab.children
	//Restart de la interfaz
	for (var i = 0; i<rows.length; i++){
		//console.log(rows[i])
		for (var x = 0; x<rows[i].children.length; x++){
			//console.log(rows[i].children[x])
			rows[i].children[x].innerHTML = "-"
		}
	}
	//Restart del objeto tablero
	for (var i = 0; i<tablero.length; i++){
		//console.log(rows[i])
		for (var x = 0; x<tablero[i].length; x++){
			//console.log(rows[i].children[x])
			tablero[i][x] = "-"
		}
	}
	winner = document.getElementById("winner")
	winner.innerHTML = ""
	var pDiv = document.getElementById("players")
	pDiv.style.display = "block"
}

var startGame = function(){
		var p1name = document.getElementById("p1").value
		var p2name = document.getElementById("p2").value
		player1 = new player(p1name, "X")
		player2 = new player(p2name, "O")
		var rnd = Math.floor(Math.random()*10)
		if (rnd <= 5){
			turn = player1
		} else {
			turn = player2
		}
		var t = document.getElementById("turn")
		t.innerHTML = "Turno de: "+turn.name
		var pDiv = document.getElementById("players")
		pDiv.style.display = "none"
		var gDiv = document.getElementById("gameScreen")
		gDiv.style.display = "block"
}

var player1 = undefined
var player2 = undefined
var turn = undefined




