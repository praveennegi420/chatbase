export default function PageContent({data}) {
    return(
    <div className="max-h-[36rem] w-full overflow-auto p-4 pr-6">
        <div className="grid grid-cols-10 pb-4">
            <div className="col-span-9">
                <div className="break-words">{data.title}</div> 
                <span className="text-sm text-zinc-500">{data.text}</span>
            </div>
        </div>
    </div>
)
}