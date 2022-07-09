 let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.a .row .column img');

searchBox.oninput = () =>{
   images.forEach(hide => hide.style.display = 'none');
   let value = searchBox.value;
   images.forEach(filter =>{
      let title = filter.getAttribute('data-filter');
      if(value == title){
         filter.style.display = 'block';
      }
      if(searchBox.value == ''){
         filter.style.display = 'block';
      }
   });
};