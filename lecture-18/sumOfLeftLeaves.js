// https://leetcode.com/problems/sum-of-left-leaves/

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
 * @return {number}
 */
var sumOfLeftLeaves = function(root, location="") {
   
    if(!root){
        return 0;
    }
    
    if(!root.left && !root.right){
        return location == "left" ? root.val : 0;
    }
    
    return sumOfLeftLeaves(root.left, "left") + sumOfLeftLeaves(root.right, "right");
    
};