'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, LinkIcon } from 'lucide-react';
import { IconList } from '@/lib/data/imgList';
import { ProjectList } from '@/lib/data/projectList';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className={`flex justify-center items-center h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <p className='text-2xl animate-pulse'>Loading...</p>
      </div>
    );
  }

  return (
    <main className={`transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='fixed top-4 right-4 z-50'>
        <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full border transition-colors ${darkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-black'}`}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Introduce */}
      <section className='h-screen flex flex-col justify-center items-center text-center px-4'>
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-5xl font-bold mb-4'>
          안녕하세요. 선영입니다.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex flex-col gap-2`}>
          <span>사용자 경험을 중시하는 프론트엔드 개발자입니다.</span>
          <span>협업과 소통을 바탕으로 안정적이며 재사용 가능한 UI를 만들어갑니다.</span>
          <span>새로운 기술을 배우고 성장하는 과정을 즐기며, 더 나은 코드를 위해 꾸준히 도전합니다.</span>
        </motion.p>
        <motion.a href='#projects' className={`px-6 py-3 rounded-full hover:opacity-80 transition ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`} whileHover={{ scale: 1.05 }}>
          포트폴리오 보러가기
        </motion.a>
      </section>

      {/* Skill */}
      <section id='skills' className={`py-30 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className='px-4 sm:px-40'>
          <h2 className='text-4xl font-bold mb-12 text-center'>SKILL</h2>
          <div className='grid grid-cols-2 sm:grid-cols-5 gap-6 text-center'>
            {IconList.map((item, idx) => (
              <motion.div key={idx} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className={`px-4 py-4 rounded-xl flex flex-col items-center gap-4 shadow ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                <Image src={item.imgUrl} alt={item.title} width={80} height={80} objectFit='contain' />
                <p>{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id='projects' className='py-24 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 mx-auto max-w-[1600px]'>
        <h2 className='text-4xl font-bold mb-12 text-center tracking-tight'>PROJECT</h2>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {ProjectList.map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className={`border rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 
        ${darkMode ? 'border-gray-700 bg-gray-900 text-gray-100' : 'border-gray-200 bg-white text-gray-800'}`}>
              <Image src={item.imgUrl} alt={item.title} width={320} height={180} className='rounded-lg mb-4 object-cover aspect-[3/6]' />

              <h3 className='text-xl xl:text-2xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-sm md:text-md leading-relaxed mb-4 break-all min-h-26'>{item.desc}</p>

              {/* 홈페이지 링크 */}
              <div className='flex items-center gap-4'>
                <Link
                  href={item.link}
                  target='_blank'
                  className={`text-sm font-medium hover:underline mt-auto flex items-center gap-1
                    ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                  <LinkIcon className='size-5' />
                  홈페이지
                </Link>
                {/* GitHub 링크 */}
                <Link
                  href={item.link2}
                  target='_blank'
                  className={`text-sm font-medium mt-auto flex items-center gap-1 hover:underline
                    ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-black'}`}>
                  <Github className='size-5' />
                  GitHub
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id='publishing' className='py-16 px-6 max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-center'>🖥️ Publishing Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[
            {
              title: 'Jeep 홈페이지 리뉴얼',
              desc: '기존 사이트 기획을 토대로 디자인을 재구성하고, 맞춤형 반응형 퍼블리싱 작업 진행',
              img: 'https://via.placeholder.com/400x240?text=Jeep',
              link: '#',
            },
            {
              title: 'Happycall 홈페이지 리뉴얼',
              desc: '기존 사이트 기획을 토대로 디자인을 재구성하고, 맞춤형 반응형 퍼블리싱 작업 진행',
              img: 'https://via.placeholder.com/400x240?text=Happycall',
              link: '#',
            },
            {
              title: '어린이급식센터 홈페이지 리뉴얼',
              desc: '기존 사이트 기획을 토대로 디자인을 재구성하고, 맞춤형 반응형 퍼블리싱 작업 진행',
              img: 'https://via.placeholder.com/400x240?text=Child+Center',
              link: '#',
            },
            {
              title: 'Snoopy 이벤트 페이지',
              desc: '디자인 시안 신규 제작, 이벤트성 단일 페이지 퍼블리싱 및 가벼운 인터랙션 구현',
              img: 'https://via.placeholder.com/400x240?text=Snoopy',
              link: '#',
            },
          ].map((project) => (
            <a key={project.title} href={project.link} target='_blank' rel='noopener noreferrer' className='block border rounded-xl overflow-hidden hover:shadow-lg transition'>
              {/* <img src={project.img} alt={project.title} className='w-full h-48 object-cover' /> */}
              <div className='p-4'>
                <h3 className='text-xl font-semibold'>{project.title}</h3>
                <p className='text-sm text-gray-600'>{project.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id='contact' className={`py-20 px-6 text-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <h2 className='text-3xl font-bold mb-4'>📬 Contact</h2>
        <p className='text-lg mb-2'>
          이메일:{' '}
          <a href='mailto:example@email.com' className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            example@email.com
          </a>
        </p>
        <p className='text-lg'>
          GitHub:{' '}
          <a href='https://github.com/your-github' target='_blank' className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            github.com/your-github
          </a>
        </p>
      </section>
    </main>
  );
}
