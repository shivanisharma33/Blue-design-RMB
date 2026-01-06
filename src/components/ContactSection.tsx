import { motion } from 'framer-motion';
import Logo from './Logo';

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <h2 className="section-heading text-foreground mb-8">
              Get in touch
            </h2>
            <p className="body-text text-foreground/70 mb-8">
              Whether you're looking to buy, sell, or just want to chat about the 
              local market, we'd love to hear from you.
            </p>
            <div className="space-y-4">
              <a
                href="tel:0390174848"
                className="block text-2xl md:text-3xl font-light text-foreground hover:opacity-60 transition-opacity"
              >
                03 9017 4848
              </a>
              <a
                href="mailto:hello@rmb.com.au"
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@rmb.com.au
              </a>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
                Address
              </h3>
              <p className="body-text text-foreground/80">
                Shop 1, 123 Main Street<br />
                Doreen VIC 3754
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
                Office Hours
              </h3>
              <p className="body-text text-foreground/80">
                Monday - Friday: 9am - 5pm<br />
                Saturday: 9am - 12pm<br />
                Sunday: By appointment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
