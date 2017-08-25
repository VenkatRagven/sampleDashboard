scoreApps.service('urlMapperService', function(){
	console.log("mapper");
    this.urlMapper = {};
    this.urlMapper.interviewDetailsUrl = "http://paymentmod.cloudapp.net:8060/getInterviewDetailResult?";
    
	this.getUrl =function(url){

		return this.urlMapper[url];
	};
});