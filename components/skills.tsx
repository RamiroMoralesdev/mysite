"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Grid3x3, LayoutGrid } from "lucide-react"
import { useState } from "react"

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Vercel", "Figma", "VS Code"],
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Team Work", "Communication", "Adaptability"],
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
                    <li key={item} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
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
                    <span className="text-2xl font-bold text-accent">{item.charAt(0)}</span>
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
