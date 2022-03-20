chrome.runtime.sendMessage({todo: "showPageAction"});


var elem = document.getElementById("comment");
elem.style.backgroundColor = "blue";
elem.style.color = "white";

//var overStyle = document.getElementsByClassName("remove-anchor__decoration");
//for (let i = 0; i < overStyle.length; i++) {
//    overStyle[i].
//}



//var imgArr = document.getElementsByTagName("img");
//console.log(imgArr.length);
//for (let i = 0; i < imgArr.length; i++) {
//    console.log(imgArr[i]);
//    var imgFG = new SimpleImage(imgArr[i]);
//    imgArr[i].src = "https://drive.google.com/file/d/1KQmABWWTfyJ0fKrgs8w6fl79bK7boQ2P/view?usp=sharing";
//    console.log(imgFG);
//    var outputImage = new SimpleImage(200, 100);
//
//    for (var pixel of imgFG.values()) {
//        if (iamgepixel.getGreen() > pixel.getRed() && pixel.getGreen() > pixel.getBlue()) {
//            var x = pixel.getX();
//            var y = pixel.getY();
//            var newPixel = imgFG.getPixel(x, y);
//            newPixel.setRed(pixel.getRed());
//            newPixel.setBlue(pixel.getBlue());
//            newPixel.setGreen(0);
//            imgFG.setPixel(x, y, newPixel);
//        }
//        else {
//            outputImage.setPixel(pixel.getX(),
//                    pixel.getY(), pixel);
//        }
//    }
//    imgArr[i].setAttribute("id", "pic"+i);
//    outputImage.drawTo(document.getElementById("pic"+i));
//}