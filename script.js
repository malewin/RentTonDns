// arrays of lists
const namePricesDomainsObject = {
    'auctioneer': '12.67',
    'ethnographer': '2.499',
    'choreographer': '2.498',
    'actor': '127.06',
    'eliminator': '12.67',
    'undertaker': '12.67',
    'unemployed': '12.67',
    'confiscator': '2.5',
    'follower': '50.8',
    'reader': '101.64',
    'notificator': '2.5',
    'procrastinator': '2.497',
    'prosecutor': '12.67',
    'demonstrator': '2.499',
    'arbitrator': '12.67',
    'perpetrator': '2.5',
    'conservationist': '2.496',
    'paleontologist': '2.497',
    'cartographer': '2.499',
    'cyberwinner': '2.245',
    'correspondent': '9.957',
    'regulator': '25.38',
    'xn--7-2sn3401h': '0.9825168',
    'xn--777-uc1abb94470bcac': '0.9793956',
    'xn--888-uc1abb94470bcac': '0.9793956',
    'xn--666-uc1abb94470bcac': '0.9793956',
    'xn--8-2sn3401h': '0.9825168',
    'podcaster': '25.38',
    'downloader': '12.67',
    'technician': '12.67',
    'soldier': '84.69',
    'fighter': '84.69',
    'videoeditor': '2.5',
    'participant': '2.5',
    'representative': '2.497',
    'accountancy': '2.5',
    'dental-assistant': '2.778',
    'registrar': '28.2',
    'crypto-casino': '299',
    'marketing-coordinator': '2.773',
    'research-scientist': '2.776',
    'librarian': '28.2',
    'customs-officer': '2.779',
    'mockingbird': '2.782',
    'publisher': '28.2',
    'traveler': '56.45',
    'layoutdesign': '0.9832104',
    'turnkeywebsite': '1.808',
    'layoutdesigner': '0.9825168',
    'software-tester': '2.779',
    'recommender': '2.782',
    'art-director': '2.781',
    'telegram-support': '2.778',
    'tv-presenter': '2.781',
    'student': '76.22',
    'webdev': '91.47',
    'streamer': '50.8',
    'advertiser': '12.67',
    'learning': '118.06',
    'operator': '56.45',
    'hire': '228.73',
    'ui-designer': '2.782',
    'content-manager': '2.779',
    'systems-administrator': '2.773',
    'cybersecurity-analyst': '2.773',
    'ux-designer': '2.782',
    'devops-engineer': '2.779',
    'ui-developer': '2.781',
    'growth-hacker': '2.78',
    'it-support-specialist': '2.773',
    'social-media-manager': '2.774',
    'financial-advisor': '2.777',
    'big-data-engineer': '2.777',
    'it-architect': '2.781',
    'sales-manager': '2.78',
    'account-manager': '2.779',
    'civil-engineer': '2.78',
    'financial-analyst': '2.777',
    'cyber-squatter': '2.78',
    'physical-therapist': '2.776',
    'telegram-news': '2.78',
    'data-engineer': '2.78',
    'marketing-manager': '2.777',
    'electrical-engineer': '2.775',
    'cosmetician': '2.782',
    'event-planner': '2.78',
    'content-writer': '2.78',
    'taxidriver': '11.4',
    'product-manager': '2.779',
    'experimenter': '2.781',
    'it-consultant': '2.78',
    'ai-engineer': '2.782',
    'software-engineer': '2.777',
    'project-manager': '2.779',
    'composer': '50.8',
    'marriagecontract': '0.9818232',
    'minter': '82.32',
    '1c-developer': '2.781',
    'php-developer': '2.78',
    'kotlin-developer': '2.778',
    'vpn-service': '2.782',
    'writer': '112.93',
    'singer': '101.64',
    'back-end-developer': '3.09',
    'front-end-developer': '3.089',
    'ton-developer': '3.094',
    'full-stack-developer': '3.088',
    'cryptopromoter': '0.9825168',
    'worker': '91.47',
    'mage': '228.73',
    'internet-marketer': '3.44',
    'business-analyst': '3.44',
    'it-recruiter': '3.444',
    'prompt-engineer': '3.441',
    'audioengineer': '3.443',
    'motiondesigner': '3.442',
    'organizer': '34.83',
    'instrumentals': '1.623',
    'notifier': '41.14',
    'reviewer': '45.71',
    'assistant': '28.2',
    'screenwriter': '5.862',
    'footballist': '5.863',
    'reconstructor': '5.862',
    'merchandiser': '5.862',
    'conspirator': '5.863',
    'pharmacist': '29.48',
    'paramedic': '59.01',
    'policeman': '59.01',
    'deliveryboy': '5.863',
    'metabuilder': '5.863',
    'perfomancer': '5.863',
    'implementer': '5.863',
    'diplomatist': '5.863',
    'birthcertificate': '5.859',
    'nft-collector': '5.862',
    'electricscooter': '5.86',
    'arbitrament': '5.863',
    'audiostudio': '5.863',
    'passportoffice': '5.861',
    'universalmusic': '5.861',
    'warnermusic': '5.863',
    'yachtrental': '5.863',
    'moneystream': '5.863',
    'funeralservice': '5.861',
    'youwillbecomeadad': '5.858',
    'marrymelove': '5.863',
    'songdetecting': '5.862',
    'besttrainer': '5.863',
    'insurance365': '5.862',
    'studyenglish': '5.862',
    'aviatickets': '5.863',
    'dappdeveloper': '5.862',
    'easylanguage': '5.862',
    'data-buffer': '5.863',
    'facedetecting': '5.862',
    'deliverydrug': '5.862',
    'realestatesale': '5.861',
    'realestatebuy': '5.862',
    'traintransit': '5.862',
    'news-world': '29.48',
    'aviatransit': '5.863',
    'autotransit': '5.863',
    'maptracking': '5.863',
    'deliverycheck': '5.862',
    'misanthrope': '5.863',
    'disappearer': '4.741',
    'editor': '101.64',
    'xn--d1acpjx3f': '1.809',
    'xn--b1addnjx7d': '1.808',
    'xn--b1ak2a9bn': '1.809',
    'xn--d1ad3a': '9.223',
    'xn--80ataoec1a': '1.808',
    'xn--80ahc': '18.49',
    'xn--80aafg6avvi': '1.807',
    'xn--80a1acny': '1.81',
    'xn--b1afajfl0aek': '1.806',
    'xn--90aiim0b': '1.81',
    'xn--c1akhxjc': '1.81',
    'xn--80aqnelhdl': '1.808',
    'xn--80ae0bii': '1.81',
    'song': '282.39',
    'turnkeycontract': '1.807',
    'turnkeybusiness': '1.807',
    'turnkeyproject': '1.808',
    'turnkeyhouse': '1.81',
    'cyberpoliceman': '1.808',
    'dnsnotifier': '2.017',
    'autoreseller': '2.016',
    'autoseller': '10.25',
    'artdirector': '2.017',
    'toncoinanalyst': '2.014',
    'printer': '61.73',
    'audioeditor': '2.017',
    'audiocreator': '2.016',
    'tonlibraries': '2.016',
    'softwaresupport': '2.013',
    'tvpresenter': '2.017',
    'radiopresenter': '2.014',
    'sender': '101.64',
    'pythondev': '20.55',
    'e-signature': '2.017',
    'landowner': '20.55',
    'shortreadablename': '2.011',
    'materials': '22.84',
    'warlock': '68.59',
    'druid': '114.35',
    'affiliatemanager': '2.241',
    'shadowshaman': '2.244',
    'legioncommander': '2.242',
    'facelessvoid': '2.244',
    'witchdoctor': '2.245',
    'bristleback': '2.245',
    'beastmaster': '2.245',
    'phantomassassin': '2.242',
    'dwarvensniper': '2.244',
    'soliditydev': '2.245',
    'tactdeveloper': '2.244',
    'funcdeveloper': '2.244',
    'blockchaindeveloper': '2.238',
    'blockchaindev': '2.244',
    'blockchainfullstackdeveloper': '2.231',
    'farmer': '91.47',
    'healer': '91.47',
    'damagedealer': '2.244',
    'damagedeal': '11.4',
    'demonhunter': '2.245',
    'deathknight': '2.245',
    'paladin': '68.59',
    'shaman': '91.47',
    'warrior': '68.59',
    'rogue': '114.35',
    'cyberchampion': '2.244',
    'productowner': '2.244',
    'rentalservices': '2.243',
    'poet': '254.15',
    'subscriber': '29.48',
    'cyber-scuatter': '2.78',
    'enhancespeech': '2.244',
    'neural-love': '2.245',
    'vocalremover': '2.244',
    'sketchmetademolab': '2.24',
    'clipinterrogator': '2.241',
    'pixelartdiffusion': '2.24',
    'dreamfield3d': '2.244',
    'microsoftdesigner': '2.24',
    'chat-roulette': '2.244',
    'acquaintance': '2.244',
    'filmreviewer': '2.244',
    'filmcritic': '11.4',
    'foodcritic': '11.4',
    'restaurantcritic': '2.241',
    'fashionshow': '2.245',
    'voguereview': '2.245',
    'fashionreviewer': '2.242',
    'fashiondesigner': '2.242',
    'theatrecritic': '2.244',
    'literarycritic': '2.243',
    'musiccritic': '2.245',
    'contentreviewer': '2.242',
    'contentment': '2.245',
    'webdevelopment': '2.243',
    'cryptoanalyst': '2.244',
    'financialanalyst': '2.241',
    'businessanalyst': '2.242',
    'contentcreator': '2.243',
    'marketingmanager': '2.241',
    'chainmanager': '2.244',
    'recruiter': '22.84',
    'chatmoderator': '2.244',
    'fullstackwebdev': '2.242',
    'devrelationslead': '2.241',
    'developerrelationslead': '2.236',
    'supportspecialist': '2.24',
    'technicalwriter': '2.242',
    'blockchaindataanalyst': '2.237',
    'operationalmanager': '2.239',
    'community-manager': '2.24',
    'dnsrentals': '11.4',
    'courier': '68.59',
    'tondnsrental': '2.244',
    'mirrorsedge': '2.245',
    'dns-domains': '2.245',
    'dnsdomainsrent': '2.243',
    'arendadomena': '2.244',
    'domenvarendu': '2.244',
    'arendadomenov': '2.244',
    'dnsdomainrent': '2.244',
    'domainrent': '11.4',
    'domainrental': '2.244',
    'programbot': '11.4',
    'porndirector': '2.244',
    'porncameraman': '2.244',
    'dns-hostname': '2.244',
    'informant': '22.84',
    'cyber-sportsman': '2.242',
    'funpay': '91.47',
    'cyberathlete': '2.244',
    'cybercompetitions': '2.24',
    'e-sportsman': '2.245',
    'informator': '11.4',
    'informer': '45.71',
    'playerunknown': '2.244',
    'assassinscreed': '2.243',
    'grandtheftauto5': '2.242',
    'reddeadredemption2': '2.239',
    'stadiumevents': '2.244',
    'yusakumaezava': '2.244',
    'guildwars2': '11.4',
    'starconflict': '2.244',
    'dungeonsanddragons': '2.239',
    'bladeandsoul': '2.244',
    'worldofwarplanes': '2.241',
    'pathofexile': '2.245',
    'neverwinter': '2.245',
    'blackdesert': '2.245',
    'theelderscrolls': '2.242',
    'fortnitemobile': '2.243',
    'maximalist': '11.4',
    'storer': '91.47',
    'storiesbooster': '2.243',
    'storybooster': '2.244',
    'booster': '68.59',
    'saver': '114.35',
    'destitution': '2.245',
    'separator': '22.84',
    'thief': '127.06',
    'subnetmask': '12.67',
    'ip-address': '12.67',
    'dns-server': '12.67',
    'routingtable': '2.499',
    'portforwarding': '2.497',
    'dhcp-server': '2.5',
    'loadbalancer': '2.499',
    'darknetsurfer': '2.498',
    'vintongraycerf': '2.497',
    'buffer': '101.64',
    'receiver': '50.8',
    'transmitter': '2.5',
    'repeater': '50.8',
    'installer': '25.38',
    'typesetter': '12.67',
    'clothingstylist': '2.496',
    'hairstylist': '2.5',
    'fullstackdev': '2.499',
    'contentwriter': '2.498',
    'protester': '25.38',
    'volunteer': '25.38',
    'mechanic': '50.8',
    'tutor': '127.06',
    'waiter': '101.64',
    'campaigner': '12.67',
    'visitor': '76.22',
    'actress': '76.22',
    'cleaner': '76.22',
    'secretary': '25.38',
    'colleague': '25.38',
    'environmentalist': '2.495',
    'bookstoreowner': '2.497',
    'socialworker': '2.499',
    'mountaineer': '2.5',
    'decorator': '25.38',
    'employer': '50.8',
    'epidemiologist': '2.497',
    'obstetrician': '2.499',
    'microbiologist': '2.497',
    'rheumatologist': '2.497',
    'physiatrist': '2.5',
    'gerontologist': '2.498',
    'philologist': '2.5',
    'calligrapher': '2.499',
    'ornithologist': '2.498',
    'entomologist': '2.499',
    'seismologist': '2.499',
    'endocrinologist': '2.496',
    'parasitologist': '2.497',
    'neurologist': '2.5',
    'demographer': '2.5',
    'immunologist': '2.499',
    'audiobooker': '2.5',
    'gastroenterologist': '2.494',
    'meteorologist': '2.498',
    'anesthesiologist': '2.495',
    'audiologist': '2.5',
    'dancer': '101.64',
    'competitor': '12.67',
    'promoter': '50.8',
    'negotiator': '12.67',
    'athlete': '76.22',
    'adventurer': '12.67',
    'playwright': '12.67',
    'biographer': '12.67',
    'missionary': '12.67',
    'presenter': '25.38',
    'emitter': '76.22',
    'counter': '76.22',
    'educator': '50.8',
    'politician': '12.67',
    'receptionist': '2.499',
    'ticketpay': '59.01',
    'trainer': '116.19',
    'teacher': '129.1',
    'author': '236.16',
    'transit': '177.11',
    'news-russia': '6.52',
    'switch': '101.64',
    'tondev': '91.47',
    'sportsman': '25.38',
    'musician': '50.8'
}

