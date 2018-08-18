angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      clickevent: '<'
    },
    controller: function() {
      
      this.onClick = function(event) {
        
      };
      
      
      
    },
    
    templateUrl: 'src/templates/videoList.html'
  
  });
