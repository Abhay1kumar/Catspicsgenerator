let mybtn = document.querySelector('.mybtn');

mybtn.addEventListener('click', getCatPics);

async function getCatPics() {

    // generate pic only one 
    let showpic = document.querySelector('.ImgDiv')
    showpic.innerHTML = '';

    try {
        let data = await fetch("https://api.thecatapi.com/v1/images/search")
        let response = await data.json()
        // console.log(response[0].url)

        showpic.innerHTML = `<img src="${response[0].url}" width="300" height="280" alt="image"/>`


    } catch (error) {
        console.log(error);
    }
}

