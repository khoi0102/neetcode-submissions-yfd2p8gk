class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()
        for (let i = 0; i < nums.length; i++){
            const value = nums[i]
            if (seen.has(value)){
                return true
            }
            else{
                seen.add(value)
            }
        }
        return false
    }
}
