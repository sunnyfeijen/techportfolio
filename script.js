$(document).ready(function() {

$('.grid-item').click(function(){
	$('.project').html("");
	var l = $(this).attr('title');
	var ll = l.toLowerCase().replace(/\s+/g, '');
	$.get('sketches/'+ll+'.html', function(data){
		$('.project').html(data);
	})
})

});
