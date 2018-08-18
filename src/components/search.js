angular.module('video-player')

  .component('search', {
    controller: function() {
      this.result = function() {
        
      };    
      this.searchbox = '';
      
    },
    templateUrl: 'src/templates/search.html'
  });
