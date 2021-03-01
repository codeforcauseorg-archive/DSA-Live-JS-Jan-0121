// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
    
//     let new_head = null;

//     while(head){
//         let node = head;
//         let temp = head.next;
//         node.next = new_head;
//         new_head = node;
        
//         head = temp;
//     }
    
//     return new_head;
    
    
// };


var reverseList = function(head) {
    
    let prev = null;
    let present = head;

    while(present){
        let next = present.next;
        
        present.next = prev;
        prev = present;
        present = next;
    }
    
    return prev;
};