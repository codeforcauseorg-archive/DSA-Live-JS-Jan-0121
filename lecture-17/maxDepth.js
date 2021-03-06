// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if(root == null){
        return 0;
    }
    
    if(root.children.length == 0){
        return 1;
    }
    
    let gens = root.children.map(node => maxDepth(node));
    
    return Math.max(...gens) + 1;
    
};