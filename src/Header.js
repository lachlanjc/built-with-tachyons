import React from 'react'

const Header = () => (
  <header className='mw7 center tc pv4 ph2 bb b--black-20'>
    <h1 className='f3 f2-ns fw4 mb0'>
      Built with{' '}
      <a href='http://tachyons.io' className='dim black no-underline bb b--black-10' children='Tachyons' />
    </h1>
    <h2 className='f4 f3-ns fw4 mv3 mid-gray'>
      A showcase of websites using Tachyons.
    </h2>
    <div>
      <a
        className='black-50 link dim bb b--black-10 fw4 dib mr4'
        href='https://github.com/tachyons-css/built-with-tachyons'
        target='_blank'
        children='Source code'
      />
      <a
        className='ba b--black-60 black-80 link br2 dim fw4 dib pv2 ph3 mt3'
        href='https://github.com/tachyons-css/built-with-tachyons#add-a-website'
        target='_blank'
        children='Add a link'
      />
    </div>
  </header>
)

export default Header
