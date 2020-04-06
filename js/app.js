var np = {};  

np.config = {
  'appContainer': '.notepad-app'
};
np.fontFamily     = 'Arial';  
np.fontStype      = '常规';  
np.fontSize       = '16';   

np.fontHandler = function(e) {
  np.fontFamily = e.family;
  np.fontStype = e.style;
  np.fontSize = e.size;
};


// $(function() {
//   $menubar.show(np.menuData);
//   var $app = $('body');

//   $app.click(function() {
//     $menubar.hideMenu();
//   });
// });

$(function(){
    $menucontent.show();
})
