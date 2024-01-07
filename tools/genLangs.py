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

theater = [
    "Theater",   # English
    "Theater",   # German
    "Teatro",    # Spanish
    "Théâtre",   # French
    "Teatro",    # Italian
    "劇場",      # Japanese
    "극장",      # Korean
    "Theater",   # Dutch
    "Teatr",     # Polish
    "Teatro",    # Portuguese
    "Театр",     # Russian
    "مسرح",     # Arabic
    "剧院",      # Chinese
    "रंगमंच",    # Hindi
    "Teater",    # Swedish
    "Teater",    # Norwegian
    "Teater",    # Danish
    "Divadlo",   # Czech
    "Színház",   # Hungarian
    "Tiyatro"    # Turkish
]

rf = [
    "Reload Frame",  # English
    "Rahmen neu laden",  # German
    "Recargar Marco",  # Spanish
    "Recharger le Cadre",  # French
    "Ricarica Cornice",  # Italian
    "フレームを再読み込み",  # Japanese
    "프레임 다시 로드",  # Korean
    "Frame Herladen",  # Dutch
    "Przeładuj Ramkę",  # Polish
    "Recarregar Quadro",  # Portuguese
    "Перезагрузить Рамку",  # Russian
    "إعادة تحميل الإطار",  # Arabic
    "重新加载框架",  # Chinese
    "फ्रेम पुनः लोड करें",  # Hindi
    "Ladda om Ramen",  # Swedish
    "Last Inn Rammen på Nytt",  # Norwegian
    "Genindlæs Rammen",  # Danish
    "Rámeček znovu načíst",  # Czech
    "Keret Újratöltése",  # Hungarian
    "Çerçeveyi Yeniden Yükle"  # Turkish
]

yt_eb = [
    'YouTube [Embed]',
    'YouTube [Einbetten]',
    'YouTube [Incrustar]',
    'YouTube [Intégrer]',
    'YouTube [Incorpora]',
    'YouTube [埋め込み]',
    'YouTube [임베드]',
    'YouTube [Insluiten]',
    'YouTube [Osadź]',
    'YouTube [Embutir]',
    'YouTube [Вставить]',
    'YouTube [تضمين]',
    'YouTube [嵌入]',
    'YouTube [एम्बेड करें]',
    'YouTube [Bädda in]',
    'YouTube [Bygg inn]',
    'YouTube [Vložit]',
    'YouTube [Vložit]',
    'YouTube [Beágyazás]',
    'YouTube [Gömme]'
]

for i in range(len(theater)):
    print('''
    ''' + lang[i] + ''': {
        theaterMode: ["''' + theater[i] + '''"],
        reloadFrame: ["''' + rf[i] + '''" ],
        dropdown: ["YouTube™", "''' + yt_eb[i] + '''" ],
    },''')
