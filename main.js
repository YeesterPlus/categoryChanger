SnapExtensions.primitives.set("ide_cat_setcategory(string categoryname,Color categorycolor)",function(name,color){
  world.childThatIsA(IDE_Morph).scene.customCategories.set(name,color)
})
SnapExtensions.primitives.set("ide_cat_getcategory(string categoryname)->Color",function(name){
  return world.childThatIsA(IDE_Morph).scene.customCategories.get(name)
})
SnapExtensions.primitives.set("ide_cat_getcategories()->string[]",function(name){
  return new List([...world.childThatIsA(IDE_Morph).scene.customCategories.keys()])
})
SnapExtensions.primitives.set("ide_cat_removecategory(string categoryname)->boolean",function(name){
  return world.childThatIsA(IDE_Morph).scene.customCategories.delete(name)
})
