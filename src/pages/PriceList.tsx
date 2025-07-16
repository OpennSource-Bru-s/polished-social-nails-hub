import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const PriceList = () => {
  const services = [
    {
      category: "Classic Manicures",
      icon: <Sparkles className="h-6 w-6" />,
      services: [
        { name: "Classic Manicure", price: "$35", duration: "45 min", description: "Nail shaping, cuticle care, base coat, polish, top coat" },
        { name: "French Manicure", price: "$40", duration: "50 min", description: "Classic white tips with natural pink base" },
        { name: "Gel Manicure", price: "$45", duration: "60 min", description: "Long-lasting gel polish that chips less" },
        { name: "Dip Powder Manicure", price: "$50", duration: "75 min", description: "Durable powder coating for extended wear" }
      ]
    },
    {
      category: "Nail Art & Design",
      icon: <Star className="h-6 w-6" />,
      featured: true,
      services: [
        { name: "Simple Nail Art", price: "$55", duration: "90 min", description: "Basic designs, stripes, dots, or gradients" },
        { name: "Complex Nail Art", price: "$75", duration: "120 min", description: "Detailed artwork, patterns, or 3D elements" },
        { name: "Holiday/Seasonal Designs", price: "$65", duration: "105 min", description: "Themed designs for special occasions" },
        { name: "Custom Nail Art", price: "$85", duration: "150 min", description: "Personalized designs created just for you" }
      ]
    },
    {
      category: "Pedicures",
      icon: <Clock className="h-6 w-6" />,
      services: [
        { name: "Classic Pedicure", price: "$40", duration: "60 min", description: "Foot soak, nail trimming, cuticle care, polish" },
        { name: "Spa Pedicure", price: "$55", duration: "75 min", description: "Includes exfoliation, massage, and moisturizing" },
        { name: "Gel Pedicure", price: "$50", duration: "70 min", description: "Long-lasting gel polish for toes" },
        { name: "Luxury Pedicure", price: "$70", duration: "90 min", description: "Full spa treatment with premium products" }
      ]
    },
    {
      category: "Add-On Services",
      icon: <Sparkles className="h-6 w-6" />,
      services: [
        { name: "Nail Repair", price: "$5", duration: "10 min", description: "Single nail repair or replacement" },
        { name: "Hand Massage", price: "$10", duration: "15 min", description: "Relaxing hand and arm massage" },
        { name: "Cuticle Treatment", price: "$8", duration: "10 min", description: "Deep conditioning cuticle care" },
        { name: "Nail Strengthening", price: "$12", duration: "15 min", description: "Treatment to strengthen weak nails" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Our Services & Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Professional nail care with premium products and artistic flair
            </p>
            <div className="bg-gradient-card p-4 rounded-lg shadow-soft inline-block">
              <p className="text-sm text-muted-foreground">
                All prices include consultation • Group bookings available • Gift certificates available
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            {services.map((category, index) => (
              <Card 
                key={category.category} 
                className={`shadow-elegant animate-fade-in ${category.featured ? 'ring-2 ring-primary/20 bg-gradient-card' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{category.category}</CardTitle>
                        {category.featured && (
                          <Badge variant="secondary" className="mt-1">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.services.map((service) => (
                      <div 
                        key={service.name}
                        className="bg-card p-4 rounded-lg border border-border/50 hover:shadow-soft transition-all duration-300"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg">{service.name}</h4>
                          <span className="text-xl font-bold text-primary">{service.price}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration}
                        </div>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <Card className="bg-gradient-primary text-primary-foreground shadow-glow max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                <p className="mb-6 opacity-90">
                  Transform your nails with our professional services. Book your appointment today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/enquiry">
                    <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      Book Appointment
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Call: +1 (555) 123-NAIL
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                <p className="text-sm text-muted-foreground">
                  Please give 24 hours notice for cancellations to avoid fees
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Group Bookings</h4>
                <p className="text-sm text-muted-foreground">
                  Special rates available for parties of 4 or more
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Loyalty Program</h4>
                <p className="text-sm text-muted-foreground">
                  Earn points with every visit and redeem for free services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;