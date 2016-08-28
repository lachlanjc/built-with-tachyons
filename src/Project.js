import React from 'react'

import Card from './Card'
import CardLink from './CardLink'
import CardImage from './CardImage'
import CardBody from './CardBody'
import CardTitle from './CardTitle'
import CardDescription from './CardDescription'

const Project = ({
  title,
  url,
  description,
  img,
  ...props
}) => (
  <CardLink href={url}>
    <Card {...props}>
      <CardImage src={img} alt={title} />
      <CardBody>
        <CardTitle children={title} />
        <CardDescription children={description} />
      </CardBody>
    </Card>
  </CardLink>
)

export default Project
