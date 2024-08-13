import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";

const redesSociais = [
  {
    nome: "GitHub",
    url: "https://github.com/Lucasgdbs",
    icone: <GitHub />,
  },
  {
    nome: "LinkedIn",
    url: "https://www.linkedin.com/in/lucasgdbs/",
    icone: <LinkedIn />,
  },
  {
    nome: "Instagram",
    url: "https://www.instagram.com/lucasgdbs/",
    icone: <Instagram />,
  },
];

function SocialMedias() {
  return (
    <div className="flex gap-6">
      {redesSociais.map((redeSocial, index) => (
        <a
          key={index}
          href={redeSocial.url}
          target="_blank"
          rel="noreferrer"
          className="text-3xl text-white hover:text-neutral-500"
        >
          {redeSocial.icone}
        </a>
      ))}
    </div>
  );
}

export default SocialMedias;
