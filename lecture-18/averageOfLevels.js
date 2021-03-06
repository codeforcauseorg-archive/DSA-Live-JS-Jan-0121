// https://leetcode.com/problems/average-of-levels-in-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    
    let m = [root];
    let c = [];
    
    let result = [];
    
    while(m.length > 0){
        
        let total = 0;
        
        for(let node of m){
            
            total += node.val;
            
            if(node.left){
                c.push(node.left);
            }
            if(node.right){
                c.push(node.right);
            }
        }
        
        result.push(total/m.length);
        
        m = c;
        c = [];
    }
    
    return result;
    
};