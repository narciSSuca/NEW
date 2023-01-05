
let slider = document.getElementById("courses__slider");
let sliderHandler = document.getElementById("slider-handler");
let adaptiveNav = document.getElementById("adaptive-nav");
let burger = document.getElementById("burger");
let adaptive_nav__inner = document.getElementById("adaptive-nav__inner");

let headerState = false;

function headerHandler(e) {
    console.log("qwe")
    headerState = !headerState;
    if(headerState) {
        // adaptiveNav.style.visibility = "visible";
        adaptiveNav.classList.add("visibleMenu");
    } else  adaptiveNav.classList.remove("visibleMenu");
}

function stopPropagat(e) {
    e.stopPropagation();
}


burger.addEventListener("click", headerHandler);
adaptiveNav.addEventListener("click", (e) => headerHandler(e));

const courses = [
    {
        id: 1,
        name: "Введение Minecraft Education Edition",
        descr: "Изучение основ программирования на легендарной платформе Майкрософт.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"

    },
    {
        id: 2,
        name: "Разработка сайтов",
        descr: "Создание  собственного сайта с помощью HTML и CSS.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
    {
        id: 3,
        name: "Основы Питона в Майнкрафте",
        descr: "Изучение питона через популярную игру.",
        age: "12 - 16 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
   
    {
        id: 4,
        name: "Программирование игр на Питоне",
        descr: "Разработка игр на простом и популярном языке программирования.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"

    },
    {
        id: 5,
        name: "Программирование для дошкольников",
        descr: "Первые шаги в мире алгоритмов и математике.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"

    },
    {
        id: 6,
        name: "Разработка 3Д игр на популярном движке",
        descr: "Изучение Юнити 3Д в разработке компьютерных игр.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"

    },
    {
        id: 7,
        name: "Математика в Майнкрафт",
        descr: "Изучение основ математики и логики на популярной платформе.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
    {
        id: 8,
        name: "Работа в  Фотошопе с использованием графического планшета",
        descr: "Нужно докинуть описание",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
    {
        id: 9,
        name: "Создание сайтов на Тильде",
        descr: "Разработка сайтов без опыта на популярном конструкторе.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
    {
        id: 10,
        name: "Основы программирования в Роблокс",
        descr: "Изучение основ программирование на  языке Lua.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
    {
        id: 11,
        name: "Программирование в Скрейтч",
        descr: "Изучение основ блочного программирования.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
    {
        id: 12,
        name: "Создание игр в Анреал Енжайн",
        descr: "Создание игр на ведущем игровом движке.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
    {
        id: 13,
        name: "Создание чат-ботов на Питоне",
        descr: "Программирование ботов на востребованном языке.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
    {
        id: 14,
        name: "Создание модов в Майнкрафт",
        descr: "Основы 3д моделирования и знакомство с языком Джава.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
    {
        id: 15,
        name: "Изи офис",
        descr: "Базовый и продвинутый курсы по майкрософт офис.",
        age: "8 - 12 лет",
        duration: "от 4 месяцев",
        img: "https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
    },
];




let choosePage=0;


let res = ``;

function render() {
   courses.forEach((i) => {
    
        slider.innerHTML +=
            `<div class="course">
        
            <div class="course__inner">
    
            <div class="course__preview">
            
                <img class="course__img" src=${i.img}>
            
            </div>
    
            <div class="course__description">
                <h3 class="course__description__header">${i.name}</h3>
                <p class="course__description__text">${i.descr}</p>
    
                <div class="course__description__age-duration">
                
                    <div class="description__age-box">${i.age}</div>
    
                    <div class="description__duration-box">${i.duration}</div>
                
                </div>
    
            </div>
    
           
            </div>
            </div>`
    })


     // <button class="course__sign-up">Записаться</button>
}




let page = 0



function incr(noClean) {
    const slideAll = document.querySelectorAll(".course")
    let width = slideAll[0].offsetWidth // 1 слайд


    page++


    if (page >= courses.length) {
        page = 0
        for (i = 0; i < slideAll.length; i++) {
            slideAll[i].style.transform = `translateX(0px)`
        }

    }
    else {
        for (i = 0; i < slideAll.length; i++) {
            slideAll[i].style.transform += `translateX(-${width+100}px)`
        }

    }

    if (!noClean) {
        clearInterval(interval)
    }


}
function decr() {
    const slideAll = document.querySelectorAll(".course")
    let width = slideAll[0].offsetWidth // 1 слайд




    if (page <= 0) {
    
    }
    else {
        page--
        for (i = 0; i < slideAll.length; i++) {
            slideAll[i].style.transform += `translateX(${width+100}px)`;
        }
    }
    clearInterval(interval)



}



render();





let interval = setInterval(() => {
    incr(true)
}, 4500)


//ACCORDEON

const quetions = document.querySelectorAll(".accordeon__el");
const answer = document.querySelectorAll(".answer-el");
const plus = document.querySelectorAll(".plus")

quetions.forEach(el => {
    el.onclick = () =>{
        if (el.getAttribute("active")) {
            let attr = el.getAttribute("answer");
            el.removeAttribute("active");
            answer[attr].style.transform = "translateX(-100%)";
            answer[attr].style.visibility = "hidden";
            answer[attr].style.transition = "1s";
            quetions[attr].style.transition = "0.5s";
            quetions[attr].style.fontSize = "20px";
            plus[attr].style.transform = "rotate(0deg)";
        }
        else {
            let attr = el.getAttribute("answer")
            el.setAttribute("active", true)
            answer[attr].style.transform = "translateX(0%)";
            answer[attr].style.visibility = "visible";
            answer[attr].style.transition = "1s";
            quetions[attr].style.transition = "0.5s";
            quetions[attr].style.fontSize = "10px";
            plus[attr].style.transform = "rotate(45deg)";
        }
    }
})




// Вадидация 




//MODAL

const blocked = document.querySelector("#blocked")
const modal = document.querySelector("#window")
const close = document.querySelector("#close_modal")


setTimeout(() => {
    blocked.style.opacity = 1;
    blocked.style.zIndex = 100;
    modal.style.transform = "translateX(0%)"
}, 5060)





function closed() {
    modal.style.transition = "1s ease-in-out"
    blocked.style.transition = "1s"
    blocked.style.opacity = 0;
    blocked.style.zIndex = -100;
    modal.style.transform = "translateX(-300%)";
}



modal.onclick = (e) => stopPropagat(e)



close.onclick = closed

