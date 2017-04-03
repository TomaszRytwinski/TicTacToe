var game = (function () {


    var char = "X";
    var round = 0;
    var table =
        [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']];
    var whoFirst = 0;
    var pktKrzyzyk = 0;
    var pktKolko = 0;
    var pktRemisy = 0;
    var winner = 0;

    var whoWon = function (newChar) {
        alert("Wygral " + newChar);
        if (newChar == "X") {
            historyModul.xWon();
            document.getElementById("scoreKrzyzyk").innerHTML = historyModul.getTimesXWon();
        } else {
            historyModul.oWon();
            document.getElementById("scoreKolko").innerHTML = historyModul.getTimesOWon();
        }
    };

    var changeChar = function () {
        if (char == "X") {
            char = "O";
        } else {
            char = "X"
        }
    };

    return {
        newMove: function (x, y) {
            var pos = 0;
            if (table[x][y] == '') {
                pos = x * 10 + y;
                document.getElementById(pos).innerHTML = char;
                table[x][y] = char;
                winner = checkWinner.check(table, x, y);
                if (winner == 1) {
                    whoWon(char);
                    game.newGame();
                    return 0;
                }
                changeChar();
                round++;
            }
            if (round > 8 && winner == 0) {
                pktRemisy++;
                document.getElementById("scoreRemisy").innerHTML = pktRemisy;
                alert("remis");
                char = "X";
                game.newGame();
                return 0;
            }

        },

        newGame: function () {
            var pos = 0;
            for (i = 0; i <= 2; i++) {
                for (j = 0; j <= 2; j++) {
                    pos = i * 10 + j;
                    document.getElementById(pos).innerHTML = '';
                    table[i][j] = '';
                    round = 0;
                }
            }
            if (whoFirst == 0) {
                char = "X";
            } else if (whoFirst == 1) {
                char = "O";
            }
        },

        changeFirst: function () {
            if (whoFirst == 0) {
                whoFirst = 1;
                document.getElementById("starter").innerHTML = 'Zaczyna kolko';
            } else {
                whoFirst = 0;
                document.getElementById("starter").innerHTML = 'Zaczyna krzyzyk';
            }
        }
    }
})();