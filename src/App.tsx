/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Menu, 
  X, 
  Search, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Youtube,
  BookOpen,
  Heart,
  Brain,
  Users,
  Compass
} from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = [
  { id: 'wellness', label: 'WELLNESS', icon: Heart },
  { id: 'body-care', label: 'BODY CARE', icon: Compass },
  { id: 'mind', label: 'MIND', icon: Brain },
  { id: 'life', label: 'LIFE', icon: Users },
  { id: 'interview', label: 'INTERVIEW', icon: BookOpen },
];

const ARTICLES = [
  {
    id: 1,
    category: 'BODY CARE',
    title: '허리 통증 완화를 위한 5분 스트레칭',
    excerpt: '직장인들을 위한 실무 밀착형 통증 관리 가이드. 매일 5분으로 달라지는 컨디션을 경험하세요.',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=800',
    date: '2024.05.09'
  },
  {
    id: 2,
    category: 'WELLNESS',
    title: '화이트 탑 & 숏 팬츠: 활동성 집중 리뷰',
    excerpt: '직접 입어보고 기록한 요가복 브랜드별 장단점. 혜나요가가 제안하는 최적의 핏.',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    date: '2024.05.08'
  },
  {
    id: 3,
    category: 'LIFE',
    title: '아침을 깨우는 딥블루 스무디 레시피',
    excerpt: '항산화 성분이 풍부한 베리류 중심의 건강 식단 가이드. 활기찬 하루의 시작.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800',
    date: '2024.05.07'
  },
  {
    id: 4,
    category: 'MIND',
    title: '명상이 뇌 구조를 바꾸는 과학적 이유',
    excerpt: '스트레스 관리 그 이상의 가치. 당신의 마음을 정렬하는 습관의 힘.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    date: '2024.05.06'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-gray flex flex-col selection:bg-brand-blue selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-white border-b border-brand-blue/10 px-10 h-20 flex justify-between items-center flex-shrink-0">
        <div className="flex-shrink-0 flex items-center">
          <h1 className="font-serif text-2xl font-bold tracking-tighter text-brand-blue">
            K LIFE JOURNAL
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {CATEGORIES.map((cat) => (
            <a 
              key={cat.id} 
              href={`#${cat.id}`} 
              className="text-[12px] font-bold tracking-widest text-brand-blue hover:text-brand-accent transition-colors uppercase"
            >
              {cat.label}
            </a>
          ))}
          <Search className="w-5 h-5 text-brand-blue cursor-pointer hover:opacity-60" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-blue p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 left-0 w-full bg-brand-white border-b border-brand-blue/10 px-10 py-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {CATEGORIES.map((cat) => (
                <a 
                  key={cat.id} 
                  href={`#${cat.id}`} 
                  className="text-xs font-bold tracking-widest text-brand-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow max-w-[1280px] mx-auto w-full px-4 sm:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[240px]">
          
          {/* Main Hero Bento Card (Span 2x2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bento-card md:col-span-2 md:row-span-2 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Warrior II Pose"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-accent uppercase">Featured Article</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-brand-blue">
                The Art of Spinal Alignment:<br />
                <i className="font-light italic">A Masterclass with Heina</i>
              </h2>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                Discover how precise physical alignment fosters mental clarity and long-term vitality in our exclusive interview.
              </p>
              <div className="w-12 h-12 rounded-full border border-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="relative z-10 self-start">
              <span className="bg-brand-blue text-white px-3 py-1.5 rounded-full text-[10px] font-bold">
                Body & Pain Care
              </span>
            </div>
          </motion.div>

          {/* Dark Journal Bento Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bento-card bg-brand-blue text-white flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">Journal Entry</span>
              <h3 className="font-serif text-2xl mt-2 leading-tight">
                2024 Wellness<br />Trends Report
              </h3>
            </div>
            <p className="text-[12px] text-white/80 leading-relaxed font-light">
              K-Life's definitive guide to the modern Korean wellness lifestyle.
            </p>
          </motion.div>

          {/* Expert Review Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bento-card flex flex-col justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-accent uppercase">Expert Review</span>
              <h3 className="font-serif text-xl mt-2 leading-tight">
                White Top & Short Pants:<br />Performance Review
              </h3>
            </div>
            <p className="text-[12px] text-gray-500 leading-relaxed">
              Testing the latest 2024 yoga collections for breathability and fit.
            </p>
          </motion.div>

          {/* Stats Bento Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bento-card flex flex-col justify-around"
          >
            <div>
              <div className="font-serif text-3xl font-bold text-brand-blue">10.4k</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Journal Readers</div>
            </div>
            <div className="pt-4 border-t border-brand-blue/5">
              <div className="font-serif text-3xl font-bold text-brand-blue">8</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Core Categories</div>
            </div>
          </motion.div>

          {/* Nutrition Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bento-card flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full -mr-10 -mb-10" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-accent uppercase">Nutrition</span>
              <h3 className="font-serif text-xl mt-2 leading-tight">
                Deep Blue Recovery<br />Smoothie Recipe
              </h3>
            </div>
            <p className="relative z-10 text-[12px] text-gray-500 leading-relaxed">
              Antioxidant-rich berry blend for post-practice session recovery.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bento-card flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-accent uppercase">Education</span>
              <h3 className="font-serif text-xl mt-2 leading-tight">
                Lifelong Learning<br />Program 2024
              </h3>
            </div>
            <p className="text-[12px] text-gray-500 leading-relaxed">
              Enrolling now for Professional Yoga Teacher Certification.
            </p>
          </motion.div>

          {/* Philosophy Bento Card (Large footer card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bento-card md:col-span-3 bg-brand-white flex flex-col md:flex-row items-center gap-8 justify-between"
          >
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl italic text-brand-blue mb-2">Philosophy of Flow</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                우리는 삶의 질을 높이는 지혜를 나누고, 스스로의 몸과 마음을 돌볼 수 있는 자생력을 키우는 공동체를 지향합니다.
                평생교육원으로서의 혜나요가는 당신의 일상을 넘어서는 배움의 가치를 제안합니다.
              </p>
            </div>
            <div className="flex gap-10">
              {['Sincerity', 'Balance', 'Harmony'].map(val => (
                <span key={val} className="text-[10px] tracking-[0.3em] uppercase text-brand-blue font-bold opacity-30">
                  {val}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer Strip */}
      <footer className="bg-brand-blue h-[60px] flex items-center justify-center text-[11px] text-brand-white/90 tracking-widest font-bold uppercase">
        © 2026 K LIFE JOURNAL | HEINA YOGA LIFELONG EDUCATION CENTER
      </footer>
    </div>
  );
}
