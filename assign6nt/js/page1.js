// When you click on the Button01, the first four paragraphs should disappear 
// in a smooth motion.
// Then they slide back but this time the text of the first two paragraphs is 
// combined and the text for paragraphs 3 and 4 are also combined. That is, 
// now you have only two paragraphs.
// It should not matter how many times you click on Button01, there will be 
// always the two pairs of combined paragraphs only.
//-----------------------------------------------------------------------------

$firstParagraph = $('p.part1:eq(0)');
firstParagraphText = $firstParagraph.text();
$secondParagraph = $('p.part1:eq(1)');
secondParagraphText = $secondParagraph.text();
$thirdParagraph = $('p.part1:eq(2)');
thirdParagraphText = $thirdParagraph.text();
$fourthParagraph = $('p.part1:eq(3)');
fourthParagraphText = $fourthParagraph.text();
newParagraphOne = firstParagraphText + ' ' + secondParagraphText;
newParagraphThree = thirdParagraphText + ' ' + fourthParagraphText;

$('#btn01').on('click', function() {
    $('#part1 p').hide(3500);
    $firstParagraph.text( newParagraphOne );
    $thirdParagraph.text( newParagraphThree );
    $firstParagraph.show(3500);
    $thirdParagraph.show(3500);
});

// When your mouse enters the heading Page 1, the heading should slide up and 
// disappear for 0.5 seconds.
// Then if the mouse leaves, the heading should return.
// The above behavior should happen only once after the page is displayed.
//-----------------------------------------------------------------------------
$('#part1 > h3').one('mouseover', function(){
    $(this).slideUp().delay(500).slideDown();
});

// When you click on the table, the table font size should increase to 24 px. This 
// change should be animated and take 2 seconds.
// If a mouse leaves the table, the table font size should decrease to 14 px. This 
// time, this change should be animated and take 3 seconds.
//-----------------------------------------------------------------------------
$('#mytable').on('click', function(){
    $(this).animate({fontSize: '24px'}, 2000);
});
$('#mytable').on('mouseleave', function(){
    $(this).animate({fontSize: '14px'}, 2000);
});


// When you click on Button09, both the first and the second image should slide up 
// in a movement that takes 3 seconds.
// Then they should slide back in a movement that takes 2.5 seconds.
// However, the result of step 2 should be that both images exchange they positions 
// (swap).
// The swap should occur whenever you click on Button09 (i.e. images will be 
// swapping after each click).
//-----------------------------------------------------------------------------

