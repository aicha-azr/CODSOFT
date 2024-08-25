const Card = ()=>{
return(
    <>
         <div className="bg-white bg-gradient-to-r from-white to-gray-100 flex flex-col h-fit p-4 rounded-xl shadow-light shadow-lg gap-2 backdrop-grayscale-0">
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="h-5 w-1/5 rounded-full bg-gray-200 self-center animate-pulse"></div>
              </div>
              <div className=" w-full px-5 flex flex-col gap-1.5  text-start">
                <div className="h-10 w-full bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-[9rem] w-full bg-gray-200 rounded-xl animate-pulse"></div>
              </div>
              <div></div>
            </div>
    </>
)
}
export default Card;