


function changeBackground(){
    let obj = document.querySelectorAll('.query');
    let bags = [
        "url(./img/bag.jpg)",
        "url(./img/bagtwo.jpg)",
        "url(./img/schoolbag.jpg)",
        "url(./img/leather-bag.jpg)",
        "url(./img/leatherbag2.jpg)",
        "url(./img/pink-bag.jpg)"
    ];
    let shoes = [
        "url(./img/boot.jpg)",
        "url(./img/heelsfour.jpg)",
        "url(./img/heelsthree.jpg)",
        "url(./img/heelstwo.jpg)",
        "url(./img/nike.jpg)",
        "url(./img/heels.jpg)",
        "url(./img/jordans.jpg)",
        "url(./img/shoess.jpg)"
    ]
    let cloth = [
        "url(./img/thrift.jpg)",
        "url(./img/cloth.jpg)",
        "url(./img/shirts.jpg)",
        "url(./img/thrift2.jpg)",
        "url(./img/store.jpg)"
    ]

    let randombags = bags[Math.floor(Math.random() * bags.length)];
    let randomshoes = shoes[Math.floor(Math.random() * shoes.length)];
    let randomcloth = cloth[Math.floor(Math.random() * cloth.length)];


        obj[0].style.backgroundImage = randombags;
        obj[1].style.backgroundImage = randomshoes;
        obj[2].style.backgroundImage = randomcloth;
}

setInterval(changeBackground, 4000);

















// function changeImage(){
//     let obj = document.querySelector(".images")
//     let img = [
//         "url(./imgs/heels.jpg)",
//         "url(./imgs/cloth.jpg)",
//         "url(./imgs/jordans.jpg)"
//     ]

//     let randImgs = img[Math.floor(Math.random() * 3)];

//     obj.style.backgroundImage = randImgs;

// }
