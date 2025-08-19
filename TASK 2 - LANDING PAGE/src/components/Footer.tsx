const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">LandingLab</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Master web development through beautiful, responsive landing pages. 
              Learn HTML, CSS, and design fundamentals with hands-on projects.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Learn</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">HTML Fundamentals</a></li>
              <li><a href="#" className="hover:text-background transition-colors">CSS Mastery</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Responsive Design</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Design Principles</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Projects</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Portfolio Sites</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Business Pages</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Creative Layouts</a></li>
              <li><a href="#" className="hover:text-background transition-colors">E-commerce</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">
            © 2024 LandingLab. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;