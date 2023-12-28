const oxfords = document.querySelector(".oxfords");
const oxfordImg = document.querySelectorAll(".oxfords-img");

const derbys = document.querySelector(".derbys");
const derbyImg = document.querySelectorAll(".derbys-img");

const loafers = document.querySelector(".loafers");
const loaferImg = document.querySelectorAll(".loafers-img");

const boots = document.querySelector(".boots");
const bootImg = document.querySelectorAll(".boots-img");

const sneakers = document.querySelector(".sneakers");
const sneakerImg = document.querySelectorAll(".sneakers-img");

const heels = document.querySelector(".heels");
const heelImg = document.querySelectorAll(".heels-img");

const flats = document.querySelector(".flats");
const flatImg = document.querySelectorAll(".flats-img");

const sandals = document.querySelector(".sandals");
const sandalImg = document.querySelectorAll(".sandals-img");


oxfords.addEventListener('mouseover', ()=>{
    oxfordImg.forEach((oxford)=>{
        oxford.classList.add('visible-oxfords');
    })
});

oxfords.addEventListener('mouseout', ()=>{
    oxfordImg.forEach((oxford)=>{
        oxford.classList.remove('visible-oxfords');
    })
});

derbys.addEventListener('mouseover', ()=>{
    derbyImg.forEach((derby)=>{
        derby.classList.add('visible-derbys');
    })
});

derbys.addEventListener('mouseout', ()=>{
    derbyImg.forEach((derby)=>{
        derby.classList.remove('visible-derbys');
    })
});

loafers.addEventListener('mouseover', ()=>{
    loaferImg.forEach((loafer)=>{
        loafer.classList.add('visible-loafers');
    })
});

loafers.addEventListener('mouseout', ()=>{
    loaferImg.forEach((loafer)=>{
        loafer.classList.remove('visible-loafers');
    })
});

boots.addEventListener('mouseover', ()=>{
    bootImg.forEach((boot)=>{
        boot.classList.add('visible-boots');
    })
});

boots.addEventListener('mouseout', ()=>{
    bootImg.forEach((boot)=>{
        boot.classList.remove('visible-boots');
    })
});


sneakers.addEventListener('mouseover', ()=>{
    sneakerImg.forEach((sneaker)=>{
        sneaker.classList.add('visible-sneakers');
    })
});

sneakers.addEventListener('mouseout', ()=>{
    sneakerImg.forEach((sneaker)=>{
        sneaker.classList.remove('visible-sneakers');
    })
});

heels.addEventListener('mouseover', ()=>{
    heelImg.forEach((heel)=>{
        heel.classList.add('visible-heels');
    })
});

heels.addEventListener('mouseout', ()=>{
    heelImg.forEach((heel)=>{
        heel.classList.remove('visible-heels');
    })
});

flats.addEventListener('mouseover', ()=>{
    flatImg.forEach((flat)=>{
        flat.classList.add('visible-flats');
    })
});

flats.addEventListener('mouseout', ()=>{
    flatImg.forEach((flat)=>{
        flat.classList.remove('visible-flats');
    })
});

sandals.addEventListener('mouseover', ()=>{
    sandalImg.forEach((sandal)=>{
        sandal.classList.add('visible-sandals');
    })
});

sandals.addEventListener('mouseout', ()=>{
    sandalImg.forEach((sandal)=>{
        sandal.classList.remove('visible-sandals');
    })
});
