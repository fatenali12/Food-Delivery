// var orderBtn = document.querySelector(".orderbtn");

//     var orderImg = document.querySelector("#orderimg");  
    
//     var header = document.querySelector(".header");

//    orderBtn.addEventListener('click', function() {


//     orderImg.src= "Images/08.jpg";


//    });


localStorage.getItem('imgsrc',setAttribute('src'))

// Function Navigate

function navigate() {

  localStorage.setItem('imgsrc',this.getAttribute('data.image'));
  window.location.href = 'ordering.html';
}


 

  
  