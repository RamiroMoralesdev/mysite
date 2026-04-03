"use client"

import { useEffect, useState } from "react"

const terminalLines = [
  { type: "command", text: "$ whoami" },
  { type: "output", text: "Full Stack Developer" },
  { type: "command", text: "$ cat bio.txt" },
  {
    type: "output",
    text: "No solo desarrollo interfaces. Construyo productos digitales con un objetivo claro: convertir ideas en soluciones reales que generen impacto.",
  },
  {
    type: "output",
    text: "Soy Frontend Developer & Designer, enfocado en crear experiencias modernas, funcionales y centradas en el usuario, combinando diseño, rendimiento y buenas prácticas.",
  },
  {
    type: "output",
    text: "Me interesa crear, aprender y llevar ideas a la realidad. No me conformo con lo básico: busco construir soluciones que funcionen, escalen y aporten valor real.",
  },
  { type: "cursor", text: "" },
]

export function About() {
  const [visibleLines, setVisibleLines] = useState<number>(0)

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  return (
    <section id="about" className="min-h-screen flex justify-center items-center px-6 md:px-12 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">About me</h2>

        {/* Terminal Window */}
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
          {/* Terminal Header */}
          <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-muted-foreground ml-2 font-mono">terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="bg-card p-6 font-mono text-sm min-h-[400px]">
            {terminalLines.slice(0, visibleLines).map((line, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  line.type === "command"
                    ? "text-accent font-semibold"
                    : line.type === "output"
                      ? "text-foreground ml-2"
                      : ""
                }`}
              >
                {line.type === "cursor" ? (
                  <span className="text-accent">
                    $ <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
                  </span>
                ) : (
                  line.text
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
