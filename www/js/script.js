$(function () {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8888/list',
        success: function (data) {
            data.sort(function (a, b) {
                return b.level - a.level;
            });
            $('#competences-section').html('<h2 class="col-12 display-4">Compétences</h2>');
             $('#competences-section').append('<div class="col-md-6"><h2>groupe 1</h2> <ul id="liste1" class="list-group mt-3"></ul></div>');
             $('#competences-section').append('<div class="col-md-6"><h2>groupe 2</h2> <ul id="liste2" class="list-group mt-3"></ul></div>');
             var txt1 = '', txt2 ='';
            $.each(data, function (index, d) {
                if (index < 5) {
                    txt1 += '<li class="list-group-item">';
                    txt1 += '<div class="row">';
                    txt1 += '<div class="col-6 text-left">';
                    txt1 += d.name;
                    txt1 += '</div>';
                    txt1 += '<div id="stars" class="col-6 text-right">';
                    txt1 += displayLevel(d.level);
                    txt1 += '</div>';
                    txt1 += '</div>';
                    txt1 += '</li>';
                    $('#liste1').html(txt1);
                } else {
                    txt2 += '<li class="list-group-item">';     
                    txt2 += '<div class="row">';
                    txt2 += '<div class="col-6 text-left">';
                    txt2 += d.name;
                    txt2 += '</div>';
                    txt2 += '<div id="stars" class="col-6 text-right">';
                    txt2 += displayLevel(d.level);
                    txt2 += '</div>';
                    txt2 += '</div>';
                    txt2 += '</li>';
                    $('#liste2').html(txt2);
                }

            });
        }
    });
});



function displayLevel(nb) {
    var insertLi = '';
    var txtColor = '';
    for (i = 0; i < nb; i++) {
        switch (nb) {
            case 1:
            case 2:
                txtColor = "rouge";
                break;
            case 3:
            case 4:
                txtColor = "vert-clair";
                break;
            default:
                txtColor = "vert-fonce";
                break;
        }
        insertLi += '<i class="fas fa-star ' + txtColor + '"></i>';
    }
    return insertLi;
}