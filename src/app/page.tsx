import MaxWidthWrapper from "./components/MaxWidthWrapper";


export default function Home() {
  return (
    <MaxWidthWrapper  className="mb-12 mt-28  sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto  mb-4 flex  max-w-fit items-center justify-center bg-white shadow-blur transition-all  space-x-2 overflow-hidden rounded-full  hover:border-gray-300 hover:bg-white/50">
         <p className="text-sm font-semibold text-gray-700 p-2 ">PDfsignee !</p>
         </div>
    </MaxWidthWrapper>
  )
}
