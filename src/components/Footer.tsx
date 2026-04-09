const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-heading text-xl font-bold mb-3">
              Sorrir<span className="text-primary">Odonto</span>
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Cuidando do seu sorriso com excelência, tecnologia e carinho há mais de 15 anos.
            </p>
          </div>
          <div>
            <p className="font-medium mb-3 text-sm">Links Rápidos</p>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Início", "Serviços", "Sobre", "Depoimentos", "Contato"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium mb-3 text-sm">Horário</p>
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p>Segunda a Sexta: 8h – 18h</p>
              <p>Sábado: 8h – 12h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} SorrirOdonto. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
