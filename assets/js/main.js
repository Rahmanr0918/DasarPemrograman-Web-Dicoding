var parent = document.querySelectorAll(".parent");

parent.forEach(function(parent_item) {
  parent_item.addEventListener("click", function(){
   
    parent.forEach(function(parent_item){
      parent_item.classList.remove("active");
    })
    parent_item.classList.add("active");
  })
})

function menuToggle() {
  const toggleMenu = document.querySelector('.dd_menu');
  toggleMenu.classList.toggle('active')
}