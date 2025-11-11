import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Platzi",
    date: "2024",
    description: "Certificación completa en desarrollo web full stack con React y Node.js",
  },
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Certificación profesional en desarrollo de aplicaciones en AWS",
  },
  {
    title: "Advanced TypeScript",
    issuer: "Udemy",
    date: "2023",
    description: "Curso avanzado de TypeScript con patrones de diseño y mejores prácticas",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Coursera",
    date: "2022",
    description: "Fundamentos de diseño de interfaces y experiencia de usuario",
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="min-h-screen flex items-center px-6 md:px-12 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Certificates</h2>

        <Card className="p-4 bg-card border-border mb-8">
          <div className="w-full h-[600px] rounded-lg overflow-hidden">
            <iframe
              src="https://drive.google.com/embeddedfolderview?id=1ORERFa1w6uE6BJiRov7WmZ_mJYwyOf9A#grid"
              className="w-full h-full border-0"
              title="Certificates Gallery"
            />
          </div>
        </Card>
        {/* End of change */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.title} className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
