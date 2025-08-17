import PropTypes from 'prop-types'

function Droupdown({title, option, func}) {
  return (
    <div className='relative'>
        <select 
          onChange={func} 
          defaultValue="0" 
          className='
            appearance-none
            bg-[#1F1E24] 
            border-2 
            border-zinc-600 
            hover:border-[#6556CD] 
            focus:border-[#6556CD] 
            focus:outline-none
            rounded-lg 
            text-zinc-300 
            px-4 
            py-2 
            pr-8
            cursor-pointer
            transition-all
            duration-200
            ease-in-out
            min-w-[120px]
          ' 
          name="format" 
          id="format"
        >
            <option value="0" disabled className='bg-[#1F1E24] text-zinc-400'>
                {title}
            </option>
            {option.map((o, i) => (
              <option 
                key={i} 
                value={o} 
                className='bg-[#1F1E24] text-zinc-300 hover:bg-[#6556CD] py-2'
              >
                {o.toUpperCase()}
              </option>
            ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
          <svg className='w-4 h-4 text-zinc-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </div>
    </div>
  )
}

Droupdown.propTypes = {
  title: PropTypes.string.isRequired,
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
  func: PropTypes.func.isRequired
}

export default Droupdown