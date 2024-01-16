import React from 'react'

import Image from 'next/image'

function Index() {
  return (
    <div className='flex items-center py-3 px-20 justify-between'>
        <Image src="/assets/images/brand.png" height={40} width={70} alt='brand-logo' />
        <div className='flex'>
            <ul className='flex'>
                <li>Chek</li>
            </ul>
        </div>
    </div>
  )
}

export default Index