$(document).ready(function(){
	$('.treeview-menu li a').click(function(){
		$("body, html").animate({scrollTop: $( $(this).attr('href') ).offset().top-150}, 600);
	    $('.sidebar-menu .treeview-menu  li  a').removeClass("activeMenu");
	    $(this).addClass("activeMenu");
	    //$('.sidebar-menu .treeview-menu  li  a').addClass("activeMenu");
	    
	});
});

