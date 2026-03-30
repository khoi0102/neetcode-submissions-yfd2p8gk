class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()
        for (let i = 0; i <nums.length;i++){
            const char = nums[i]
            if (seen.has(char)){
                return true
            }
            else{
                seen.add(char)
            }
        }
        return false
    }
}
