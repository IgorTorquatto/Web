nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
m = 3
n = 3

var merge = function(nums1, m, nums2, n) {

   for(let i = 0; i < nums2.length; i++){
    nums1.push(nums2[i])
   }

   nums1.sort()

   let filtered = nums1.filter((value)=>{
    return value !==0
   })

   let length2 = filtered.length
   nums1.length = length2
   
   for (let i = 0; i < filtered.length; i++) {
    nums1[i] = filtered[i];
   }
   
};

merge(nums1,m,nums2,n)
console.log(nums1);
// espera [1,2,2,3,5,6]