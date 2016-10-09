// function getClanInfo(clanID){
//   $.get( '/main/' + clanID, function( data ) {
//   	if (data === false) {
//   		$( '.result' ).html( 'Oh no! something went wrong' );
//   	} else {
//       let formatter = new JSONFormatter(JSON.parse( data ));
//       $( '.result' ).html( formatter.render() );
//   	}
//   });
// }

var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

