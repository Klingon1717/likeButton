'use strict';

var $button = $('#likeButton');
var count = 0

$button.html('like');
$button.on('click',addLike);

function addLike(e){
	count ++;
	console.log(count);
	if(count !==0){
		$button.html('likes: ' +count);
	}
}