const Ul = [
    "song", // site
    "hire", // site
    "mage", // game
    "poet", // prof
    "druid", // game
    "actor", // prof
    "tutor", // prof
    "rogue", // game
    "thief", // wallet
    "saver", // utility
    "editor", // prof
    "storer", // utility
    "minter", // utility
    "writer", // prof
    "singer", // prof
    "sender", // utility
    "dancer", // prof
    "funpay", // other
    "farmer", // prof
    "reader", // utility
    "switch", // utility
    "waiter", // prof
    "author", // service
    "worker", // utility
    "healer", // game
    "webdev", // prof
    "buffer", // utility
    "tondev", // other
    "shaman", // game
    "visitor", // service
    "actress", // prof
    "cleaner", // prof
    "transit", // service
    "trainer", // prof
    "teacher", // prof
    "booster", // utility
    "courier", // prof
    "soldier", // prof
    "warlock", // game
    "athlete", // prof
    "emitter", // utility
    "fighter", // prof
    "printer", // utility
    "student", // site
    "paladin", // game
    "warrior", // game
    "counter", // utility
    "follower", // prof
    "informer", // prof
    "notifier", // prof
    "receiver", // utility
    "streamer", // prof
    "reviewer", // prof
    "repeater", // utility
    "learning", // site
    "operator", // prof
    "educator", // prof
    "mechanic", // prof
    "promoter", // prof
    "composer", // prof
    "traveler", // prof
    "musician", // prof
    "employer", // prof
    "publisher", // prof
    "librarian", // prof
    "organizer", // prof
    "landowner", // prof
    "materials", // site
    "policeman", // prof
    "paramedic", // prof
    "xn--80ahc", // punycode
    "separator", // utility
    "assistant", // prof
    "podcaster", // prof
    "regulator", // prof
    "registrar", // prof
    "installer", // utility
    "informant", // prof
    "presenter", // prof
    "ticketpay", // site
    "sportsman", // prof
    "protester", // prof
    "volunteer", // prof
    "colleague", // other
    "pythondev", // prof
    "secretary", // prof
    "recruiter", // prof
    "decorator", // prof
    "maximalist", // other
    "pharmacist", // prof
    "informator", // prof
    "damagedeal", // game
    "xn--d1ad3a", // punycode
    "dnsrentals", // site
    "guildwars2", // game
    "news-world", // other
    "autoseller", // prof
    "programbot", // service
    "domainrent", // site
    "filmcritic", // prof
    "typesetter", // prof
    "politician", // prof
    "biographer", // prof
    "missionary", // prof
    "eliminator", // prof
    "campaigner", // prof
    "undertaker", // prof
    "unemployed", // prof
    "adventurer", // prof
    "subscriber", // utility
    "auctioneer", // prof
    "taxidriver", // prof
    "advertiser", // prof
    "negotiator", // prof
    "foodcritic", // prof
    "technician", // prof
    "downloader", // utility
    "prosecutor", // prof
    "arbitrator", // prof
    "competitor", // prof
    "dns-server", // utility
    "ip-address", // utility
    "subnetmask", // utility
    "playwright", // prof
    "artdirector", // prof
    "audioeditor", // prof
    "tvpresenter", // prof
    "e-signature", // service
    "footballist", // prof
    "bristleback", // game 
    "beastmaster", // game 
    "participant", // service
    "soliditydev", // prof
    "demonhunter", // game
    "deathknight", // game
    "neural-love", // service
    "videoeditor", // prof
    "ui-designer", // prof
    "dnsnotifier", // service
    "aviatickets", // site
    "deliveryboy", // prof
    "metabuilder", // other
    "perfomancer", // prof
    "implementer", // prof
    "diplomatist", // prof
    "arbitrament", // service
    "audiostudio", // service
    "warnermusic", // other
    "yachtrental", // service
    "moneystream", // other
    "marrymelove", // other
    "besttrainer", // other
    "data-buffer", // utility
    "accountancy", // site
    "news-russia", // site
    "vpn-service", // utility
    "ai-engineer", // prof
    "aviatransit", // site
    "autotransit", // site
    "maptracking", // service
    "cosmetician", // prof
    "misanthrope", // other
    "disappearer", // other
    "ux-designer", // prof
    "conspirator", // utility
    "recommender", // utility
    "mockingbird", // other
    "witchdoctor", // game 
    "neverwinter", // game
    "hairstylist", // prof
    "contentment", // prof
    "demographer", // prof
    "neurologist", // prof
    "philologist", // prof
    "physiatrist", // prof
    "mountaineer", // prof
    "transmitter", // utility
    "audiobooker", // service
    "dhcp-server", // utility
    "mirrorsedge", // game
    "dns-domains", // service
    "destitution", // other
    "blackdesert", // game
    "pathofexile", // game
    "musiccritic", // prof
    "e-sportsman", // prof
    "fashionshow", // site
    "audiologist", // prof
    "voguereview", // site
    "confiscator", // prof
    "perpetrator", // prof
    "notificator", // utility
    "xn--80a1acny", // punycode
    "loadbalancer", // utility
    "routingtable", // utility
    "dreamfield3d", // service 
    "demonstrator", // prof
    "1c-developer", // prof
    "xn--90aiim0b", // punycode
    "storybooster", // service
    "it-recruiter", // prof
    "xn--80ae0bii", // punycode
    "vocalremover", // service
    "turnkeyhouse", // site
    "fullstackdev", // prof
    "xn--c1akhxjc", // punycode
    "domenvarendu", // site
    "arendadomena", // site
    "bladeandsoul", // game
    "insurance365", // site
    "studyenglish", // site
    "easylanguage", // site
    "cyberathlete", // prof
    "starconflict", // game
    "deliverydrug", // service
    "acquaintance", // service
    "screenwriter", // prof
    "traintransit", // site
    "filmreviewer", // prof
    "dns-hostname", // utility
    "porndirector", // prof
    "domainrental", // site
    "merchandiser", // prof
    "autoreseller", // prof
    "tondnsrental", // site
    "ui-developer", // prof
    "calligrapher", // prof
    "receptionist", // prof
    "facelessvoid", // game
    "tv-presenter", // prof
    "shadowshaman", // game
    "it-architect", // prof
    "entomologist", // prof
    "chainmanager", // prof
    "art-director", // prof
    "layoutdesign", // site
    "seismologist", // prof
    "cartographer", // prof
    "ethnographer", // prof
    "productowner", // service
    "experimenter", // prof
    "damagedealer", // game
    "obstetrician", // prof
    "immunologist", // prof
    "tonlibraries", // utility
    "audiocreator", // prof
    "socialworker", // prof
    "nft-collector", //  other
    "yusakumaezava", // person
    "crypto-casino", // site
    "ornithologist", // prof
    "correspondent", // prof
    "contentwriter", // prof
    "sales-manager", // prof
    "reconstructor", // prof
    "growth-hacker", // prof
    "ton-developer", // prof
    "data-engineer", // prof
    "telegram-news", // other
    "instrumentals", // site
    "gerontologist", // prof
    "event-planner", // utility
    "audioengineer", // prof
    "it-consultant", // prof
    "stadiumevents", // game
    "darknetsurfer", // other
    "choreographer", // prof
    "php-developer", // prof
    "meteorologist", // prof
    "cyberwinner", // site
    "playerunknown", // game
    "facedetecting", // service
    "enhancespeech", // service 
    "cyberchampion", // site
    "theatrecritic", // prof
    "xn--b1ak2a9bn", // punycode
    "xn--d1acpjx3f", // punycode
    "arendadomenov", // site
    "dnsdomainrent", // site
    "deliverycheck", // service
    "porncameraman", // prof
    "realestatebuy", // site
    "chatmoderator", // utility
    "chat-roulette", // service
    "dappdeveloper", // prof
    "cryptoanalyst", // prof
    "blockchaindev", // prof
    "dwarvensniper", // game 
    "songdetecting", // service
    "funcdeveloper", // prof
    "tactdeveloper", // prof
    "civil-engineer", // prof
    "rentalservices", // site
    "paleontologist", // prof
    "bookstoreowner", // service
    "toncoinanalyst", // prof
    "epidemiologist", // prof
    "representative", // prof
    "contentcreator", // prof
    "rheumatologist", // prof
    "microbiologist", // prof
    "radiopresenter", // prof
    "parasitologist", // prof
    "layoutdesigner", // prof
    "turnkeywebsite", // site
    "literarycritic", // prof
    "cyberpoliceman", // other
    "webdevelopment", // prof
    "content-writer", // prof
    "cyber-squatter", // prof
    "cyber-scuatter", // other
    "cryptopromoter", // other
    "turnkeyproject", // site
    "xn--80ataoec1a", // punycode
    "funeralservice", // site
    "assassinscreed", // game
    "universalmusic", // site
    "passportoffice", // site
    "xn--7-2sn3401h", // punycode
    "xn--8-2sn3401h", // punycode
    "realestatesale", // site
    "storiesbooster", // utility
    "dnsdomainsrent", // site
    "xn--b1addnjx7d", // punycode
    "portforwarding", // utility
    "fortnitemobile", // game
    "vintongraycerf", // person
    "motiondesigner", // prof
    "procrastinator", // other
    "xn--80aqnelhdl", // punycode
    "technicalwriter", // prof
    "turnkeycontract", // site
    "endocrinologist", // prof
    "electricscooter", // site
    "software-tester", // prof
    "grandtheftauto5", // game
    "legioncommander", // game
    "phantomassassin", // game
    "businessanalyst", // prof
    "conservationist", // other
    "turnkeybusiness", // site
    "devops-engineer", // prof
    "account-manager", // prof
    "fashionreviewer", // prof
    "softwaresupport", // prof
    "clothingstylist", // prof
    "xn--80aafg6avvi", // punycode
    "fashiondesigner", // prof
    "project-manager", // prof
    "prompt-engineer", // prof
    "product-manager", // prof
    "content-manager", // prof
    "fullstackwebdev", // prof
    "contentreviewer", // prof
    "customs-officer", // prof
    "theelderscrolls", // game
    "cyber-sportsman", // prof
    "clipinterrogator", // prof
    "anesthesiologist", // prof
    "telegram-support", // service
    "business-analyst", // prof
    "financialanalyst", // prof
    "dental-assistant", // prof
    "restaurantcritic", // prof
    "devrelationslead", // prof
    "birthcertificate", // other
    "worldofwarplanes", // game
    "marriagecontract", // other
    "xn--b1afajfl0aek", // punycode
    "environmentalist", // other
    "marketingmanager", // prof
    "kotlin-developer", // prof
    "affiliatemanager", // prof
    "financial-advisor", // prof
    "internet-marketer", // prof
    "microsoftdesigner", // service 
    "supportspecialist", // prof
    "software-engineer", // prof
    "pixelartdiffusion", // service 
    "cybercompetitions", // other
    "sketchmetademolab", // service 
    "youwillbecomeadad", // other
    "shortreadablename", // other
    "big-data-engineer", // prof
    "marketing-manager", // prof
    "financial-analyst", // prof
    "community-manager", // prof
    "back-end-developer", // prof
    "gastroenterologist", // prof
    "research-scientist", // prof
    "dungeonsanddragons", // game
    "physical-therapist", // prof
    "reddeadredemption2", // game
    "operationalmanager", // prof
    "electrical-engineer", // prof
    "blockchaindeveloper", // prof
    "front-end-developer", // prof
    "full-stack-developer", // prof
    "social-media-manager", // prof
    "blockchaindataanalyst", // prof
    "systems-administrator", // prof
    "marketing-coordinator", // prof
    "it-support-specialist", // prof
    "cybersecurity-analyst", // prof
    "developerrelationslead", // prof
    "xn--666-uc1abb94470bcac", // punycode
    "xn--888-uc1abb94470bcac", // punycode
    "xn--777-uc1abb94470bcac", // punycode
    "blockchainfullstackdeveloper" // prof
];
//professions
const list_prof = [
    "poet",
    "actor",
    "tutor",
    "editor",
    "writer",
    "singer",
    "dancer",
    "farmer",
    "waiter",
    "webdev",
    "actress",
    "cleaner",
    "trainer",
    "teacher",
    "courier",
    "soldier",
    "athlete",
    "fighter",
    "informer",
    "notifier",
    "streamer",
    "reviewer",
    "operator",
    "educator",
    "mechanic",
    "promoter",
    "composer",
    "traveler",
    "musician",
    "employer",
    "publisher",
    "librarian",
    "organizer",
    "landowner",
    "policeman",
    "paramedic",
    "assistant",
    "podcaster",
    "regulator",
    "registrar",
    "informant",
    "presenter",
    "sportsman",
    "protester",
    "volunteer",
    "pythondev",
    "secretary",
    "recruiter",
    "decorator",
    "pharmacist",
    "informator",
    "autoseller",
    "filmcritic",
    "typesetter",
    "politician",
    "biographer",
    "missionary",
    "eliminator",
    "campaigner",
    "undertaker",
    "unemployed",
    "adventurer",
    "auctioneer",
    "taxidriver",
    "advertiser",
    "negotiator",
    "foodcritic",
    "technician",
    "prosecutor",
    "arbitrator",
    "playwright",
    "artdirector",
    "audioeditor",
    "tvpresenter",
    "footballist",
    "soliditydev",
    "videoeditor",
    "ui-designer",
    "deliveryboy",
    "perfomancer",
    "implementer",
    "diplomatist",
    "ai-engineer",
    "cosmetician",
    "ux-designer",
    "hairstylist",
    "contentment",
    "demographer",
    "neurologist",
    "philologist",
    "physiatrist",
    "mountaineer",
    "musiccritic",
    "e-sportsman",
    "audiologist",
    "confiscator",
    "demonstrator",
    "1c-developer",
    "it-recruiter",
    "fullstackdev",
    "cyberathlete",
    "screenwriter",
    "filmreviewer",
    "porndirector",
    "merchandiser",
    "autoreseller",
    "ui-developer",
    "calligrapher",
    "receptionist",
    "tv-presenter",
    "it-architect",
    "entomologist",
    "chainmanager",
    "art-director",
    "seismologist",
    "cartographer",
    "ethnographer",
    "experimenter",
    "obstetrician",
    "immunologist",
    "audiocreator",
    "socialworker",
    "ornithologist",
    "correspondent",
    "contentwriter",
    "sales-manager",
    "reconstructor",
    "growth-hacker",
    "ton-developer",
    "data-engineer",
    "gerontologist",
    "audioengineer",
    "it-consultant",
    "choreographer",
    "php-developer",
    "meteorologist",
    "theatrecritic",
    "porncameraman",
    "dappdeveloper",
    "cryptoanalyst",
    "blockchaindev",
    "funcdeveloper",
    "tactdeveloper",
    "civil-engineer",
    "paleontologist",
    "toncoinanalyst",
    "epidemiologist",
    "representative",
    "contentcreator",
    "rheumatologist",
    "microbiologist",
    "radiopresenter",
    "parasitologist",
    "layoutdesigner",
    "literarycritic",
    "webdevelopment",
    "content-writer",
    "cyber-squatter",
    "motiondesigner",
    "technicalwriter",
    "endocrinologist",
    "software-tester",
    "businessanalyst",
    "devops-engineer",
    "account-manager",
    "fashionreviewer",
    "softwaresupport",
    "clothingstylist",
    "fashiondesigner",
    "project-manager",
    "prompt-engineer",
    "product-manager",
    "content-manager",
    "fullstackwebdev",
    "contentreviewer",
    "customs-officer",
    "cyber-sportsman",
    "anesthesiologist",
    "business-analyst",
    "financialanalyst",
    "dental-assistant",
    "restaurantcritic",
    "devrelationslead",
    "marketingmanager",
    "kotlin-developer",
    "affiliatemanager",
    "financial-advisor",
    "internet-marketer",
    "supportspecialist",
    "software-engineer",
    "big-data-engineer",
    "marketing-manager",
    "financial-analyst",
    "community-manager",
    "back-end-developer",
    "gastroenterologist",
    "research-scientist",
    "physical-therapist",
    "operationalmanager",
    "electrical-engineer",
    "blockchaindeveloper",
    "front-end-developer",
    "full-stack-developer",
    "social-media-manager",
    "blockchaindataanalyst",
    "systems-administrator",
    "marketing-coordinator",
    "it-support-specialist",
    "cybersecurity-analyst",
    "developerrelationslead",
    "blockchainfullstackdeveloper"
];

