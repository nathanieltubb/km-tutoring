// When you click on the Button01, even paragraphs should have green 
// background color.
// When you click on the Button02, a random paragraph should disappear 
// (if you click several times, there should be no paragraph).
// When you click on the Button03, paragraph4 and paragraph1 should 
// exchange their position.
// When you click on the Button04, all paragraphs should be in upper 
// case characters.
//-----------------------------------------------------------------------------
$('#btn01').on('click', function () {
    $('p:even').css('background-color', 'green');
});
$('#btn02').on('click', function () {
    var randIndex = Math.floor(Math.random() * $('p').length);
    $('p').eq( randIndex ).remove();
});
$('#btn03').on('click', function () {
    var tempText = $('#paragraph-1-1').text();
    $('#paragraph-1-1').text($('#paragraph-1-4').text());
    $('#paragraph-1-4').text(tempText);
});
$('#btn04').on('click', function () {
    $('p').css('text-transform', 'uppercase');
});

// When you click on the Button05, the table rows should have alternating 
// background color.
// When you click on the Button06, two rows with with meaningful content should 
// be added. One should become the first row and the other should be come the 
// last row. Your table will have 6 questions and answers now.
// When you click on the Button07, the text in the last column will be replaced 
// with random images provided in this project.
// When you click on the Button08, all answers will be empty.
//-----------------------------------------------------------------------------
$('#btn05').on('click', function() {
    $('#mytable tr:nth-of-type(2n+2)').css('background-color','lightgrey');
});

$('#btn06').on('click', function() {
    $('#mytable tr:eq(1)').before('<tr><td>What is the capitol of England?</td><td>London</td><td>Yes!</td></tr>');
    $('#mytable tr:last').after('<tr><td>What is the capitol of India?</td><td>Dehli</td><td>Uh, maybe?</td></tr>');
});

$('#btn07').on('click', function() {
    $('#mytable tr > td:last-child').each(function() {
        $(this).html('<img src="images/' + pictures[ Math.floor(Math.random() * pictures.length) ] + '">');
    });
});

$('#btn08').on('click', function() {
    $('#mytable tr > td:last-child').each(function() {
        $(this).text('');
    });
});

// When you click on the Button09, the content of the alt attribute should appear 
// beside each image.
// When you click on the Button10, paragraph 2 should be replaced by a random image 
// from images provided in this project.
// When you click on the Button11, the size of the first image should be decreased 
// by 50% (each time you click).
// When you click on the Button12, you will toggle sizes of all images (increasing 
// and decreasing sizes by 50% on each click).
//-----------------------------------------------------------------------------
$('#btn09').on('click', function() {
    $('img').each(function() {
        $(this).after($(this).attr('alt'));
    });
});
$('#btn10').on('click', function() {
    $('#paragraph-1-2').html('<img width="150" height="150" src="images/' + pictures[ Math.floor(Math.random() * pictures.length) ] + '">');
});
$('#btn11').on('click', function() {
    $('img:first').width($('img:first').width() / 2);
    $('img:first').height($('img:first').height() / 2);
});
$('#btn12').on('click', function() {
    if($('img').width() != 150){
        $('img').width(150);
        $('img').height(150);
    } else {
        $('img').width(75);
        $('img').height(75);
    }
});
// When you click on the Button13, add to each list item a small random image from 
// the provided images.
// Any time you click on the Button14, the font size of all list items should be 
// increased by 25%.
// When you click on the Button15, swap contents of both lists.
// Any time you click on the Button16, the order of list items shifts down. That 
// is, first item becomes the second item, the second item becomes the third item, 
// etc. and the last item becomes the first item. This should work for lists of 
// any size.
//-----------------------------------------------------------------------------
$('#btn13').on('click', function() {
    $('li').each(function(){
        $(this).append('<img width="50" height="50" src="images/' + pictures[ Math.floor(Math.random() * pictures.length) ] + '">');
    });
});
$('#btn14').on('click', function() {
    $('li').each(function(){
        var fontSize = parseInt($(this).css('font-size'));
        fontSize = fontSize * 0.25 + fontSize;
        $(this).css('font-size', fontSize+'px' );
    });
});
$('#btn15').on('click', function() {
    var tempListContents = $('#ulist').html();
    $('#ulist').html($('#olist').html());
    $('#olist').html(tempListContents);
});
$('#btn16').on('click', function() {
    $('#ulist').prepend($('#ulist li:last-child'));
    $('#olist').prepend($('#olist li:last-child'));
});