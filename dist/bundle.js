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

/* exported comList */
function comList() {
    var $comList = $(''
        + '<div class="notepad-com-list">'
          + '<input class="editor" type="text"><br>'
          + '<ul class="list">'
          + '</ul>'
        + '</div>');
  
    var $editor = $comList.find('.editor'),
        $list = $comList.find('.list'),
        $items;
  
    var cfg = {
      container: '',
      list: [],
      select: 0,
      width: '200px',
      isFont: false,
      isFontStyle: false,
      selectHandler: null
    };
  
    function setFontStyle(item, style) {
      if(style === '斜体') {
        item.css({'font-style': 'italic'});
        return;
      }
  
      if(style === '粗体') {
        item.css({'font-weight': 'bold'});
        return;
      }
  
      if(style === '粗偏斜体') {
        item.css({'font-weight': 'bold', 'font-style': 'italic'});
        return;
      }
    }
  
    function fillData() {
      var i = 0, $item;
  
      if(cfg.isFont) {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<li class="item"></li>');
          $item.css({'font-family': cfg.list[i]});
          $list.append($item.html(cfg.list[i]));
        }
      } else if(cfg.isFontStyle) {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<li class="item"></li>');
          setFontStyle($item, cfg.list[i]);
          $list.append($item.html(cfg.list[i]));
        }
      } else {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<li class="item"></li>');
          $list.append($item.html(cfg.list[i]));
        }
      }
  
      $items = $list.find('.item');
    }
  
    function setSelect(n) {
      $($items[n]).addClass('selected');
      $editor.val(cfg.list[n]);
      $editor.select();
    }
  
    function init() {
      var $oldList = $(cfg.container).find('.notepad-com-list');
      if($oldList.length !== 0) $oldList.remove();
       
      $(cfg.container).append($comList);
      
      $comList.css({ width: cfg.width });
      fillData();
      setSelect(cfg.select);
    }
  
    this.show = function(conf) {
      $.extend(cfg, conf);
      init();
  
      $list.click(function(e) {
        $($items[cfg.select]).removeClass('selected');
        cfg.select = cfg.list.indexOf($(e.target).html());
        $($items[cfg.select]).addClass('selected');
        $editor.val(cfg.list[cfg.select]);
        $editor.select();
        cfg.selectHandler(cfg.select);
      });
  
      $editor.keyup(function() {
        var i = 0;
  
        for(i=0; i<cfg.list.length; i++) {
          if(cfg.list[i].indexOf($editor.val()) === 0) break;
        }
  
        if(i === cfg.list.length) return;
  
        $items[i].scrollIntoView({behavior: 'smooth', block: 'start'});
        $($items[cfg.select]).removeClass('selected');
        $($items[i]).addClass('selected');
        cfg.select = i;
      });
    };
  }
  
