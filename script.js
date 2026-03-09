window.addEventListener('DOMContentLoaded', function() {
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const out  = document.getElementById('out')
hamburger.addEventListener('click', function() {
  menu.classList.toggle('show'); // クラスのon/off
});
out.addEventListener('click',function(){
    menu.classList.remove('show');//クラスを消す
});
});

window.addEventListener('DOMContentLoaded', function() {
  // .canvas内のimgをすべて取得
  const images = document.querySelectorAll('.canvas img');
  images.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add('show');
    }, 300 * index);  // 0.3秒ずつズラして順に表示
  });
  images.forEach(function(img) {
    img.addEventListener('mouseover', function() {
      img.classList.add('show2');
    });
    img.addEventListener('mouseout', function() {
      img.classList.remove('show2');
    });
  });
});



window.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.canvas-joy');  // ギャラリー親
  const images2 = document.querySelectorAll('.canvas-joy img');

  images2.forEach(function(img) {
    img.addEventListener('mouseover', function() {
      img.classList.add('show');
      gallery.classList.add('active-mode'); // 親にactive-modeを付ける
    });
    img.addEventListener('mouseout', function() {
      img.classList.remove('show');
      gallery.classList.remove('active-mode'); // 親からactive-modeを消す
    });
  });
});