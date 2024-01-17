import React from 'react'

import Image from 'next/image'
import styled from 'styled-components'

const NavLink = styled.li`
  padding: 0.3rem 1.25rem;
  color: var(--primary-text-color);
  cursor: pointer;
  border-bottom: 0.18rem solid transparent;
  transition: border-bottom .3s ease-in-out;
  &:hover {
    border-bottom: 0.18rem solid var(--primary-color);
  }
  a {
    letter-spacing: 0.115rem;
    color: inherit;
  }

  &.active {
    border-bottom: 0.18rem solid var(--primary-color);
  }
`

function Index() {
  return (
    <div className='flex items-center py-3 px-20 justify-between sticky top-0'>
      <Image src="/assets/images/brand.png" height={40} width={90} alt='brand-logo' />
      <div className='flex'>
        <ul className='flex gap-3'>
          <NavLink className='active'>
            <a href='#'>Home</a>
          </NavLink>
          <NavLink>
            <a href='#'>Portofolio</a>
          </NavLink>
          <NavLink>
            <a href='#'>About</a>
          </NavLink>
          <NavLink>
            <a href='#'>Contact Us</a>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Index