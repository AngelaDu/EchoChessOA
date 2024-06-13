import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

export default function DataChart({
  filteredData,
  pageNum,
  setPageNum,
  count,
}) {
  return (
    <div className='divide-y divide-dark-bg pl-3 pr-3'>
      {[...filteredData]
        .sort((a, b) => b.score - a.score)
        .map((curData, index) => {
          return (
            <div
              className='flex gap-3 items-end justify-between p-2 mb-0 bg-transparent'
              key={curData.name}
            >
              <p className='w-[24px] align-middle text-lg text-right font-bold mr-2'>{`${
                index + 1 + pageNum * 5
              }. `}</p>
              <p className='align-text-center text-lg font-bold w-[30%] flex-1'>
                {curData.name}
              </p>
              <p className='align-text-bottom text-sm font-normal text-slate-700'>
                {curData.date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })}
              </p>
              <p className='w-[15%] text-base font-normal text-right'>
                {curData.score}
              </p>
            </div>
          )
        })
        .concat(
          new Array(Math.max(0, 5 - filteredData.length))
            .fill("")
            .map((_, index) => (
              <div
                className='flex gap-3 items-end justify-between p-2 mb-0 bg-transparent invisible'
                key={`empty-row-${index}`}
              >
                <p className='align-text-center text-lg font-bold w-[30%] flex-1'>
                  {"."}
                </p>
              </div>
            ))
        )}

      {/* page left and right */}
      {/* available left if current page > 0 */}
      {/* available right if curPage * 5 < count */}
      <div className='flex p-2 justify-center gap-2 items-center'>
        <FaAngleLeft
          size={20}
          className={`${pageNum > 0 ? "text-black dark:text-dark-text" : "opacity-0 pointer-events-none"}`}
          onClick={() => {
            setPageNum(pageNum - 1)
          }}
        />
        <p>{pageNum + 1}</p>
        <FaAngleRight
          size={20}
          className={`${(pageNum + 1) * 5 <= count ? "text-black dark:text-dark-text" : "opacity-0 pointer-events-none"}`}
          onClick={() => {
            setPageNum(pageNum + 1)
          }}
        />
      </div>
    </div>
  )
}