const list_prof_artmedia = [
    "poet",
    "actor",
    "editor",
    "writer",
    "singer",
    "dancer",
    "actress",
    "informer",
    "notifier",
    "streamer",
    "reviewer",
    "operator",
    "promoter",
    "composer",
    "musician",
    "publisher",
    "podcaster",
    "informant",
    "presenter",
    "informator",
    "filmcritic",
    "typesetter",
    "biographer",
    "advertiser",
    "playwright",
    "artdirector",
    "audioeditor",
    "tvpresenter",
    "videoeditor",
    "contentment",
    "musiccritic",
    "audiologist",
    "screenwriter",
    "filmreviewer",
    "porndirector",
    "calligrapher",
    "tv-presenter",
    "art-director",
    "audiocreator",
    "correspondent",
    "contentwriter",
    "audioengineer",
    "choreographer",
    "theatrecritic",
    "porncameraman",
    "contentcreator",
    "radiopresenter",
    "content-writer",
    "motiondesigner",
    "fashionreviewer",
    "fashiondesigner",
    "content-manager",
    "contentreviewer",
    "marketingmanager",
    "affiliatemanager",
    "social-media-manager",
];

const list_prof_it = [
    "webdev",
    "pythondev",
    "soliditydev",
    "ui-designer",
    "ai-engineer",
    "ux-designer",
    "1c-developer",
    "it-recruiter",
    "fullstackdev",
    "ui-developer",
    "it-architect",
    "chainmanager",
    "growth-hacker",
    "ton-developer",
    "data-engineer",
    "it-consultant",
    "php-developer",
    "dappdeveloper",
    "cryptoanalyst",
    "blockchaindev",
    "funcdeveloper",
    "tactdeveloper",
    "toncoinanalyst",
    "layoutdesigner",
    "webdevelopment",
    "cyber-squatter",
    "technicalwriter",
    "software-tester",
    "businessanalyst",
    "devops-engineer",
    "account-manager",
    "softwaresupport",
    "project-manager",
    "prompt-engineer",
    "product-manager",
    "fullstackwebdev",
    "devrelationslead",
    "kotlin-developer",
    "supportspecialist",
    "software-engineer",
    "big-data-engineer",
    "back-end-developer",
    "research-scientist",
    "blockchaindeveloper",
    "front-end-developer",
    "full-stack-developer",
    "blockchaindataanalyst",
    "systems-administrator",
    "marketing-coordinator",
    "it-support-specialist",
    "cybersecurity-analyst",
    "developerrelationslead",
    "blockchainfullstackdeveloper"
];

