let formateTree = (data, handleDatas = [
  {
    id: null,
    name: "类目",
    isEdit: 0,
    sortOrder: 0, // 级别
    children: []
  }
], sortOrder = 10) => {
  let treeIds = []
  let map = {}
  let i = 0
  if (!data) return;
  if (sortOrder > 1) {
    // console.log(data)    
    data.forEach(v => {
      treeIds.push(i)
      i++
      if (!v.children) v.children = [];
      if (v.sort_order == sortOrder) {
        data.forEach(res => {
          treeIds.push(i)
          i++


          if (res.id == v.parent_id)
            res.children.push({
              name: v.name,
              parentId: v.parent_id,
              id: v.id,
              sortOrder: v.sort_order,
              isEdit: 0,
              children: v.children
            });
          map[v.id] = v.name
        });
      }
    });
    formateTree(data, handleDatas, sortOrder - 1);
  }
  if (sortOrder == 1) {
    handleDatas[0].children = [];
    data.forEach(v => {
      treeIds.push(i)
      i++
      if (v.sort_order == 1) {
        handleDatas[0].children.push({
          name: v.name,
          parentId: v.parent_id,
          id: v.id,
          sortOrder: v.sort_order,
          isEdit: 0,
          children: v.children
        });
        map[v.id] = v.name
      }
    });
  }
  return { treeIds, map, tree: handleDatas }
}

let setMap = (data) => {
  let map = {}
  data.forEach(v=>{
    map[v.id] = v.name
  })
  return map
}
export default {
  formateTree,setMap
}