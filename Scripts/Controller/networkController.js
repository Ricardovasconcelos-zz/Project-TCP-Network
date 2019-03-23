class networkController{

     constructor(){
          
          this.initalize();
          
     }

     initalize(){

          let mensage = [];

          let input = document.querySelector('#mensageUser')

          let button = document.querySelector('#button');
          
          button.addEventListener('click', e=>{
               let element = document.querySelector('#mensage')
               element.value = element.value + (input.value)
               mensage = input.value.split('') // value
               console.log('mensage initial',mensage)
               
               this.shuffle(mensage)
          },false)
                    
     }


     
     shuffle(value){
          let mensageInital = JSON.parse(JSON.stringify(value));
          for (var j, x, i = value.length; i; j = Math.floor(Math.random() * i), x = value[--i], value[i] = value[j], value[j] = x);
          let element = document.querySelector('#mensageShuffle')
          element.value = value
          console.log('shuffle',value)
          this.sort(value,mensageInital)
          
     }


     sort(value,value2){
          let mensageInital = value2
          let mensageShuffled = value
          let mensageFinal = []

          console.log('array mensage initial',mensageInital)
          console.log('array mensage shuffled',mensageShuffled)
          let test = false
          while (test == false){
               let auxando = 0
          for(let i = 0; i <= mensageInital.length-1; i++){
                        
               let auxTest = mensageInital.length
               
               if(mensageInital[i] != mensageShuffled[i]){
                    let aux = mensageInital[i]
                    let aux3 = mensageShuffled.indexOf(aux)
                    //console.log('letra correta na posição:',mensageShuffled.indexOf(aux))
                    let aux2 = mensageShuffled[i]
                    mensageShuffled[i] = mensageShuffled[aux3]
                    mensageShuffled[aux3] = aux2
                    
                    console.log('Correct Position:',mensageShuffled.indexOf(aux))
                    console.log('Replace',mensageShuffled[i])
                    console.log('For',mensageShuffled[aux3])
                    mensageFinal = mensageShuffled.join('')
                    let element = document.querySelector('#mensageSort')
                    element.value = (mensageFinal)
                    console.log('array final ',mensageFinal)
                    
                    
               }else if (mensageInital[i] == mensageShuffled[i]){
                    auxando++
                    if(auxTest == auxando){
                         test = true
                    }
               }
          }
          auxando = 0
     }

     
}

    
     
     

}    