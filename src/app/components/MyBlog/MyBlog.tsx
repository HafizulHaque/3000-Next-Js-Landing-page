import React from 'react'
import { MessageCircleMore } from 'lucide-react'

const blogs = [
  {
    id: 1,
    title: 'Why Are All Sites Optimizing For Smartphones?',
    details: 'Sites were developed for desktop devices at first but as the worldwide smartphone usage rate increased so did the site developers look for device optimality. Optimizing for smartphones ensures a smooth user experience, boosts SEO, and helps you reach a wider audience – it\'s a win-win for everyone!',
    publishDate: 'March 12, 2022',
    imgUrl: 'image-08-287x239.jpg'
  },
  {
    id: 2,
    title: 'How to Start Promoting Your Own Blog',
    details: 'Promoting your blog is sometimes more difficult than creating it at all. But it is still wholly possible without paid advertisement or being a celebrity. There are many effective strategies to get your blog noticed. By implementing these strategies consistently, you can build a loyal readership for your blog and establish yourself as a thought leader in your field, all without relying on paid advertising or celebrity status.',
    publishDate: 'April 25, 2021',
    imgUrl: 'image-09-287x239.jpg'
  },
  {
    id: 3,
    title: '25 Steps to Make Sure that Your Website is Pleasant to Use',
    details: 'Using the internet means browsing various websites for important information. Or, if you\'re one of those people who get sucked down the rabbit hole of cat videos (we\'ve all been there!), a website\'s usability becomes even more crucial.  No matter how captivating your content is, a clunky or frustrating website will drive visitors away faster than you can say "unsubscribe."',
    publishDate: 'August 31, 2020',
    imgUrl: 'image-10-287x239.jpg'
  },
]

const MyBlog = () => {
  return (
    <section className='pt-8'>
      <h2 className='text-2xl font-bold py-4 text-center px-4'>My Blog</h2>
      {blogs.map(blog => (
        <div className='relative p-4 my-8'>
            <article key={blog.id}>
              <img src={`/images/${blog.imgUrl}`} alt='blogpost image' className='w-full'/>
              <p className='text-lg text-gray-500 italic py-2'>{blog.publishDate}</p>
              <h3 className='text-xl font-medium mb-3 hover:text-orange'>{blog.title}</h3>
              <p className='line-clamp-3 text-slate-600 leading-7'>{blog.details}</p>
            </article>
            <div className='absolute top-0 right-0 w-1/2 aspect-square border-y border-l border-orange/40 z-[-1]'>
            </div>
        </div>
      ))}
      <div className='relative'>
        <img 
          src="/images/image-11-787x516.jpg" 
          alt="message"
          className='w-full'/>
          <div className='absolute top-0 right-0 w-[8ch] h-[8ch] bg-orange hover:bg-cream text-slate-300 hover:text-white flex justify-center items-center'>
            <a href="/"><MessageCircleMore size={32}/></a>
          </div>
      </div>
    </section>
  )
}

export default MyBlog
