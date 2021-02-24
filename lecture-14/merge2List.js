// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let t_head = null;
    let t_tail = null;
    
    while(l1 && l2){
        if(l1.val < l2.val){
            [t_head, t_tail] = insertNode(l1, t_head, t_tail);
            l1 = l1.next;
        } else {
            [t_head, t_tail] = insertNode(l2, t_head, t_tail);
            l2 = l2.next;
        }
    }
    
    if(l1){
           [t_head, t_tail] = insertNode(l1, t_head, t_tail);
    }
    
    if(l2){
            [t_head, t_tail] = insertNode(l2, t_head, t_tail);
    }
    
    return t_head;
};

var insertNode = function(node, t_head, t_tail){
    if(t_head == null){
        t_head = node;
        t_tail = node;
    } else {
        t_tail.next = node;
        t_tail = node;
    }
    
    return [t_head, t_tail];
}