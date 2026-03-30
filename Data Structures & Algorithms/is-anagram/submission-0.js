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
                map.set(char, map.get(char)+1)
            }
            else{
            map.set(char, 1) // r => 2 a => 2 c=> 2 e=> 1
            }
        }
        for (let i = 0; i <t.length; i++){
            const char = t[i]
            if (!map.has(char)){
                   return false
            }
             map.set(char, map.get(char) - 1) // c => 0 a=>0 r => 0  e => 0
            if (map.get(char) < 0){
                return false
            }
        }
        return true
    }
}
