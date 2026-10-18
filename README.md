# Böllinger – Website

Website für **Böllinger – Abbruch & Demontage**, Offenbach an der Queich (Südpfalz).

Designrichtung inspiriert von Abbruch-Unternehmensseiten (MKS Abbruch Berlin, APS Group),
umgesetzt in der eigenen Markenfarbe von Böllinger: **Gold/Amber + Anthrazit + Weiß**.

## Inhalt / Sections
- Hero mit Call-to-Action
- Leistungen: Demontage, Abbruch, Entrümpelung, Entkernung, Entsorgung, Industriedemontage
- Kennzahlen (Stats) – *Zahlen bitte prüfen/anpassen*
- Über uns
- Ablauf in 4 Schritten
- Referenzen / Galerie
- Kontakt mit Formular

## Technik
Statische Website – reines HTML, CSS, JavaScript. Kein Build-Schritt nötig.

```
index.html
assets/
  css/style.css
  js/main.js
  images/boellinger-baustelle.webp
```

## Lokal ansehen
Einfach `index.html` im Browser öffnen, oder:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Kontaktdaten (im Code hinterlegt)
- Adresse: Im Schlangengarten 40, 76877 Offenbach an der Queich
- Telefon: 06348 9848744
- Mobil: 0176 65357084
- E-Mail: markusboellinger@web.de

## Noch zu ergänzen
- **Impressum & Datenschutzerklärung** (rechtlich für deutsche Websites erforderlich)
- Echte **Kennzahlen** in der Stats-Sektion
- Weitere **Projektfotos** in der Referenzen-Galerie
- Optional: funktionierendes Kontaktformular (Backend/Formular-Dienst statt `mailto:`)
