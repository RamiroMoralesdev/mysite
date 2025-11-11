import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
    image: "/modern-ecommerce-website.png",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Manager App",
    description: "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
    image: "/task-management-dashboard.png",
    tags: ["React", "Node.js", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Sistema de gestión de contenido para portfolios creativos con editor visual y generación de sitios estáticos.",
    image: "/creative-portfolio-cms.jpg",
    tags: ["Vue.js", "GraphQL", "MongoDB"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 md:px-12 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden bg-card border-border">
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
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
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
