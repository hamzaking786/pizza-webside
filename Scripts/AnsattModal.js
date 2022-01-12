   //variables
   const modalWindow = document.querySelector('#modal');
   const showModalBtn = document.querySelector('#show-modal-btn');
   const cancelBtn = document.querySelector('#cancelBtn');
   const addEmployeeBtn = document.querySelector('#addEmplyee');
   const modalBackground = document.querySelector(".modal-background")
   
   //functions
   showModalBtn.addEventListener('click', function(){
       modalWindow.classList.add('is-active');
   });

   cancelBtn.addEventListener('click', function(){
       modalWindow.classList.remove('is-active');
   });

   addEmployeeBtn.addEventListener('click', function(){
       modalWindow.classList.remove('is-active');
   });
  
   modalBackground.addEventListener('click', function(){
       modalWindow.classList.remove('is-active');
   });

   function showModal(){
       modalWindow.classList.add('is-active');
   }