const list_prof_traditional = [
    "tutor",
    "farmer",
    "waiter",
    "cleaner",
    "trainer",
    "teacher",
    "courier",
    "soldier",
    "athlete",
    "fighter",
    "educator",
    "mechanic",
    "traveler",
    "employer",
    "librarian",
    "organizer",
    "landowner",
    "policeman",
    "assistant",
    "regulator",
    "registrar",
    "sportsman",
    "protester",
    "volunteer",
    "secretary",
    "recruiter",
    "decorator",
    "autoseller",
    "politician",
    "missionary",
    "eliminator",
    "campaigner",
    "undertaker",
    "unemployed",
    "adventurer",
    "auctioneer",
    "taxidriver",
    "negotiator",
    "foodcritic",
    "technician",
    "prosecutor",
    "arbitrator",
    "footballist",
    "deliveryboy",
    "perfomancer",
    "implementer",
    "diplomatist",
    "cosmetician",
    "hairstylist",
    "demographer",
    "philologist",
    "mountaineer",
    "e-sportsman",
    "confiscator",
    "demonstrator",
    "cyberathlete",
    "merchandiser",
    "autoreseller",
    "receptionist",
    "cartographer",
    "ethnographer",
    "experimenter",
    "socialworker",
    "sales-manager",
    "reconstructor",
    "meteorologist",
    "civil-engineer",
    "paleontologist",
    "representative",
    "literarycritic",
    "clothingstylist",
    "customs-officer",
    "cyber-sportsman",
    "business-analyst",
    "financialanalyst",
    "restaurantcritic",
    "financial-advisor",
    "internet-marketer",
    "marketing-manager",
    "financial-analyst",
    "community-manager",
    "operationalmanager",
    "electrical-engineer",
];

