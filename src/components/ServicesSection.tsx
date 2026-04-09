import { motion } from "framer-motion";
import { Smile, Sparkles, Shield, Heart, Scan, Syringe } from "lucide-react";

const services = [
  { icon: Smile, title: "Ortodontia", desc: "Aparelhos fixos, móveis e alinhadores invisíveis para um sorriso perfeito." },
  { icon: Sparkles, title: "Clareamento", desc: "Tratamentos profissionais para devolver a brancura natural dos seus dentes." },
  { icon: Shield, title: "Implantes", desc: "Implantes de última geração com materiais biocompatíveis e alta durabilidade." },
  { icon: Heart, title: "Endodontia", desc: "Tratamento de canal indolor com tecnologia avançada e precisão." },
  { icon: Scan, title: "Radiologia Digital", desc: "Diagnósticos precisos com equipamentos de imagem de alta resolução." },
  { icon: Syringe, title: "Estética Dental", desc: "Lentes de contato, facetas e restaurações para um sorriso harmonioso." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Nossos Serviços</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cuidado completo para o seu sorriso
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de tratamentos odontológicos com excelência e tecnologia.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card rounded-lg p-8 hover:shadow-[var(--shadow-card)] transition-shadow duration-300 border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
