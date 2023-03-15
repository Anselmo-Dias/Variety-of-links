function changeLayout() {
    const ElementBody = document.querySelector('body');
    const ElementButton = document.querySelector('button');
    const ElementLi = document.querySelector('.newColor');
    const ElementLi1 = document.querySelector('.newColor1');
    const ElementLi2 = document.querySelector('.newColor2');
    const ElementLi3 = document.querySelector('.newColor3');
    const ElementSpan = document.querySelector('span');
    const ElementFooter = document.querySelector('footer');
  
    ElementBody.classList.add('newStyle')
    ElementButton.classList.add('newStyle')
    ElementLi.classList.add('newStyle')
    ElementLi1.classList.add('newStyle')
    ElementLi2.classList.add('newStyle')
    ElementLi3.classList.add('newStyle')
    ElementSpan.classList.add('newStyle')
    ElementFooter.classList.add('newStyle')
  
     setTimeout( function() {
          ElementBody.classList.remove('newStyle')
          ElementButton.classList.remove('newStyle')
          ElementLi.classList.remove('newStyle')
          ElementLi1.classList.remove('newStyle')
          ElementLi2.classList.remove('newStyle')
          ElementLi3.classList.remove('newStyle')
          ElementSpan.classList.remove('newStyle')
          ElementFooter.classList.remove('newStyle')
      }, 5000)
  }