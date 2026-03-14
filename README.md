# Soul Studio — Website

Website for **Soul Studio** (Uptown, Chicago): photo studio and event space.

## What’s included

- **About** — Space description, stats (1,200 sq ft, 14 ft ceilings, 35 capacity)
- **Services** — Photo studio rental, lookbooks, model tests, family shoots, video, events, add-on photographer
- **Amenities & equipment** — Natural light, kitchen, dressing room, backdrops, Godox lighting, furniture
- **Gallery** — Link to [Instagram @soulstudio.us](https://www.instagram.com/soulstudio.us)
- **Booking** — “Create booking”, Cal.com availability link, and **Add to Google Calendar** form

## Connect your Google Calendar (availability — booked vs available, no names)

The site is set up so the calendar shows **only booked and available times**, with **no client names or event details** visible.

Google’s embed always shows whatever event titles you put on the calendar. To show only “booked” vs “available” without names:

1. **Use a separate “availability” calendar** (recommended): Create a calendar like “Soul Studio availability” that you use only for the website.
2. **For every booked slot**, create an event on that calendar with a **generic title** only, e.g. **“Booked”** or **“Reserved”**. Do not put client names or private details in the title or description.
3. Leave times when the studio is free as **no event** — those show as available.
4. In Google Calendar: three dots next to that calendar → **Settings and sharing** → **Access permissions** → **Make available to public** (or “See all event details”).
5. **Integrate calendar** → copy the **Calendar ID** and in `index.html` set the iframe `src` to use that ID (replace `soulpro.studio%40gmail.com` with your calendar ID if you use a different one).

Then the embed will show only time blocks: booked (with the generic label) and available (empty). Keep your real booking calendar with client names private and do not embed it.

### Other ways to avoid showing names

- **1. Separate “availability” calendar (above)**  
  One calendar for the site with events titled only “Booked” or “Reserved.” Your real calendar stays private.

- **2. Booking / scheduling links (no calendar embed)**  
  Use a tool that shows **only available slots**, not your actual calendar:
  - **Calendly** — Connect your Google Calendar; the booking page shows only “Available” times. No event names. You can link to it or embed its widget instead of the calendar.
  - **Cal.com** — Same idea; free tier available.
  - **Acuity**, **Square Appointments**, **Setmore** — Similar: they read your availability and show bookable slots only.

- **3. Google Appointment schedule**  
  In Google Calendar: **Create** → **Appointment schedule**. Share that link; visitors see only your available slots (free/busy), not event titles. Replace the calendar embed on the site with a button like “Check availability” that opens this link.

- **4. No live calendar**  
  Remove the embed and use text or a simple list, e.g. “Available Mon–Fri 9–5; contact for specific dates.” No names, but not real-time.

- **5. Free/busy only (advanced)**  
  A small backend could use the Google Calendar API to read only **free/busy** and display “Available” / “Booked” with no event details. Requires a server and setup.

**Recommendation:** Easiest with no names are (1) the separate calendar with “Booked” titles, or (2) a Calendly/Cal.com link or embed so visitors only see available times.

## Google Calendar (add event)

The “Add to Google Calendar” form opens Google Calendar in a new tab with the event details pre-filled. Guests can add the event to their calendar after they’ve arranged their booking with you.

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
# Python 3
python3 -m http.server 8000

# Then open http://localhost:8000
```

## Deploy

Upload the folder to any static host (Netlify, Vercel, GitHub Pages, or your own server). No build step required.

## Files

- `index.html` — Single-page content
- `styles.css` — Layout and styling
- `script.js` — Mobile menu and Google Calendar link builder
