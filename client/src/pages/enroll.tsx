import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
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
import {
  CheckCircle2,
  Clock,
  Award,
  Users,
  Zap,
  Brain,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";

const enrollSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  background: z.string().min(1, "Please select your background"),
  goals: z
    .string()
    .min(10, "Please tell us about your goals (at least 10 characters)"),
});

type EnrollFormData = z.infer<typeof enrollSchema>;

const benefits = [
  { icon: Brain, text: "24 hands-on AI sessions" },
  { icon: Clock, text: "3-month structured program" },
  { icon: Award, text: "IIAI certificate included" },
  { icon: Zap, text: "Immediate skill application" },
  { icon: Users, text: "Expert-led training" },
  { icon: Star, text: "4.9/5 learner rating" },
];

export default function Enroll() {
  const { toast } = useToast();

  const form = useForm<EnrollFormData>({
    resolver: zodResolver(enrollSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      background: "",
      goals: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: EnrollFormData) => {
      const formData = new FormData();
      formData.append("access_key", "adecc064-4c64-42c4-9dea-948ce408880f");
      formData.append(
        "subject",
        "New Enrolment Form Submission – IIAI Website"
      );
      formData.append("from_name", "IIAI Website");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("background", data.background);
      formData.append("goals", data.goals);
      formData.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Form submission failed");
      }

      return result;
    },
    onSuccess: () => {
      toast({
        title: "Enrollment submitted!",
        description: "Thank you, your enrolment has been submitted successfully.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: EnrollFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="overflow-x-hidden">
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(29,78,216,0.25),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-medium text-blue-300">
              Limited Seats Available
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Enroll in AI Learning by IIAI
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Secure your spot in the next session and start your journey to
            becoming AI-ready.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4" variant="secondary">
                Apply Now
              </Badge>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Complete Your Enrollment
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Fill in your details and we'll contact you within 24 hours to
                confirm your spot.
              </p>

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
                              data-testid="input-enroll-name"
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
                              data-testid="input-enroll-email"
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
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              data-testid="input-enroll-phone"
                              placeholder="+1 (555) 000-0000"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="background"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Background</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-enroll-background">
                                <SelectValue placeholder="Select your background" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="fresh-graduate">
                                Fresh Graduate
                              </SelectItem>
                              <SelectItem value="young-professional">
                                Young Professional
                              </SelectItem>
                              <SelectItem value="experienced-professional">
                                Experienced Professional
                              </SelectItem>
                              <SelectItem value="small-business-owner">
                                Small Business Owner
                              </SelectItem>
                              <SelectItem value="career-switcher">
                                Career Switcher
                              </SelectItem>
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
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Goals</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            data-testid="textarea-enroll-goals"
                            placeholder="What do you hope to achieve with AI? What business tasks would you like to automate or improve?"
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    data-testid="button-enroll-submit"
                    className="w-full gap-2 bg-blue-600 text-white border-0"
                    size="lg"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      "Submitting..."
                    ) : (
                      <>
                        Secure My Spot
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  {mutation.isSuccess && (
                    <div
                      data-testid="enroll-success"
                      className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                          Thank you, your enrolment has been submitted successfully.
                        </p>
                        <p className="text-xs text-emerald-600 dark:text-emerald-500">
                          Our team will contact you within 24 hours to confirm your
                          spot and send session details.
                        </p>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    By enrolling, you agree to our Terms of Service and Privacy
                    Policy. We'll never share your information.
                  </p>
                </form>
              </Form>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-4" variant="secondary">
                  What's Included
                </Badge>
                <h2 className="text-2xl font-bold text-foreground mb-5">
                  Everything in One Session
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b, idx) => (
                  <div
                    key={b.text}
                    data-testid={`benefit-${idx}`}
                    className="flex items-center gap-2.5 p-3 rounded-lg border border-border bg-card"
                  >
                    <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-foreground">
                      {b.text}
                    </span>
                  </div>
                ))}
              </div>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground mb-3">
                    What Happens Next
                  </h3>
                  <div className="space-y-3">
                    {[
                      { step: "1", text: "Submit your enrollment form" },
                      { step: "2", text: "Receive confirmation email within 24 hours" },
                      { step: "3", text: "Get session link and preparation guide" },
                      { step: "4", text: "Attend your first AI session" },
                      { step: "5", text: "Receive your IIAI certificate" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0">
                          {item.step}
                        </div>
                        <span className="text-sm text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0">
                      RM
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-foreground italic leading-relaxed mb-2">
                        "I enrolled as a fresh graduate with zero AI experience. 90
                        minutes later I had skills on my resume that got me hired
                        within 3 weeks."
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Rahul Mehta — Business Graduate, Placed at TechVentures
                      </p>
                    </div>
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
