import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const studies = [
  {
    degree: "Tecnicatura Universitaria en Programacion",
    institution: "UTN",
    status: "Cursando",
    startYear: "2024",
    endYear: "2027",
  },
]

export function Studies() {
  return (
    <section id="studies" className="min-h-screen flex justify-center items-center px-6 md:px-12 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <Card key={study.degree} className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{study.degree}</h3>
                  <p className="text-base text-muted-foreground font-medium mb-1">{study.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded">{study.status}</span>
                    <span>•</span>
                    <span>
                      {study.startYear} - {study.endYear}
                    </span>
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
