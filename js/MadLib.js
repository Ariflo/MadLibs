var storyObj = {};

function fillInTheBlanks() {

   var queryString = document.location.search.replace('?', '');
    var pairs = queryString.split('&').map(function (pair) {
          return pair.split('=');
      })

            pairs.forEach(function (pair) {

                      pair.forEach(function(){

                                 storyObj[pair[0]] = pair[1];
                         });
            });

}
