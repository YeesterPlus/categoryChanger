SnapExtensions.set("ide_cat_setcategory(string categoryname,Color categorycolor)",function(name,color){
  world.childThatIsA(IDE_Morph).scene.customCategories.set(name,color)
})
SnapExtensions.set("ide_cat_getcategory(string categoryname)->Color",function(name){
  return world.childThatIsA(IDE_Morph).scene.customCategories.get(name)
})
SnapExtensions.set("ide_cat_getcategories()->string[]",function(name){
  return world.childThatIsA(IDE_Morph).scene.customCategories.keys()
})
SnapExtensions.set("ide_cat_removecategory(string categoryname)->boolean",function(name){
  return world.childThatIsA(IDE_Morph).scene.customCategories.delete(name)
})
