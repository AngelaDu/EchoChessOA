export default function DataChart({ filteredData }) {
  return (
    <div className='divide-y divide-light-bg pl-3 pr-3'>
      {[...filteredData]
        .sort((a, b) => b.score - a.score)
        .map((curData, index) => {
          return (
            <div
              className='flex gap-3 items-end justify-between p-2 mb-0 bg-transparent'
              key={curData.name}
            >
              <p className='align-middle text-lg font-bold mr-2'>{`${
                index + 1
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
        })}
    </div>
  )
}
