class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        map = {}
        for char in s: 
            map[char] = map.get(char,0) + 1 # r2 a2 c2 e1
        for char in t:
            if char not in map:
                return False
            map[char] = map.get(char,0) - 1
            if map.get(char,0) < 0:
                return False
        return True
