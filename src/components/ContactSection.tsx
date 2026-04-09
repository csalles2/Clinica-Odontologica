import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Contato</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Agende sua consulta
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato conosco e agende sua avaliação. Estamos prontos para cuidar do seu sorriso.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Rua das Flores, 123 — São Paulo, SP" },
                { icon: Phone, label: "(11) 99999-9999" },
                { icon: Mail, label: "contato@sorrirodonto.com.br" },
                { icon: Clock, label: "Seg-Sex: 8h–18h | Sáb: 8h–12h" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-lg p-8 border border-border/50 shadow-[var(--shadow-card)] space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nome</label>
                <Input placeholder="Seu nome completo" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Telefone</label>
                <Input placeholder="(11) 99999-9999" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">E-mail</label>
              <Input type="email" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
              <Textarea placeholder="Conte-nos como podemos ajudar..." rows={4} />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Enviar Mensagem
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
