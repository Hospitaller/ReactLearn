function parallaxMethod() {
    document.addEventListener('DOMContentLoaded', function() {
        let parallaxWraper = document.getElementById("mainWraper"); //mainWraper
        let mountainLeft = document.getElementById("mountain").offsetLeft;
        let mountainTop = document.getElementById("mountain").offsetTop;

        parallaxWraper.onmousemove = function(e){
          e = e || window.event;
          let x = e.clientX - parallaxWraper.offsetLeft;
          let y = e.clientY - parallaxWraper.offsetTop;
          let xAxis = (window.innerWidth / 2 - e.pageX) / 60;
          let yAxis = (window.innerHeight / 2 - e.pageY) / 60;
          let card = document.querySelector('.formWraper');
          parallaxMove(mountainLeft, mountainTop, x, y, 10);
          card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
        
        function parallaxMove(left, top, x, y, speed ) {
          let obj = document.getElementById("mountain");  
          let parentObj = document.getElementById("mountain");
          let containerWidth = parseInt(parentObj.offsetWidth);
          let containerHeight = parseInt(parentObj.offsetHeight);
          obj.style.left = left -150- ( ( ( x - ( parseInt( obj.offsetWidth )  + left ) ) / containerWidth ) * (speed+50)) + 'px';
          obj.style.top = top + 260 - (((y - (parseInt(obj.offsetHeight) + top)) / containerHeight) * speed) + 'px';
      }
        }, false);
}

export default parallaxMethod;