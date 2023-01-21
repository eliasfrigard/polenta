import Layout from '../components/Layouts/Default'
import Image from 'next/image'

import { Tab } from '@headlessui/react'

export default function Home() {
  return (
    <Layout>
      <div id='hero' className='h-[100vh] flex justify-center items-center text-white '>
        <Image alt='Mountains' src='/polenta-5.jpg' layout='fill' objectFit='cover' />
      </div>
      <div className='py-16 bg-[#F2F2F2] flex justify-center items-center flex-col'>
        <Tab.Group>
          <Tab.List className='flex gap-6'>
            <Tab className='outline-none text-xl tracking-wide border-b-2 border-[#011C26] py-3 px-5 capitalize'>
              Upcoming Concerts
            </Tab>
            <Tab className='outline-none text-xl tracking-wide border-b-2 border-[#011C26] py-3 px-5 capitalize'>
              Previous Concerts
            </Tab>
          </Tab.List>
          <Tab.Panels className='container pt-16'>
            <Tab.Panel className='flex flex-col justify-center items-center'>
              <div className='p-4 max-w-[1200px] w-full h-[125px]  grid grid-flow-row grid-cols-4 gap-4'>
                <div className='flex flex-col items-center gap-[3px]'>
                  <p className='text-6xl leading-none font-bold tracking-tight'>23</p>
                  <p className='text-lg leading-none font-medium tracking-tight italic'>JULY</p>
                  <p className='text-3xl leading-none font-bold tracking-tight -translate-y-[3px]'>2013</p>
                </div>
                <div className=''></div>
                <div className=''></div>
                <div className=''></div>
              </div>
            </Tab.Panel>
            <Tab.Panel className='flex flex-col justify-center items-center'></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Layout>
  )
}
