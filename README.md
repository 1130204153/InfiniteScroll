# InfiniteScroll
react编写的Web端上拉加载组件。主流的无限加载一般都是只支持下拉加载和H5端的上拉加载。于是基于项目的业务简单的封装了一个无限上拉加载，功能比较简单，直接上传了组件代码，有需要的可以后续足迹扩充功能。

使用方式：
```
import InfiniteScroll from './InfiniteScroll'

<InfiniteScroll
  loading={loading} 
  hasMore={hasMore}
  next={loderMoreData}
  autoToButtom={autoToButtom}
  length={data.length}
  height={'inherit'}
>
  {data.map((item) => {
    const { id } = item
      return (
        <div key={id}>
          <Content data={item} />
        </div>
      )
  })}
</InfiniteScroll>
```

## 参数说明： <br/>
loading：非必须，加载状态 <br/>
hasMore：必须，是否还需要分页 <br/>
next：必须，上拉到顶端时的回调 <br/>
autoToButtom：非必须，默认为false，数据变化时是否自动跳转到列表尾部 <br/>
length：必须，数据的长度 <br/>
height：必须，传入类型为字符串 <br/>
