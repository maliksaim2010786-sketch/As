/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const projects = [
    { title: 'Hotel Website', category: 'Travel' },
    { title: 'Restaurant Website', category: 'Food' },
    { title: 'School / College Website', category: 'Education' },
    { title: 'E-commerce Website', category: 'Retail' },
    { title: 'Gym Website', category: 'Fitness' },
    { title: 'Car Showroom Website', category: 'Automotive' },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-[#1e293b] p-8 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full border-4 border-blue-500 mb-6 flex items-center justify-center text-4xl font-bold bg-blue-900/50">A</div>
        <h1 className="text-3xl font-bold mb-1">Ahtasham</h1>
        <h2 className="text-blue-400 font-semibold mb-6">WEB DEVELOPER</h2>
        <p className="text-gray-400 mb-8">Turning Ideas into Modern Websites</p>
        
        {/* Tech Stack - simplified for now */}
        <div className="grid grid-cols-3 gap-4 mb-10 w-full text-xs font-bold text-gray-500">
          {['HTML5', 'CSS3', 'JS', 'REACT', 'NODE', 'WP'].map(tech => (
            <div key={tech} className="bg-gray-800 p-2 rounded">{tech}</div>
          ))}
        </div>
        
        <div className="text-left w-full space-y-4 mb-10">
          {['Responsive Design', 'Fast Performance', 'SEO Friendly', 'Modern UI/UX'].map(feature => (
            <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 size={18} className="text-blue-500" />
              {feature}
            </div>
          ))}
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold">
          Let's Build Together <ArrowRight size={18} />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className={`${project.title === 'E-commerce Website' ? 'md:col-span-2 lg:col-span-1' : ''} bg-[#1e293b] rounded-xl overflow-hidden hover:ring-2 ring-blue-500 transition-all`}>
            {project.title === 'E-commerce Website' ? (
              <div className="bg-white text-black h-full">
                <div className="flex justify-between items-center p-3 border-b text-xs">
                  <span className="font-bold text-sm">StyleHub</span>
                  <div className="flex gap-2 font-medium">
                    <span>Home</span><span>Shop</span><span>About</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 h-full">
                  <p className="text-[10px] uppercase text-gray-500">New Collection</p>
                  <h3 className="font-bold text-lg leading-tight mb-1">Style That<br/>Speaks You</h3>
                  <p className="text-[10px] text-gray-600 mb-3">Trendy Fashion | Best Quality</p>
                  <button className="bg-black text-white px-3 py-1 rounded text-xs">Shop Now</button>
                </div>
              </div>
            ) : (
              <>
                <div className="h-40 bg-gray-700 flex items-center justify-center text-gray-500">
                  Project Screenshot
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.category}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
