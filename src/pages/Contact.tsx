import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // You can replace this with your preferred email service
      // For now, we'll use a simple mailto link
      const mailtoLink = `mailto:herman@comte.no?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mt-40 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Kontakt oss
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Har du spørsmål eller innspill om KI-merket? Send oss gjerne en
          melding.
        </p>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Send oss en melding</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Navn</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ditt navn"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-post</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="din@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Emne</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Hva gjelder meldingen?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Melding</Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Skriv din melding her..."
                rows={6}
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sender..." : "Send melding"}
            </Button>

            {submitStatus === "success" && (
              <p className="text-green-600 text-center">
                Takk for din melding! Vi vil svare så snart som mulig.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-red-600 text-center">
                Det oppstod en feil. Vennligst prøv igjen.
              </p>
            )}
          </form>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Kontaktinformasjon
        </h2>
        <div className="space-y-2 text-gray-600">
          <p>
            <strong>E-post:</strong>{" "}
            <a
              href="mailto:herman@comte.no"
              className="text-blue-600 hover:underline"
            >
              herman@comte.no
            </a>
          </p>
          <p>
            <strong>E-post:</strong>{" "}
            <a
              href="mailto:bjorn@comte.no"
              className="text-blue-600 hover:underline"
            >
              bjorn@comte.no
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
