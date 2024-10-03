
export default async (req, res) => {

    const {id} = req.query;

    if(!id) {
        return res.status(400).json({error: "id no encontrado"})
    }

    const data = [
        {
            id: 1,
            province : "Cercado",
            title: "El Museo Convento Santa Teresa en Cochabamba Cercado",
            titleQuechua: "El Museo Convento Santa Teresa en Cochabamba Cercado",
            description: `En las profundidades del Museo Convento Santa Teresa, más allá de las salas de oración y los claustros silenciosos, se oculta un secreto ancestral. Se rumorea que existe una cripta olvidada, un lugar que ni la luz del día ni la fe de las monjas carmelitas han tocado en siglos.
                          El mito cuenta que en esta cripta descansa el Cofre de las Almas Perdidas, un antiguo relicario que contiene los espíritus de aquellos que, en vida, cometieron actos de avaricia y traición contra el convento. Se dice que las hermanas carmelitas descubrieron el cofre durante la construcción del convento y, horrorizadas por su contenido, lo sellaron y lo escondieron en la cripta más profunda.
                          Los más valientes o imprudentes que han intentado encontrar la cripta cuentan que se escuchan lamentos y susurros entre las sombras, y algunos afirman haber visto figuras espectrales vagando por los pasillos subterráneos. La entrada a la cripta está marcada por una puerta de hierro forjado con símbolos que advierten sobre el peligro de despertar a las almas atrapadas.
                        Hasta el día de hoy, nadie ha logrado abrir el Cofre de las Almas Perdidas, y aquellos que han intentado se han perdido en la oscuridad, nunca volviendo a ser vistos. Así, el mito de la cripta y el cofre sigue vivo, un oscuro recordatorio del pasado que aún acecha en las entrañas del Museo Convento Santa Teresa

        `,
        descriptionQuechua : `Unay pachapi, juk apu wasipi mito nisqa kan, chay apu wasipiqa parlaykunas uyarikun, uuuukhu wasipi chay ukhunpitaq kan juk p'uktaki, chay ukhunpitaq unay runaspata waqaykunas chantapis parlaykunas qhaparispa p'ampasqa, ajina kaptinpis uyarikun kharumanta, kunan kama chay p'uktaki wisk'asqa unaymantapacha, nitaj kicharikuyta atikunchu, kuxharinkuman chayqa, runasqa tutapi kawsankuman nin chay mito nisqa chay convento santa teresa Cochabambamanta nisqapi
        CUENTO DE EL ZORRO Y LA HUALLATA
        ATUQMANTAWAN WALLATAMANTAWAN (Hawari  
        )Juk p'unchawpi wallata irqinkuna chupaykusqa qucha patapi puriykachaqkasqa. Mama atuqtaq, wallatata irqinkunatawan munapayaspa qhawasqa.Chaymanta, mama wallataman chimpaykuspa, kay jinata rimapayaykun: _Mamay wallata, ¡Ama jinachu kay!. Willariway. ¿Imaraykutaq wawaykipaqta chakin munay pukarayayta?. Wallatataq, pay tukusqallaña,atuqta nin: _Wawa chakin pukarinampaq ,  pari jallp'api, thullpa
        ukhupi wathiyarpanki, Qampis uñasniykita, munayki chayri chakisninta kanayurpanki wathiyarqunki ; t’uqyaqtintaq: ¡ay!, ¡ay!, ¡ay! nispa ninki. Atuqqa kusisqas: chhiqachá nispa wasinman, phawaylla kutin. Hinas uñankunata, pari jallp'a thullpa ukhupi wathiyarqun, t’uqyaqta uyarispataq _¡ay!, ¡ay!, ¡ay! nispa nisqa. Hinas, h u r n uma n t a uñankuñallata  u r q h u s q a ; manchkarikuqtinri atuqqa qhaparin jinamanta nin _¡Maypitaq wallatari! nispa qucha patata mask’aspa purin. Wallataqa atuqta rikuspas qucha chawpiman yaykun pakakunampaq.Hinas atuqqa wallatata hap'iyta munaspa unuta upyayta yakuta qallarin, sinchi muqch'isqanmantas wañuyninta tarin.

        `,
        questions: ["¿Qué se llamaba el convento?", "¿Qué se escuchaba dentro de la caja?"],
        questionsQuechua:  ["Ima sutikurqa chay convento nisqa?","Ima uyarikun chay p'uktaki ukhunpi?"],
        images: ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/6.CERCADO.jpeg?alt=media&token=01639269-9bc8-471f-8dd3-d7ef7bccd2b0"]    
    },
        {
          id  : 2,
          province : "Ayopaya",
          title : "EL ZORRO Y LA HUALLATA",
          titleQuechua:"EL ZORRO Y LA HUALLATA",
          description : `Cuento)Cierto día, una huallata seguida por sus polluelos caminaba orgullosa por la orilla de una laguna.La mamá zorra admirada, observaba la belleza de la huallata y sus polluelos desde lejos. Acercándose a la mamá huallata le conversó de la siguiente manera: _Señora huallata, por favor, dígame ¿Porqué las patitas de sus pollitos son tan coloraditas?.La huallata llena de orgullo respondió: _Las patitas de mis hijitos son tan coloraditas porque yo las he tostado en ceniza y fuego dentro de un horno. Tú también hornea a tus hijos, para que sus piececitos sean coloraditos. Cuando escuches que revientan vas adecir: ¡ay!, ¡ay!, ¡ay!.La zorra creyendo que era cierto regresó corriendo a su casa y horneó a sus cachorros y cuando el fuego crepitaba, ella decía_¡ay!, ¡ay!, ¡ay!, tal como había sido instruida por la huallata. Pero al sacarlas del horno los cachoritos se encontraban completamente chamuscados; la zorra lanzó un alarido de susto e inmediatamentese echó a buscar a la huallata, diciendo: _¿Dónde está esa huallata?Y corrió hacia la laguna en su búsqueda. La huallata al verla se fue al centro de la laguna. La zorra queriendo atrapar a la huallata comenzó a beber el agua de la laguna y de tanta boconada de agua murió.`,
          descriptionQuechua : `CUENTO DE EL ZORRO Y LA HUALLATA
          ATUQMANTAWAN WALLATAMANTAWAN (Hawari
          )Juk p'unchawpi wallata irqinkuna chupaykusqa qucha patapi puriykachaqkasqa. Mama atuqtaq, wallatata irqinkunatawan munapayaspa qhawasqa.Chaymanta, mama wallataman chimpaykuspa, kay jinata rimapayaykun: _Mamay wallata, ¡Ama jinachu kay!. Willariway. ¿Imaraykutaq wawaykipaqta chakin munay pukarayayta?. Wallatataq, pay tukusqallaña,atuqta nin: _Wawa chakin pukarinampaq ,  pari jallp'api, thullpa
          ukhupi wathiyarpanki, Qampis uñasniykita, munayki chayri chakisninta kanayurpanki wathiyarqunki ; t’uqyaqtintaq: ¡ay!, ¡ay!, ¡ay! nispa ninki. Atuqqa kusisqas: chhiqachá nispa wasinman, phawaylla kutin. Hinas uñankunata, pari jallp'a thullpa ukhupi wathiyarqun, t’uqyaqta uyarispataq _¡ay!, ¡ay!, ¡ay! nispa nisqa. Hinas, h u r n uma n t a uñankuñallata  u r q h u s q a ; manchkarikuqtinri atuqqa qhaparin jinamanta nin _¡Maypitaq wallatari! nispa qucha patata mask’aspa purin. Wallataqa atuqta rikuspas qucha chawpiman yaykun pakakunampaq.Hinas atuqqa wallatata hap'iyta munaspa unuta upyayta yakuta qallarin, sinchi muqch'isqanmantas wañuyninta tarin.
          `,
          questions :["¿Detrás de la huallata quiénes estaban yendo?","¿Qué le hizo la zorra a sus hijos?"],
          questionsQuechua: ["Huallata qhipampi pikuna richkarqanku?", "Atuj ,wawakunanta imata ruwaykurqa?"],
          images : ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/2.AYOPAYA.jpeg?alt=media&token=ed07e508-9419-4d53-978c-1ae73fa6210d"]
        },
        {
            id  : 3,
            province : "Tapacari",
            title : "Suri Sikuris",
            titleQuechua: "Suri Sikuris",
            description : `La provincia de Tapacari se encuentra en la región andina de Cochabamba.
            En la época de lluvia se interpreta la tarqueada, moseñada y la qhonqota. La melodía de los instrumentos musicales atrae a la lluvia.
            En la época seca o cosecha se interpreta lichiwayos, sikureada, suri sikuris y jula julas.
            Los Suri Sikuris es una danza que simboliza al cadencioso movimiento del Avestruz o Ñandú en celo y a los ejecutores de los “Sikus” (Instrumento nativo de viento) bailaban los que se preparaban para salir a cazar ñandúes. Llevando los hombres como parte principal de su indumentaria un sobrero que está adornado con largas plumas de avestruz, que van amarradas a unas cañas finas.
            `,
            descriptionQuechua : `Tapacari nisqa ayllumanta tarikun pata punapi qhuchapampa llaqtapi.
            Paraytiempupi rikukun tarqueada, moseñada, qhonqota nisqa ima. Ch'aqatiqa jaspiykuna parata rikhurichimun tipimuy pachapi rik'urimun lichiwayoy, sikuriadas, surisikuris, y julajulas nisqa ima .
            Suri sikuris nisqa ukq tusuypi unanchan tukuy k'achakunata ñandú nisqa k'uñury wañukiqkunata siku nisqa manta japikunata wayramanta tusuq wakichikuq karqanku tusumunankupaq uywakunata wañuchimunankupaqa uywakunata, runakunata apaspa tuky p'akunankuta wakin kanman k'unpu caytaq t'ikanchasqa karqa q'ara phuruwan, watasqataq karqa ukq sumaq kaspikunaman .
            `,
            questions :["¿ Que se tocá en epoca seca?","¿Que simboliza la danza del Suri Sikuri?"],
            questionsQuechua: ["imataq ruwakun ch'aquitinpupi ?", "imataq rikuchimanchiq Suri sikuris ?"],
            images :["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/10.TAPACARI.jpeg?alt=media&token=af5f9ef3-aafa-49e2-b555-93ceca32fdbe"] 
        },

          {
            id  : 4,
            province : "Arque",
            title : "La leyenda del Puma de Arque ",
            titleQuechua: "La leyenda del Puma de Arque ",
            description : `Arque	La leyenda del Puma de Arque es una historia fascinante que proviene de la región de Arque en Bolivia. Cuenta la historia de un puma gigante que vivía en las montañas y protegía a la comunidad de Arque de cualquier peligro. Según la leyenda, el puma era tan grande que podía recorrer grandes distancias con un solo salto y tenía una mirada penetrante que inspiraba respeto y temor. Los lugareños creían que el puma era un espíritu protector enviado para cuidar de ellos, y en ocasiones de gran peligro, se decía que aparecía para ahuyentar a los enemigos y garantizar la seguridad del pueblo. Aunque solo una leyenda, el Puma de Arque sigue siendo un símbolo de protección y valentía para la comunidad.`,
            descriptionQuechua : `KAY UMALLIQ JAWARIY JAMUY ARQUE NISQA JATUN AYLLUMANTA BOLIVIA NISQA SUYUNCHIQMANTA SITUNTAQ KACHKAN ÑAWPAKAMAY  MACHU Q'ARAMANTA.

            KAY ÑAWPAKAMAYQA WILLARIWANCHIQ JUK MACHU Q'ARAMANTA MAYPICHUS PAYQA KAWSAKUQ URQU PATASPI, JARK'AQTAQ AYLLUNTA TUKUY CH'IKI JAMUSQANMANTA.
            
            KAY  ÑAWPAKAMAYMAN JINA, MACHU Q'ARAQA  MANCHAY JATUN KARQA, JUK PHINKIYLLAPITAQ MANCHAY KARUTA PURIQ, QHAWAYNINTAQ KARQA MANCHAY MANCHIKUNA MAYPICHUS ÑAWISNINTA QHAWASPALLA RIKUCHIWAQ KARQANCHIQ JUK JATUN YUPAYCHAYTA MANCHIKUYTAWAN IMA.
            
            CHAY AYLLUMANTA RUNAKUNAQA YUYAQ KARQANKU MACHU Q'ARAQA JUK APACHIKU KASQANTA JINALLATAQ JUK NUNA KALLPA KASQANTA,  PAYKUNATA JARK'ANAMPAQ  TUKUY CH'IKI  JAMUNAMANTA, NIKULLAQTAQ  MACHU Q'ARAQA RIKHURIMUN AYWAKUNATA AYQICHINAMPAQ YUPAYCHAQTAQ AYLLU MANA IMANAKUNANPAQ.
            
            KUNANQA MACHU Q'ARAQA JUK NAWPAKAMALLAYPIS KACHUN KUNANKAMAQA  UNANCHA JARK'AYLLAPUNI  KACHKAN SINCHITAQ AYLLUPAQ
            `,
            questions :["¿Cuál es el título del mito?", "¿De qué provincia es el mito?"],
            questionsQuechua: ["MAYQINTAQ SUTIN KAY ÑAWPAKAMAYMANTA? ", "¿ IMA AYLLUMANTATAQ KAY ÑAWPAKAMAYQA?"],
            images : ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/5.ARQUE.jpeg?alt=media&token=fd9c1b36-51d2-4815-be94-19a5b7b6c969"]
        },
          {
            id  : 5,
            province : "Bolivar",
            title : "La Serpiente de las Siete Cabezas",
            titleQuechua: "La Serpiente de las Siete Cabezas",
            description : `En Ciudad Bolívar existe una famosa formación rocosa llamada "la Piedra del medio", que se encuentra precisamente, en el medio del Río Orinoco. Humboldt la llamó "el orinocómetro", pues los habitantes de la ciudad la usaban para llevar el registro de las subidas y bajadas de aguas.
            Cuenta la leyenda que debajo de la Piedra del medio existen galerías que se desparraman por toda la ciudad y que en ellas habita una serpiente de siete cabezas. El último avistamiento del monstruo fue en 1988, año en el cual una multitud de bolivarenses, con lámparas y cámaras, lograron fotografiar en la noche varias sombras de las supuestas cabezas de la serpiente. Las imágenes adornaron las primeras páginas de los diarios locales de ese año.
            A mediados del siglo XX, la Universidad de Oriente envió una embarcación de estudios oceanográficos para realizar investigaciones en el río Orinoco, y el buzo que se sumergió para explorar el río, en los alrededores de la Piedra del medio, pidió en medio de un ataque de nervios que lo subieran rápidamente porque había visto un monstruo. 
            Lo que a fin de cuentas descubrió la expedición, con aparatos de ultrasonido, es que justo delante de la piedra se encuentra una enorme fosa de mas de 160 metros de profundidad, en forma de embudo.
            Es curioso que en ese punto se hayan perdido varias embarcaciones, y que otras tantas hayan reportado fuertes golpes en la estructura de la nave.
            Una serpiente de siete cabezas, que habita y protege las entradas subacuáticas a los inframundos.
            Los relatos fueron multiplicándose con el tiempo, tanto que para el habitante de Ciudad Bolívar "La Culebra de las 7 Cabezas" es tan real como la sapoara.
            `,
            descriptionQuechua : `Bolívar llaptapi chawpi mallupi kan huk jatun rumi sutintak kashan Mayu  Orinoco, chaymanta runas chay rumipi jhawarinku achkhachu llaku manachu.
            Kay jawariy  nin rumi urapi huk jatun katari Qanchis umayuq karin, runas Bolívar llaptamanta lantita urkhurqanku.
            Chay rumi mulluyninpi achkha runas wañunku nin, Mana chay rumiman k'askanankupak chay jatun katari Qanchis Umayuq j
            khachkan. 
            `,
            questions :["¿Cuántas cabezas tiene la víbora?", "¿Dónde se esconde la víbora?"],
            questionsQuechua: ["¿Machkha umayup katari karqa?", "¿Maypi katari pakakun?"],
            images: ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/15.BOLIVAR.jpeg?alt=media&token=891d0956-4e7c-45ed-877e-48b43e06b5e5"]
        },
          {
            id  : 6,
            province : "Quillacollo",
            title : "Virgen de Urkupiña",
            titleQuechua: "Virgen de Urkupiña",
            description : `Virgen de Urkupiña
            En un tranquilo pueblo de Bolivia, se celebraba cada año una gran fiesta en honor a la Virgen de Urkupiña. Todos los habitantes del pueblo se reunían para agradecer a la Virgen por su protección y amor.
           Una niña llamada Isabella, que sentía un profundo amor por la Virgen, decidió pedirle un deseo especial durante la fiesta. Con los ojos cerrados y el corazón lleno de fe, Isabella pidió en silencio que su abuelita enferma se recuperara pronto.
           Al día siguiente, la abuelita de Isabella sorprendió a todos al despertar repentinamente sintiéndose mejor. Isabella sabía que era un milagro de la Virgen de Urkupiña, quien había escuchado su deseo y lo había concedido.
           Desde ese día, Isabella siguió siendo una devota de la Virgen y nunca dejó de agradecerle por el milagro que había hecho. La historia de Isabella y su abuelita se convirtió en un ejemplo de la poderosa fe en la Virgen de Urkupiña para todo el pueblo.          
            `,
            descriptionQuechua : `Virgen de Urkupiña
            Quillacollo llaqtapi Sapa wata Raymi ruwarikuq Kay virgen de urkupiña nisqa pachaq y pachaq runas kayman chimpariq kanku raymichariq.
            Juk sipakuku Isabela sutichasqa virgen de urkupiñamanta mañakusqa Kay virgen de urkupiñamanta maman unquspa chaypi waqaspa mañakusqa sanillananpaq ñapis wañupunmanña Jina kashhqa .
            K'allantin Jatun mamán Isabelaqta kawsaripusqa mancharikusanku runakunaqa Isabela nisqa kayta virgencita llanapawan .
            Chay p'unchaymanta pacha Isabelaqta kawsaynin chanta awelitanpatawan wajina karqa Kay riqsichiwanchiq imayna kaypallniyuq virgen de urkupiña kasqnanmanta .
            `,
            questions :["¿Por qué se reunían todos los habitantes del pueblo? ", "¿Qué sabía Isabella? "],
            questionsQuechua: ["¿Imaqtintaq qutuchakuq kanku runakuna Chay ayllumanta?", "¿Imatataq qhipasqa Chay sach'a sintilla warak'asqanmanta?"],
            images : ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/modificarQuillacollo.jpeg?alt=media&token=112e3da3-b402-4e93-9a1b-e85b72f22abc"]
        },
          {
            id  : 7,
            province : "Germán Jordan",
            title : "El Origen de la Llama de Fuego",
            titleQuechua: "El Origen de la Llama de Fuego",
            description : `En la provincia de Cliza, en el corazón de Cochabamba, Bolivia, hay una leyenda que habla del origen de la Llama de Fuego, una criatura mística que ha cautivado a generaciones enteras.
            Hace mucho tiempo, en las altas montañas que rodean Cliza, vivía un poderoso hechicero llamado Kusi. Kusi era conocido por su sabiduría y habilidades mágicas, y era respetado por todos en la región. Sin embargo, a pesar de su poder, Kusi anhelaba algo más: quería crear una criatura única que pudiera iluminar la oscuridad y traer calor a los corazones de las personas.
            Durante años, Kusi estudió los antiguos textos y consultó a los espíritus de la naturaleza en busca de inspiración. Finalmente, después de largos meses de meditación en lo más alto de una montaña sagrada, Kusi tuvo una visión: una llama ardiente que brillaba con una luz radiante.
            Decidido a dar vida a su visión, Kusi reunió los ingredientes necesarios para su hechizo: fuego sagrado de los volcanes cercanos, aire fresco de los picos nevados y tierra fértil de los valles fértiles. Con cuidado y determinación, Kusi combinó estos elementos en un caldero gigante y recitó antiguas palabras de poder.
            El cielo se oscureció y los vientos comenzaron a rugir mientras el hechizo alcanzaba su clímax. De repente, una explosión de luz llenó el aire y, cuando la luz se desvaneció, allí estaba ella: la Llama de Fuego, una criatura majestuosa con un pelaje dorado y llamas danzantes que brillaban con intensidad.
            Kusi la miró con asombro y alegría, sabiendo que su creación traería alegría y calor a la gente de Cliza. La Llama de Fuego se convirtió en la guardiana de la región, protegiendo a los agricultores de las heladas y guiando a los viajeros perdidos de regreso a casa con su resplandor reconfortante.
            Desde entonces, la Llama de Fuego ha sido venerada como un símbolo de esperanza y protección en Cliza. Se dice que aún hoy en día, en las noches más oscuras, su luz brilla en lo alto de las montañas, recordándole a todos que, incluso en los momentos más difíciles, siempre hay una chispa de esperanza que puede iluminar el camino hacia adelante.
            `,
            descriptionQuechua : `Cliza ukju llajtapi juk umalliq jawariy kan. Runa Nina rikjuringa chaymanta resirichisayguicheq.
            Ñawpa pacha orqho pataspi tiakurqa juk runa kaypa Sapa, pay sutikurqa Kusi nisqa. Chayjina kaypa kasajtin manapuni wallijlla kasargachu pay munarga yurichiy. K'anchachinampaq tukuyta, cliza llajta ukjupi.
            Pay tantarqa tukuy ingredientes nisga chaymantaq pagarichirqa sumaqta k'alituman yanapamapaq runakunaman tarpunankupaq. K'alitunqu kusisgas kasarganqu, takispa, tususpa.
            Kunan kama pacha k'alitu runas reksinquña, paygunataq mana kunqankuchu.
            `,
            questions :["¿Dónde vivía Kusi ?", "¿De qué estaba hecho la creación de Kusi?"],
            questionsQuechua: ["Maypitaq tiakurqa Kusi sutichasqa? ", "Imamamanta ruasqa karqa Chay Kusi paqarichisqan?"],
            images : ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/8.GERMAN%20JORDN.jpeg?alt=media&token=a9834098-9b04-4e4b-bca8-f1a0332e884c"]
        },
          {
            id  : 8,
            province : "Punata",
            title : "Origen del nombre de punata",
            titleQuechua: "Origen del nombre de punata",
            description : `Cuenta la historia que
            cuando los comunarios tenían pesar de su conciencia las personas les recomendaban que vaya al tata puna que era un señor sabio en la que los comunarios iban a confesar sus pecados y salían de ahí y se sentían tranquilos plenos por eso cuando preguntaban 
           Tiene un origen quechua, cuando se les preguntaba a los nativos del valle: Mayta richkhanki? (¿a donde vas?) ellos respondian : PUNA TATAJ PATA (a lo del tata de la puna) ;que era un señor al que los nativos rendian cuentas. Por se llama Punata
           `,
            descriptionQuechua : `Qayariynin QUICHWA simi, runas tapuq kanku mayman richkhanki, kutichiktaq kanku puna tataj pata, runakunaqtaq cuentaq kanku. 
            UNAY RIMAYMANTA AYLLU RUNASTA LLAKIYMANTA  T’UQUN. RUNAS CAMINQU TATA PUNA RINANTA, CHAY TATA PUNA KACHHAN LLACHAQ RUNA. RUNASTA WILLARQANKU TUKUY CH’ANPAY. AJINAMANTA RUNASTA WALEQTA LLOQSINKU.
            ANCHAYRAYKU RUNASTA TAPURQANKU mayman richkhanki, kutichiktaq kanku puna tataj pata, runakunaqtaq cuentaq kanku CHAYRAYKU NINKU PUNATA
            Dato extra
            Puna = altura, tierra alta
            `,
            questions :["¿Qué has entendido del cuento?", "¿Cuál es el título del cuento?"],
            questionsQuechua: ["Imata jap'irqarqanki jawariymanta?", "Mayqintaq sutin Jaywariymanta? "],
            images : ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/7.PUNATA.jpeg?alt=media&token=5a21c660-2140-4a3b-8643-b8d33be7b361"]
          },
          {
            id  : 9,
            province : "Campero",
            title : "Condor",
            titleQuechua: "Mallkumanta",
            description : `Condor
            Un día la gente había visto a un cóndor volar en los sembradíos de la comunidad, preocupados porque según sus creencias el cóndor traía sequía y tristeza.
            Mas tarde en la noche viendo donde dormía el cóndor, todos salieron a cazarlo y lo habían torturado, tanto que la cabeza le sangraba e inmediatamente habían llevado a la punta del cerro a votarlo, y cuando todos regresaron a sus casas ya por la media noche había empezado a llover, tanto que se había llevado casas y ahogó gente de lugar.
            En la madrugada cuando terminó la lluvia el cóndor emprendió vuelo hacia el más allá, al lado de Dios.
            `,
            descriptionQuechua : `
            Juk p´unchaw, chakra runakuna mallkuta llaqtankupi rikuspa anchatapuni phiñakusqanku, imaraykuchus mallkuqa ch´aki watata, llakiytawan ima apamun nispa.
            Jinamanta, juk tuta mallkutaqa umanpi rumiwan ch´anqaykusqanku. Jinaytawan,  yawar umallata urquman wikch´umusqanku. Chay tutapachataq, manchayta paraykamusqa, wasikunatapis urmarachisqa, jinallataq achkha runakunata  wañuraykuchisqa nin.
            Tukukusqantawantaq mallkuqa manchayta phawaykacharispa janaq pachaman ripusqa nin
            `,
            questions :["¿Qué simboliza el cóndor? ", "¿Por qué había llovido a la media noche?"],
            questionsQuechua: ["Ima mallku? ", "Imaqtin chawpipitutaman paqarqa?"],
            images: ['https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/14.CAMPERO.jpeg?alt=media&token=ba312594-a506-4a15-80c1-162b40c03fd6']
        },

          {
            id  : 10,
            province : "Jose Carrasco",
            title : "Historia del árbol",
            titleQuechua: "Sach'amanta ",
            description : `Se encuentra en Totora a unos pasos de la bola rumi “piedra de la fertilidad”, en este árbol quemaron a un terrateniente porque disfrutaba del dolor de las mujeres los aldeanos ya cansados de los abusos lo quemaron vivo.
            También le cayó un rayo dejándolo completamente hueco pero siguió sobreviviendo, recomiendan que no se entre después de las lluvias porque sigue desprendiendo vapor del rayo.
            `,
            descriptionQuechua : `Sach'amanta 
            Kay tarikun totora allyupi maypichus juk muyu rumi  tarikun Chay sach'apitaq juk terrateniente nisqata ruphachisanku ,warmi wawasta anchatapuni t'uspisqnanamanta llakiypi kachisqanmanta warmi wawasta .
           Runakuna sawanakuqkuna kayta rikuspa ruphachisanku kawsashaqta  chanta sintilla warak'asqa jusk'utataq saqisqa chaypi ninku para parmuqtin k'usni juqarikun chaymanta. 
           `,
            questions :["¿Por qué quemaron a un hombre en el árbol? ", "¿Cómo quedó el árbol cuando le cayó un rayo?"],
            questionsQuechua: ["Imaqtintaq ruphachisanku sach'api Chay runata?", "Imatataq qhipasqa Chay sach'a sintilla warak'asqanmanta? "],
            images : ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/16.JOSE%20CARRASCO.jpeg?alt=media&token=c92a3bdf-2f0b-4e5b-9067-0b63ae7725e1"]
        },

          {
            id  : 11,
            province : "Tiraque",
            title : "PROVINCIA DE  TIRAQUE",
            titleQuechua: "TIRAQUE AYLLUMANTA ",
            description : `  En el departamento de Cochabamba de la provincia de tiraque se encuentra el atractivo turístico denominado la fuente del amor es una fuente donde los enamorados iban juntos y bebían la vertiente de Agua la pareja de enamorados acompañando este vertiente se encuentra un sendero denominado como bosque del amor en ella se encuentran dos arboles eucaliptos con miradas paralelas y antiguos se dice que esto es para que una pareja dure eternamente y ambos luchar la relación que mantienen. `,
            descriptionQuechua : `Quchapampa lkactapi tiraque ayllupi karispa kasqan atractivo turístico.Kay sutichakun q'acha llaku munanakunapaq tarikun Kay tiraque ayllupi fuente del amor nisqa kayman rinku waynuchus sipakukuna llakuta uqjiarinku puraqmanta Chay patapitaq tarikun kasi puntapiña iskay sajh'as eucaliptos sitichasqa qhhawanarikuspa puraqmanta kaykuna unayniyuq karispa kanku chaymantataq nikun kayman riqtinku unayta karinankupaq sawanakunaman chayanankupaq sumaqtataq kawsanankupaq .`,
            questions :["¿ Dónde se encuentra el lugar ?", "¿ Qué nos enseña este saber? "],
            questionsQuechua: ["¿Maypitaq tarikun Kay ayllu?", "¿ Imatataq riqsichiwanchiq Kay  llachay? "],
            images : ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/4.TIRAQUE.jpeg?alt=media&token=b5b4ecc1-3d7e-4a15-9c45-0611690ced09"]
        },
          {
            id  : 12,
            province : "Mizque",
            title : "Su encontrar de los Glitodontes ",
            titleQuechua: "Gliptodondes tariyninmanta",
            description : `Mizque ayllupi 
            Su encontrar de los Glitodontes 
            Hace mucho tiempo en la ciudad de mizque, unos arqueologia empezaron a profundizar sobre las tierras ancestrales.
            Después de días de búsqueda infructuosa, finalmente descubrieron algo asombroso: los restos fosilizados de varios gliptodontes, criaturas gigantes. Luna y su equipo se quedaron se quedaron atonicos al encontrar.
            Los gliptodontes amaban y protegían su  naturaleza, asimismo en mizque vivían otros animales gigantes maqnificos. Luna y su grupo investigaron a profundidad  e investigaron que estos animales eran herbívoros.
            Los retos de los gliptodontes se convirtió en algo grande para los científicos. Los científicos recalcan que debemos cuidar y proteger a todos los animales y a la naturaleza para promover el respeto a la natulaeza y a los animales. 
            `,
            descriptionQuechua : `Unay pachapi kay mizque llaqtapi mask'aqkuna qayariyninmanta pacha mask'anku ñawpa runas jayp'anta.
            Sapa punchaw mas'aspa, juk punchaw tarinku; tuyusta kay gliptodontes nisqaqta, kay uywakuna karqanku manchay jatuchak. Mask'aqkuna luna chanta masisninwan manchayta mancharinku tarispa. 
            Kay gliptodontes nisqa manchayta munakuq kanku k'ala puquykunata, jinayataq kay mizque llaqtapi waq jatuchak uywakunas kallaqtaq. Luna chanta masisininwan mask'asqankupi yachanku kay gliptodontes nisqa milhusankuna q'umir puquykunata.
            Kay tuyukuna tarisqa manchayta jatuyan k'ala mask'aqkunaspaq, jinapitaq luna chanta masisninwan k'ala runakunasman rikuchiyta qallarinku kay tuyukunasta juk masipi, chanta nillankutaq k'ala uywakunata kay pachamanta chanta k'ala puquykunata waqaychana tiyan chanta munakuna,  mana qunqanapaq k'ala uywakunasta.
            `,
            questions :["¿De qué animales habla este mito?", "¿Dónde vivían estos animales gigantes?"],
            questionsQuechua: ["imayna uywakuna kaq kanku?", "Maypi kawsap kanku kay uywakuna?"],
            images: ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/13.MIZQUE.jpeg?alt=media&token=55d98e1c-569a-4445-93f9-b5510721c551"]
        },
          {
            id  : 13,
            province : "Esteban Arce",
            title : "El compadre perdiz y el compadre zorro",
            titleQuechua: "Cumpa yuthu cumpa antuñu",
            description : `Una mañana se encontraron el compadre perdiz y el compadre zorro, el compadre perdiz se pueso a salvar en la cima de un árbol, el cumpadre zorro al escuchar le pregunto, ¿Cómo aprendiste a silbar?
            Y el compadre perdiz le dijo: haz un horno, luego lo haremos calentar y cuando esté caliente vamos a poner a tus hijos ahí, de esta manera van a aprender a silvar.
            El compadre zorro hizo todo tal cual le dijo el compadre perdiz, cuando el horno ya estaba caliente el compadre zorro le pregunto al compadre perdiz: ¿así está bien, ya estará?
            Y el compadre perdiz le dijo: si ya está bien, pon a tus hijos dentro del horno.
            Después de poner a sus hijos lo cerraron con su tapa el horno, después de cerrar el compadre perdiz dijo: ahora da vueltas alrededor del horno diciendo pinta, pinta, pinta.
            Después de dar vueltas por un rato diciendo pinta, pinta, pinta, le pregunto al compadre perdiz, ¿Ya estará, ya estará? El compadre perdiz después de ver le dice: no dicen nada todavía, todavía no están aprendiendo, segui dando vueltas.
            Después de unos cuantos minutos el compadre zorro escucho sonidos dentro del horno que decían ( th’is, th'is, th'is), y el compadre perdiz le empezó a decir: ya están aprendiendo, ya están aprendiendo. De esa manera seguían dando vueltas diciendo penta, penta, penta.
            Después de un largo rato se fijaron y vieron que todos sus hijos se habían carbonizado después de eso el compadre zorro le dijo: esto no te voy a perdonar, nunca lo voy a olvidar, ahora sí te voy a comer siempre, al compadre perdiz.
            Y el compadre perdiz le dijo: cómeme aunque sea pero mole primero el picante rojo, eso vas a poner en mi colita y debajo de mis alitas, después de eso me puedes comer, al compadre zorro.
            El compadre zorro se fue a su casa a moler todo  el picante rojo que tenía y se fue corriendo dónde el compadre perdiz, haciendo caso le puso el picante en la colita y debajo de las alitas.
            Al terminar el compadre perdiz le dijo: ahora sí puedes comerme, vas a comenzar a comerme desde mi colita, cuando el compadre zorro empezó a morder su colita del compadre perdiz, el compadre perdiz empezó a volar y le embarró a sus ojos el picante dejándolo ciego por culpa del picante, y el compadre zorro llegó rodando al río.
            `,
            descriptionQuechua : `Juk p’unchay cumpa yuthu cumpa antuñuwan tarinakusqanku, cumpa yuthu juk sach’aman wasariytawan khuyurirqa, cumpa antuñu uyariytawan, Qam imaynata khuyuy yacharirqanki? Nispa tapurqa,
            Cumpa yuthutaq nirqa, juk jurnu ruway a, chanta parichisunchik, pari kaqtintaq chay ukhuman churayuchkun wawasniykita ajinamanta khuyuy yachanqanku.
            Cumpa yuthuq nisqanta, cumpa antuñu kikin ruwarqa, jurnu pari kaqtintaq cumpa yuthuta tapurqa, yastañachu, kusallañachu? Nispa tapurqa, cumpa yuthutaq, Ari kusallaña, jurnuman wawasniykita churanallayña, nirqa.
            Wawas churayuytawan jurnu tapanwan wichk’ayusqanku,
            Wichk'aytawan cumpa yuthu cumpa antuñuman nirqa, muyuy jurnuta kunanqa, pinta pinta pinta nispa.
            Cumpa antuñu unay muyuytawan pinta pinta pinta nispa, cumpa yuthu tapurqa, yastanachu, kusallañachu? Qawaykuriytawan cumpa yuthu, manaraq niyma nichkankuchu, niraq yachachkankuchu, muyullaypuni, nirqa.
            Juk machka chininimantawancha cumpa antuñu uyarirqa,
            (Th’is, th’is th’is) Nispa, jurnu ukhupi, cumpa yuthutaq yachachkankuña, yachachkankuña cumpa antuñuman, nirqa, ajinamanta pinta pinta pinta nispa muyuchkallarqankupuni.
            Aswan unayninman qawayuspataq intiru wawasnin k’illimsachirpakusqanku (carbonizar), chaymanta cumpa yuthuta, manapuni kayta pampachachkaykichu, manapuni qunqasaqchu, kunan mikhusaykipuni, nirqa cumpa antuñu.
            Cumpa yuthutaq, jina mikhukapuwaypis, Puka uchu kutarqukunki a, chayta sikiy patitaman, liqra uritanman ima churawanki, chanta mikhukapuwanki, nisqa cumpa antuñuman.
            Cumpa antuñutaq wasin rirqa, intiru Puka uchunta kutaytawan phinkita cumpa yuthuman rirqa, sikinmantaq, liqra uranmantaq jawiyurqa.
            Kunan mikhukapuway a, sikiy patitamantapuni qallariwanki, nirqa cumpa yuthuqa, cumpa antuñu jukta janchayuchkaqtin phawarikapurqa, cumpa yuthuqa, ajinamanta  chhiqu saqirqa uchurayku, cumpa antuñuta, mayuspa muyuspa mayuman chayarqa.
            `,
            questions :["¿ A dónde se subió el pájaro ?", "¿ De donde empezo a comer el el antonio ?"],
            questionsQuechua: ["¿ Maymantaq wasarin yuthu?", "¿ maymanta qallarerqa mikuyta cumpa antonio?"],
            images :  ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/12.ESTEBAN%20ARZE.jpg?alt=media&token=0b5bfa70-b73f-440b-a85c-35336a3cd524"]
        },

          {
            id  : 14,
            province : "Chapare",
            title : "Gallinas Ciegas",
            titleQuechua: "TUTA WALLPA",
            description : `Había una vez en la comunidad de San José, donde las personas vivían atemorizadas por los malos espíritus que perturbaban la paz del pueblo. Un niño valiente decidió adentrarse en los bosques alejados, donde encontró a una pequeña ave diferente a las demás. La cuidó y alimentó hasta que creció grande y fuerte. En agradecimiento, el ave se convirtió en el guardián del pueblo, ahuyentando a los malos espíritus. Desde entonces, la gente del pueblo pudo vivir tranquilamente. Cada noche, las Tuta Wallpas, como se llamaban las aves, visitaban el pueblo, demostrando que siempre estarían ahí para protegerlos.`,
            descriptionQuechua : `*TUTA WALLPA*
            JUK KUTIPI SAN JOSE AYLLU LLAQTAPI TUKUY RUNAKUNA MANA SUMAQTACHU KAWASAKURQANKU, SAQRA NUNAKUNAQA MANCHINKUNKU, CHAYRAYKU JUK SINCHI WAYNA MASI SACH'ARARA UKHUMAN LLAYQUPUN, CHAYPI JUK UÑA WALLPATA TARIRPARIN, SUMAQTA WIÑANPAQ UYWAKUN, CHAYMANTA PACHA WALLPAQA PACHINANPAQ TUYKUY AYLLU LLAQTATA SAQRA NUNAKUNAMANTA WAQAYCHARIN, KUNANKAMA SAPA TUTA RUNAKUNATA KHAWAQ JAMUN, CHAYRAYKU *TUTA WAYPATA* SUTICHINKU
            `,
            questions :["¿Cómo se llamaba el pueblo? ", "¿Por qué se le dice TUTA WALLPA? "],
            questionsQuechua: ["Imaynata ayllu LLAQTATA sutichakun? ", "Imaqtin tata WALLPATA sutichanku? "],
            images  : ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/1.CHAPARE.jpeg?alt=media&token=22074b24-e7ca-4fee-a344-5f2fbdf60a60"]
        },
          {
            id  : 15,
            province : "Capinota",
            title : "La Casa Encantada",
            titleQuechua: "Yupaychay wasi",
            description : `En Capinota existe una antigua casa abandonada que supuestamente está habitada por espíritus malignos. La historia cuenta que antiguamente vivía allí una familia muy rica cuya hija era extremadamente hermosa. Un día llegó un hombre pobre al pueblo y quedó cautivado por la belleza de la joven. A pesar de pertenecer a diferentes clases sociales, ambos se enamoraron perdidamente e hicieron planes para casarse en secreto. Sin embargo, cuando los padres descubrieron esta relación prohibida, asesinaron al joven amante frente a su hija y luego encerraron a ésta en lo más profundo de la casa encantada.`,
            descriptionQuechua : `Juk ñawpa wasi saqirparisqa Capinotapi kan, chaypi kawsanqu phiña runas, millaykuna ima.
            Chay wasipi yawar ayllukuna achka qullqhiyuq kawsanku, chay wasipi Juk k'acha warmisita karqa.
            Allyuman Qhari waqcha   chayamurqa chaypi  k'acha warmisitawan tinkusqa payqa jawaytawan munakusqa pacha.  Iskayninku munanakusqanku chantaqa pakaypi sanakusqanku. 
            Tatasninku yacharpaytawan,  qhariman rirqanku wanchik, warmi wawantataq wisk'arparqanku ura wasipi.
            `,
            questions :["¿Cúal es el nombre del mito?", "¿ Por qué le han encerrado a la mujer en el sótano de la casa? "],
            questionsQuechua: ["¿Mayqintaq suti qarqa paqarichiq jawariymanta?", "¿Imaqtintak warmita wiskarqa ura wasipi?"],
            images : ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/11.CAPINOTA.jpeg?alt=media&token=e52aefbd-50a0-42bd-847d-1780a641d8c7"]
        },
          {
            id  : 16,
            province : "Arani",
            title : "UN CATASTROFICO ATARDECER",
            titleQuechua: "JUQ CATASTRÓFICA INTI YAUQUPUCHHANTIÑA ",
            description : `El 24 de agosto de 1945 fue realmente un día muy catastrófico.
            Todo empezó con la aparición de un resplandor en la cima del Calvario. El cual, conforme fue descendiendo, poco a poco fue tomando la figura de una mujer con un niño entre los brazos.
            Era una mujer muy bella. Tenia la piel del color del pan, los ojos almendrados y un luenga cabellera que traslucia una aura de santidad.
            Al llegar al pie del cerro, dónde había una vertiente en el que se estaban bañándose algunas personas, con cierto aire de tristeza, en el dulce idioma de los Incas inquirió:
            -¿Tren lloqsinmanñachu? "Lloqsinñasina", contestaron los bañistas casi en coro. - "Sayanantian"... "imaqtinchus chay trempi t'inkasniyta suas apasanku", diciendo esto en medio del bosquecillo de trocha que conducía a la estación se perdió.
            Solo minutos después, la aparente apacibilidad reinante se vio quebrantado por un sordo estrépito que cambio el ambiente araneño. En efecto, el tren de diecisiete vagones que había partido de Arani cerca de las cinco de la
            
            tarde, a solo mil metros de distancia se desprendio de los últimos doce vagones; y, cuando el maquinista tras haber frenado a altura de ch,'eqhemayu empezo a retroceder, y justo en el lugar donde se encuentra la pequeña capilla, brutalmente colisiono con el resto de los vagones que venían en sentido contrario, de tal modo que se levantaron en vilo varios vagones sobrecargados de gente, en medio de desesperados gritos de dolor y espanto. El panorama fue aterrador. Cerca de medio centenar de personas de Punata, Cliza, Tocó,
            Tarata, Cochabamba, Sacaba, La Paz y muchos otros lugares subitamente perdieron la vida. Unos decapitados. Otros triturados; y, casi un centenar resultaron heridos. Cómo si esto fuera poco, en medio del griterío y la confusión, toda la impedimenta de los fallecidos y heridos, lo mismo que todos los enseres sustraídos del Calvario, cómo por arte
            
            de algún magia instantáneamente desaparecieron.
            Desde aquel catastrófico hecho la festividad araneña que, desde la época colonial fue uno de los más populares entre todos los habitantes del Valle Alto, los viajeros a la ciudad de La Plata, las minas de Potosí y el Oriente cruceño entro en franco proceso de decadencia. 
            DATO COMPLEMENTARIO
            Si bien hubieron fallecidos identificados y sepultados cristianamente por sus apesadumbrados familiares, también hubo fallecidos que nunca fueron identifidos ni reclamados, razón por el los lugareños los sepultaron en fosas comunes en los alrededores de la capilla que aún se mantiene en pie. Asimismo, ciertos testigos aseguran que el maquinista estaba ebrio.
            `,
            descriptionQuechua : `Cheqaqtapunin 1945 watapi 24 agosto p’unchayqa sinchi hatun llaki karqan.

            Tukuy imapas qallarirqan Calvario patapi Argentinamanta k’anchay rikhurisqanwan. Chaytaq uraykamusqanman hina pisi pisimanta wawata marq’arisqa warmiq rikch’ayninta hap’irqan.
            
            Payqa ancha sumaq warmim karqa. Payqa t’anta colorniyoq qarayoqmi karqan, almendraman rikch’akuq ñawiyoqmi karqan, suni chukchantaqmi karqan ch’uya kaypa auranta rikuchiq.
            
            Urqu chakiman chayaspa, maypi huk pukyu kasqa, chaypi wakin runakuna bañakuchkasqaku, huk chikan llakikuy wayrawan, inkakunapa misk’i siminpi tapusqa:
            
            -Loqsinmanñachu tren? "Lloqsinñasina", nispas bañadorkuna yaqa coro hina kutichirqanku. - "Sayanantian".
            
            Minutukunallamanta, chay thak kay hina kasqanqa p’akisqa karqan huk q’oñi urmaywan, chaymi Arana llaqtaq pachan cambiarqan. Chiqaptaqa, chunka qanchisniyuq carroyuq trenmi Aranimanta lluqsisqa yaqa pichqa pacha tutamanta
            
            Qhepamanmi waranqa metrollapi kashaspa, chunka iskayniyoq qhepa carrokunamanta t’aqakurqan; hinaspataq, ch'eqhemayu alturapi frenasqa qhepaman, chay choferqa qhepaman kutiyta qallariqtin, chay huch’uy capilla kasqanpipunitaq, huk ladoman hamushaq wakin carrokunawan millaylla tupaykusqa, in such a way that he Paykunaqa askha carrokunatan hoqarirqanku runakunawan llumpay cargasqata, nanaymanta manchakuymanta sinchi waqay chawpipi. Chay panoramaqa manchakuypaqmi karqa. Yaqa pichqa chunka runakuna Punata, Cliza, Tocó,
            
            Tarata, Cochabamba, Sacaba, La Paz, achkha kitikunapi ima qunqayllamanta wañurqanku. Wakinqa uma kuchusqaku. Hukkuna ñut’usqa; hinaspa yaqa pachak runakuna k’irisqa karqanku. Manapas kayqa aypanmanchu hina, qapariypi, ch’aqwaypa chawpinpi, wañuqpa, k’irisqakunaq llapa hark’akuyninkuna, hinallataq llapa Calvariomanta suwasqa kaqninkunapas, art
            
            wakin magiamanta chay ratolla chinkapurqanku.
            
            Chay hatun llakimanta pacha, Araneña raymi, colonial pachamanta pacha, Alto wayq’upi llapa tiyaq runakunaq aswan munasqankunamanta huknin, La Plata llaqtaman puriq runakuna, Potosí llaqtaq minankunaman, Santa Cruz llaqtaq Oriente nisqamanpas haykurqanku a sut’i pisiyay ruway. 
            DATOS COMPLEMENTARIOS nisqa
            Llakisqa ayllunkuq wañusqa runakuna riqsisqaña, p’ampasqa cristiano hinaña karqan chaypas, karqantaqmi wañusqakuna mana hayk’aqpas reqsisqa nitaq reclamasqa, chaymi chay llaqtapi runakunaqa p’amparqanku comun aya p’ampanakunapi, chay capillaq muyuriqninpi, chay capillaqa kunankamapas sayashanraqmi. Chaynallataqmi wakin testigokunapas ninku chay chofer machasqa kanmankasqa.
            `,
            questions :["¿Dónde había una vertiente?", "¿Cómo desaparecieron?"],
            questionsQuechua: ["¿Maypi  mayllakuchharqanku runakuna?", "¿Pitaq rikhurirqa calvariupi?"],
            images : ["https://firebasestorage.googleapis.com/v0/b/red-conexia.appspot.com/o/9.ARANI.jpeg?alt=media&token=cc852e0c-09dd-42cc-bf2e-36a3eef35d62"]  
        },
    ]

    const dataId = data.find((d) => d.id === Number(id));
    res.status(200).json(dataId);
}