const list_prof_medicine = [
    "paramedic",
    "pharmacist",
    "neurologist",
    "physiatrist",
    "entomologist",
    "seismologist",
    "obstetrician",
    "immunologist",
    "ornithologist",
    "gerontologist",
    "epidemiologist",
    "rheumatologist",
    "microbiologist",
    "parasitologist",
    "endocrinologist",
    "anesthesiologist",
    "dental-assistant",
    "gastroenterologist",
    "physical-therapist",
];

//utility
const list_utility = [
    "saver",
    "storer",
    "minter",
    "sender",
    "reader",
    "switch",
    "worker",
    "buffer",
    "booster",
    "emitter",
    "printer",
    "counter",
    "follower",
    "receiver",
    "repeater",
    "separator",
    "installer",
    "subscriber",
    "downloader",
    "dns-server",
    "ip-address",
    "subnetmask",
    "data-buffer",
    "vpn-service",
    "e-signature",
    "conspirator",
    "recommender",
    "transmitter",
    "dhcp-server",
    "notificator",
    "loadbalancer",
    "routingtable",
    "dns-hostname",
    "tonlibraries",
    "event-planner",
    "chatmoderator",
    "storiesbooster",
    "portforwarding",
];
//gaming
const list_game = [
    "mage", // cl
    "druid", // cl
    "rogue", // cl
    "thief", // r
    "healer", // r
    "shaman", // cl
    "warlock", // cl
    "paladin", // cl
    "warrior", // cl
    "damagedeal", // r
    "guildwars2", // g
    "bristleback", // ch
    "beastmaster", // ch
    "demonhunter", // cl
    "deathknight", // cl
    "witchdoctor", // ch
    "neverwinter", // g
    "mirrorsedge", // g
    "blackdesert", // g
    "pathofexile", // g
    "bladeandsoul", // g
    "starconflict", // g
    "facelessvoid", // ch
    "shadowshaman", // ch
    "damagedealer", // r
    "stadiumevents", // g
    "playerunknown", // g
    "dwarvensniper", // ch
    "assassinscreed", // g
    "fortnitemobile", // g
    "grandtheftauto5", // g
    "legioncommander", // ch
    "phantomassassin", // ch
    "theelderscrolls", // g
    "worldofwarplanes", // g
    "dungeonsanddragons", // g
    "reddeadredemption2", // g
];

