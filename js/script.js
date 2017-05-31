var names = ["kitty", "kitty2"];
var cats = $('.cats');

for(i=0; i<names.length; i++){
  cats.append('<h3> Name: '+ names[i] +'</h3><div class="row"><div class="kitty" id="' + names[i] + '"><img src="images/' + names[i] + '.jpg" /></div><div class="clicker"><p>You have clicked this cat</p><h1 class="clicks' + names[i] + '">0</h1><p>times</p></div></div>');
};

  $('.kitty').click(function(e) {
    var clicker = $('.clicks'+this.id);
    var counter = clicker[0].textContent;
    counter++;
    clicker[0].textContent = counter;
  });




/*function catclicker(){
  var cat = $('#kitty');

}*/
