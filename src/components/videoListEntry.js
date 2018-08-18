angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      clickevent: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
    controller: function() {
    }
  });