const list_game_classes = [
    "mage", // cl
    "druid", // cl
    "rogue", // cl
    "shaman", // cl
    "warlock", // cl
    "paladin", // cl
    "warrior", // cl
    "demonhunter", // cl
    "deathknight", // cl
];

const list_game_roles = [
    "thief", // r
    "healer", // r
    "damagedeal", // r
    "damagedealer", // r
];

const list_game_chars = [
    "bristleback", // ch
    "beastmaster", // ch
    "witchdoctor", // ch
    "facelessvoid", // ch
    "shadowshaman", // ch
    "dwarvensniper", // ch
    "legioncommander", // ch
    "phantomassassin", // ch
];

const list_game_games = [
    "guildwars2", // g
    "neverwinter", // g
    "mirrorsedge", // g
    "blackdesert", // g
    "pathofexile", // g
    "bladeandsoul", // g
    "starconflict", // g
    "stadiumevents", // g
    "playerunknown", // g
    "assassinscreed", // g
    "fortnitemobile", // g
    "grandtheftauto5", // g
    "theelderscrolls", // g
    "worldofwarplanes", // g
    "dungeonsanddragons", // g
    "reddeadredemption2", // g
];

//services
const list_service = [
    "song",
    "hire",
    "funpay",
    "transit",
    "student",
    "learning",
    "materials",
    "ticketpay",
    "dnsrentals",
    "news-world",
    "programbot",
    "domainrent",
    "neural-love",
    "dnsnotifier",
    "aviatickets",
    "arbitrament",
    "audiostudio",
    "warnermusic",
    "yachtrental",
    "accountancy",
    "news-russia",
    "aviatransit",
    "autotransit",
    "audiobooker",
    "dns-domains",
    "fashionshow",
    "voguereview",
    "dreamfield3d",
    "storybooster",
    "vocalremover",
    "turnkeyhouse",
    "domenvarendu",
    "arendadomena",
    "insurance365",
    "studyenglish",
    "easylanguage",
    "deliverydrug",
    "acquaintance",
    "traintransit",
    "domainrental",
    "tondnsrental",
    "layoutdesign",
    "crypto-casino",
    "telegram-news",
    "instrumentals",
    "enhancespeech",
    "arendadomenov",
    "dnsdomainrent",
    "deliverycheck",
    "realestatebuy",
    "chat-roulette",
    "rentalservices",
    "turnkeywebsite",
    "turnkeyproject",
    "funeralservice",
    "universalmusic",
    "passportoffice",
    "realestatesale",
    "dnsdomainsrent",
    "turnkeycontract",
    "electricscooter",
    "turnkeybusiness",
    "clipinterrogator",
    "telegram-support",
    "microsoftdesigner",
    "pixelartdiffusion",
    "sketchmetademolab"
];

