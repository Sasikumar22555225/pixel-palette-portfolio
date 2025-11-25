import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import contactPackets from "@/assets/contact-packets.jpg";

import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert([
        { name: values.name, email: values.email, message: values.message },
      ]);

      if (error) throw error;

      await emailjs.send(
        "service_ou2jqvq",
        "template_lgfi6bc",
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          to_email: "rsasikbeece1702@gmail.com",
        },
        "uix25K1R152e0JhnK"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-subtle relative overflow-hidden"
      ref={ref}
      style={{
        backgroundImage: `url(${contactPackets})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      <div className="absolute inset-0 circuit-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-primary glow-text">Contact Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto mb-12 rounded-full neon-pulse" />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            
            {/* LEFT SIDE CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Interested in collaborating on electronics or networking projects?
                Feel free to reach out!
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, title: "Email", value: "rsasikbeece1702@gmail.com", link: "mailto:rsasikbeece1702@gmail.com" },
                  { icon: Phone, title: "Phone", value: "+91 9894871703", link: "tel:+919894871703" },
                  { icon: MapPin, title: "Location", value: "Madurai, TN", link: null },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="p-4 neon-border bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-neon transition-all"
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>

                        <div>
                          <p className="text-sm text-muted-foreground">{item.title}</p>

                          {/* CLICKABLE EMAIL / PHONE */}
                          {item.link ? (
                            <a
                              href={item.link}
                              className="font-semibold text-foreground hover:text-primary transition-all underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-semibold text-foreground">{item.value}</p>
                          )}
                        </div>

                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-8 neon-border bg-card/50 backdrop-blur-sm shadow-glow">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="neon-border bg-background/50 focus:shadow-glow transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              className="neon-border bg-background/50 focus:shadow-glow transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project..."
                              rows={5}
                              {...field}
                              className="neon-border bg-background/50 focus:shadow-glow transition-all resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-primary hover:shadow-neon transition-all text-white neon-pulse"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Send size={20} />
                          </motion.div>
                        ) : (
                          <>
                            <Send size={20} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>

                  </form>
                </Form>
              </Card>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
