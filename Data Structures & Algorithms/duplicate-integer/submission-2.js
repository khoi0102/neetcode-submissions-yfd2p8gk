class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //nums = [1, 2, 3, 3]
    hasDuplicate(nums) {
       const seen = new Set()
       for (let i = 0; i <nums.length; i++){
        const val = nums[i]
        if (seen.has(val)){
            return true
        }
        seen.add(val)
       }
       return false 
}
}