
//装饰器的写法
/*
 它的作用是在所装饰的组件调用的时候，在construct生命周期函数里，执行需要判断的逻辑：当前的url和导航状态相匹配
 在使用@typeDec装饰器时，要在它@observer之后使用，因为如果没有observer，constructor这个生命周期里就没去数据
*/
// function typeDec(target){
     
//     return class dd extends target{
//           constructor(props){
//               super(props)
//               console.log(super.props,target)
//               let pathname = super.props.location.pathname
//               console.log('pathname:', pathname)
//               if(pathname.length==1){
//                   pathname = pathname
//               }else{
//                   pathname = pathname.slice(1)

//               }
//               super.props.typeHandle(pathname)
//           }
//     }
      
      
    
// }

function typeDec(target){
     
    return class dd extends target{
          constructor(props){
              super(props)
            //   console.log('aa', super.props)
            //   console.log('bb', target.typeHandle)
              let pathname = super.props.location.pathname
            //   console.log('pathnamebb:', pathname)
              if(pathname.length==1){
                  pathname = pathname
              }else{
                  pathname = pathname.slice(1)

              }
              super.props.typeHandle(pathname)
          }
    }
      
      
    
}

export default typeDec