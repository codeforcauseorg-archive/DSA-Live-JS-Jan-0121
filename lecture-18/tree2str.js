// https://leetcode.com/problems/construct-string-from-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    
    let out = rectree2str(t);
    
    return out.join("");
    
    
};

var rectree2str = function(root, result=[]) {
    if(!root){
        return result;
    }
    
    result.push(root.val);
    
    result.push("(");
    rectree2str(root.left, result);
    result.push(")");
    
    result.push("(");
    rectree2str(root.right, result);
    result.push(")");
    
    // delete useless braces
    while(result[result.length-1] == ")" && result[result.length-2] == "("){
        result.pop();
        result.pop();
    }
    
    
    return result;
    
};