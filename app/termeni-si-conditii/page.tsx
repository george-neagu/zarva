import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Termeni și condiții | ZAR’VĂ",
  description:
    "Termenii și condițiile de utilizare a site-ului ZAR’VĂ.",
  alternates: { canonical: "/termeni-si-conditii" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Informații juridice"
      title="Termeni și condiții"
      updatedAt="23 iulie 2026"
      intro={
        <p>
          Acești termeni stabilesc regulile de utilizare a site-ului{" "}
          <strong>zar-va.ro</strong>. Prin accesarea site-ului, confirmați că
          ați citit și înțeles condițiile de mai jos.
        </p>
      }
    >
      <LegalSection title="1. Despre site">
        <p>
          Site-ul prezintă magazinul și snack barul ZAR’VĂ din Piața Obor,
          produsele și serviciile disponibile, programul și datele de contact.
          Site-ul are caracter informativ și nu reprezintă, în forma actuală,
          un magazin online.
        </p>
        <p>
          Pentru întrebări despre site sau despre aceste condiții ne puteți
          scrie la{" "}
          <a className="font-bold underline underline-offset-4" href="mailto:contact@zar-va.ro">
            contact@zar-va.ro
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Utilizarea site-ului">
        <p>
          Puteți utiliza site-ul numai în scopuri legale și fără a afecta
          funcționarea, securitatea sau disponibilitatea acestuia. Sunt
          interzise tentativele de acces neautorizat, introducerea de cod
          malițios, colectarea automată abuzivă a conținutului și folosirea
          site-ului într-un mod care încalcă drepturile altor persoane.
        </p>
      </LegalSection>

      <LegalSection title="3. Informații despre produse">
        <p>
          Depunem eforturi pentru ca informațiile publicate să fie corecte și
          actuale. Sortimentul, disponibilitatea, prețurile, programul și
          ofertele se pot modifica fără notificare prealabilă. Informațiile de
          pe site nu constituie o ofertă contractuală și nu înlocuiesc
          confirmarea disponibilității în magazin.
        </p>
        <p>
          Imaginile au rol de prezentare; aspectul produselor și ambalajelor
          poate diferi de cel afișat.
        </p>
      </LegalSection>

      <LegalSection title="4. Produse destinate adulților">
        <p>
          Băuturile alcoolice și produsele din tutun nu se vând persoanelor
          sub 18 ani. Personalul poate solicita un act de identitate pentru
          verificarea vârstei, în conformitate cu legea.
        </p>
      </LegalSection>

      <LegalSection title="5. Proprietate intelectuală">
        <p>
          Textele, elementele grafice, fotografiile, siglele, identitatea
          vizuală și celelalte materiale ale site-ului sunt protejate de
          legislația privind drepturile de autor și mărcile. Copierea,
          publicarea, distribuirea sau folosirea lor comercială este permisă
          numai cu acordul prealabil al titularului drepturilor, exceptând
          utilizările permise expres de lege.
        </p>
      </LegalSection>

      <LegalSection title="6. Linkuri și servicii externe">
        <p>
          Site-ul poate include linkuri, hărți sau resurse furnizate de terți.
          Aceste servicii au propriile condiții și politici, iar ZAR’VĂ nu
          controlează conținutul, disponibilitatea sau practicile lor.
          Accesarea lor se face pe răspunderea utilizatorului.
        </p>
      </LegalSection>

      <LegalSection title="7. Răspundere">
        <p>
          În limitele permise de lege, nu garantăm funcționarea neîntreruptă
          sau lipsită de erori a site-ului. Nu răspundem pentru prejudicii
          indirecte rezultate din indisponibilitatea temporară, folosirea
          informațiilor cu caracter general ori accesarea serviciilor terților.
          Nimic din acești termeni nu limitează drepturile consumatorilor și
          răspunderea care nu poate fi exclusă prin lege.
        </p>
      </LegalSection>

      <LegalSection title="8. Legea aplicabilă și soluționarea disputelor">
        <p>
          Acești termeni sunt guvernați de legea română. Orice neînțelegere va
          fi soluționată mai întâi pe cale amiabilă. Consumatorii pot apela la
          mecanismele și autoritățile competente prevăzute de lege, inclusiv la
          Autoritatea Națională pentru Protecția Consumatorilor.
        </p>
      </LegalSection>

      <LegalSection title="9. Modificarea termenilor">
        <p>
          Putem actualiza acești termeni pentru a reflecta schimbări ale
          site-ului sau ale legislației. Versiunea aplicabilă este cea
          publicată pe această pagină, împreună cu data ultimei actualizări.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
