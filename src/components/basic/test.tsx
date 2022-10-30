// 函数式组件
// export default () => <div>test</div>
import { defineComponent, ref } from "vue";
// defineComponent
// export default defineComponent({
//     render(){
//         return <div>test1</div>
//     }
// })

export default defineComponent({
    setup(){
        const counter = ref('12')
        return () => (
            <>
            <div>test222</div>
            <el-input v-model={counter.value} />
            </>           
        ) 
    }
})