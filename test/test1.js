describe("A suite is just a function", function () {


    it("should return 0 when only 00 field has X", function () {
        var table =
            [
                ['X', '', ''],
                ['', '', ''],
                ['', '', '']];
        var x = 0;
        var y = 0;
        var winner = checkWinner.check(table, x, y);
        expect(winner).toBe(0);
    });

    it("should return 1 when first row has XXX", function () {
        var x = 2;
        var y = 2;
        var table =
            [
                ['X', 'X', 'X'],
                ['', '', ''],
                ['', '', '']];
        var winner = checkWinner.check(table, x, y);
        expect(winner).toBe(1);
    });

    it("should return 1 when first column has XXX", function () {
        var x = 0;
        var y = 2;
        var table =
            [
                ['X', '', ''],
                ['X', '', ''],
                ['X', '', '']];
        var winner = checkWinner.check(table, x, y);
        expect(winner).toBe(1);
    });

    it("should return 1 when slant has OOO", function () {
        var x = 2;
        var y = 2;
        var table =
            [
                ['O', '', ''],
                ['', 'O', ''],
                ['', '', 'O']];
        var winner = checkWinner.check(table, x, y);
        expect(winner).toBe(1);
    });

    it("should return 1 when - slant has OOO", function () {
        var x = 0;
        var y = 2;
        var table =
            [
                ['', '', 'O'],
                ['', 'O', ''],
                ['O', '', '']];
        var winner = checkWinner.check(table, x, y);
        expect(winner).toBe(1);
    });

    it("should return 0 when there is no winner", function () {
        var x = 0;
        var y = 2;
        var table =
            [
                ['X', '', 'O'],
                ['', 'O', ''],
                ['X', '', 'X']];
        var winner = checkWinner.check(table, x, y);
        expect(winner).toBe(0);
    });


});



