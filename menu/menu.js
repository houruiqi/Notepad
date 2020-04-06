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