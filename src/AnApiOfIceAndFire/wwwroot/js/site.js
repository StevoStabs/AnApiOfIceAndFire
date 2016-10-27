function makeApiRequest(url) {
    if (url == '') { //User submitted empty url or did not change the placeholder text.
        url = 'characters/583';
    }

    url = 'https://anapioficeandfire.com/api/' + url;

    $.ajax({
        url: url,
        context: document.body
    }).complete(function (data) {
        if (data['status'] == 200) {
            var jsonData = $.parseJSON(data['responseText']);
            $('#responseOutput').text(JSON.stringify(jsonData, null, '\t'));
        }
        else if (data['status'] == 404) {
            $('#responseOutput').text(data['status'] + ' ' + data['statusText']);
        } else {
            $('#responseOutput').text('Something went wrong!');
        }
    });
}


$('#btnMakeApiRequest').click(function () {
    var url = $('#btnRequestUrl').val();
    makeApiRequest(url);
});

$('.request-suggestion').click(function (e) {
    e.preventDefault();
    var url = e.target.innerText;
    $('#btnRequestUrl').val(url);
    makeApiRequest(url);
});

$(function () {
    var url = $('#btnRequestUrl').val();
    makeApiRequest(url);
});