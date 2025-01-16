"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Input } from "~/app/[locale]/_components/input";
import { PhoneInput } from "~/app/[locale]/_components/phone-input";
import { Textarea } from "~/app/[locale]/_components/textarea";

export function ContactClient() {
    const t = useTranslations("Contact.form")

    const [loading, setLoading] = useState(false);
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
       const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                message
            }),
        })

        if (res.ok) {
            setMessage("")
            setFirstName("")
            setLastName("")
            setEmail("")
            setPhone("")
            toast.success(t("success"))
        } else {
            toast.success(t("error"))
        }

        setLoading(false);
    };

    return (
        <form
            className="flex w-full flex-col items-center justify-center space-y-2 max-w-sm"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-row w-full items-center justify-center space-x-2">
                <Input
                    id="firstName"
                    name="firstName"
                    placeholder={`${t("firstName")} *`}
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <Input
                    id="lastName"
                    name="lastName"
                    placeholder={`${t("lastName")} *`}
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <Input
                id="email"
                name="email"
                    placeholder={`${t("email")} *`}
                autoComplete="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <PhoneInput
                id="phoneNumber"
                name="phoneNumber"
                className="w-full"
                    placeholder={`${t("phone")} *`}
                value={phone}
                onChange={(newValue) => setPhone(newValue ?? "")}
                required
            />
            <Textarea
                id="message"
                name="message"
                    placeholder={`${t("message")} *`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 bg-gray-50 text-gray-950 shadow hover:bg-gray-50/90 w-full"
            >
                {loading ? <Loader2 className="animate-spin" /> : t("submit")}
            </button>
        </form>
    );
}
