import Container from '../components/container/container.component'
import React from 'react'

type Props = {}

const MainHOC = (props: Props) => {
  return (
      <div>
          <Container/>
    </div>
  )
}

export default MainHOC