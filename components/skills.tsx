"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Grid3x3, LayoutGrid, Code2, Database, Wrench, Palette, Server } from "lucide-react"
import { useState } from "react"

// Icon mapping for different technologies
const getSkillIcon = (skill: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    // Frontend
    "HTML": <Code2 className="w-4 h-4 text-orange-500" />,
    "CSS": <Palette className="w-4 h-4 text-blue-500" />,
    "JavaScript": <Code2 className="w-4 h-4 text-yellow-500" />,
    "TypeScript": <Code2 className="w-4 h-4 text-blue-600" />,
    
    // Frameworks & Libraries
    "ReactJs": <Code2 className="w-4 h-4 text-cyan-500" />,
    "Tailwind CSS": <Palette className="w-4 h-4 text-teal-500" />,
    "Astro": <Code2 className="w-4 h-4 text-orange-600" />,
    
    // Backend
    "MySQL": <Database className="w-4 h-4 text-blue-600" />,
    "PostgreSQL": <Database className="w-4 h-4 text-blue-700" />,
    "Supabase": <Database className="w-4 h-4 text-green-500" />,
    
    // Tools
    "Git": <Wrench className="w-4 h-4 text-orange-600" />,
    "Docker": <Wrench className="w-4 h-4 text-blue-500" />,
    "Postman": <Wrench className="w-4 h-4 text-orange-500" />,
    "Notion": <Wrench className="w-4 h-4 text-gray-600" />,
    "Sistemas basados en Linux": <Server className="w-4 h-4 text-yellow-600" />,

  
    // IA
    "ChatGPT": <Wrench className="w-4 h-4 text-green-600" />,
    "Claude Code": <Wrench className="w-4 h-4 text-orange-600" />,
    "Github Copilot": <Wrench className="w-4 h-4 text-blue-600" />,
    "n8n": <Wrench className="w-4 h-4 text-orange-400" />,

  }
  
  return icons[skill] || <Code2 className="w-4 h-4 text-gray-500" />
}

const skills = [
  {
    category: "Frontend",
    items: [
      "HTML - Semántica",
      "CSS - Estilos",
      "JavaScript - Dinamismo",
      "TypeScript - Tipado"
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "ReactJs - Componentes",
      "Tailwind CSS - UI rápida",
      "Astro - Optimización"
    ],
  },
  {
    category: "Automatizaciones y APIs",
    items: [
        "ChatGPT - IA conversacional",
        "Claude Code - IA código",
        "Github Copilot - Sugerencias código",
        "n8n - Automatización"
    ],
  },
  {
    category: "Backend",
    items: [
      "MySQL - Bases de datos relacionales",
      "PostgreSQL - Bases de datos relacionales",
      "Supabase - DB y Logica serverless"
    ],
  },
  {
    category: "Tools",
    items: [
        "Git - Versionado",
        "Docker - Contenedores",
        "Postman - Test APIs",
        "Notion - Organización",
        "Sistemas basados en Linux - Servidores"
    ],
  },
]

export function Skills() {
  const [viewMode, setViewMode] = useState<"cards" | "logos">("cards")

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "cards" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("cards")}
              className="transition-all"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "logos" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("logos")}
              className="transition-all"
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card key={skill.category} className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => {
                    const key = item.split(" - ")[0] || item;
                    return (
                      <li key={key} className="text-muted-foreground flex items-center gap-3">
                        {getSkillIcon(key)}
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.flatMap((skill) =>
              skill.items.map((item) => {
                const key = item.split(" - ")[0] || item;
                return (
                  <div
                    key={key}
                    className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                      {getSkillIcon(key)}
                    </div>
                    <span className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  )
}
