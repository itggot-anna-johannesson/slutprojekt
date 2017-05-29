function info1(){
  var element = document.querySelector('.article_two');
  element.classList.add('hide')
  var element2 = document.querySelector('.article_three');
  element2.classList.add('hide')
  var element3 = document.querySelector('.information');
  element3.classList.remove('hide')
}

function info2(){
  var element = document.querySelector('.article_one');
  element.classList.add('hide')
  var element2 = document.querySelector('.article_three');
  element2.classList.add('hide')
  var element3 = document.querySelector('.information2');
  element3.classList.remove('hide')
}

function info3(){
  var element = document.querySelector('.article_one');
  element.classList.add('hide')
  var element2 = document.querySelector('.article_two');
  element2.classList.add('hide')
  var element3 = document.querySelector('.information3');
  element3.classList.remove('hide')
}

function home(){
  var element = document.querySelector('.article_one');
  var element2 = document.querySelector('.article_two');
  var element3 = document.querySelector('.article_three');

  element.classList.remove('hide')
  element2.classList.remove('hide')
  element3.classList.remove('hide')

  var element4 = document.querySelector('.information');
  var element5 = document.querySelector('.information2');
  var element6 = document.querySelector('.information3');

  element4.classList.add('hide')
  element5.classList.add('hide')
  element6.classList.add('hide')

}
