'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className={`flex justify-center items-center h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <p className='text-2xl animate-pulse'>Loading portfolio...</p>
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

      {/* Hero */}
      <section className='h-screen flex flex-col justify-center items-center text-center px-4'>
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-5xl font-bold mb-4'>
          안녕하세요, 선영입니다.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          프론트엔드 개발자 포트폴리오입니다.
        </motion.p>
        <motion.a href='#projects' className={`px-6 py-3 rounded-full hover:opacity-80 transition ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`} whileHover={{ scale: 1.05 }}>
          포트폴리오 보러가기
        </motion.a>
      </section>

      {/* About */}
      <section id='about' className='py-20 px-6 max-w-4xl mx-auto'>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className='text-3xl font-bold mb-4'>
          👩‍💻 About Me
        </motion.h2>
        <p className='text-lg leading-relaxed'>사용자 경험을 중요하게 생각하는 프론트엔드 개발자입니다. 협업과 소통을 바탕으로 안정적인 UI와 재사용 가능한 컴포넌트를 만들고자 노력합니다.</p>
      </section>

      {/* Skills */}
      <section id='skills' className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <h2 className='text-3xl font-bold mb-8 text-center'>🛠 Skills</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 text-center'>
          {['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'].map((skill) => (
            <motion.div key={skill} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className={`px-4 py-2 rounded shadow ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id='projects' className='py-20 px-6 max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-center'>📁 Projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {[
            {
              title: '감정 기반 음악 추천 웹앱',
              desc: '감정 점수 기반으로 유튜브 음악을 추천하는 프로젝트입니다.',
              link: '#',
            },
            {
              title: '여행 기록 웹앱',
              desc: '일정, 별점, 태그, 사진을 입력할 수 있는 여행 기록 플랫폼입니다.',
              link: '#',
            },
          ].map((proj) => (
            <motion.div key={proj.title} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }} className={`border rounded-lg p-4 shadow hover:shadow-lg transition ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
              <h3 className='text-xl font-semibold mb-2'>🎯 {proj.title}</h3>
              <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{proj.desc}</p>
              <a href={proj.link} className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                🔗 자세히 보기
              </a>
            </motion.div>
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
