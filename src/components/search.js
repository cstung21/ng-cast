angular.module('video-player')

  .component('search', {
    bindings: {
      bindedsearch: '<'
    },
    
    controller: function(youTube) {
      this.result = function() {
        youTube.search(this.searchbox, this.bindedsearch);
      };    

      this.searchbox = '';
      
    },
    templateUrl: 'src/templates/search.html'
  });


