1. `shallowRef()`和`shallowReactive()` 创建浅层代理，仅对顶层属性或对象保持响应性，不递归处理嵌套对象
2. `readonly()`和`shallowReadonly()` 创建深层只读代理，递归所有嵌套属性|创建浅层只读代理，进顶层属性不可修改，嵌套对象保存可变
3. `toRaw()`和`markRaw()` 将Vue3响应式对象转换为普通对象|标记对象永远不会被转换为Vue3响应式对象
4. `customRef()` Vue3中自定义的ref`customRef((track,trigger)=>{return {get(){},set(newValue){}}})` track()用于跟踪依赖关系，trigger()用于触发依赖关系更新