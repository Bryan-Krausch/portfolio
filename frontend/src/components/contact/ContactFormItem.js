export default function ContactFormItem({field}){
    return(
        <div className="relative">
            <input className="text-ligthGreyText py-4 border-b-[2px] border-slate-200 w-full  text-black peer focus:mt-6" placeholder={field}/>
            <div className="text-black absolute top-0 hidden transform translate-y-2 peer-focus:-translate-y-2 peer-focus:flex ">{field}</div>
        </div>
    )
}