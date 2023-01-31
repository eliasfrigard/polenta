import { BsDownload } from 'react-icons/bs'

export default function DownloadItem({ title, filename, link = "" }) {
  return (
    <div
      className='flex items-center justify-between gap-8 p-6 md:p-8 min-h-[90px] cursor-pointer w-full border-l-8 border-accent-500 rounded-lg bg-primary-500 shadow-md hover:bg-accent-500 hover:text-primary-500 duration-150'
    >
      <div className='flex flex-col justify-between gap-1'>
        <p className='text text-sm font-medium tracking-wide leading-relaxed'>{title}</p>
        <p className='text hidden md:block text-sm italic tracking-wide'>{filename}</p>
      </div>

      <BsDownload className='text-2xl min-w-[30px] text-accent-500'></BsDownload>
    </div>
  )
}
