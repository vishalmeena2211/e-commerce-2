import React from 'react'

const ActionSection = () => {
  return (
    <div>
      <div className="flex flex-col h-screen justify-end md:flex-row bg-[url('https://template.hasthemes.com/sinp/sinp/assets/images/banner/bg.webp')] bg-cover text-white p-8">
      {/* Image Side */}
      {/* Text Side */}
      <div className='w-1/2'>
      <div className="md:w-4/5 p-4 flex flex-col justify-center h-full">
        <h3 className="text-xl mb-7">#Action Feature</h3>
        <h1 className="text-[55px] font-bold mb-2">Ultimate comfort.
</h1>
        <div className="w-12 h-1 bg-white mb-5"></div>
        <div className='flex flex-col gap-8 font-semibold text-3xl mb-6'>
            <div>Smart Connectivity</div>
            <div>Long lasting battery</div>
            <div>Touch Control Panel</div>
            <div>Volume Up Control</div>
            <div>Water Dust Proof</div>
        </div>
        <button className="bg-white w-1/4 text-pink-400 px-2 py-4 rounded-3xl hover:bg-orange-500 hover:text-white">
          Buy Now
        </button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ActionSection
