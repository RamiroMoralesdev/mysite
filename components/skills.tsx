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
    "Bootstrap": <Palette className="w-4 h-4 text-purple-600" />,
    "Astro": <Code2 className="w-4 h-4 text-orange-600" />,
    
    // CMS
    "WordPress": <Server className="w-4 h-4 text-blue-700" />,
    "Strapi": <Server className="w-4 h-4 text-indigo-600" />,
    "KeyStatic": <Server className="w-4 h-4 text-green-600" />,
    
    // Backend
    "Python": <Code2 className="w-4 h-4 text-blue-500" />,
    "Java": <Code2 className="w-4 h-4 text-red-600" />,
    "MySQL": <Database className="w-4 h-4 text-blue-600" />,
    "PostgreSQL": <Database className="w-4 h-4 text-blue-700" />,
    "Supabase": <Database className="w-4 h-4 text-green-500" />,
    
    // Tools
    "Git": <Wrench className="w-4 h-4 text-orange-600" />,
    "Docker": <Wrench className="w-4 h-4 text-blue-500" />,
    "Vercel": <Server className="w-4 h-4 text-black dark:text-white" />,
    "Figma": <Palette className="w-4 h-4 text-purple-500" />,
    "VS Code": <Code2 className="w-4 h-4 text-blue-600" />,
    "Postman": <Wrench className="w-4 h-4 text-orange-500" />,
    "Dbeaver": <Database className="w-4 h-4 text-blue-500" />,
    "Netbeans": <Code2 className="w-4 h-4 text-green-600" />,
    "Notion": <Wrench className="w-4 h-4 text-gray-600" />,
    "Sistemas basados en Linux": <Server className="w-4 h-4 text-yellow-600" />,
  }
  
  return icons[skill] || <Code2 className="w-4 h-4 text-gray-500" />
}

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript" ],
  },
  {
    category: "Frameworks & Libraries",
    items: ["ReactJs", "Tailwind CSS", "Bootstrap", "Astro"],
  },
  {
    category: "CMS",
    items: ["WordPress", "Strapi", "KeyStatic"],
  },
  {
    category: "Backend",
    items: ["Python", "Java", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Vercel", "Figma", "VS Code", "Postman", "Dbeaver", "Netbeans", "Notion", "Sistemas basados en Linux"],
  },
]

export function Skills() {
  const [viewMode, setViewMode] = useState<"cards" | "logos">("cards")

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 md:px-12 py-20">
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
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-center gap-3">
                      {getSkillIcon(item)}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.flatMap((skill) =>
              skill.items.map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    {getSkillIcon(item)}
                  </div>
                  <span className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </div>
              )),
            )}
          </div>
        )}
      </div>
    </section>
  )
}
