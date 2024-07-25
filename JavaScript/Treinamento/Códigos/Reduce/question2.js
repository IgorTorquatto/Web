const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const newObject = words.reduce((accumulator, currentValue)=>{
   
   if(accumulator[currentValue]){
         accumulator[currentValue] +=1
   }else{
        accumulator[currentValue] = 1
   }

   return accumulator
},{})

console.log(newObject);

