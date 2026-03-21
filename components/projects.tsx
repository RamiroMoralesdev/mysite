import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Gym Manager",
    description: "Mi primer SaaS completo, una aplicacion para gestionar gimnasios con funcionalidades revulocionarias en el mercado",
    image: "/gym-manager-preview.png",
    tags: ["React", "Typescript", "Supabase"],
    github: "#",
    demo: "https://gym-core-web.vercel.app/",
  },
  {
    title: "El Blog de Pelis",
    description: "Plataforma web de peliculas y series",
    image: "/blog-pelis-preview.png",
    tags: ["Astro", "KeyStatic", "TailwindCSS"],
    github: "#",
    demo: "https://elblogdepelis.vercel.app/",
  },
  {
    title: "Fito Theme",
    description: "Tema para VSCODE",
    image: "/fito-theme-preview.png",
    tags: [],
    github: "#",
    demo: "https://fito-theme.ramiromorales.com.ar/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Projects</h2>
        <div className="flex flex-col  gap-8 justify-center items-center">
          {projects.map((project) => (
            <Card key={project.title} className="min-w-full overflow-hidden bg-card border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto bg-muted">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="hover:cursor-no-drop inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
