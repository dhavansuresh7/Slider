const scrollBtn = document.querySelector("button")
const sPara = document.querySelector('#sPara')

scrollBtn.addEventListener('click', function () {
    // let rect = elem.getBoundingClientRect();
    // for (var key in rect) {
    //     if (typeof rect[key] !== 'function') {
    //         let para = document.createElement('p');
    //         para.textContent = `${key} : ${rect[key]}`;
    //         document.body.appendChild(sPara);
    //     }
    // }
    sparaXcords = sPara.getBoundingClientRect().left
    sparaYcords = sPara.getBoundingClientRect().top
  
    window.scrollTo({
        top: sparaYcords +window.pageYOffset,
        left:sparaXcords+window.pageXOffset,
        behavior:"smooth"
    })

    // sPara.scrollIntoView({behavior:"smooth"})
})

