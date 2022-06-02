let macetas = prompt('Bienvenidos a macetas Rococo, cuantas macetas va a llevar?')

if(macetas<=5){
    alert('Puedes comprar')
}else{
    alert('No tenemos stock para más de 5 macetas')
}

for (let i = 1; i <= macetas; i++){
    let maceta = prompt('Que maceta quiere llevar?')
    alert('Muchas gracias!')
}