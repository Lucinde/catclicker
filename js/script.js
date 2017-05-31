var names = ["kitty", "kitty2", "kitty3", "kitty4", "kitty5"];
var clicks = [0,0,0,0,0];
var catsList = $('#namesList');

for(i=0; i<names.length; i++){
  catsList.append('<li onclick="catClicked(this,'+ i +')">' + names[i] + '</li>');
}

function catClicked(el,index){
    var name = $('#name');
    name.html(el.textContent);
    var image = $('#image');
    image.html('<img src="images/'+ el.textContent + '.jpg" onclick="imageClicked(' + index + ')" />');
    var clicked = $('#clicks');
    clicked.html(clicks[index]);
}

function imageClicked(index){
  var clicked = $('#clicks');
  clicks[index]++;
  clicked.html(clicks[index]);
}

/*
var cats = $('.cats');

for(i=0; i<names.length; i++){
  cats.append('<div class="cat-display"><h3> Name: '+ names[i] +'</h3><div class="kitty" id="' + names[i] + '"><img src="images/' + names[i] + '.jpg" /></div><div class="clicker"><p>You have clicked this cat</p><h1 class="clicks' + names[i] + '">0</h1><p>times</p></div></div>');
};

  $('.kitty').click(function(e) {
    var clicker = $('.clicks'+this.id);
    var counter = clicker[0].textContent;
    counter++;
    clicker[0].textContent = counter;
  });
*/
