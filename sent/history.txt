var historyModul = (function(){
    var xWins=0;
    var oWins=0;
    var draws=0;
    return{
     xWon : function(){
        xWins++;
    },
     oWon : function(){
        oWins++;
    },
    wasDraw : function(){
        draws++;
    },
     getTimesXWon : function(){
        return xWins;
    },
     getTimesOWon : function(){
        return oWins;
    },
     getTimesWasDraw : function(){
        return draws;
    }   
    }
})();