class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
     const map = new Map
     for (let i =0; i < nums.length; i++){
        const value = nums[i]
        if (map.has(value)){
            map.set(value, map.get(value)+1) 
        }
        else{
            map.set(value, 1)
        }
     }  
        const unsortedMap = [...map.entries()] // remember that map doesnt output array
        const sortedMap = unsortedMap.sort((a,b)=>(b[1]-a[1])) // [[3,3],[2,2],[1,1]]
        return sortedMap.slice(0,k).map(x=>x[0])
    }
}
