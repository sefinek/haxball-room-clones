# HaxBall Room Cloning ♿⚽
Ten projekt umożliwia klonowanie dowolnego pokoju HaxBall itp. Upewnij się, że masz uzasadniony powód przed jego użyciem.

<div align="center">
    [<a href="README.md">ENG</a>] | [<a href="README_PL.md">POL</a>]
</div>
<br>

| Plik                 | Widea                                                                                                               | Beta? | Opis                                                                           |
|----------------------|:--------------------------------------------------------------------------------------------------------------------|-------|--------------------------------------------------------------------------------|
| [index.js](index.js) | N/A                                                                                                                 | ✅     | Pozwala na sklonowanie jakiegokolwiek pokoju.                                  |
| [spam.js](spam.js)   | [[1]](videos/brave_CImkZcsVAvZS.mp4) [[2]](videos/brave_V9aVo2HB6Ls5.mp4) [[3]](videos/webstorm64_tRdRAAcKpprr.mp4) | ✅     | Odpala boty które wchodzą na konkretny room i spamią losowymi wiadomościami.   |
| proxies.txt          | N/A                                                                                                                 | N/A   | Lista serwerów proxy (najlepiej SOCKS5).                                       |
| tokens.json          | N/A                                                                                                                 | N/A   | Lista z tokenami headless oraz ich datą wygenerowania.                         |


## O Haxballu
Gra dla ułomnych 30 latków (większość osób w tej grze ma aspergera), którzy nie mają życia.
Biedni ludzie skrzywdzeni przez los, z marną egzystencją.
Jeśli jesteś weteranem tej gry, pewnie będziesz negować moje słowa. Szczerze? Nie obchodzi mnie to.

Basro jebie was na kasę z reklam Google Ads, a sam ma w dupę te gre.
Zrób coś pożytecznego dla swojego kraju (albo i rodziny, której pewnie nie masz), a nie tylko siedzisz przed komputerkiem i grasz w piłkarzyki online.

## Jak to działa?
1. Skrypt łączy się z losowym proxy (każde proxy reprezentuje jedną przeglądarkę z dwoma zakładkami).
2. Wysyłany jest request GET do mojego API, w celu wygenerowania tokenu headless.
3. Tokeny są przechowywane w pliku `tokens.json`. Jeśli jakiś token jest przeterminowany, kod automatycznie wygeneruje nowy.
4. Co około ~12 minut skrypt sprawdza, czy dane geolokalizacyjne się zmieniły. Jeśli tak, strona sklonowanego pokoju jest odświeżana i uruchamiana ponownie z nowymi współrzędnymi (`kraj`, `lat`, `lon`).

## Czy można ten kod lepiej napisać? 🤓
Oczywiście, ale po co? Odpowiedz sam sobie na to pytanie.

## Jak użyć tego skryptu?
### Wymagania
1. Będziesz potrzebować [proxy](https://stableproxy.com/?r=SKX2AY)
2. Usługę, która oferuje [automatyczne rozwiązywanie captchy](https://getcaptchasolution.com/df5q6t8krs)

    https://github.com/user-attachments/assets/48012a22-72c0-476b-ac5a-b11647973a20

3. [Node.js + npm](https://nodejs.org) + [PM2](https://pm2.keymetrics.io).
4. Linux
5. Wymagane przynajmniej +8 GB RAM

### Użycie + instalacja
```sh
sudo apt update && sudo apt upgrade -y
sudo reboot (jeśli kernel został zaktualizowany)
cd ~
git clone https://github.com/sefinek/haxball-raid-clones.git
mcedit proxy.txt (wklej wszystkie swoje proxy)
cp .env.default .env
mcedit .env (ustaw NODE_ENV na production i dostosuj pozostałe zmienne)
npm install
npm run download-chrome
npm run prepare-anticaptcha
Zainstaluj wymagane zależności dla Chrome: https://github.com/sefinek/sefinek/blob/main/chrome.md
npm install pm2 -g
pm2 start
pm2 save
pm2 startup
```

### Testowane na
- `Lubuntu` (Proxmox 8.2.7)
- `Ubuntu Server 22.04` (Proxmox 8.2.7)

## Jak uzyskać współrzędne (lat, lon) każdego pokoju?
Możesz sprawdzić moje API https://api.sefinek.net/api/v2/haxball/room-list.
Użyj parametru `name`, aby uzyskać informacje o konkretnym pokoju. Podanie pełnej nazwy nie jest konieczne.

### Przykłady
#### Wszystkie pokoje
```bash
curl "https://api.sefinek.net/api/v2/haxball/room-list"
```

#### Konkretny pokój
```bash
curl "https://api.sefinek.net/api/v2/haxball/room-list?name=haxnball"
```


## Inne repa
https://github.com/sefinek/2-haxball-rooms