// https://leetcode.com/problems/range-sum-of-bst/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *     return this;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    if(root == null){
        return 0;
    }
    
    
    let left = (low < root.val) ? rangeSumBST(root.left, low, high) : 0;
    
    let right = (high > root.val) ? rangeSumBST(root.right, low, high) : 0;
    
    let current = ((root.val >= low) && (root.val <= high)) ? root.val : 0;
    
    return left + right + current;
   
    
};