import React from 'react'

import Image from 'next/image'
import styled from 'styled-components'

const NavLink = styled.li`
  padding: 0.3rem 1.25rem;
  cursor: pointer;
  border-bottom: 0.175rem solid transparent;
  &:hover {
    border-bottom: 0.175rem solid blue;
  }
`

function Index() {
  return (
    <div className='flex items-center py-3 px-20 justify-between'>
      <Image src="/assets/images/brand.png" height={40} width={70} alt='brand-logo' />
      <div className='flex'>
        <ul className='flex'>
          <NavLink>
            <a href='#'>Home</a>
          </NavLink>
          <NavLink>Portofolio</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Index