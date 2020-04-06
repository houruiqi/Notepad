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