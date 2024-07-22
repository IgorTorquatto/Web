/*
Create a counter function that returns an internal function that increments
 a counter and prints the current value of the counter.
Call the counter function several times and observe how the counter is maintained.
*/

function count(){
   let counter = 0

   return function(){
        counter++
        console.log(counter)
    }
}

const call1 = count()
const call2 = count()

call1() 
call1() 
call1() 

call2() 
call2() 
// cada contador mantém seu próprio estado independentemente do outro.