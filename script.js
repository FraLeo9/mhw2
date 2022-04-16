/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
function changeToChecked (event) {          
    const container = event.currentTarget;
    clearSection(container);   
    container.classList.remove('iniziale');
    container.classList.add('checked');    
   
    let checkbox = container.querySelector('.checkbox');
    checkbox.src = 'images/checked.png';
    
    
     indexToRemove = unselectedBox.indexOf(container);
     unselectedBox.splice(indexToRemove, 1)
  
     uncheck(container);
     
     locked(container);
     
     unselectedBox.splice(indexToRemove, 0, container);
  }
    
    function clearSection(container){
     const questionNumber = container.dataset.questionId;
     for( let container of unselectedBox){
         if(questionNumber===container.dataset.questionId){
          container.classList.remove('unchecked');
          container.classList.remove('checked'); 
          container.classList.add('iniziale');
          
          let checkbox = container.querySelector('.checkbox');
          checkbox.src = 'images/unchecked.png';
         }
     }
    }
    function uncheck(container){
        const questionNumber = container.dataset.questionId;
        
        for (let unselectedAnswer of unselectedBox){
            if (questionNumber === unselectedAnswer.dataset.questionId){
             unselectedAnswer.classList.remove('iniziale');                   
             unselectedAnswer.classList.add('unchecked');
             console.log(unselectedAnswer);   
            }
        }
    }
    
    function locked(container){
        const questionId = container.dataset.questionId;
        if(questionId === 'one'){
            if(answerOne.length === 0){
                answerOne.push(container);
            }
            else 
            {
              answerOne.pop();
              answerOne.push(container);
            }
        }
        else if(questionId==='two'){
            if(answerTwo.lenght===0){
                answerTwo.push(container);
            }
            else{
                answerTwo.pop();
                answerTwo.push(container);
            }
        }
        else if(questionId === 'three'){
             if(answerThree.length===0){
                 answerThree.push(container);
          }
          else
          {
              answerThree.pop();
              answerThree.push(container);
          }
        }
        
        numberOfAnswers = answerOne.length + answerTwo.length + answerThree.length;
        
        if(numberOfAnswers === 3)
      {
          const answers = document.querySelectorAll('.choice-grid div');
          for (let answerElement of answers)
          {
             answerElement.removeEventListener('click', changeToChecked);
          }
          
          totalAnswers.push(answerOne[0].dataset.choiceId);
          totalAnswers.push(answerTwo[0].dataset.choiceId);
          totalAnswers.push(answerThree[0].dataset.choiceId);
          
           result(totalAnswers);
      }
  
  }
  
      function result (totalAnswers)
  {
      let finalResult;
      console.log(totalAnswers);
      for(let answer1 of totalAnswers){
          for(let answer2 of totalAnswers){
              if(answer1===answer2)
              {
                  finalResult = answer1;            
              }
              else
              {
                  finalResult = totalAnswers[2];
              }
          }
      }
      
      console.log(RESULTS_MAP[finalResult]);
      let risultato = document.querySelector('.risultato');
       risultato.classList.remove('risultatoNascosto');
       risultato.classList.add('risultatoVisibile');
       console.log(RESULTS_MAP[finalResult].title);
       console.log(RESULTS_MAP[finalResult].contents);
       document.getElementById('title').innerHTML = RESULTS_MAP[finalResult].title;
       document.getElementById('contents').innerHTML = RESULTS_MAP[finalResult].contents;
  }
  
  function ricomincia(event){
      const reset = event.currentTarget;
      unselectedBox = [];
      answerOne = [];
      answerTwo = [];
      answerThree = [];
      totalAnswers = [];
      let numberOfAnswers = 0;
      
      const answers = document.querySelectorAll('.choice-grid div');
      for (let container of answers)
      {
          container.classList.remove('unchecked');
          container.classList.remove('checked'); 
          container.classList.add('iniziale');
  
          let checkbox = container.querySelector('.checkbox');
          checkbox.src = 'images/unchecked.png';
  
          let risultato = document.querySelector('.risultato');
          risultato.classList.add('risultatoNascosto');
          risultato.classList.remove('risultatoVisibile');
  
          container.addEventListener('click', changeToChecked);
          unselectedBox.push(container);
      }
  }
  
  let unselectedBox = [];
  let answerOne = [];
  let answerTwo = [];
  let answerThree = [];
  let totalAnswers = [];
  let numberOfAnswers = 0;
  
  let risultato = document.querySelector('.risultato');
  risultato.classList.add('risultatoNascosto');
  
  const answers = document.querySelectorAll('.choice-grid div');
  
  for (let container of answers)
  {
  container.addEventListener('click', changeToChecked);
  container.classList.add('iniziale');
  unselectedBox.push(container);   
  }
  
  const reset = document.querySelector('.risultato button');
  
  reset.addEventListener('click', ricomincia);
      
  