class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false
        }
        const map = new Map()
        for (let i = 0; i < s.length; i++){
            const char = s[i]
            if (map.has(char)){
                map.set(char,map.get(char) + 1) // j1 a1 r1
            }
            else {
                map.set(char, 1)
            }
        }
        for (let i = 0; i < t.length; i++){
            const char = t[i]
            if (!map.has(char)){
                return false
            }
            map.set(char, map.get(char)-1) 
            if (map.get(char) < 0){
                return false
            }
        }
        return true
    }
}
