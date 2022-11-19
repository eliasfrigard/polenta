import Menu from './Menu'

export default function Header({ height, position }) {
  return (
    <div className={`w-full flex justify-center items-center ${position} z-10`}>
      <div
        className={`
          flex
          justify-between
          items-center 
          bg-[#EFF0F2]
          bg-opacity-80
          h-[${height}]
          w-[60vw] 
          p-8
          mt-8
          shadow-lg 
          rounded-2xl
          backdrop-blur-md
        `}
      >
        <div id='left'>hello</div>
        <div id='right'>there</div>
      </div>
    </div>
  )
}
