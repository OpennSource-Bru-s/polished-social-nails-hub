import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Instagram, Facebook, MessageCircle, Calendar, Sparkles, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-nails.jpg";

const Index = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com/polishednails",
      followers: "12.5K"
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://facebook.com/polishednails",
      followers: "8.2K"
    },
    {
      name: "TikTok",
      icon: <MessageCircle className="h-5 w-5" />,
      url: "https://tiktok.com/@polishednails",
      followers: "25.1K"
    }
  ];

  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Professional Quality",
      description: "Premium products and expert techniques for flawless results"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Personalized Care",
      description: "Tailored services to match your style and preferences"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Experienced Team",
      description: "Certified nail technicians with years of expertise"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Absolutely love my nails! The attention to detail is incredible."
    },
    {
      name: "Jessica L.",
      rating: 5,
      text: "Best nail salon in town. Always leave feeling pampered and beautiful."
    },
    {
      name: "Emily R.",
      rating: 5,
      text: "Amazing nail art and such a relaxing atmosphere. Highly recommend!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Polished Nails
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/prices">
                <Button variant="ghost">Prices</Button>
              </Link>
              <Link to="/enquiry">
                <Button variant="hero">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-20 flex items-center min-h-[70vh]">
            <div className="max-w-3xl text-white animate-fade-in">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                ✨ Premium Nail Care
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Beautiful Nails,
                <span className="block text-primary-glow">Beautiful You</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Transform your nails with our expert artistry, premium products, and personalized care
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/enquiry">
                  <Button variant="hero" size="lg" className="animate-float">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/prices">
                  <Button variant="elegant" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    View Prices
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Polished Nails</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our commitment to excellence and attention to detail
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Follow Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See our latest work and get inspired for your next nail design
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="hover:shadow-glow hover:scale-105 transition-all duration-300 bg-gradient-card">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      {social.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{social.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{social.followers} followers</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow Us
                    </Button>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from real people who love their nails
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-primary-foreground shadow-glow max-w-4xl mx-auto animate-fade-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Perfect Nails?</h2>
              <p className="text-xl mb-8 opacity-90">
                Book your appointment today and let us create the nail design of your dreams
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/enquiry">
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                </Link>
                <Link to="/prices">
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    View All Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Polished Nails</span>
              </div>
              <p className="text-muted-foreground">
                Your destination for beautiful, professional nail care and artistic designs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/prices" className="block text-muted-foreground hover:text-primary transition-colors">
                  Services & Pricing
                </Link>
                <Link to="/enquiry" className="block text-muted-foreground hover:text-primary transition-colors">
                  Book Appointment
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+1 (555) 123-NAIL</p>
                <p>info@polishednails.com</p>
                <p>123 Beauty Lane<br />Salon District, SD 12345</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Polished Nails. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
