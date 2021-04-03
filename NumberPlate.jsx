import React from 'react'

const NumberPlate = (props) => {
  return <span style={{ color: 'eeeeee' }}>{props.children}</span>
}

export default NumberPlate

// 処理自体はこれと同じ
// export default class NumberPlate extends React.Component {
//   render (props) {
//     return <span style={{ color: '#eeeeee' }}>{props.children}</span>
//   }
// }
