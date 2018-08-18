angular.module('video-player')
  .service('youTube', function($http) {
    
    this.search = function(query, callback) {
      var options = { params: {q: query, maxResults: 5, type: 'video', videoEmbeddable: 'true', part: 'snippet', key: YOUTUBE_API_KEY }};
      var params = {q: query, maxResults: 5, type: 'video', videoEmbeddable: 'true', part: 'snippet', key: window.YOUTUBE_API_KEY };
      console.log(query);
      console.log(YOUTUBE_API_KEY);
      return $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: params
      }).then(function(data) { 
        console.log(data);
        console.log(callback);
        callback(data.data.items); 
        console.log('success'); 
      }, (function(data) { 
        console.log('failed'); 
      }));   
  
    

};
});
             

