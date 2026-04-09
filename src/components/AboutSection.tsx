import { motion } from "framer-motion";
import { Award, Users, Clock, CheckCircle2 } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Anos de experiência" },
  { icon: Users, value: "10.000+", label: "Pacientes atendidos" },
  { icon: Clock, value: "98%", label: "Satisfação" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Sobre Nós</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Excelência em odontologia há mais de 15 anos
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A SorrirOdonto nasceu com a missão de oferecer atendimento odontológico humanizado, 
              unindo tecnologia de ponta e profissionais altamente qualificados para proporcionar 
              a melhor experiência aos nossos pacientes.
            </p>

            <ul className="space-y-3 mb-8">
              {["Equipamentos de última geração", "Equipe especializada e acolhedora", "Ambiente confortável e moderno", "Atendimento personalizado"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 bg-accent/50 rounded-lg">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
