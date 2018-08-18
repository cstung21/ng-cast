angular.module('video-player')

  .component('app', {
    controller: function($scope, youTube) {
      this.selectVideo = function(event) {
        this.currentVideo = event;
      };
      
      this.binded = this.selectVideo.bind(this);
      
      this.searchResults = function() {  
      };
      
      this.currentVideo = exampleVideoData[0];
      this.videos = exampleVideoData;
    
    },
    templateUrl: 'src/templates/app.html'
  });
