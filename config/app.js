var ccDashBoard = angular.module("ccDashboard",['ui.router']);

ccDashBoard.directive("rowDirective",function(){
return {
	restrict : "E",
	replace	: true,
	templteUrl : '../templates/calendar.html'
	};
});