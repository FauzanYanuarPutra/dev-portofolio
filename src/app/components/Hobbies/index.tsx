import Image from "next/image"

export default function Hobbies() {
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