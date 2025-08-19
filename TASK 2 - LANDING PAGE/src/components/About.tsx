import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Perfect for 
                <span className="text-transparent bg-clip-text bg-gradient-primary"> Beginners & Beyond</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Landing pages are the ideal starting point for web development. They teach you fundamental 
                concepts while allowing creative expression and practical application of design principles.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Learn by Doing</h3>
                  <p className="text-muted-foreground">Apply HTML and CSS skills immediately through hands-on projects that build real-world experience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Design Fundamentals</h3>
                  <p className="text-muted-foreground">Master spacing, typography, color theory, and layout principles that make websites visually appealing.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Professional Results</h3>
                  <p className="text-muted-foreground">Create portfolio-worthy projects that showcase your skills to potential employers or clients.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Start Your Journey
              </Button>
              <Button variant="outline-hero" size="lg">
                View Curriculum
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
              <div className="space-y-6">
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">What You'll Build</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Responsive navigation headers</li>
                    <li>• Eye-catching hero sections</li>
                    <li>• Organized content layouts</li>
                    <li>• Professional footers</li>
                  </ul>
                </div>
                
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-2">Skills You'll Master</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• HTML semantic structure</li>
                    <li>• CSS Grid & Flexbox</li>
                    <li>• Responsive design patterns</li>
                    <li>• Modern design principles</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;