$(document).ready(function() {
	$('div.menu ul li a').click(function() {
			var page = $(this).attr('href');
			$('#content').load('sub/' + page + '.html');
			return false;
	});
});
