import React from 'react'
import Rect from './Rect'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Rect />
        <Rect num={1} bgcolor='#e02020' />
        <Rect num={2} bgcolor='#20e020' />
        <Rect num={3} bgcolor='#2020e0' />
      </div>
    )
  }

  // コンポーネントのループ（map）
  // 属性値が異なる場合はユニークなkey指定でmapを回す
  
  // render () {
  //   const rects = [
  //     {key: 'rect_1', num: 1, bgcolor: '#e02020'},
  //     {key: 'rect_2', num: 2, bgcolor: '#20e020'},
  //     {key: 'rect_3', num: 3, bgcolor: '#2020e0'},
  //   ]

  //   return (
  //     <div>
  //       { rects.map((r) => <Rect key={r.key} num={r.num} bgcolor={r.bgcolor} />) }
  //     </div>
  //   )
  // }
}
