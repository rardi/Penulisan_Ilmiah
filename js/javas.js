var serviceURL = "http://www.belajaroprek.com/herbal/";

var herbal;

$('#herbalListPage').bind('pageinit', function(event) {

	
	getherbalList();
	
	
});

function getherbalList() {
	$.getJSON(serviceURL + 'getherbal.php', function(data) {
		$('#herbalList li').remove();
		herbal = data.herbal;
		$.each(herbal, function(index, herbal) {
			$('#herbalList').append('<li><a href="herbaldetail.html?id='+herbal.id_obat+'"><img src="http://www.belajaroprek.com/foto/' + herbal.gambar + '" /><span class="judul">' + herbal.nama + '</span></a></li>');
		});
		$('#herbalList').listview('refresh');
	});
}
