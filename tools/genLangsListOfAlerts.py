lang = [
    "en",
    "de",
    "es",
    "fr",
    "it",
    "jp",
    "ko",
    "nl",
    "pl",
    "pt",
    "ru",
    "ar",
    "zh",
    "hi",
    "sv",
    "no",
    "da",
    "cs",
    "hu",
    "tr",
]

alert_0 = [
    "Oops! Something went wrong.\\n\\n- Issue: The playlist feature is currently not working.\\n- Action: You will be redirected to a standard page shortly.\\n\\nI am looking for a fix.",
    "Hoppla! Etwas ist schief gelaufen.\\n\\n- Problem: Die Playlist-Funktion funktioniert derzeit nicht.\\n- Aktion: Sie werden in Kürze auf eine Standardseite umgeleitet.\\n\\nIch suche nach einer Lösung.",
    "¡Vaya! Algo salió mal.\\n\\n- Problema: La función de lista de reproducción no está funcionando actualmente.\\n- Acción: Serás redirigido a una página estándar en breve.\\n\\nEstoy buscando una solución.",
    "Oups ! Un problème est survenu.\\n\\n- Problème : La fonction de playlist ne fonctionne pas actuellement.\\n- Action : Vous serez redirigé vers une page standard sous peu.\\n\\nJe cherche une solution.",
    "Ops! Qualcosa è andato storto.\\n\\n- Problema: La funzione playlist non sta funzionando al momento.\\n- Azione: Sarai reindirizzato a una pagina standard a breve.\\n\\nSto cercando una soluzione.",
    "おっと！何かが間違っていました。\\n\\n- 問題：プレイリスト機能は現在動作していません。\\n- 処置：間もなく標準ページにリダイレクトされます。\\n\\n修正を探しています。",
    "이런! 문제가 발생했습니다.\\n\\n- 문제: 플레이리스트 기능이 현재 작동하지 않습니다.\\n- 조치: 곧 표준 페이지로 리디렉션됩니다.\\n\\n해결책을 찾고 있습니다.",
    "Oeps! Er is iets misgegaan.\\n\\n- Probleem: De afspeellijstfunctie werkt momenteel niet.\\n- Actie: Je wordt binnenkort omgeleid naar een standaardpagina.\\n\\nIk ben op zoek naar een oplossing.",
    "Ups! Coś poszło nie tak.\\n\\n- Problem: Funkcja listy odtwarzania obecnie nie działa.\\n- Działanie: Wkrótce zostaniesz przekierowany na standardową stronę.\\n\\nSzukam rozwiązania.",
    "Ops! Algo deu errado.\\n\\n- Problema: A função de playlist atualmente não está funcionando.\\n- Ação: Você será redirecionado para uma página padrão em breve.\\n\\nEstou procurando uma solução.",
    "Ой! Что-то пошло не так.\\n\\n- Проблема: В настоящее время функция плейлиста не работает.\\n- Действие: Скоро вы будете перенаправлены на стандартную страницу.\\n\\nЯ ищу решение.",
    "عفوًا! هناك خطأ ما.\\n\\n- المشكلة: ميزة قائمة التشغيل لا تعمل حاليًا.\\n- الإجراء: ستتم إعادتك إلى صفحة قياسية قريبًا.\\n\\nأبحث عن حل.",
    "哎呀！出了点问题。\\n\\n- 问题：播放列表功能目前无法使用。\\n- 操作：您将很快被重定向到标准页面。\\n\\n我正在寻找解决方案。",
    "उफ! कुछ गलत हो गया।\\n\\n- समस्या: प्लेलिस्ट सुविधा वर्तमान में काम नहीं कर रही है।\\n- कार्रवाई: आपको जल्द ही एक मानक पृष्ठ पर अनुप्रेषित किया जाएगा।\\n\\nमैं एक समाधान ढूँढ रहा हूँ।",
    "Oops! Något gick fel.\\n\\n- Problem: Spellistefunktionen fungerar inte för närvarande.\\n- Åtgärd: Du kommer att omdirigeras till en standard sida inom kort.\\n\\nJag letar efter en lösning.",
    "Oisann! Noe gikk galt.\\n\\n- Problem: Spillelistefunksjonen virker ikke for øyeblikket.\\n- Handling: Du vil bli omdirigert til en standardside snart.\\n\\nJeg ser etter en løsning.",
    "Ups! Noget gik galt.\\n\\n- Problem: Afspilningsliste funktionen virker ikke i øjeblikket.\\n- Handling: Du vil snart blive omdirigeret til en standard side.\\n\\nJeg leder efter en løsning.",
    "Jejda! Něco se pokazilo.\\n\\n- Problém: Funkce playlistu momentálně nefunguje.\\n- Akce: Brzy budete přesměrováni na standardní stránku.\\n\\nHledám řešení.",
    "Hoppá! Valami hiba történt.\\n\\n- Probléma: A lejátszási lista funkció jelenleg nem működik.\\n- Teendő: Hamarosan egy szabványos oldalra lesz átirányítva.\\n\\nMegoldást keresek.",
    "Oops! Bir şeyler yanlış gitti.\\n\\n- Sorun: Oynatma listesi özelliği şu anda çalışmıyor.\\n- Eylem: Yakında standart bir say",
]

for i in range(len(alert_0)):
    print('''
    ''' + lang[i] + ''': {
        0: ["''' + alert_0[i] + '''"],
    },''')
