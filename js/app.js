(function(){

    // Todo

})();


$("#removeDiv").click(function() {
	$('.remove').fadeOut();   //.hide, .remove, .detach
});

$('#setText').change(function() {
	$('#needText').append($('#setText').val());
});