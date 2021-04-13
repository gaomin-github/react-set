function graph(){
    this._graph={}
};
graph.prototype.get=function(){
    return this._graph;
}
graph.prototype.set=function(newGraph){
    this.graph=newGraph
}

export default new graph();