const list_others = [
    "author",
    "tondev",
    "visitor",
    "colleague",
    "competitor",
    "maximalist",
    "participant",
    "metabuilder",
    "moneystream",
    "marrymelove",
    "besttrainer",
    "maptracking",
    "misanthrope",
    "disappearer",
    "mockingbird",
    "perpetrator",
    "destitution",
    "productowner",
    "nft-collector",
    "yusakumaezava",
    "darknetsurfer",
    "cyberwinner",
    "facedetecting",
    "cyberchampion",
    "songdetecting",
    "bookstoreowner",
    "cyberpoliceman",
    "cyber-scuatter",
    "cryptopromoter",
    "vintongraycerf",
    "procrastinator",
    "conservationist",
    "birthcertificate",
    "marriagecontract",
    "environmentalist",
    "cybercompetitions",
    "youwillbecomeadad",
    "shortreadablename"
];

const list_punycode = [
    "xn--80ahc",
    "xn--d1ad3a",
    "xn--80a1acny",
    "xn--90aiim0b",
    "xn--80ae0bii",
    "xn--c1akhxjc",
    "xn--b1ak2a9bn",
    "xn--d1acpjx3f",
    "xn--80ataoec1a",
    "xn--7-2sn3401h",
    "xn--8-2sn3401h",
    "xn--b1addnjx7d",
    "xn--80aqnelhdl",
    "xn--80aafg6avvi",
    "xn--b1afajfl0aek",
    "xn--666-uc1abb94470bcac",
    "xn--888-uc1abb94470bcac",
    "xn--777-uc1abb94470bcac"
];

//generation of list_elements-links

function listElementsGeneration(listId, elementsArr) {
    for (i = 0; i < elementsArr.length; ++i) {
        let a = document.createElement('a');
        let pr = namePricesDomainsObject[elementsArr[i]];
        // a.href = `https://dns.ton.org/#${elementsArr[i]}`; // генерация ссылки для dns.ton.org
        a.href = `./orderForm.html?domain=${elementsArr[i]}`; // генерация ссылки для перехода на 3 страницу и сохранения параметра url
        let span = document.createElement('span'); // Создаем span элемент для стилизованного текста 
        span.className = 'colorDesc';
        span.innerText = '(mint price)'; // Формируем текст с использованием span элемента 
        a.innerHTML = `${elementsArr[i]}.ton - ${pr} toncoin `;
        a.appendChild(span); // Добавляем span элемент как дочерний элемент 
        a.className = `element_for_search`;
        a.id = `${elementsArr[i]}.ton`;
        listId.appendChild(a);
    }
}

let list0 = document.getElementById("list0");
listElementsGeneration(list0, Ul);

let list1 = document.getElementById("list1");
listElementsGeneration(list1, list_prof);

