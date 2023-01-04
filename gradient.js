const body=document.querySelector('body'),
gradientText=document.querySelector('.GradientColor'),
container=document.querySelector('.container'),
randoms=[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]


function getGradient(){
    let value='#'
    for(i=0; i<6;i++){
        let randomColor=Math.trunc(Math.random() * randoms.length )
        value +=randoms[randomColor];   
    }
    return value
}



function setGradient(){
    let deg=Math.trunc(Math.random() * 360 )
    let color1=getGradient()
    let color2=getGradient()
    let text=`linear-gradient(${deg}deg, ${color1},${color2})`
   
    body.style.background=text
    gradientText.textContent=text

   
 }
 setGradient()

 container.addEventListener('click', setGradient)


 
 
 




