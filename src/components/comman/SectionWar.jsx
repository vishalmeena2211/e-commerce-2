// src/components/SectionWar.js
import React from 'react';

const SectionWar = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex items-center justify-center">
        {/* Left Features */}
        <div className="w-1/4">
          <div className=' flex flex-col justify-between gap-7'>
            <div className='flex gap-5'>
                <div className=' flex flex-col gap-6'>
                    <h1 className='text-xl font-semibold text-right' >
                    Firsted Reply
                    </h1>
                    <p className='text-md text-right'>
                    Respond to texts and messages directly from your wrist
                    </p>
                </div>
                <div>
                    <span>hi</span>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className=' flex flex-col gap-6'>
                    <h1 className='text-xl font-semibold text-right' >
                    Battery Life
                    </h1>
                    <p className='text-md text-right'>
                    Maximise your battery life on standby, and tilt your wrist.

</p>
                </div>
                <div>
                    <span>hi</span>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className=' flex flex-col gap-6'>
                    <h1 className='text-xl font-semibold text-right' >
                    Personal Assistant
                    </h1>
                    <p className='text-md text-right'>
                    Receive incoming calls or speed dial contacts without phone

</p>
                </div>
                <div>
                    <span>hi</span>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className=' flex flex-col gap-6'>
                    <h1 className='text-xl font-semibold text-right' >
                    Anti Glare
                    </h1>
                    <p className='text-md text-right'>
                    Incoming calls or speed dial contacts without reaching.

</p>
                </div>
                <div>
                    <span>hi</span>
                </div>
            </div>
           
          </div>
        </div>

        {/* Center Image */}
        <div className="w-1/4">
          <img
            src="https://template.hasthemes.com/sinp/sinp/assets/images/banner/featured2.webp"  // Replace with your image URL
            alt="Center"
            className="mx-auto rounded-full"
          />
        </div>

        {/* Right Features */}
        <div className="w-1/4">
          <div  className=' flex flex-col justify-between gap-7'>
          <div className='flex gap-5'>
                <div>
                    <span>hi</span>
                </div>
                <div className=' flex flex-col gap-6'>
                    <h1 className='text-xl font-semibold' >
                    Fitness Tracking

                    </h1>
                    <p className='text-md'>
                    Monitor and track your steps and distance day to day

</p>
                </div>
            </div>
          <div className='flex gap-5'>
                <div>
                    <span>hi</span>
                </div>
                <div className=' flex flex-col gap-6'>
                    <h1 className='text-xl font-semibold' >
                    Manage Calls
                    </h1>
                    <p className='text-md'>
                    Receive incoming calls or speed dial reaching your phone

</p>
                </div>
            </div>
          <div className='flex gap-5'>
                <div>
                    <span>hi</span>
                </div>
                <div className=' flex flex-col gap-6'>
                    <h1 className='text-xl font-semibold' >
                    App Launch
                    </h1>
                    <p className='text-md'>
                    Shortcuts to your favorite apps directly on your watchface

</p>
                </div>
            </div>
          <div className='flex gap-5'>
                <div>
                    <span>hi</span>
                </div>
                <div className=' flex flex-col gap-6'>
                    <h1 className='text-xl font-semibold' >
                    Music Control
                    </h1>
                    <p className='text-md'>
                    Easily accessible playback commands for your

</p>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWar;