let list1_1 = document.getElementById("list1_1");
listElementsGeneration(list1_1, list_prof_artmedia);

let list1_2 = document.getElementById("list1_2");
listElementsGeneration(list1_2, list_prof_it);

let list1_3 = document.getElementById("list1_3");
listElementsGeneration(list1_3, list_prof_traditional);

let list1_4 = document.getElementById("list1_4");
listElementsGeneration(list1_4, list_prof_medicine);

let list2 = document.getElementById("list2");
listElementsGeneration(list2, list_utility);

let list3 = document.getElementById("list3");
listElementsGeneration(list3, list_game);

let list3_1 = document.getElementById("list3_1");
listElementsGeneration(list3_1, list_game_classes);

let list3_2 = document.getElementById("list3_2");
listElementsGeneration(list3_2, list_game_roles);

let list3_3 = document.getElementById("list3_3");
listElementsGeneration(list3_3, list_game_chars);

let list3_4 = document.getElementById("list3_4");
listElementsGeneration(list3_4, list_game_games);

let list4 = document.getElementById("list4");
listElementsGeneration(list4, list_service);

let list5 = document.getElementById("list5");
listElementsGeneration(list5, list_others);

let list6 = document.getElementById("list6");
listElementsGeneration(list6, list_punycode);

// counter of amount elements

function counterGroup(group) {
    let count = 0;
    while (count <= group.length - 1) {
        count++;
    }
    console.log(count);
    return count;
}

function countAmountOf(nameVar, thisGroup, AllGroup) {
    nameVar.innerText = "(" + counterGroup(thisGroup) + " / " + counterGroup(AllGroup) + ")";
}

let count_amont_list0 = document.getElementById("count_amount_list0");
countAmountOf(count_amont_list0, Ul, Ul);

let count_amont_list1 = document.getElementById("count_amount_list1");
countAmountOf(count_amont_list1, list_prof, Ul);

let subcount_amont_list1_1 = document.getElementById("subcount_amount_list1_1");
countAmountOf(subcount_amont_list1_1, list_prof_artmedia, list_prof);

let subcount_amont_list1_2 = document.getElementById("subcount_amount_list1_2");
countAmountOf(subcount_amont_list1_2, list_prof_it, list_prof);

let subcount_amont_list1_3 = document.getElementById("subcount_amount_list1_3");
countAmountOf(subcount_amont_list1_3, list_prof_traditional, list_prof);

let subcount_amont_list1_4 = document.getElementById("subcount_amount_list1_4");
countAmountOf(subcount_amont_list1_4, list_prof_medicine, list_prof);

let count_amont_list2 = document.getElementById("count_amount_list2");
countAmountOf(count_amont_list2, list_utility, Ul);

let count_amont_list3 = document.getElementById("count_amount_list3");
countAmountOf(count_amont_list3, list_game, Ul);

let count_amont_list3_1 = document.getElementById("subcount_amount_list3_1");
countAmountOf(count_amont_list3_1, list_game_classes, list_game);

let count_amont_list3_2 = document.getElementById("subcount_amount_list3_2");
countAmountOf(count_amont_list3_2, list_game_roles, list_game);

let count_amont_list3_3 = document.getElementById("subcount_amount_list3_3");
countAmountOf(count_amont_list3_3, list_game_chars, list_game);

let count_amont_list3_4 = document.getElementById("subcount_amount_list3_4");
countAmountOf(count_amont_list3_4, list_game_games, list_game);

let count_amont_list4 = document.getElementById("count_amount_list4");
countAmountOf(count_amont_list4, list_service, Ul);

let count_amont_list5 = document.getElementById("count_amount_list5");
countAmountOf(count_amont_list5, list_others, Ul);

let count_amont_list6 = document.getElementById("count_amount_list6");
countAmountOf(count_amont_list6, list_punycode, Ul);

// searching


var lastHighlightedElement = null;

function TrimStr(s) { s = s.replace(/^\s+/g, ''); return s.replace(/\s+$/g, ''); }


function FindOnPage(inputId) {
    var obj = window.document.getElementById(inputId);
    var textToFind;
    if (obj) { textToFind = TrimStr(obj.value); } else { alert("Введенная фраза не найдена"); return; }
    if (textToFind == "") { alert("Вы ничего не ввели"); return; }
    var elements = document.querySelectorAll('.element_for_search');
    elements.forEach(function(element) {
        var html = element.textContent;
        var regex = new RegExp(textToFind, 'gi');
        var highlightedHtml = html.replace(regex, function(match) { return '<span class="highlight">' + match + '</span>'; });
        element.innerHTML = highlightedHtml;
        element.closest('details').open = true; // Фокусировка на найденном элементе 
        var elementTop = element.offsetTop;
        var elementHeight = element.offsetHeight;
        var list = element.closest('details').querySelector('.list0');
        var listHeight = list.offsetHeight;
        var listScrollTop = list.scrollTop;
        var listCenter = elementTop - (listHeight / 2) + (elementHeight / 2);
        list.scrollTo({
            top: listCenter,
            behavior: 'smooth'
        });
    });
    window.location = '#text-to-find';
}

//counting of totalSum

function totalSum(nameVar, namesDomains, pricesObject) {
    let totalPrice = 0;
    for (let i = 0; i < namesDomains.length; i++) {
        totalPrice += Number(pricesObject[namesDomains[i]]);
    }
    // return `${totalPrice.toFixed(2)} ton`;
    nameVar.innerText = `Total mint sum of collection: ${totalPrice.toFixed(2)} ton`;
}

console.log(totalSum(Ul, namePricesDomainsObject));

let totalPriceInfo = document.getElementById('totalPrice');
totalSum(totalPriceInfo, Ul, namePricesDomainsObject);

// // methods for 3th Page

// // get var

// function getDomainParameter() { var url = window.location.href; var name = 'domain'; var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'); var results = regex.exec(url); if (!results) return null; if (!results[2]) return ''; return decodeURIComponent(results[2].replace(/\+/g, ' ')); } // Получаем значение параметра domain из текущего URL 
// var selectedDomain = getDomainParameter();
// console.log(`имя домена на этой странице: ${selectedDomain}`);

// // into domain-block info
// //img