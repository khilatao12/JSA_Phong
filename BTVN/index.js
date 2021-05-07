let ul = document.querySelector('ul');
fetch("https://6084decf9b2bed0017041593.mockapi.io/api/album")
    .then(response => response.json())
    .then(album => {
        let newAlbums = album.map(alb => `<li><div class="container"><div class="left"><img src="${alb.img}"></div><div class="right"><h1>${alb.title}</h1><p>${alb.time} <span>${alb.type}</span></p><p>${alb.sub}</p></div></div></li>`)
        newAlbums.join('')
        ul.innerHTML = newAlbums
    })