import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DEPARTMENTS_FOR_FORM, HOSPITAL, whatsappLink } from "@/lib/site-data";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email().max(120).optional().or(z.literal("")),
  department: z.string().min(1, "Please choose a department"),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
  notes: z.string().max(500).optional().or(z.literal("")),
});

export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    date: "",
    time: "",
    notes: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const msg =
      `*New Appointment Request*\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      (form.email ? `Email: ${form.email}\n` : "") +
      `Department: ${form.department}\n` +
      `Preferred: ${form.date} at ${form.time}\n` +
      (form.notes ? `Notes: ${form.notes}\n` : "") +
      `\nSent via ${HOSPITAL.website}`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to confirm your request…");
  }

  return (
    <form onSubmit={submit} className={compact ? "grid gap-3" : "grid gap-4"}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="ap-name">Patient name</Label>
          <Input id="ap-name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ap-phone">Phone</Label>
          <Input id="ap-phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 ..." />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="ap-email">Email (optional)</Label>
        <Input id="ap-email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
      </div>
      <div className="grid gap-2">
        <Label>Department</Label>
        <Select value={form.department} onValueChange={(v) => update("department", v)}>
          <SelectTrigger><SelectValue placeholder="Select a department" /></SelectTrigger>
          <SelectContent>
            {DEPARTMENTS_FOR_FORM.map((d) => (
              <SelectItem key={d} value={d}>{d}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="ap-date">Preferred date</Label>
          <Input id="ap-date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ap-time">Preferred time</Label>
          <Input id="ap-time" type="time" value={form.time} onChange={(e) => update("time", e.target.value)} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="ap-notes">Symptoms / notes</Label>
        <Textarea id="ap-notes" rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Briefly describe the concern" />
      </div>
      <Button type="submit" size="lg" className="bg-gradient-brand text-white hover:opacity-95">
        Send appointment request
      </Button>
      <p className="text-xs text-muted-foreground">
        Your request will be sent to our team on WhatsApp for fastest response.
      </p>
    </form>
  );
}

export function AppointmentDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Request an Appointment</DialogTitle>
        </DialogHeader>
        <AppointmentForm compact />
      </DialogContent>
    </Dialog>
  );
}
