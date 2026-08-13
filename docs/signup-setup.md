# Turning on the supporter signup form

The form at `/join` is built and live. Where the submissions **go** is set by a
single environment variable, `SIGNUP_ENDPOINT` — the same one-constant shape as
`DONATE_URL`.

Until it is set, the form still works: a supporter who fills it in is handed off
to a pre-filled email to `nsfwcs3@gmail.com` rather than being silently dropped.
That is a fallback, not the destination. Do the ten minutes below.

## Recommended: a Google Sheet you own

No third-party processor, no monthly fee, no API key in the repo, and the data
stays in Noah's own Drive. Ten minutes, once.

1. Create a new Google Sheet, e.g. **"Campaign signups"**. Sign in as
   `nsfwcs3@gmail.com`, not the BOD Financial account — a supporter list is a
   campaign record and should not sit in a business Workspace account.

2. **Extensions → Apps Script**. Delete whatever is there and paste this. It
   writes its own header row the first time it runs, so there is nothing to
   type into the Sheet:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     if (sheet.getLastRow() === 0) {
       sheet.appendRow(['submittedAt','first','last','email','phone',
                        'smsConsent','zip','note','source']);
       sheet.setFrozenRows(1);
     }
     var d = JSON.parse(e.postData.contents);
     sheet.appendRow([d.submittedAt, d.first, d.last, d.email,
                      d.phone, d.smsConsent, d.zip, d.note, d.source]);
     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. **Deploy → New deployment → Web app.**
   - Execute as: **Me**
   - Who has access: **Anyone**

   "Anyone" is required — Vercel's server posts to it unauthenticated. The URL is
   unguessable and the script only ever appends a row; it returns nothing and
   reads nothing.

4. Copy the deployment URL. It looks like
   `https://script.google.com/macros/s/AKfy…/exec`.

5. In **Vercel → the votenoahsmith project → Settings → Environment Variables**,
   add:

   | Name | Value |
   |---|---|
   | `SIGNUP_ENDPOINT` | the `/exec` URL from step 4 |

   Then **redeploy** (Deployments → ⋯ → Redeploy). Environment variables are
   read at build time, so an existing deployment will not pick it up.

6. Submit the form once at <https://votenoahsmith.com/join> and confirm a row
   lands in the Sheet.

## What gets captured

`submittedAt`, first, last, email, phone, **smsConsent** (true/false), zip, note,
source.

## About the phone number and texting

Phone is optional and the text opt-in is a **separate, unticked checkbox**. That
is deliberate. Political SMS falls under the TCPA, where consent must be
knowingly given — supplying a phone number is not by itself consent to be
texted. Only send campaign texts to rows where `smsConsent` is `TRUE`.

The checkbox wording covers the usual bases (recurring messages, automated
system, message and data rates, STOP to opt out). **Have counsel confirm it
before the first text send** — this is a summary of common practice, not legal
advice, and the penalties under the TCPA are per-message.

## Reporting note

Any cost associated with list-building or texting is a campaign expenditure and
belongs on Schedule B of the CFA-4. See the Compliance Reference in Drive.
