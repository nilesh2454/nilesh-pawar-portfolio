
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and see how we can work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:nilesh@example.com"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Send Email
            </a>
            <a
              href="tel:+1234567890"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
