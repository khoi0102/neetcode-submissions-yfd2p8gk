from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i, num in enumerate(nums):
            different = target - num
            if different in map:
                return [map[different], i]
            map[num] = i