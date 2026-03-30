class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for (let i =0; i <strs.length;i++){
            const value = strs[i]
            const sortedValue = value.split("").sort().join("")
            if (map.has(sortedValue)){
                map.get(sortedValue).push(value)
            }
            else{
                map.set(sortedValue, [value])
            }
        }
        return [...map.values()]
    }
}
