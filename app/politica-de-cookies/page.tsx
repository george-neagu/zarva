import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Politica de cookies | ZAR’VĂ",
  description:
    "Informații despre cookie-urile și tehnologiile similare folosite pe site-ul ZAR’VĂ.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Confidențialitate"
      title="Politica de cookies"
      updatedAt="23 iulie 2026"
      intro={
        <p>
          Această politică explică ce sunt cookie-urile, ce servicii externe
          sunt integrate în <strong>zar-va.ro</strong> și cum vă puteți
          controla preferințele.
        </p>
      }
    >
      <LegalSection title="1. Ce sunt cookie-urile">
        <p>
          Cookie-urile sunt fișiere text de mici dimensiuni salvate pe
          dispozitiv atunci când vizitați un site. Ele pot ajuta la funcționarea
          tehnică a paginii, la memorarea preferințelor sau la furnizarea unor
          servicii integrate. Tehnologii precum stocarea locală și identificatorii
          online pot avea funcții similare.
        </p>
      </LegalSection>

      <LegalSection title="2. Ce folosește site-ul">
        <p>
          Site-ul nu setează în mod direct cookie-uri pentru conturi,
          autentificare, coș de cumpărături sau publicitate comportamentală.
          Totuși, paginile pot încărca resurse de la furnizori terți, care pot
          primi date tehnice precum adresa IP, tipul browserului, dispozitivul,
          pagina accesată și data sau ora solicitării.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#5f1905]/30">
                <th className="py-3 pr-5">Serviciu</th>
                <th className="py-3 pr-5">Scop</th>
                <th className="py-3">Posibile date/cookie-uri</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#5f1905]/15 align-top">
                <td className="py-4 pr-5 font-bold">Adobe Fonts</td>
                <td className="py-4 pr-5">Afișarea fonturilor site-ului</td>
                <td className="py-4">
                  Date tehnice necesare livrării resurselor; practicile sunt
                  stabilite de Adobe.
                </td>
              </tr>
              <tr className="border-b border-[#5f1905]/15 align-top">
                <td className="py-4 pr-5 font-bold">Google Maps</td>
                <td className="py-4 pr-5">Afișarea hărții locației</td>
                <td className="py-4">
                  Identificatori și cookie-uri stabilite de Google, în funcție
                  de browser, setări și starea autentificării.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Denumirea, durata și utilizarea exactă a cookie-urilor terților pot fi
          modificate de furnizorii respectivi. Consultați politicile Adobe și
          Google pentru informațiile lor actuale.
        </p>
      </LegalSection>

      <LegalSection title="3. Temeiul utilizării">
        <p>
          Tehnologiile strict necesare funcționării și securității site-ului
          pot fi utilizate în baza interesului legitim. Cookie-urile sau
          tehnologiile opționale care necesită consimțământ trebuie activate
          numai după exprimarea acordului, atunci când sunt implementate.
        </p>
      </LegalSection>

      <LegalSection title="4. Cum controlați cookie-urile">
        <p>
          Puteți bloca, șterge sau limita cookie-urile din setările browserului.
          De asemenea, puteți configura browserul să vă anunțe înainte de
          salvarea unui cookie. Blocarea anumitor tehnologii poate împiedica
          afișarea corectă a hărții sau a altor elemente externe.
        </p>
        <p>
          Pentru instrucțiuni, consultați secțiunea de ajutor a browserului
          folosit. Preferințele trebuie configurate separat pe fiecare browser
          și dispozitiv.
        </p>
      </LegalSection>

      <LegalSection title="5. Durata de păstrare">
        <p>
          Cookie-urile de sesiune sunt șterse, de regulă, la închiderea
          browserului. Cookie-urile persistente rămân până la expirare sau până
          când le ștergeți. Pentru serviciile externe, durata este stabilită de
          furnizorul respectiv.
        </p>
      </LegalSection>

      <LegalSection title="6. Actualizări și contact">
        <p>
          Putem actualiza această politică atunci când se schimbă tehnologiile
          folosite sau cerințele legale. Data versiunii curente este afișată în
          partea de sus a paginii.
        </p>
        <p>
          Pentru întrebări despre folosirea cookie-urilor, scrieți-ne la{" "}
          <a className="font-bold underline underline-offset-4" href="mailto:contact@zar-va.ro">
            contact@zar-va.ro
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
