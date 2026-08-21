import { useTranslations } from "next-intl";

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations("Footer");
  const data = useTranslations("Data.profile");

  return (
    <footer className="border-t border-border-subtle py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-muted text-sm">
        <p>
          &copy; {year} {data("name")}. {t("rights")}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={data("github")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={data("linkedin")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${data("email")}`}
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