var $menucontent = (function(){
    var $menuonload = $(
        '<div class="menu">'
        +'<ul>'
            +'<li class="filebtn">文件(F)</li>'
            +'<li class="editbtn">编辑(E)</li>'
            +'<li class="formatbtn">格式(O)</li>'
            +'<li class="checkbtn">查看(V)</li>'
            +'<li class="helpbtn">帮助(H)</li>'
        +'</ul>'
        +'<div class="box file">'
            +'<ul>'
                +'<li><p class="leftp">新建(N)</p><p class="rightp">Ctrl+N</p></li>'
                +'<li><p class="leftp">新窗口(W)</p><p class="rightp">Ctrl+Shift+N</p></li>'
                +'<li><p class="leftp">打开(O)</p><p class="rightp">Ctrl+O</p></li>'
                +'<li><p class="leftp">保存(S)</p><p class="rightp">Ctrl+S</p></li>'
                +'<li class="bottom_line"><p class="leftp">另存为(A)</p><p class="rightp">Ctrl+Shift+S</p></li>'
                +'<li><p class="leftp">页面设置(U)</p></li>'
                +'<li class="bottom_line"><p class="leftp">打印(P)</p><p class="rightp">Ctrl+P</p></li>'
                +'<li><p class="leftp">退出(X)</p></li>'
            +'</ul>'
        +'</div>'
        +'<div class="box edit">'
            +'<ul>'
                +'<li class="bottom_line"><p class="leftp">撤销(U)</p><p class="rightp">Ctrl+Z</p></li>'
                +'<li><p class="leftp">剪切(T)</p><p class="rightp">Ctrl+X</p></li>'
                +'<li><p class="leftp">复制(O)</p><p class="rightp">Ctrl+C</p></li>'
                +'<li><p class="leftp">粘贴(S)</p><p class="rightp">Ctrl+V</p></li>'
                +'<li class="bottom_line"><p class="leftp">删除(L)</p><p class="rightp">Del</p></li>'
                +'<li><p class="leftp">使用Bing搜索…</p><p class="rightp">Ctrl+E</p></li>'
                +'<li><p class="leftp">查找(F)</p><p class="rightp">Ctrl+F</p></li>'
                +'<li><p class="leftp">查找下一个(N)</p><p class="rightp">F3</p></li>'
                +'<li><p class="leftp">查找上一个(V)</p><p class="rightp">Shift+F3</p></li>'
                +'<li><p class="leftp">替换(R)</p><p class="rightp">Ctrl+H</p></li>'
                +'<li class="bottom_line"><p class="leftp">转到(G)</p><p class="rightp">Ctrl+G</p></li>'
                +'<li><p class="leftp">全选(A)</p><p class="rightp">Ctrl+A</p></li>'
                +'<li><p class="leftp">日期/时间(D)</p><p class="rightp">F5</p></li>'
            +'</ul>'
        +'</div>'
        +'<div class="box format">'
            +'<ul>'
                +'<li><p class="leftp">字体换行(Z)</p></li>'
                +'<li id="wordtype"><p class="leftp">字体(F)…</p></li>'
            +'</ul>'
        +'</div>'
        +'<div class="box check">'
            +'<ul>'
                +'<li><p class="leftp">缩放(Z)</p></li>'
                +'<li><p class="leftp">状态栏(S)</p></li>'
            +'</ul>'
        +'</div>'
        +'<div class="box help">'
            +'<ul>'
                +'<li><p class="leftp">查看帮助(H)</p></li>'
                +'<li class="bottom_line"><p class="leftp">发送反馈(F)</p></li>'
                +'<li><p class="leftp">关于记事本(A)</p></li>'
            +'</ul>'
        +'</div>'
    +'</div>');
    
    var $filebtn = $menuonload.find('.filebtn'),
        $editbtn = $menuonload.find('.editbtn'),
        $formatbtn = $menuonload.find('.formatbtn'),
        $checkbtn = $menuonload.find('.checkbtn'),
        $helpbtn = $menuonload.find('.helpbtn'),
        $file = $menuonload.find('.file'),
        $edit = $menuonload.find('.edit'),
        $format = $menuonload.find('.format'),
        $check = $menuonload.find('.check'),
        $help = $menuonload.find('.help'),
        $li = $menuonload.find('li'),
        $p = $menuonload.find('p'),
        $box = $menuonload.find('.box'),
        $fileul = $menuonload.find('.file ul'),
        $fileli = $menuonload.find('.file ul li'),
        $editul = $menuonload.find('.edit ul'),
        $editli = $menuonload.find('.edit ul li'),
        $formatul = $menuonload.find('.format ul'),
        $formatli = $menuonload.find('.format ul li'),
        $checkul = $menuonload.find('.check ul'),
        $checkli = $menuonload.find('.check ul li'),
        $helpul = $menuonload.find('.help ul'),
        $helpli = $menuonload.find('.help ul li'),
        $menu = $menuonload.find('.menu');

    var sedmenu = 0; //0是不显示

    var $wordtype = $menuonload.find('#wordtype')

    function show(){
        $('body').append($menuonload);
        btnclick();
        $filebtn.mouseover(function(){
            colorover()
            btnmousemove($file);
        })
        $editbtn.mouseover(function(){
            colorover()
            btnmousemove($edit);
        })
        $formatbtn.mouseover(function(){
            colorover()
            btnmousemove($format);
        })
        $checkbtn.mouseover(function(){
            colorover()
            btnmousemove($check);
        })
        $helpbtn.mouseover(function(){
            colorover()
            btnmousemove($help);
        })
        // changecolorclick($fileul,$fileli);
        // changecolorclick($editul,$editli);
        // changecolorclick($formatul,$formatli);
        // changecolorclick($checkul,$checkli);
        // changecolorclick($helpul,$helpli);

        litbtnclick($fileul,$fileli);
        litbtnclick($editul,$editli);
        litbtnclick($formatul,$formatli);
        litbtnclick($checkul,$checkli);
        litbtnclick($helpul,$helpli);

        changecolormove($fileul,$fileli);
        changecolormove($editul,$editli);
        changecolormove($formatul,$formatli);
        changecolormove($checkul,$checkli);
        changecolormove($helpul,$helpli);
        $wordtype.click(function(){
            $dlgFont.show({
            family: np.fontFamily,
            style: np.fontStyle,
            size: np.fontSize,
            okHandler: np.fontHandler
            });
            displaynone();
            sedmenu = 0;
        })
        
    }
    function displaynone(){
        $fileli.css('background-color','rgb(238, 238, 238)');
        $file.css("display","none");
        $edit.css("display","none");
        $format.css("display","none");
        $check.css("display","none");
        $help.css("display","none");
    }
    function colorover(){
        $fileli.css('background-color','rgb(238, 238, 238)');
        $editli.css('background-color','rgb(238, 238, 238)');
        $formatli.css('background-color','rgb(238, 238, 238)');
        $checkli.css('background-color','rgb(238, 238, 238)');
        $helpli.css('background-color','rgb(238, 238, 238)');
    }
    function btnclick(){
        $(document).click(function(e){
            if(!$li.is(e.target) && !$p.is(e.target) && !$box.is(e.target)){
                displaynone();
                sedmenu = 0;
            }
        })
        $filebtn.click(function(){
            displaynone();
            $file.css("display","block");
            sedmenu = 1;
        })
        $editbtn.click(function(){
            displaynone();
            $edit.css("display","block");
            sedmenu = 1;
        })
        $formatbtn.click(function(){
            displaynone();
            $format.css("display","block");
            sedmenu = 1;
        })
        $checkbtn.click(function(){
            displaynone();
            $check.css("display","block");
            sedmenu = 1;
        })
        $helpbtn.click(function(){
            displaynone();
            $help.css("display","block");
            sedmenu = 1;
        })
    }
    function btnmousemove($btn){
        if(sedmenu == 1){
            displaynone();
            $btn.css("display","block");
        }
    }
    // function changecolorclick($ul,$li){
    //     $ul.delegate('li','click',function(){
    //         $li.css('background-color','rgb(238, 238, 238)');
    //         $(this).css('background-color','rgb(42, 175, 252)');
    //     })
    // }
    function litbtnclick($ul,$li){
        $ul.delegate('li','click',function(){
            displaynone();
            sedmenu = 0;
        })
    }
    function changecolormove($ul,$li){
        $ul.delegate('li','mouseover',function(){
            $li.css('background-color','rgb(238, 238, 238)');
            $(this).css('background-color','rgb(42, 175, 252)');
        })
    }
    return {
        show:show
    }
}())
var $dlgFont = (function() {
  var $dlg = $(''
      +'<div class="handle">'
      +'<div class="dialogbox main">'
        +'<div class="notepad-dlg-titlebar nav">'
          +'<p>字体</p>'
          +'<span class="close-btn">×</span>'
        +'</div>'
        +'<div class="content">'
          +'<div class="entitle">'
            +'<p class="tit1">字体(F)</p>'
            +'<p class="tit2">字形(Y)</p>'
            +'<p class="tit3">大小(S)</p>'
          +'</div>'
            +'<div class="external">'
                +'<div class="list1"></div>'
                +'<div class="list2"></div>'
                +'<div class="list3"></div>'
            +'</div>'
        +'</div>'
        +'<div class="instance">'
          +'<p>示例</p>'
          +'<div class="change">AaBbYyZz</div>'
        +'</div>'
        +'<div class="footer">'
          +'<p>脚本(R):</p>'
          +'<select>'
            +'<option value ="volvo">西欧语言</option>'
          +'</select>'
        +'</div>'
        +'<div class="btn"> '
            +'<input class="btn-ok" type="button" value="确定">'
            +'<input class="btn-cancel" type="button" value="取消">'
        +'</div>'
      +'</div>'
      +'</div>'
      );

  var $btnOk = $dlg.find('.btn-ok'),
      $btnClose = $dlg.find('.close-btn'),
      $btnCancel = $dlg.find('.btn-cancel'),
      $sample = $dlg.find('.change'),
      $titleBar = $dlg.find('.notepad-dlg-titlebar');

  var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
      styles = ['常规', '斜体', '粗体', '粗偏斜体'],
      sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];

  var cfg = {
    family: 'Arial',
    style: '常规',
    size: '16',
    okHandler: null
  };

  function sample() {
    $sample.css({ 'font-family': cfg.family, 'font-size': cfg.size + 'pt' });
    if(cfg.style === '常规'){
      $sample.css({'font-style': 'normal'});
      $sample.css({'font-weight': 'normal'});
    }
    if(cfg.style === '斜体') {
      $sample.css({'font-style': 'italic'});
      $sample.css({'font-weight': 'normal'});
      return;
    }
    if(cfg.style === '粗体') {
      $sample.css({'font-style': 'normal'});
      $sample.css({'font-weight': 'bold'});
      return;
    }
    if(cfg.style === '粗偏斜体') {
      $sample.css({'font-weight': 'bold', 'font-style': 'italic'});
      return;
    }
  }

  function init() {
    var lstFamily = new comList();
    lstFamily.show({
      container: '.list1',
      width: '176px',
      list: fonts,
      select: fonts.indexOf(cfg.family),
      isFont: true,
      selectHandler: function(e) {
        cfg.family = fonts[e];
        sample();
      }
    });

    var lstStyle = new comList();
    lstStyle.show({
      container: '.list2',
      width: '132px',
      list: styles,
      select: styles.indexOf(cfg.style),
      isFontStyle: true,
      selectHandler: function(e) {
        cfg.style = styles[e];
        sample();
      }
    });

    var lstSize = new comList();
    lstSize.show({
      container: '.list3',
      width: '64px',
      list: sizes,
      select: sizes.indexOf(cfg.size),
      selectHandler: function(e) {
        cfg.size = sizes[e];
        sample();
      }
    });
    sample();
  }

  function destory() {
    $dlg.remove(); 
  }

  function show(conf) {
    $.extend(cfg, conf);

    $('body').append($dlg);
    init();
    $dlg.find('.dialogbox').draggable({handle: $titleBar});

    $btnCancel.click(function(){
      destory();
    });
    $btnClose.click(function(){
      destory();
    });
    $btnOk.click(function() {
      destory();
    });
    $dlg.click(function(e) {
      e.stopPropagation();
    });
  }

  return {show: show};
}());