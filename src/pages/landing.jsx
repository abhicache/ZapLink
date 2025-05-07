import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Zap, Link as LinkIcon, Sparkles, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Landing = () => {
  const linkRef = useRef(null);
  const statsRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Particle animation effect
  useEffect(() => {
    if (!heroRef.current) return;
    
    const canvas = document.createElement('canvas');
    canvas.className = 'absolute inset-0 z-0';
    heroRef.current.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = heroRef.current.offsetWidth;
      canvas.height = heroRef.current.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`,
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden">
        {/* Floating elements animation */}
        <div className="absolute top-20 left-10 w-12 h-12 rounded-full bg-purple-500/30 animate-float1"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-indigo-500/20 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-violet-500/20 animate-float3"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 animate-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Sparkles size={16} className="mr-2 text-yellow-300" />
            <span className="text-sm font-medium">Revolutionizing Link Management</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 leading-tight">
            <span className="inline-block transform hover:translate-y-[-5px] transition-transform">Shorten.</span>{' '}
            <span className="inline-block transform hover:translate-y-[-5px] transition-transform delay-100">Track.</span>{' '}
            <span className="inline-block transform hover:translate-y-[-5px] transition-transform delay-200">Optimize.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100/90 max-w-3xl mx-auto">
            Create lightning-fast short links with powerful analytics and insights to supercharge your digital presence.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group rounded-full text-lg px-8 py-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg hover:shadow-indigo-500/40 transition-all duration-300">
              <Link to="/auth">
                Get Started Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10">
              <Link to="#features">
                Learn More
                <ChevronRight className="ml-1 transition-all" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Animated Visual */}
        <div className="relative w-full max-w-4xl mx-auto mt-16 perspective-1000">
          <div ref={linkRef} className="animate-on-scroll relative group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-xl border border-white/10 shadow-2xl p-4 md:p-8 hover:shadow-indigo-500/20 transition-all duration-500 transform hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 space-y-4">
                <div className="bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text text-xl font-semibold">Transform Your Links</div>
                <div className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg border border-slate-600/50">
                  <span className="text-slate-400">https://example.com/very-long-url-that-is-hard-to-share</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={20} className="text-yellow-400 animate-pulse" />
                  <span className="text-white font-medium">Becomes</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-indigo-900/50 rounded-lg border border-indigo-700/50 shadow-lg">
                  <LinkIcon size={18} className="text-indigo-400" />
                  <span className="text-indigo-200 font-medium">zap.link/awesome</span>
                </div>
              </div>
              
              <div className="hidden md:block h-40 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              
              <div className="flex-1 space-y-4">
                <div className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text text-xl font-semibold">Track Performance</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-700/40 border border-slate-600/40 rounded-lg p-3 text-center hover:bg-slate-700/60 transition-all">
                    <div className="text-2xl font-bold text-white">1,204</div>
                    <div className="text-sm text-slate-400">Total Clicks</div>
                  </div>
                  <div className="bg-slate-700/40 border border-slate-600/40 rounded-lg p-3 text-center hover:bg-slate-700/60 transition-all">
                    <div className="text-2xl font-bold text-white">65%</div>
                    <div className="text-sm text-slate-400">Mobile Users</div>
                  </div>
                </div>
                <div className="h-24 flex items-end">
                  <div className="h-1/3 w-1/6 bg-indigo-500/70 rounded-t-sm mx-0.5"></div>
                  <div className="h-2/3 w-1/6 bg-indigo-500/70 rounded-t-sm mx-0.5"></div>
                  <div className="h-1/2 w-1/6 bg-indigo-500/70 rounded-t-sm mx-0.5"></div>
                  <div className="h-full w-1/6 bg-indigo-500/70 rounded-t-sm mx-0.5"></div>
                  <div className="h-3/4 w-1/6 bg-indigo-500/70 rounded-t-sm mx-0.5"></div>
                  <div className="h-1/3 w-1/6 bg-indigo-500/70 rounded-t-sm mx-0.5"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Powerful Features</h2>
            <p className="text-xl text-purple-100/80 max-w-3xl mx-auto">All the tools you need to manage, track, and optimize your links in one powerful platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={28} className="text-yellow-400" />,
                title: "Lightning Fast",
                description: "Create short links in seconds with our intuitive interface and blazing-fast infrastructure."
              },
              {
                icon: <BarChart3 size={28} className="text-indigo-400" />,
                title: "Detailed Analytics",
                description: "Track clicks, locations, devices, and more with our comprehensive analytics dashboard."
              },
              {
                icon: <LinkIcon size={28} className="text-purple-400" />,
                title: "Custom Links",
                description: "Create memorable, branded links that reflect your identity and increase click-through rates."
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className={cn(
                  "animate-on-scroll bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:shadow-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]",
                  i === 0 && "rounded-tl-3xl",
                  i === 2 && "rounded-br-3xl"
                )}
              >
                <div className="mb-4 p-3 w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-purple-100/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div ref={statsRef} className="animate-on-scroll mt-24 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10M+", label: "Links Created" },
                { value: "5B+", label: "Total Clicks" },
                { value: "99.9%", label: "Uptime" },
                { value: "2,500+", label: "Happy Users" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">{stat.value}</div>
                  <div className="text-sm text-purple-100/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 md:px-8 relative">
        <div className="animate-on-scroll max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-indigo-900/80 to-violet-900/80 rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-indigo-500/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Links?</h2>
            <p className="text-xl text-purple-100/80 mb-8 max-w-2xl mx-auto">Join thousands of marketers and content creators who use ZapLink to optimize their online presence.</p>
            
            <Button asChild size="lg" className="rounded-full text-lg px-10 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
              <Link to="/auth">
                Start for Free
                <Zap className="ml-2" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-purple-100/70">No credit card required</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Zap size={24} className="text-yellow-400 mr-2" />
            <span className="text-xl font-bold">ZapLink</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-purple-100/70">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <div>© 2025 ZapLink. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* Add global CSS for animations */}
      <style jsx="true">{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(15deg); }
        }
        .animate-float1 {
          animation: float1 8s infinite ease-in-out;
        }
        .animate-float2 {
          animation: float2 10s infinite ease-in-out;
        }
        .animate-float3 {
          animation: float3 12s infinite ease-in-out;
        }
        .animate-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Landing;