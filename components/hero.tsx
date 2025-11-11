export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Animated grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        {/* Scanning line effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
        </div>
      </div>

      <div className="max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">Ramiro Morales</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Desarrollador Front-end, con conocimientos basicos en Backend, especializado en crear experiencias web modernas y accesibles
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Contáctame
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  )
}
