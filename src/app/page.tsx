"use client"
import { IconMailFilled } from '@tabler/icons-react';
import { IconPhoneFilled } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <div className="max-w-[1000px] w-[95%] grid gap-4 mx-auto my-10">
      <div className="flex flex-col  md:flex-row gap-3 bg-white rounded-lg shadow p-4">
        <div className="w-full md:w-[200px] h-[200px] bg-slate-400">
          <div className="w-full h-full md:w-[200px] md:h-[200px] relative rounded-lg overflow-hidden">
            <Image
              width={200}
              height={200}
              className='w-full h-full  object-cover '
              src="https://source.unsplash.com/random/1400x20000"
              alt=""
            />
          </div>
        </div>
        <div className="flex-grow md:display-none text-lg ">
          <div className="max-w-full flex flex-col h-full  gap-4">
            <div className="md:flex justify-between font-medium grid gap-2 md:gap-">
              <div>
                <h1 className='text-xl font-bold text-[#4F4F4F]'>Billy Pearson</h1>
                <p className='font-medium text-[#828282]'>Front-end Developer</p>
              </div>
              <div >
                <div className="flex gap-1 items-center text-[#4F4F4F]">
                  <IconMailFilled size={16} className="mr-2" />
                  <p>Billy@example.com</p>
                </div>
                <div className="flex gap-1 items-center text-[#4F4F4F]">
                  <IconPhoneFilled size={16} className="mr-2" />
                  <p>(+603) 546 624 342</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[#828282]">
              <p>
                Self-motivated developer, willing to learn and create outstanding UI applications.
              </p>
              <p>
                Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
              </p>
            </div>
   
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4'>
        <div className='lg:col-span-1 flex flex-col gap-4'>
          <FrontEnd></FrontEnd>
          <Hobbies></Hobbies>
        </div>
        <div className='lg:col-span-2  flex flex-col gap-4'>
          <div className='flex flex-col gap-3 bg-white   rounded-lg lg:max-h-[700px] p-6 lg:px-0 lg:py-12'>
            <div className='lg:grid grid-cols-3 gap-3 '>
              <div className='col-span-1 lg:px-6'>
                <h6 className='mb-4'>Blog</h6>
                <h1 className='font-medium text-3xl'>How to organize your CSS</h1>
              </div>
              <div className='col-span-2'>
                <Image src={'https://source.unsplash.com/random/1000x1000'} alt="" width={100} height={100} className='w-full max-h-[300px] lg:max-h-[600px] lg:h-[430px] rounded-l-lg object-cover my-2 lg:my-0'></Image>
              </div>
            </div>
            <div className='text-lg text-[#828282] flex flex-col gap-3 lg:p-6'>
              <p>
                In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
              </p>
              <p>
                Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
              </p>
              <div>
                <p className='text-[#2F80ED] '>dev.to</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 p-4 rounded-lg   bg-white py-6 lg:h-[466px]'>
            <h1 className='font-semibold text-[#4F4F4F]  text-xl mb-3'>Experience</h1>
            <div className='w-full h-full grid gap-6'> 
              <div className='flex flex-col lg:flex-row  gap-4 lg:max-h-[150px]'>
                <div className="w-full lg:w-[150px] h-[150px] bg-slate-400">
                  <div className="w-full h-full lg:w-[150px] lg:h-[150px] relative overflow-hidden">
                    <Image
                      width={200}
                      height={200}
                      className='w-full h-full  object-cover '
                      src="https://source.unsplash.com/random/1400x20000"
                      alt=""
                    />
                  </div>
                </div>
                <div className='flex flex-col justify-between '>
                  <div className='grid gap-1'>
                    <h4 className='text-sm text-[#828282]'>Feb 2017 - Current</h4>
                    <h1 className='font-bold'>Front-end developer</h1>
                  </div>
                  <div>
                    <p className='text-[#828282]'>
                      Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row  gap-4 lg:max-h-[150px]'>
                <div className="w-full lg:w-[150px] h-[150px] bg-slate-400">
                  <div className="w-full h-full lg:w-[150px] lg:h-[150px] relative overflow-hidden">
                    <Image
                      width={200}
                      height={200}
                      className='w-full h-full  object-cover '
                      src="https://source.unsplash.com/random/1400x20000"
                      alt=""
                    />
                  </div>
                </div>
                <div className='flex flex-col justify-between '>
                  <div className='grid gap-1'>
                    <h4 className='text-sm text-[#828282]'>Feb 2017 - Current</h4>
                    <h1 className='font-bold'>Front-end developer</h1>
                  </div>
                  <div>
                    <p className='text-[#828282]'>
                      Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className='w-full bg-white p-6 rounded-lg'>
        <h1 className='mb-3'>Project (3)</h1>
        <div className='flex gap-2'>
          <div className='px-6 py-1 rounded-lg border-[1px] border-[#4F4F4F] '>
            React
          </div>
          <div className='px-6 py-1 rounded-lg border-[1px] border-[#4F4F4F] '>
            Vue
          </div>
          <div className='px-6 py-1 rounded-lg border-[1px] border-[#2F80ED] bg-[#2F80ED] text-white '>
            Responsive
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='p-6 rounded-lg bg-white grid gap-4'>
          <div>
            <Image src={'https://source.unsplash.com/random/1000x1000'} alt="" width={100} height={100} className='w-full max-h-[300px] rounded-l-lg object-cover my-2}'></Image>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex line-clamp-1 gap-2 text-lg text-[#4F4F4F]'>
              <p>#HTML</p>
              <p>#CSS</p>
              <p>#responsive</p>
            </div>
            <h1 className='text-2xl font-medium'>Recipe Blog</h1>
            <p className='text-[#828282] text-md'>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
            <div className='grid grid-cols-2 my-4 gap-2'>
                <button className='p-2 bg-[#2F80ED] text-white rounded-lg'>Demo</button>
                <button className='p-2 border-[1px] border-[#2F80ED] text-[#2F80ED] rounded-lg'>Code</button>
            </div>
          </div>
        </div>
        <div className='p-6 rounded-lg bg-white grid gap-4'>
          <div>
            <Image src={'https://source.unsplash.com/random/1000x1000'} alt="" width={100} height={100} className='w-full max-h-[300px] rounded-l-lg object-cover my-2}'></Image>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex line-clamp-1 gap-2 text-lg text-[#4F4F4F]'>
              <p>#HTML</p>
              <p>#CSS</p>
              <p>#responsive</p>
            </div>
            <h1 className='text-2xl font-medium'>Recipe Blog</h1>
            <p className='text-[#828282] text-md'>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
            <div className='grid grid-cols-2 my-4 gap-2'>
                <button className='p-2 bg-[#2F80ED] text-white rounded-lg'>Demo</button>
                <button className='p-2 border-[1px] border-[#2F80ED] text-[#2F80ED] rounded-lg'>Code</button>
            </div>
          </div>
        </div>
        <div className='p-6 rounded-lg bg-white grid gap-4'>
          <div>
            <Image src={'https://source.unsplash.com/random/1000x1000'} alt="" width={100} height={100} className='w-full max-h-[300px] rounded-l-lg object-cover my-2}'></Image>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex line-clamp-1 gap-2 text-lg text-[#4F4F4F]'>
              <p>#HTML</p>
              <p>#CSS</p>
              <p>#responsive</p>
            </div>
            <h1 className='text-2xl font-medium'>Recipe Blog</h1>
            <p className='text-[#828282] text-md'>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
            <div className='grid grid-cols-2 my-4 gap-2'>
                <button className='p-2 bg-[#2F80ED] text-white rounded-lg'>Demo</button>
                <button className='p-2 border-[1px] border-[#2F80ED] text-[#2F80ED] rounded-lg'>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

const FrontEnd = () => {
  const skills = [
    {
      title: 'React',
      skill: 70
    },
    {
      title: 'Javascript',
      skill: 80
    },
    {
      title: 'CSS',
      skill: 90
    },
    {
      title: 'Vue',
      skill: 70
    },
    {
      title: 'Redux',
      skill: 80
    },
    {
      title: 'React Native',
      skill: 90
    }
  ]

  return (
    <div className='flex flex-col gap-3 bg-white p-4 rounded-lg'>
      <h1 className='font-bold text-[#4F4F4F]  text-lg'>FRONT END</h1>
      <div className='grid gap-2'>
      {skills.map((skill: any) => (
        <div key={skill.title} className='grid grid-cols-3 items-center gap-10'>
          <h3 className='col-span-1 whitespace-nowrap text-[#4F4F4F] font-medium'>{skill.title}</h3>
          <div className='w-full h-2 col-span-2 bg-gray-300 rounded-lg'>
            {skill.skill && (
              <div style={{ width: `${skill.skill}%` }} className={`bg-blue-600 h-full rounded-lg`}></div>
            )}
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

const Hobbies = () => {
  const hobies = [
    {
      title: 'Gaming',
      image: 'https://source.unsplash.com/random/1000x800',
      description: 'Quisque feugiat malesuda molestie'
    },
    {
      title: 'Cooking',
      image: 'https://source.unsplash.com/random/1000x700',
      description: 'Quisque feugiat malesuda molestie'
    },
    {
      title: 'biking',
      image: 'https://source.unsplash.com/random/1000x600',
      description: 'Quisque feugiat malesuda molestie'
    }
  ]

  return (
    <div className='flex flex-col bg-white gap-6 p-4 rounded-lg'>
      <h1 className='font-semibold text-[#4F4F4F] text-2xl'>Hobbies</h1>
      <div className='grid gap-6'>
        {hobies && hobies.map((hobby: any) => (
          <div className='grid gap-4' key={hobby.title}>
            <div>
              <Image width={20000} height={20000} quality={100} src={hobby.image} alt="" className='w-full h-auto max-h-[200px] md:max-h-[250px] object-cover lg:max-h-[150px] rounded-lg'></Image>
            </div>
            <div className='grid gap-2'>
              <h1 className='text-xl font-semibold text-[#333]'>{hobby.title}</h1>
              <p className='text-[#828282] text-lg'>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}