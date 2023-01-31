import { BsDownload } from 'react-icons/bs'

export default function DownloadItem({ title, filename, link = "" }) {
  return (
    <div
      className='flex items-center justify-between gap-8 p-6 md:p-8 min-h-[90px] cursor-pointer w-full border-l-8 border-[#592B02] rounded-lg bg-gray-100 shadow-md hover:bg-[#592B02] hover:text-white duration-150'
    >
      <div className='flex flex-col justify-between gap-1'>
        <p className='text text-sm font-medium tracking-wide'>{title}</p>
        <p className='text hidden md:block text-sm italic tracking-wide'>{filename}</p>
      </div>

      <BsDownload className='text-2xl'></BsDownload>
    </div>
  )
}
