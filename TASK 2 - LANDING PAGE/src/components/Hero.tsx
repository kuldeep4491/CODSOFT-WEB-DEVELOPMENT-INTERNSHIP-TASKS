import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master Web Development with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-glow"> Beautiful Landing Pages</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Learn HTML, CSS, and modern web design through hands-on projects. 
            Create stunning columns, perfect alignments, and responsive layouts while unleashing your creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="shadow-glow">
              Start Building Now
            </Button>
            <Button variant="outline-hero" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
              View Examples
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
            <div className="space-y-2">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Design Patterns</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Learning Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;