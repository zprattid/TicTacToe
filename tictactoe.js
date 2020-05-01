var tablero = [["-", "-", "-"],
				["-","-","-"],
				["-","-","-"]]
var player = function(sign){
	this.sign = sign
	this.turn = undefined
}

var displayTableroConsole = function(tab){
	for (var i = 0; i<tab.length; i++){
		console.log(tablero[i])
	}
}

var putSign = function(coord, tab){
	if (tab[coord[0]][coord[1]] == "-"){
		tab[coord[0]][coord[1]] = turn
		id = coord[0].toString()+coord[1].toString()
		//console.log(id)
		var cell = document.getElementById(id)
		cell.innerHTML = turn
	}
}

var changeTurn = function(){
	var t = document.getElementById("turn")
	if (turn == "X"){
		turn = player2.sign
	} else if (turn == "O") {
		turn = player1.sign
	}
	t.innerHTML = "Turno de: "+turn
}

var checkEnd = function(sign, tab){
	var row1 = tab[0][0]+tab[0][1]+tab[0][2]
	var row2 = tab[1][0]+tab[1][1]+tab[1][2]
	var row3 = tab[2][0]+tab[2][1]+tab[2][2]
	var col1 = tab[0][0]+tab[1][0]+tab[2][0]
	var col2 = tab[0][1]+tab[1][1]+tab[2][1]
	var col3 = tab[0][2]+tab[1][2]+tab[2][2]
	var dia1 = tab[0][0]+tab[1][1]+tab[2][2]
	var dia2 = tab[0][2]+tab[1][1]+tab[2][0]
	var posibles = [row1, row2, row3, col1, col2, col3, dia1, dia2]
	for(var i = 0; i<posibles.length; i++){
		if (posibles[i] == sign+sign+sign){
			//console.log(sign+" WINS")
			winner = document.getElementById("winner")
			winner.innerHTML = sign+" GANA"
		}
	}
}

player1 = new player("X")
var turn = player1.sign
var t = document.getElementById("turn")
t.innerHTML = "Turno de: "+turn
player2 = new player("O")

/*displayTableroConsole(tablero)
console.log("######")
putSign([0,0],tablero)
putSign(player2, player1,[1,1],tablero)
putSign(player1, player2,[0,1],tablero)
putSign(player2, player1,[2,1],tablero)
putSign(player1, player2,[0,2],tablero)
displayTableroConsole(tablero)
checkEnd("x",tablero)*/
