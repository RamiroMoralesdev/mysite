import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"

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
      </div>
    </section>
  )
}
