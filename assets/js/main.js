/*=============== SHOW MENU ===============*/
const headerToggle = document.getElementById('header-toggle'),
      main = document.getElementById('main'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const main = document.getElementById('main')
    // When we click on each nav__link, we remove the show-menu class
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -158,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CAROUSEL FUNCTION ===============*/
let slides = document.getElementsByClassName("myCarousel")
let slideIndex = 0
let auxContainer = document.querySelector('.fav_images').innerHTML

// Call first slide
showSlides()

function setNewSlide() {
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none"

  if (slideIndex > slides.length) slideIndex = 1
  if (slideIndex < 1) slideIndex = slides.length

  slides[slideIndex - 1].style.display = "block"
}

// Next/previous controls
function plusSlides(action) {
  action == ">" ? slideIndex++ : slideIndex--
  setNewSlide()
}

function showSlides() {
  slideIndex++
  setNewSlide()
}

window.addEventListener("load", () => setInterval(showSlides, 5000))

// Fav image function
const toggleFavourite = (event) => { 
  if (event.target){
    const clickTarget = event.target;
    clickTarget.classList.toggle('fav')
  }
  getFavs()
}

//Example use, get all favs and attach the text as a new element
const getFavs = () => {
  const fav_images = document.querySelectorAll('.fav')
  const favContainer = document.querySelector('.fav_images')

  favContainer.innerHTML = ""

  if (fav_images.length < 1) {
    favContainer.innerHTML = auxContainer
  }

  for(let fav of fav_images){
    let newFav = document.createElement('img')

    newFav.setAttribute('src', fav.getAttribute('src'))
    newFav.setAttribute('class', 'fav-img')
    favContainer.appendChild(newFav)
  }
}

/*=============== TABLE FUNCTION ===============*/
function addRow(flTableId) {
  let table = document.getElementById(flTableId)
  let row = table.getElementsByTagName('tr')
  let body = document.querySelector("#fl-table_body")

  row = row[row.length-1].outerHTML
  body.innerHTML = body.innerHTML + row
}

function deleteRow(flTableId) { 
  let table = document.getElementById(flTableId)
  let row = table.getElementsByTagName('tr')

  if (row.length == '2') {
    return null
  }

  if(row.length != '1'){
    row[row.length - 1].outerHTML=''
  }
}