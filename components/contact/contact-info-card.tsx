import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const details = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Icons.mail,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    icon: Icons.contact,
  },
  {
    label: "LinkedIn",
    value: siteConfig.authorName,
    href: siteConfig.links.linkedin,
    icon: Icons.linkedin,
  },
  {
    label: "Location",
    value: siteConfig.location,
    icon: Icons.mapPin,
  },
];

export default function ContactInfoCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Reach me directly</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {details.map((detail) => (
          <div key={detail.label} className="flex items-start gap-3">
            <detail.icon className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">{detail.label}</p>
              {detail.href ? (
                <Link
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  className="break-words text-sm font-medium hover:underline"
                >
                  {detail.value}
                </Link>
              ) : (
                <p className="break-words text-sm font-medium">
                  {detail.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
