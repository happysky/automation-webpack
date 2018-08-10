define(function(require){
    var a = require('./require-a');
    var x = {
        init: function(){
            console.log('b');
        }
    };
    console.log('bq');
    
    return x;
});