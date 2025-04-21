SnapExtensions.primitives.set("getVariableFrame(Context ctx)->Object%any[][2]",function(ctx){
  var outList = new List()
  outList.at = function(idx){
    var kvl = new List(Object.entries(ctx.variables.vars)[idx-1])
    kvl.at=function(idx){
      if(idx == 1){
        return Object.entries(ctx.variables.vars)[idx-1][0]
      }else{
        return Object.entries(ctx.variables.vars)[idx-1][1]
      }
    }
    kvl.bind=function(idx,val){
      if(idx == 1){
        throw new Error('maybe just delete this and recreate using a kv list')
      }else{
        ctx.variables.vars[this.at(1)]=val
      }
    }
  }
  outList.bind = function(idx,kv){
    ctx.variables.vars[kv.at(1)]=kv.at(2)
  }
  outList.add = function(kv){
    ctx.variables.vars[kv.at(1)]=kv.at(2)
  }
  outList.ref=ctx.variables
  return outList
})
SnapExtensions.primitives.set("setVariableFrame(Context ctx,Object%any var[][2])",function(ctx,varf){
  if (varf instanceof VariableFrame){
    ctx.variables = varf;
    return;
  }
  ctx.variables = varf.ref
})
