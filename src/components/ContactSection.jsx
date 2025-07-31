import { Mail, Phone,MapPin, Send} from "lucide-react";
import {cn} from "../lib/utils";


export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.prevenDefault();            
        setTimeout(() => {
            
        },1500);

    }

    return <section id="contact" 
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                If you have any questions or just want to say hi, feel free to reach out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:vishalvishaal55@gmail.com" 
                                className="text-muted-foreground hover:text-primary transition-colors"> 
                                vishalvishaal55@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel: +91 12345 67890" 
                                className="text-muted-foreground hover:text-primary transition-colors"> 
                                +91 12345 67890
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a href="tel: +91 12345 67890" 
                                className="text-muted-foreground hover:text-primary transition-colors"> 
                                Dubai Mainroad, Dubai, UAE
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Contact Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" target="_blank">
                                <Mail/>
                            </a>
                            <a href="#" target="_blank">
                                <Phone/>
                            </a>
                            <a href="#" target="_blank">
                                <MapPin/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-md shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Name</label>
                            <input type="text" id="name" name="name" required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Name...?"/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Email</label>
                            <input type="email" id="email" name="email" required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Email...?"/>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                            <textarea id="message" name="message" required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd like to talk abt..."></textarea>
                        </div>
                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>Send Message <Send size={16}/></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}