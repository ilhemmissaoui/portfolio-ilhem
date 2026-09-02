import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    username: "Ilhem Missaoui",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ilhem-missaoui-47a20b1a5",
  },
  {
    name: "Gmail",
    username: "ilhem.missaoui08@gmail.com",
    icon: Icons.gmail,
    link: "mailto:ilhem.missaoui08@gmail.com",
  },
  {
    name: "Phone",
    username: "+216 27 409 677",
    icon: Icons.contact,
    link: "tel:+21627409677",
  },
];
