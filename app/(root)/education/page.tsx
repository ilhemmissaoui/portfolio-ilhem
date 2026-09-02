import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications, education } from "@/config/education";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { formatDateFromObj } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.education.metadata.title,
  description: pagesConfig.education.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/education`,
  },
};

export default function EducationPage() {
  return (
    <PageContainer
      title={pagesConfig.education.title}
      description={pagesConfig.education.description}
    >
      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="font-heading text-2xl">Education</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <Card key={item.id} className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Icons.education className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-lg leading-snug">
                        {item.degree}
                      </CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-1 text-sm text-muted-foreground">
                  <p>
                    {formatDateFromObj(item.startDate)} —{" "}
                    {formatDateFromObj(item.endDate)}
                  </p>
                  <p>{item.location}</p>
                  <p>Level in EQF: {item.eqfLevel}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl">Certifications</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {certifications.map((item) => (
              <Card key={item.id} className="h-full overflow-hidden">
                <Link
                  href={item.image}
                  target="_blank"
                  className="group block border-b bg-white"
                  aria-label={`View the ${item.name} certificate`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.name} certificate issued by ${item.issuer}`}
                    width={1286}
                    height={909}
                    className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Icons.certificate className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-base leading-snug">
                        {item.name}
                      </CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.issuer}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
