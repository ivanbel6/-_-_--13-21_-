  const dragAndDrop = () =>{
      const single_card = document.querySelector('.wrapper');
      const cards = document.querySelectorAll('.wrapper');
      
      const dragOver = function(evt){
         evt.preventDefault();
     }
      const dragEnter = function(){
         // console.log('Enter');
          this.classList.add('hovered')
      }
       const dragLeave = function(){
          console.log('leve');
            this.classList.remove('hovered')
      }
       const dragDrop = function(){
          console.log('drop');
           let ours =this.getElementsByClassName(".num");
           console.log(this.childNodes.forEach((child)=>{
               if (child.childNodes.length > 0) {
                   console.log(child.childNodes[1].innerText=Number(child.childNodes[1].innerText)+250);
               }
                
               
           }));
      }

      cards.forEach((card) => {
          card.addEventListener('dragover',dragOver);
          card.addEventListener('dragenter',dragEnter);
          card.addEventListener('dragleave',dragLeave);
          card.addEventListener('drop',dragDrop);
          
      });
      
  };
  dragAndDrop();