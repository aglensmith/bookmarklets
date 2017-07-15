var urls = [];
$.each($('.fr-focus > .ember-view a'), function(i){urls.push(this.href);});
urls.forEach(function(i){window.open(i)});
