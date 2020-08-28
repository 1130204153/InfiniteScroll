import React, { useRef, useEffect } from 'react'
import style from './style/index.module.less'

interface propsType {
  children: any
  height: string
  length: number
  hasMore: boolean
  next: () => void
  loading?: boolean
  autoToButtom?: boolean
}

function InfiniteScroll(props: propsType): JSX.Element {
  const { children, height, length, hasMore, next, autoToButtom = false, loading = false } = props
  const scroll = useRef<any>(null)

  useEffect(() => {
    autoToButtom && scrollButtom()
  }, [length])

  function scrollButtom() {
    let ele = scroll.current
    setTimeout(function() {
      if (ele) {
        ele.scrollTop = ele.scrollHeight
      }
    }, 0)
  }

  function handleScroll(): void {
    if (scroll.current.scrollTop === 0 && hasMore) {
      next && next()
    }
  }

  return (
    <div ref={scroll} onScroll={handleScroll} style={{ height }} className={style['scroll-wrap']}>
      {hasMore && (
        <div className={style['scroll_refresh-tip']}>{loading ? '加载中...' : '点击加载更多'}</div>
      )}
      {length === 0 ? <div>loading</div> : children}
    </div>
  )
}

export default InfiniteScroll
