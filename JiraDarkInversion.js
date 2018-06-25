(function() {
	['body{filter:invert(88%)}','img{filter:invert(100%)}', 'footer{background:#fff}', 'html{background:#000}'].forEach( function(e) {
		window.document.styleSheets[0].insertRule(e);
	});

	$('iframe').load( function(){
		$('iframe').contents().find("head")
			.append($("<style type='text/css'>img{filter:invert(100%);}</style>"));
	});
})();
