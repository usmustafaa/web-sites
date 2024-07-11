  
     const buttons = document.querySelectorAll('.colorButton');
     let activeButton = null;

    
     buttons.forEach(button => {
         button.addEventListener('click', () => {
            
             if (activeButton) {
                 activeButton.classList.remove('border-2', 'border-black');
                 activeButton.classList.add('border', 'border-gray-400');
             }

           
             button.classList.remove('border', 'border-gray-400');
             button.classList.add('border-2', 'border-black');

            
          activeButton = button   
         });
     });