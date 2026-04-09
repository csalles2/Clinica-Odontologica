import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Maria Silva", text: "Atendimento impecável! Me senti acolhida desde a recepção. O resultado do clareamento superou todas as expectativas.", rating: 5 },
  { name: "João Santos", text: "Profissionais extremamente competentes. Fiz meu implante aqui e recomendo a todos. Sem dor e resultado perfeito.", rating: 5 },
  { name: "Ana Oliveira", text: "Ambiente moderno e equipe muito atenciosa. Minha filha perdeu o medo de dentista depois que começamos a vir aqui.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Depoimentos</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos pacientes dizem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 border border-border/50 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
