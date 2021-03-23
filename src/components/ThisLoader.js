import React from 'react'
import { Dimmer, Image, Loader, Segment } from 'semantic-ui-react'

const ThisLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>
    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default ThisLoader