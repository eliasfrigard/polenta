import Menu from './Menu'

export default function Header() {
  return (
    <div className={`w-full flex justify-center fixed items-center z-10`}>
      <div
        className={`
          flex
          justify-between
          items-center 
          bg-white
          bg-opacity-80
          h-[70px]
          w-full
          p-10
          shadow-md 
          backdrop-blur-md
        `}
      >
        <div id='left'>POLENTA</div>
        <div id='center'>Website Links</div>
        <div id='right'>Social Media</div>
      </div>
    </div>
  )
}
