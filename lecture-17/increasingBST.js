// https://leetcode.com/problems/increasing-order-search-tree/

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
 * @return {TreeNode}
 */

let temp_root = null;

var increasingBST = function(node) {
    
    let arr = sorted(node);
    
    for(let i=0; i< arr.length; i++){
        arr[i].right = (i< arr.length - 1) ? arr[i+1] : null;
        arr[i].left = null;
    }
    
    return arr[0];
    
};

let sorted = function(node, result=[]){

        if(node == null){
            return result;
        }

        sorted(node.left, result);
        result.push(node);
        sorted(node.right, result);

        return result;
}