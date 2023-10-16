
export default function FrontEnd() {
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