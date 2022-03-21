
let index;
let gridSize = 16;
const canvas = document.querySelector('#canvas')

const btn = document.querySelector('#btn')

function createGrid(number)
{  
    for (index = 0; index < number*number; index++) {
        const pixel2 =  document.createElement('div')
        pixel2.classList.add('pixel')
        canvas.appendChild(pixel2);
        
        
        
    }
}
