$('#herbaldetailPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
    
                            doOnOrientationChange();
                            
    $('#tunggu').html('<img src=css/images/ajax-loader.png />')                       
	$.getJSON(serviceURL + 'getherbaldetail.php?id='+id, displaydetailHerbal);
});

function displaydetailHerbal(data) {
	var dpherbal = data.herbaldetail;
	$('#beritaimg').attr('src', 'http://belajaroprek.com/foto/' + dpherbal.gambar);
	
    $('#nama').html(dpherbal.nama);
    $('#keterangan').html(dpherbal.keterangan);
   
   
    $('#tunggu').hide();                       

}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function doOnOrientationChange()
{
    switch(window.orientation) 
    {  
        case -90:
        case 90:
            $('#tunggu').css('margin-top','20%').css('margin-left','40%');
            break; 
        default:
            $('#tunggu').css('margin-top','42%').css('margin-left','40%');
            break; 
    }
}