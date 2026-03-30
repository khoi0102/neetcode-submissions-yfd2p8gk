class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    //nums=[3,4,5,6] target = 7

    twoSum(nums, target) {
        const map = new Map()
        for (let i = 0; i <nums.length; i++){
            const value = nums[i]
            const different = target - value
            if (map.has(different)){
                return [i,map.get(different)]
            }
          map.set(value,i)
        }
    }
}
