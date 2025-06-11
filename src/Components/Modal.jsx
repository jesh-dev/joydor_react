
export default function Modal({ open, onclose, children}) {
  return (
    //backdrop
    <div onClick={onclose}
className={` inset-0 flex justify-center w-100 h-30 items-center
transition-colors 
${open ? "visible bg-black/20 backdrop-blur-xl" : "invisible"}`}
    >
        {/* modal */}
        <div className= {`bg-white rounded-xl shadow p-6
        
        transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} `}>

        </div>
        {children}
    </div>
  )
}
