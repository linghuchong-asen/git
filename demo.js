var lastKnownHeight = window.innerHeight;
var lastKnownWidth = window.innerWidth;

function checkScreenShot() {
    var currentHeight = window.innerHeight;
    var currentWidth = window.innerWidth;

    if (currentHeight !== lastKnownHeight || currentWidth !== lastKnownWidth) {
      console.log('用户截屏');
        // 可能是截屏操作，进行相应处理
        // 可以尝试上传或记录相关信息
    }

    lastKnownHeight = currentHeight;
    lastKnownWidth = currentWidth;
}

setInterval(checkScreenShot, 1000); // 检查频率
