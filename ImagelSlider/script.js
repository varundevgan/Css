const container = document.getElementById('container')
const buttons = document.getElementById('buttons')
const images = document.getElementById('images')
const img = document.createElement('img')
images.appendChild(img)
let count = 0;

const buttonArray = ["images/img-1.jpg", "images/img-2.jpg", "images/img-3.jpg","images/img-4.jpg","images/img-5.jpg"]
img.src =buttonArray[count]

function rightImage(){
    container.scrollLeft += container.offsetWidth
    if(count == buttonArray.length - 1  ) return 
    count++
    img.src = buttonArray[count]
}

function leftImage(){
    container.scrollLeft -= container.offsetWidth
    if(count == 0) return
    count--
    img.src = buttonArray[count]
}

    buttonArray.forEach((button, index)=>{    
        const div = document.createElement('div')
        div.classList.add('buttonClass')
        div.onclick = function(){
            count = index
            img.src = buttonArray[count]
        }

        buttons.appendChild(div)
    })





