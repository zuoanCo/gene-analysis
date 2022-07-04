const flat = function(arr:Array<any>, field:string):Array<any> {
    return [].concat(...arr.map(item =>{
        return item[field] //判断是否有子项，否则递归flatten报错
        ? [].concat(item, ...flat(item[field], field)) 
        : [].concat(item)
    } 
))
}

export default flat