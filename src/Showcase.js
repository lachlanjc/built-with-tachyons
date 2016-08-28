import React from 'react'
import _ from 'lodash'

import data from '../data'
import Project from './Project'

const Showcase = () => (
  <article className='w-100 w-75-m mw8 center pv4 ph2 flex flex-wrap justify-around items-center'>
    {_.map(data.sites, (site, i) => (
      <Project
        title={site.title}
        url={site.url}
        description={site.description}
        img={`/img/${site.img}`}
        key={`site-${i}`}
      />
    ))}
  </article>
)

export default Showcase
