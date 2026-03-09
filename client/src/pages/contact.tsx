import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="overflow-x-hidden">
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(29,78,216,0.2),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">Contact / Talk to Advisor</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Talk to an Advisor
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Have questions about the 3-month program? Our team is ready to answer and help you take the next step.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4" variant="secondary">Send a Message</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-6">We'll respond within 24 hours</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              data-testid="input-contact-name"
                              placeholder="John Smith"
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              data-testid="input-contact-email"
                              placeholder="john@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              data-testid="input-contact-phone"
                              placeholder="+1 (555) 000-0000"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-contact-subject">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="enrollment">Program Enrollment</SelectItem>
                              <SelectItem value="corporate">Corporate Training</SelectItem>
                              <SelectItem value="curriculum">Curriculum Questions</SelectItem>
                              <SelectItem value="pricing">Pricing & Payment</SelectItem>
                              <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            data-testid="textarea-contact-message"
                            placeholder="Tell us what you'd like to know..."
                            rows={5}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    data-testid="button-contact-submit"
                    className="w-full gap-2"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {mutation.isSuccess && (
                    <div data-testid="contact-success" className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <p className="text-sm text-emerald-700 dark:text-emerald-400">Message sent! We'll be in touch within 24 hours.</p>
                    </div>
                  )}
                </form>
              </Form>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-4" variant="secondary">Contact Information</Badge>
                <h2 className="text-2xl font-bold text-foreground mb-6">Reach Us Directly</h2>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, title: "Email", value: "info@ailearning.iiel.edu", desc: "Best for detailed inquiries" },
                  { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", desc: "Mon-Fri, 9am-6pm" },
                  { icon: MapPin, title: "Location", value: "IIEL Campus, Technology District", desc: "Visit us for in-person sessions" },
                  { icon: Clock, title: "Response Time", value: "Within 24 Hours", desc: "We respond to all messages" },
                ].map((item) => (
                  <div key={item.title} data-testid={`contact-info-${item.title.toLowerCase()}`} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{item.title}</p>
                      <p className="font-semibold text-foreground text-sm">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground mb-3">Corporate & Group Training</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Looking to train your team? We offer group sessions, corporate workshops, and custom curriculum design for organizations of all sizes.
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      "Groups of 5+ with special rates",
                      "Custom session scheduling",
                      "Tailored curriculum for your industry",
                      "On-site or virtual delivery",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span className="text-xs text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
