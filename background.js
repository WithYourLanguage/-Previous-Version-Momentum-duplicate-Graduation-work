const images = ['0.jpg','1.jpg','2.jpg',]
const backGround = document.querySelector("#backGround")
// const body = document.querySelector("body");



const chosenImage = images[Math.floor(Math.random() * images.length)]
console.log(chosenImage)
const bgImage = document.createElement('img')

bgImage.src = `${chosenImage}` // 애러시 bgImage.src = `img/${chosenImage}` 로 수정바람
console.log('test',bgImage)

if(chosenImage === '0.jpg') {
    console.log('0.jpg if문입니다.')

    document.body.appendChild(bgImage)
    bgImage.classList.add('bgImage');
    body.prepend(bgImage.id="zeroImg");
} else if(chosenImage === '1.jpg') {
    console.log('1.jpg if문입니다.')

    document.body.appendChild(bgImage)
    bgImage.classList.add('bgImage');
    body.prepend(bgImage.id="oneImg");
} else {
    console.log('2.jpg if문입니다.')

    document.body.appendChild(bgImage)
    bgImage.classList.add('bgImage');
    body.prepend(bgImage.id="teoImg");
}


document.body.appendChild(bgImage)
image.classList.add('bgImage');
body.prepend(bgImage.id="img");

image.classList.add('bgImage');


//document.body.appendChild(bgImage)

// bg부분에 div테그 이름이나 img태그 이름을 넣어(id or class) div태그 안쪽에 이미지를 넣어
// css 에서 이미지를 불러올 수 있도록 저장

// ___
