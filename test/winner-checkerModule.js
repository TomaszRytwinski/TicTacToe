var checkWinner = (function () {

    var checkRows = function (table, x, y) {
        var stop = 0;
        for (i = 0; i <= 2; i++) {
            if (table[i][y] != table[x][y]) {
                stop = 1;
                break;
            }
        }
        return stop;
    };

    var checkColumns = function (table, x, y) {
        var stop = 0;
        for (i = 0; i <= 2; i++) {
            if (table[x][i] != table[x][y]) {
                stop = 1;
                break;
            }
        }
        return stop;
    };

    var checkSlant = function (table, x, y) {
        var stop = 0;
        for (i = 0; i <= 2; i++) {
            if (table[i][i] != table[x][y]) {
                stop = 1;
                break;
            }
        }
        return stop;
    };

    var checkSlantUni = function (table, x, y) {
        var stop=0;
        for (i = 0; i <= 2; i++) {
            if (table[i][2 - i] != table[x][y]) {
                stop = 1;
                break;
            }
        }
         return stop;
    };

    return {
        check:function(table, x, y) {
            var stop = 0;
            var winner = 0;
            stop = checkRows(table, x, y);
            if (stop == 0) {
                return winner = 1;
            }
            stop = checkColumns(table, x, y);
            if (stop == 0) {
                return winner = 1;
            }
            stop = checkSlant(table, x, y);
            if (stop == 0) {
                return winner = 1;
            }
            stop = checkSlantUni(table, x, y);
            if (stop == 0) {
                return winner = 1;
            }
            return winner;
        }
    }
})();