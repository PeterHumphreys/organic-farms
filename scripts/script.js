//Set the current year in copyright text
document.querySelector("#copyright #current-year").innerHTML = new Date().getUTCFullYear();

//Set navbar and hero colors based on scroll position
const nav = document.querySelector("nav.navbar");
const hero = document.querySelector("#hero");
const handleScroll = () =>
{
  //Navbar
  if (window.innerWidth > 992)
  {
    if (window.scrollY > 50)
    {
      nav.classList.add("nav-scrolled")
    }
    else
    {
      nav.classList.remove("nav-scrolled")
    }
  }

  //Hero
  if (window.scrollY > 100)
  {
    hero.classList.add("hero-scrolled")
  }
  else 
  {
    hero.classList.remove("hero-scrolled")
  }
}


//Show/hide search menu
const searchBtn = document.querySelector("#search-btn");
const searchMenu = document.querySelector("#search-menu");
const hideSearch = document.querySelector("#close-search");
const navLinks = document.querySelector(".navbar-collapse");

//show search menu
searchBtn.addEventListener("click", (e) => 
{
  e.preventDefault();
  //if nav is not collapsed, close it
  if (navLinks.classList.contains("show"))
  {
    navLinks.classList.remove("show")
  }
   searchMenu.classList.add("visible");
});

//hide search menu
hideSearch.addEventListener("click", (e) => 
{
  e.preventDefault();
  searchMenu.classList.remove("visible");
})


//Register window event listeners
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

