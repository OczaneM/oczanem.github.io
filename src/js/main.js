var pages = ['landingPage', 'projectsPage', 'recentlyPage', 'contactPage', 'footerPage']

$(document).ready(function() {
	$('#fullpage').fullpage({
		fadingEffect: true,
		anchors: pages,
		navigation: true,
		scrollingSpeed: 900,
		navigationPosition: 'right',
		navigationTooltips: ['', 'projects', 'recently', 'contact', ''],
		scrollOverflow: true,
		touchSensitivity: 10,
		css3:true,

		//events
		onLeave: function(index, nextIndex, direction){
			var nextSectionAnchor = pages[nextIndex-1];
			var nextSection = $('.fp-section[data-anchor="'+nextSectionAnchor+'"]');
			var newBg = $(nextSection).attr('data-bg');
			$('.fp-section').animate({ backgroundColor: newBg }, "slow")
		}
	});
});
