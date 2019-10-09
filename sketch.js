var blink; 
var web;
var download1, download2, download3;
var crash;
var pop1, pop2, pop3;
var choose;
var one, two, three;

function preload(){
  blink = createImg("https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif")
  web = createImg("https://lh3.googleusercontent.com/QZgbg64L0OnMmMwYagx0RpjqFY_vwMawPRd7126XHz48nDWrLgeIf2ocu9TVDkA89WSoh0JTng=w640-h400-e365")
  download1 = createImg("https://static.vecteezy.com/system/resources/previews/000/562/188/non_2x/vector-download-download-button-illustration-data.jpg")
  download2 = createImg("https://thumbs.dreamstime.com/t/download-button-2468711.jpg")
  download3 = createImg("https://static.vecteezy.com/system/resources/previews/000/562/177/non_2x/download-download-button-illustration-data-vector.jpg")
  crash = createImg("https://3or3af2wx78n8r49a22mbxaz-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/BSOD-750x628.jpg")
  pop1 = createImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmS2tUlFerTYyQViZ1vJ38MYJnJe40tIyyKu5G0wTSPjOpzqaHdQ")
  pop2 = createImg("https://i.imgur.com/4I5cZ06.gif")
  pop3 = createImg("https://66.media.tumblr.com/tumblr_lzqlyqBAKI1r82j5vo1_400.gif")
  choose = createImg("https://sunshine-parenting.com/wp-content/uploads/2015/10/Choose-Wisely.jpg")
  one = createImg("https://images-na.ssl-images-amazon.com/images/I/41ZYLP76XdL._SX425_.jpg")
  two = createImg("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADbCAMAAABOUB36AAAAgVBMVEX///8FBwgAAAA1NjYpKysAAwRfYGDr6+vj4+P5+fnd3d38/Pzn5+egoKBFRkZeX1+TlJTDxMSZmZoWFxiJioqwsLDKysqAgYFYWVkjJCXz8/NpamqoqKjR0tJAQUFxcnK8vb1MTU0OEBFub29SUlONjY07OzwwMTIeHyAmJyh7e3z6n6qHAAAFlklEQVR4nO2d61YqMQyFncqADAgMiCKCjh4uyvs/4AH1LC+nO9N2ig0x31+1K9t22jRJ27MzRVEURVEURVEURVEURVEURVEURVEUZ+YX5eLy5q69GgwGw/ZutJgW815qo6LSvR4Pt8bC7WxUdlNbF4di/PgqKc/+I3/9wWBUpLaxKZ3xxK7wE/tfmIw7qS1twHK4l0BK/FA6W6a2NpDlqq4fv47fQZna4gA6bbeO/Nyljyf3kV76inwTujupJaZz7z5cvwmtUtvuThnSlf90PqS23pWgAfshtNVPLcCJq8AB+9Gh16klOHDTpCvfdS5Si6ilucrDIjpKLaOGywgq95ir1EJIyobf5Wno7DSaY7/qvEwtBnMeTeVe5zS1GsRVRJX7+ZbpnqWI9WG+68zmqRVZua/tzK8hktrfnqVWZGNaY/de2FN7tCiXRVGUi1E7r1XK0k0gjd5LGlbfnNX+dEUrzQ2/2MmYMHjfcWPrh9ZZkxEGM/xpFXX0iH4xZg23y/MrqkMNt8DJglC5uaD+siCmLrP9KfsdeYG21m+Ub/DAZRZNKLFKB+90CgeuaR3fdg9m0M4blz+/xjo57bE7aNiZO7cGrmED7eNa7gXaZppb10wQdC4MI5cPTZYe7jcKOzByhfpgyLl9mO+AXZx5PJrZvoBF0xif5CXY4OR8Ri2YZz0jVw+gleo4RnvTQ/3gl4kG07XXyD8mS9ANO8927qztmPujGO3PCMj0zePZ/12Gy8c5tJv37N1QZm+I9Px/DvBNrb0b2tllVvFNDuACjFn/yFxll8kjZAuMm/hX/BT2lvyHxTGwh2eD4nL2lhzd/yPTjjfUrPsxJoHMrV1myEbR2pTZRDc5gC6YaENWO+tOh4fMPlg1Q2pfrCswD5mlrbbShO2fGA/acta2MAvKqz9ZZXJxaqMRb2niDHAPTqYiyhHgT41T2xUZ4LrzCXrFwToD8YpIRwBFIfhlORsBxmyQo8GXrj2RIm09QdFeHrvqaIAUKdf6oEBAssjksj7NCZDJI3YQC5g7rFJbFhOwOc9yk9qyqPxBnSnKbwcOkLR51h42O2T1U1sWkzXsTLbFwwHASlzzJGnRbMHOlOToweJx8yTk5PUBOMuKiht0c9iZL6lti4g90/Qqk1s1bQNwIa5ZpbYtHvhUR25O4yCnC71n3Jncj/15AOtw+dV/NwCfg8wF+exLosid88lGP+b2KLu0IftInMw4uQstIMQxbEEuO3F0TpBjcIEPTXE9uRlAF/sFknxZ7BdIWktg8IfVUYWm2IsM3lRyKYZuDjH9CHLyutj7kVQ2siJUysl/Ud6PHFeW8n7kBAyIzZegCqA5daJeTlgE5hGYHbxtBg7KZuY8tXHRoHy8XEzNWoWnH0HeT0FNP2KyQqAm702l71lPvmx+RVQElcQcVLbEpGuJ+4QE+XjURYNyJlliIy2oKIbcSMuJcFFpBDmerL1W/03lRkyBE3XPl5w4Hrzy6KBSTOarT02yYtIIvdtfEa2kkiVyKp+JO2sFJUuoaKXzdWbsoUpF5PjrxJXZuZyYLCzUzyQFRchoJZcLuppDRSvZ3a8bDJWRPhfjrxPRSkH++hycU8wOk6wYf52MVlapjYsGFa2Uk94jnkUR5K8T0UozSG1cNKiqw4Br6ZhCVB0aLhc9RmDwK/x1quxHjr9ORSvl+OvURlpOoRr19pTZtoJ4ueVWfNEjyn6yzH4hnwPcZBLRynDYPXJDbKQFyax7lEmGTKq2Uo7MiA/8cZZJbKQFybRfsS9NJvWMmByZRLRSkEyqtlKOTCJaKUlm/ZOUEmSCZ2mEyYz0iDNzmfjdO0kyqdpKOTK7RNmPIJlEbaUgmbvgwMcpBUmqyfkPsE0tU0xuXVEURVEURVEURVEURVEURVEURVEU/vwFCZdFivzbWhUAAAAASUVORK5CYII=")
  three = createImg("data:image/png;base64,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")
}

