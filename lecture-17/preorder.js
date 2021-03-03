// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root, solution = []) {
    
    if(root == null){
        return solution;
    }
    
    solution.push(root.val);
    
    for(let node of root.children){
        preorder(node, solution);
    }
    
    return solution;
    
};