var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')
var x = 0
var y = 0
var directionVertical = true
var directionHorizontal = true

// reference the site https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext

// http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html#arc-x-y-r-start-end-anticlockwise



function draw () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'rgba(255,0,0,0.33)'
  ctx.beginPath()
  ctx.arc(x, y, 50, 0, 2 * Math.PI, false)
  ctx.fill()
    if(x > canvas.width - 25){
        directionHorizontal = !directionHorizontal
    }
    if ( x < 0){
        directionHorizontal = !directionHorizontal
    }
    if(y > canvas.height - 25){
        directionVertical = !directionVertical
    }
    if(y < 0){
        directionVertical = !directionVertical
    }
    if(directionVertical){
        y += 5.5
    }else {
        y -=5.5
    }
    if(directionHorizontal){
        x += 5.5
    } else {
        x -=5.5
    }

  
//   y += 5.5
}
setInterval(draw, 10)
