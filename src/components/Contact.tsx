import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "avivsking10@gmail.com", href: "mailto:hello@yourname.com" },
    { icon: Phone, label: "Phone", value: "+972586300406", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "Netanya,Israel", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Avivs22" },
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-in-left">
          <span className="bg-gradient-cyber bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-cyber mx-auto mb-8 rounded-full" />
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Let's discuss your project and bring your ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300 slide-in-left">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Send Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <Input 
                  className="glass border-border/50 focus:border-primary transition-colors" 
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <Input 
                  className="glass border-border/50 focus:border-primary transition-colors" 
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input 
                type="email" 
                className="glass border-border/50 focus:border-primary transition-colors" 
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input 
                className="glass border-border/50 focus:border-primary transition-colors" 
                placeholder="Project Discussion"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea 
                className="glass border-border/50 focus:border-primary transition-colors min-h-[120px]" 
                placeholder="Tell me about your project..."
              />
            </div>
            
            <Button 
              className="w-full bg-primary hover:bg-primary/90 hover:shadow-neon transition-all duration-300"
              size="lg"
            >
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8 slide-in-right">
          <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={item.label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <a 
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Follow Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 hover:shadow-neon transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;