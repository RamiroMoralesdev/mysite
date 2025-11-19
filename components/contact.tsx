"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/RamiroMoralesdev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ramimorales/", label: "LinkedIn" },
]

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex justify-center items-center px-6 md:px-12 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Contact</h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          ¿Tienes un proyecto en mente o simplemente quieres conectar? Me encantaría escucharte.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Envíame un mensaje</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Nombre" className="bg-background" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-background" />
              </div>
              <div>
                <Textarea placeholder="Mensaje" rows={5} className="bg-background resize-none" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground">Enviar mensaje</Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Conéctate conmigo</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a target="blank"
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 p-3 bg-muted hover:bg-muted/70 rounded-lg transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </Card>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGw2djl1NDIwa2h2azB6MHlycjZkeWp6and5MzFtMnVzNHd2cmN3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jBOOXxSJfG8kqMxT11/giphy.gif" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
