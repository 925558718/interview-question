import { mapActions } from "vuex";

function Node(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    };
var cloneGraph = function(node) {
    if(!node) return null;
    let q=[node];
    let clone=new Node(node.val);
    let m=new Map();
    m.set(node,clone);
    while(q.length!=0){
        let t=q.pop();
        for(let i=0;i<t.neighbors.length;i++){
            let neighbor=t.neighbors[i];
            if(!m.has(neighbor)){
                m.set(neighbor,new Node(neighbor.val))
                q.push(neighbor)
            }
            m.get(t).neighbors.push(m.get(neighbor))
        }
    }
    return clone;
};