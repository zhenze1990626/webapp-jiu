   $(function () {
            var $targetObj = $('.hehe');
            //初始化设置
            cat.touchjs.init($targetObj, function (left, top, scale, rotate) {
                $('#left').text(left);
                $('#top').text(top);
                $('#scale').text(scale);
                $('#rotate').text(rotate);
                $targetObj.css({
                    left: left,
                    top: top,
                    'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)',
                    '-webkit-transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)'
                });
            });
        
           //初始化拖动手势（不需要就注释掉）
            cat.touchjs.drag($targetObj, function (left, top) {
                $('#left').text(left);
                $('#top').text(top);
            });
            //初始化缩放手势（不需要就注释掉）
            cat.touchjs.scale($targetObj, function (scale) {
                $('#scale').text(scale);
            });
            //初始化旋转手势（不需要就注释掉）
            cat.touchjs.rotate($targetObj, function (rotate) {
                $('#rotate').text(rotate);
            });
            
            
            
            
        });