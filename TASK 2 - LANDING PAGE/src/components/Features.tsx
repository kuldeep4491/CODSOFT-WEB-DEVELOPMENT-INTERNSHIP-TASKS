import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Responsive Columns",
      description: "Learn to create flexible column layouts that adapt to any screen size using modern CSS Grid and Flexbox techniques.",
      icon: "📱"
    },
    {
      title: "Perfect Alignment",
      description: "Master the art of proper spacing, padding, and alignment to create visually appealing and professional layouts.",
      icon: "📐"
    },
    {
      title: "Color Harmony",
      description: "Discover how to choose and implement cohesive color palettes that enhance user experience and brand identity.",
      icon: "🎨"
    },
    {
      title: "Section Organization",
      description: "Structure your content with clear headers, organized sections, and logical flow that guides users naturally.",
      icon: "📋"
    },
    {
      title: "CSS Mastery",
      description: "Avoid overlapping elements and learn advanced CSS techniques for clean, maintainable, and scalable code.",
      icon: "⚡"
    },
    {
      title: "Creative Freedom",
      description: "Unleash your creativity while following best practices to create unique and engaging web experiences.",
      icon: "✨"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Build Amazing Pages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic HTML structure to advanced CSS styling, master all the essential skills 
            for creating stunning, responsive landing pages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 animate-fade-in border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;