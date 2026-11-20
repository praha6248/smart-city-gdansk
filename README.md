# Smart City Gdańsk — interaktywna mapa miasta

Projekt hackathonowy: interaktywna mapa Gdańska, na której mieszkańcy mogą przeglądać
**wydarzenia** w mieście, zgłaszać **zdarzenia** (wypadki, dziki, wandalizm, źle zaparkowane auta…)
oraz sprawdzać **dane demograficzne** poszczególnych dzielnic.

<img width="3501" height="1629" alt="Widok mapy z panelem wydarzeń" src="https://github.com/user-attachments/assets/eda3435d-27ae-46a0-a4d6-bc98ff313c30" />
<img width="2236" height="1141" alt="Widok demografii dzielnic" src="https://github.com/user-attachments/assets/b5a87548-5b2a-4d1f-a64e-23ba31c8b204" />

![HTML](https://img.shields.io/badge/HTML-CSS-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Leaflet-199900?logo=leaflet&logoColor=white)
![FastAPI](https://img.shields.io/badge/API-FastAPI-009688?logo=fastapi&logoColor=white)
![PostGIS](https://img.shields.io/badge/DB-PostGIS-336791?logo=postgresql&logoColor=white)

## Funkcje

- **Mapa Gdańska** (Leaflet + kafelki MapTiler) ograniczona do obszaru miasta, z granicami
  wszystkich dzielnic z pliku GeoJSON.
- **Demografia** — po najechaniu dzielnica się podświetla, a po kliknięciu pokazuje liczbę
  ludności (2024), podział na kobiety i mężczyzn oraz powierzchnię.
- **Wydarzenia i zdarzenia** — dwa widoki z panelem bocznym, filtrami (kategoria, data, lokalizacja)
  i formularzem dodawania nowego zgłoszenia.
- **Kategorie zgłoszeń** z własnymi ikonami: wypadek, stłuczka, dziki, alkohol, parkowanie,
  wandalizm, droga, inne.
- **Szkic backendu** — modele bazy (dzielnice, typy zdarzeń, zgłoszenia z geometrią) w SQLAlchemy +
  GeoAlchemy2 i schematy Pydantic pod przyszłe API w FastAPI.

> Status: prototyp z hackathonu. Interfejs i mapa demografii działają; backend jest na etapie
> modeli danych, a zgłoszenia nie są jeszcze zapisywane.

## Uruchomienie

Frontend to statyczne pliki, ale dane (`ludnosc.json`, `Dzielnice.geojson`) ładowane są przez `fetch`,
więc trzeba je serwować przez HTTP, a nie otwierać z dysku:

```bash
cd hackathon
python3 -m http.server 8000
```

Następnie otwórz:

- http://localhost:8000/demografia.html — mapa demograficzna,
- http://localhost:8000/wydarzenia.html — wydarzenia,
- http://localhost:8000/zdarzenia.html — zgłaszanie zdarzeń.

### Backend (szkic)

```bash
cd API
pip install fastapi uvicorn sqlalchemy geoalchemy2
uvicorn main:app --reload
```

## Struktura

```
hackathon/
  demografia.html, wydarzenia.html, zdarzenia.html   widoki aplikacji
  map.js, map_demografia.js                           inicjalizacja mapy Leaflet i warstwy dzielnic
  script.js                                           obsługa paneli, filtrów i formularza
  style.css                                           wygląd
  ludnosc.json                                        dane demograficzne dzielnic (2024)
  Dzielnice.geojson                                   granice dzielnic Gdańska
  *.svg                                               ikony kategorii i interfejsu
API/
  main.py              aplikacja FastAPI
  models.py            modele SQLAlchemy/GeoAlchemy2 (dzielnice, zdarzenia, zgłoszenia)
  schema.py            schematy Pydantic
  Routery/             routery dla dzielnic, wydarzeń i zgłoszeń
```

## Technologie

HTML · CSS · JavaScript · Leaflet · MapTiler · GeoJSON · Python · FastAPI · SQLAlchemy · GeoAlchemy2 / PostGIS

## Zespół

Projekt powstał zespołowo podczas hackathonu.
