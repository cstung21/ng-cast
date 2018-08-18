angular.module('video-player')

  .component('app', {
    controller: function($scope, youTube) {
      this.selectVideo = (event) => {
        this.currentVideo = event;
      };
      
      this.searchResults = (data) => {  
        this.currentVideo = data[0];
        this.videos = data;
      };
      youTube.search('', this.searchResults);
      this.currentVideo = fakeVideoData[0];
      this.videos = fakeVideoData;
    },
    templateUrl: 'src/templates/app.html'
  });