function setup() {
  createCanvas(1000, 500)
  background(0, 50, 150)
  blink.position(0, 0)
  blink.size(427, 500)
  blink.style("z-index","1")
  
  web.position(320, 0)
  web.size(780, 500)
  web.style("z-index", "2")

  download3.position(350, 300)
  download3.size(250, 125)
  download3.style("z-index","3")

  download1.position(580, 300)
  download1.size(250, 125)
  download1.style("z-index","4")

  download2.position(830, 275)
  download2.size(220, 190)
  download2.style("z-index","5")

  one.position(435, 267)
  one.size(75, 50)
  one.style("z-index","6")

  two.position(670, 260)
  two.size(75, 65)
  two.style("z-index","6")

  three.position(910, 260)
  three.size(50, 65)
  three.style("z-index","6")

  choose.position(450, 110)
  choose.size(480, 180)
  choose.style("z-index","6")
}

function draw() {
  if(keyIsPressed){
    if (key == "1"){
    pop1.position(random(5), 400 +random(2))
    pop1.size(300, 200)
    pop1.style("z-index","7")

    pop2.position(350 + random(2), 150 + random(2))
    pop2.size(400, 150)
    pop2.style("z-index","7")

    pop3.position(1000 + random(2), 300 + random(2))
    pop3.size(200, 150)
    pop3.style("z-index","7")
    }

    if (key == "2"){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }

    if (key == "3"){
      crash.position(0, 0)
      crash.size(1100, 500)
      crash.style("z-index","8") 
    }
  }
}
