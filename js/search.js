$('#search').keyup(function() {

	var q = $(this).val();
	
	$.post('http://www.belajaroprek.com/herbal/getherbalsearch.php',{ q : q }, function (data) {

	$('#result').html(data);
	
	
});

});
