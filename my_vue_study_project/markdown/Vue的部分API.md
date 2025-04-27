1. `shallowRef()`和`shallowReactive()` 创建浅层代理，仅对顶层属性或对象保持响应性，不递归处理嵌套对象
2. `readonly()`和`shallowReadonly()` 创建深层只读代理，递归所有嵌套属性|创建浅层只读代理，进顶层属性不可修改，嵌套对象保存可变
3. `toRaw()`和`markRaw()` 将Vue3响应式对象转换为普通对象|标记对象永远不会被转换为Vue3响应式对象
4. `customRef()` Vue3中自定义的ref`customRef((track,trigger)=>{return {get(){},set(newValue){}}})` track()用于跟踪依赖关系，trigger()用于触发依赖关系更新
5. `<teleport to="xxx"></teleport>`将组件渲染到指定元素中,可以使用类、ID、标签名或选择器
6. `<Suspence><template v-slot:default></template><template v-slot:fallback></template></Suspence>` default是异步完成后开始渲染的内容，而fallback是异步加载完成前的内容
7. 全局API转移到应用对象
   1. `app.component('自定义标签名',improt导入的组件对象)`全局注册组件
   2. `app.config.globalProperties.***`定义全局属性
   3. `app.directive('自定义指令名',(elemnt,{value})=>{对element进行操作，第二个参数是v-custom='值'传来的值})`
   4. `app.mount()`和`app.unmount()`app在挂载和卸载时要进行的操作