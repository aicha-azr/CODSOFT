const Header = ()=>{
    return(
        <>
            <div className="row-span-1 bg-primary-blue max-w-full h-fit flex justify-between p-1 items-center py-2 rounded-md">
                <h2 className="font-bold text-start text-2xl">Task Tracker</h2>
                <button className="bg-primary-blue hover:bg-[#0056b3] text-[#ffffff] rounded-lg border border-[#ffffff] focus:ring-0">add Task</button>
            </div>
        </>
    )
}
export default Header;