
SnapExtensions.primitives.set("loadExtension(name)",function(name){
  if(name.indexOf("..")!=-1)throw new Error("don't even try to run arbitrary js code on me")
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "https://raw.githubusercontent.com/YeesterPlus/snapUtilsLibE/refs/heads/main/"+name+".js", true);
  // cache-control, commented out for now
  // added for Snap4Arduino but has issues with local robot servers
  // this.httpRequest.setRequestHeader('Cache-Control', 'max-age=0');
  httpRequest.send(null);
  httpRequest.onload=()=>{
      if(httpRequest.readyState==httpRequest.DONE &&
          httpRequest.status == 200)
          eval(httpRequest.responseText);
  }
})
