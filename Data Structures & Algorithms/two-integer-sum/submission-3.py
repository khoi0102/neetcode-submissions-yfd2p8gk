from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for index,num in enumerate(nums):
            different = target - num
            if different in map:
                return [map[different], index]
            else: 
                map[num] = map.get(num, index)
