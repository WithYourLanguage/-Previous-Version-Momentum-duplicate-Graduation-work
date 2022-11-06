const body = document.querySelector("body");
const IMG_NUMBER = 7;

/* 이미지를 가져오는 함수 */
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    // image에 class 지정하기 (css에서 작업하기 위한 용도) 
    image.classList.add('bgImage');
    body.prepend(image);
}
