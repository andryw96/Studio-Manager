# Studio Manager

Gestionale per studio di registrazione: Dashboard e Finanza (preventivi, fatture, export PDF/CSV/Excel), Booking, Magazzino (cavi, patchbay, noleggi, DDT), Clienti, Planimetria, Acustica (modi propri, RT60 Sabine/Eyring) e Stage plot.

L'app è un solo file (`index.html`): non serve installare nulla.

## 1. Metterla online (gratis) con GitHub Pages

1. Su GitHub apri il tuo repository e carica **tutti questi file** (Add file → Upload files). Il file importante è `index.html`.
2. Vai in **Settings → Pages**.
3. Sotto "Build and deployment", scegli **Source: Deploy from a branch**, poi **Branch: main** e cartella **/ (root)**, e premi **Save**.
4. Dopo circa un minuto in cima alla pagina compare l'indirizzo del sito (`https://tuonome.github.io/nome-repository/`). Aprilo da qualsiasi dispositivo.

### Installarla come app
- **iPhone / iPad (Safari):** Condividi → *Aggiungi a Home*.
- **Android (Chrome):** menu ⋮ → *Installa app*.
- **Windows / Mac (Chrome o Edge):** icona di installazione nella barra dell'indirizzo → *Installa*.

Dopo la prima apertura funziona anche senza connessione.

## 2. Installer per Mac e Windows (facoltativo)

La cartella `.github` è nascosta e il caricamento dal sito spesso la salta. Se nella scheda **Actions** non vedi "Crea installer":
1. Su GitHub: **Add file → Create new file**.
2. Nel nome scrivi `.github/workflows/desktop.yml` (ogni `/` crea una cartella).
3. Incolla il contenuto di `DESKTOP-WORKFLOW-da-incollare.txt` e premi **Commit changes**.
4. Vai in **Actions → Crea installer (Mac e Windows) → Run workflow**.
5. Dopo 10-15 minuti, apri l'esecuzione e scarica gli installer dalla sezione **Artifacts**.

Gli installer non sono firmati: su Windows compare l'avviso SmartScreen ("Ulteriori informazioni" → "Esegui comunque"), su Mac fai clic destro sull'app → *Apri*.

## 3. Dove stanno i dati

I dati restano **nel browser (o nell'app) del dispositivo che usi**: non passano da nessun server e non si sincronizzano tra dispositivi.
- Fai spesso una copia: **Dashboard → Dati dello studio → Scarica copia di sicurezza**.
- Per spostare i dati su un altro dispositivo: **Ripristina da copia**.
- Cancellare i dati di navigazione del browser cancella anche i dati dello studio: tieni una copia.

## 4. Limiti da conoscere

- Le fatture in PDF sono **copie di cortesia**: non sostituiscono la fattura elettronica da inviare tramite SDI.
- I coefficienti di assorbimento dei materiali sono **indicativi**: per un progetto vero usa i valori certificati dei prodotti.
- Non ci sono account né permessi: chi apre l'app vede tutto.
