import React, { useState, useEffect } from 'react';
import {
  Users, Beer, Home, Play, ArrowRight, X, Flame, MessageSquare, Settings2, Heart,
  AlertTriangle, Sparkles, Skull, Ghost, Zap, Smartphone, Briefcase, Users as FamilyIcon,
  Laugh, Music, History, Info, Dices, TreePine, Settings, Cctv, Clock, BellRing, Trophy,
  ChevronLeft, Undo2, Crown, Medal, Loader2, Bomb, Timer, Hammer, Gift,
  GripHorizontal, Swords, BarChart3, AlertOctagon, RefreshCcw, PartyPopper, ChevronUp, ChevronDown
} from 'lucide-react';

// --- BASE DE DATOS MASIVA DE FRASES V1.67 (100% RENOVADA)
const PHRASES = {
  yonunca: {
    familiar: [
      "Yo nunca he escondido tabaco, alcohol u otras cosas prohibidas en mi habitación.",
      "Yo nunca he dicho que iba a dormir a casa de un colega y he acabado durmiendo en la calle o la playa.",
      "Yo nunca he pillado a mis padres o familiares 'con las manos en la masa'.",
      "Yo nunca he robado billetes sueltos de la cartera de mi padre/madre para irme de fiesta.",
      "Yo nunca he borrado el historial del ordenador de casa a la velocidad de la luz porque venía alguien.",
      "Yo nunca he bloqueado a algún familiar de mis historias para que no vieran cómo iba de ciego.",
      "Yo nunca me he presentado a la comida de Navidad de empalmada o con una resaca criminal.",
      "Yo nunca he tirado la comida de mi madre o abuela a la basura a escondidas porque no me gustaba.",
      "Yo nunca he fingido estar súper enfermo para no ir a una visita familiar aburridísima.",
      "Yo nunca me he tirado un pedo y le he echado la culpa descaradamente al perro/gato."
    ],
    estudiantil: [
      "Yo nunca he falsificado la firma de un padre, tutor o empresa para unas prácticas/justificante.",
      "Yo nunca he copiado en un examen final y he sentido la mirada del profe clavada en mí.",
      "Yo nunca me he liado o tenido algo con alguien de mi propio grupo de trabajo.",
      "Yo nunca he ido a una clase a primera hora estando aún borracho de la noche anterior.",
      "Yo nunca he 'tomado prestado' material de la uni (pilas, cables, discos) para siempre.",
      "Yo nunca me he inventado la bibliografía entera de un trabajo importante o TFG.",
      "Yo nunca he entregado una práctica a las 23:59 con el corazón a mil por hora.",
      "Yo nunca he suspendido un examen de milagro por haber salido de fiesta el día antes.",
      "Yo nunca he intentado llorarle o darle pena a un profe para que me subiera a un 5.",
      "Yo nunca he odiado en secreto y con toda mi alma al delegado/a de la clase."
    ],
    personales: [
      "Yo nunca he stalkeado a mi ex (o al nuevo ligue de mi ex) desde una cuenta sapa.",
      "Yo nunca he montado un drama o llorado en el metro/bus con música triste de fondo.",
      "Yo nunca he borrado una foto de Instagram al poco rato porque estaba fracasando en likes.",
      "Yo nunca he practicado una discusión en el espejo de la ducha y he acabado ganando.",
      "Yo nunca he buscado mi propio nombre en Google para ver qué salía de mí.",
      "Yo nunca he ido por la calle hablando solo o haciendo gestos raros.",
      "Yo nunca he mentido sobre mi edad para entrar a un sitio o para ligar con alguien.",
      "Yo nunca he fingido recibir una llamada o mirar el móvil para evitar saludar a alguien por la calle.",
      "Yo nunca he tenido una cuenta secreta de Twitter (X) o TikTok para rajar o ser friki.",
      "Yo nunca me he arrepentido profundamente de un tatuaje, piercing o corte de pelo."
    ],
    traumas: [
      "Yo nunca he sufrido la humillación de que me dejaran por un simple mensaje de WhatsApp.",
      "Yo nunca me he enterado de que me ponían los cuernos gracias a una historia de Instagram.",
      "Yo nunca me he arrastrado de forma patética suplicándole atención a un/a ex tóxico/a.",
      "Yo nunca he estado enganchado/a meses siendo el 'casi algo' de alguien que no quería nada serio.",
      "Yo nunca he tenido que aguantar que mi mejor amigo/a se liara con mi crush de toda la vida.",
      "Yo nunca me he despertado después de una fiesta sin tener ni idea de en qué casa o cama estaba.",
      "Yo nunca he perdonado una infidelidad descarada por pura dependencia emocional.",
      "Yo nunca he sufrido ghosting salvaje justo después de una primera cita que creía perfecta.",
      "Yo nunca he enviado un testamento de 500 palabras y me han respondido con un humillante 'ok'.",
      "Yo nunca me he liado con alguien que no me gustaba nada solo para darle celos a otra persona."
    ],
    trabajo: [
      "Yo nunca he robado material de papelería, comida o café de la empresa.",
      "Yo nunca he tenido que currar un fin de semana o festivo teniendo una resaca mortal.",
      "Yo nunca he mentido descaradamente en mi currículum sobre mi nivel de idiomas o experiencia.",
      "Yo nunca he estado rajando del jefe/a y me he dado cuenta de que lo tenía detrás.",
      "Yo nunca he estado 30 minutos en el baño del curro con el móvil solo para no trabajar.",
      "Yo nunca he cometido un error enorme y he disimulado para que le cayera la culpa a otro.",
      "Yo nunca me he inventado la muerte de un familiar o una boda para faltar al trabajo.",
      "Yo nunca he tonteado con un encargado, superior o jefe para tener ventajas.",
      "Yo nunca he usado el ordenador de la oficina para mirarme series piratas o mirar ropa.",
      "Yo nunca le he robado el tupper o la comida de la nevera a un compañero y me he callado."
    ],
    salseo: [
      "Yo nunca me he liado con dos personas distintas en la misma noche sin que lo supieran.",
      "Yo nunca he enviado una captura de pantalla criticando a alguien... a esa misma persona.",
      "Yo nunca he sentido una brutal tensión sexual con alguien que está jugando ahora mismo.",
      "Yo nunca he intentado (o conseguido) liarme con el ex de algún amigo/a cercano/a.",
      "Yo nunca he respondido a una historia de Instagram con un 'fueguito' por puro aburrimiento.",
      "Yo nunca he sido infiel (ni siquiera un beso tonto estando muy borracho/a).",
      "Yo nunca he metido a alguien en 'Mejores Amigos' única y exclusivamente para tirarle indirectas.",
      "Yo nunca me he inventado o exagerado un salseo ajeno solo para tener tema de conversación.",
      "Yo nunca me he liado con el amigo/a feo/a solo para poder acercarme al guapo/a.",
      "Yo nunca he besado a alguien de fiesta y me he arrepentido a los dos milisegundos."
    ],
    picante: [
      "Yo nunca me he grabado en vídeo o audio manteniendo relaciones con alguien.",
      "Yo nunca he mandado una foto subida de tono (nude) y he rezado para que no la rularan.",
      "Yo nunca lo he hecho en el baño de una discoteca o un bar público.",
      "Yo nunca he fingido un orgasmo espectacular porque me aburría y quería acabar ya.",
      "Yo nunca lo he hecho en un coche y me he asustado pensando que nos pillaba la policía.",
      "Yo nunca he tenido fantasías o sueños calientes con un profesor/a.",
      "Yo nunca he usado juguetes para adultos ajenos o de una pareja.",
      "Yo nunca he estado a punto de participar en un trío y me he echado atrás en el último minuto.",
      "Yo nunca he mentido diciendo que tenía más (o menos) experiencia sexual de la real.",
      "Yo nunca he buscado fetichismos súper raros y turbios en el modo incógnito."
    ],
    asco: [
      "Yo nunca he vomitado y me he vuelto a tragar un poco por no manchar.",
      "Yo nunca he comido algo de la nevera que sabía perfectamente que estaba caducado.",
      "Yo nunca le he dado la vuelta a unos calcetines o calzoncillos sucios por no poner lavadoras.",
      "Yo nunca me he sacado un moco gigante y lo he pegado debajo de una mesa o silla.",
      "Yo nunca he meado en la piscina pública o en la ducha para ahorrar tiempo.",
      "Yo nunca me he tirado un pedo letal y ninja y he culpado a otra persona.",
      "Yo nunca he estado más de tres días seguidos sin ducharme porque 'no iba a salir'.",
      "Yo nunca he olido mis propias axilas o ropa sucia para ver si aguantaba un día más.",
      "Yo nunca me he liado con alguien a quien le olía fatal la boca.",
      "Yo nunca he usado el cepillo de dientes de otra persona sin pedirle permiso."
    ],
    delitos: [
      "Yo nunca he hecho un 'simpa' de leyenda en un restaurante o bar y he huido corriendo.",
      "Yo nunca he robado un cono de obra, una valla o un letrero estando de fiesta.",
      "Yo nunca he colado alcohol a un festival escondiéndolo en sitios íntimos.",
      "Yo nunca he pirateado software carísimo (Adobe, DaVinci) sin pagar un duro.",
      "Yo nunca he usado un DNI falso o el de mi hermano/a mayor para entrar a la disco.",
      "Yo nunca he conducido un patinete eléctrico o bicicleta yendo ciego perdido.",
      "Yo nunca he meado en la puerta de un portal, entre dos coches o en la rueda de uno.",
      "Yo nunca me he metido en una pelea física en medio de la calle estando de fiesta.",
      "Yo nunca me he saltado el metro o Renfe pegándome a otra persona como una lapa.",
      "Yo nunca me he colado en un recinto, festival o concierto saltando la valla."
    ],
    cachondeo: [
      "Yo nunca he fingido tener acento extranjero, inglés o francés para ligar o reírme de alguien.",
      "Yo nunca he soltado un chiste negrísimo en el peor contexto posible y nadie se ha reído.",
      "Yo nunca me he empezado a reír a carcajadas en un entierro o minuto de silencio.",
      "Yo nunca me he caído de boca en una discoteca y me he levantado diciendo 'estoy bien'.",
      "Yo nunca he mandado audios cantando a gritos por la calle a las 5 de la mañana.",
      "Yo nunca he hecho la bomba de humo perfecta: irme a mi casa sin despedirme de ni dios.",
      "Yo nunca me he creído un/a influencer por tener más de 200 seguidores en Instagram.",
      "Yo nunca he soltado una frase de un 'trend' de TikTok en una conversación seria.",
      "Yo nunca me he intentado hacer el/la sexy apoyándome en algo y me he caído al suelo.",
      "Yo nunca me he puesto a debatir súper cabreado sobre política con un desconocido de fiesta."
    ]
  },
  bomba: [
    "Marcas de Vapers o sabores de cachimba",
    "Estaciones de la L1 (Roja) del Metro de Barcelona",
    "Excusas malas para no entregar un trabajo en la uni",
    "Cosas que te encuentras tiradas en el suelo de una discoteca",
    "Posturas sexuales",
    "Marcas de preservativos",
    "Bebidas alcohólicas que causan resacas destructivas",
    "Programas de edición o software que odiamos",
    "Insultos creativos en catalán",
    "Sitios raros o incómodos donde hacerlo",
    "Cosas que le dices a tu ex de madrugada",
    "Enfermedades de transmisión sexual",
    "Películas que todo el mundo finge que le encantan pero son un tostón",
    "Nombres de profesores que hemos tenido",
    "Marcas de cervezas",
    "Comida guarra para curar la resaca un domingo",
    "Tipos de drogas (legales o ilegales)",
    "Fetiches raros que la gente tiene",
    "Cosas que robarías de un hotel",
    "Marcas de material audiovisual (cámaras, micros...)"
  ],
  verdad: {
    normal: [
      "¿Qué es lo más patético que has hecho para llamar la atención de tu 'crush' en redes sociales?",
      "¿Cuál ha sido la mentira más elaborada que le has colado a tus padres y nunca te pillaron?",
      "¿Qué hábito asqueroso o raro tienes cuando estás solo en casa y nadie te mira?",
      "De todos los presentes, ¿quién crees que sobreviviría menos de un mes viviendo completamente solo?",
      "¿Cuál es tu placer culpable más grande (serie, música o comida) que te daría vergüenza admitir en público?",
      "¿Qué es lo más humillante que te ha pasado en un rodaje, trabajo o clase en la universidad?",
      "Si pudieras borrar un día entero de tu vida de la memoria de todos, ¿cuál sería y por qué?",
      "¿Cuál fue tu época más 'cringe' o que más vergüenza ajena te da de tu adolescencia?",
      "Di el nombre de alguien a quien tienes envidia (sana o no) y dinos exactamente por qué.",
      "¿Cuál es la búsqueda más turbia que tienes ahora mismo en el historial de tu móvil o navegador?"
    ],
    salseo: [
      "¿A quién del grupo ves con el peor gusto y criterio absoluto para elegir a sus parejas?",
      "Si tuvieras que liarte obligatoriamente con alguien de esta sala (sin contar parejas actuales), ¿con quién sería?",
      "¿Alguna vez has sido infiel o has ayudado a un amigo a encubrir unos cuernos descarados?",
      "Dinos a quién de aquí le confiarías tu mayor secreto y a quién NO se lo contarías ni loco.",
      "¿Has tonteado alguna vez con el ex de un amigo/a o te has sentido atraído/a por él/ella?",
      "Del 1 al 10, sé sincero: ¿qué nota le pones al atractivo físico de la persona a tu derecha?",
      "¿Has rajado o criticado a alguien de esta sala a sus espaldas en el último mes? ¿A quién?",
      "¿Alguna vez has vuelto a hablar con tu ex porque estabas caliente o solo/a? Cuenta la verdad.",
      "¿Qué persona que conocemos en común crees que posturea muchísimo en Instagram y es súper falsa en persona?",
      "Confiesa qué es lo más tóxico que has hecho por celos o inseguridad en una relación o rollo."
    ],
    picante: [
      "¿Cuál es el lugar más arriesgado, público o prohibido en el que te has liado con alguien?",
      "Cuenta con detalle tu experiencia sexual o primer beso más desastroso e incómodo.",
      "¿Qué fetiche, fantasía extraña o rollo te pone a mil pero casi nunca confiesas?",
      "¿Has fingido alguna vez experiencia en la cama o un orgasmo para salir del paso rápido?",
      "Si tuvieras que hacer un trío con personas de tu entorno (o de aquí), ¿a quiénes elegirías?",
      "¿Te has grabado alguna vez en vídeo haciéndolo? Si no, ¿por cuánto dinero lo harías y subirías a OnlyFans?",
      "¿Cuál es la mayor locura o cosa más extrema que has buscado en páginas para adultos?",
      "¿Alguna vez te han pillado con las manos en la masa? ¿Quién fue y cómo saliste de la situación?",
      "¿Cuál es tu técnica infalible o tu punto fuerte en la cama del que te sientes súper orgulloso/a?",
      "¿Te has liado o acostado con alguien que te caía fatal pero te ponía muchísimo físicamente?"
    ],
    oscuro: [
      "¿Has robado dinero o algún objeto de valor a un amigo o familiar y has disimulado como si nada?",
      "¿Alguna vez has manipulado o llorado de mentira a alguien para conseguir exactamente lo que querías?",
      "Si pudieras borrar de la faz de la tierra a alguien de tu instituto, universidad o curro sin consecuencias, ¿quién sería?",
      "¿Qué secreto oscuro te llevarías a la tumba porque arruinaría por completo la imagen que la gente tiene de ti?",
      "¿Alguna vez te has alegrado genuinamente de que a un amigo/a cercano le dejara la pareja o le fuera mal en algo?",
      "Di la cosa más inmoral o egoísta que has hecho en tu vida y de la que no te arrepientes del todo.",
      "¿A qué familiar tuyo soportas menos y qué es lo que más asco te da de su personalidad?",
      "¿Alguna vez has hecho la vista gorda ante una injusticia o bullying porque no querías pringar tú?",
      "¿Has destrozado propiedad ajena o pública borracho y has huido como un cobarde?",
      "¿Qué es lo más rastrero que has hecho por no gastar dinero o por racanería extrema?"
    ]
  },
  reto: {
    casa: [
      "Intercambia una prenda de ropa (que se vea) con la persona a tu izquierda durante 3 rondas.",
      "Hazle un masaje de hombros súper intenso a la persona que elijas durante 1 minuto entero.",
      "Deja que [Player] te despeine y te eche agua en la cabeza. Te tienes que quedar así 2 rondas.",
      "Llama a una pizzería local y pregúntales muy seriamente si sus pizzas llevan gluten porque eres alérgico al aire.",
      "Pon tu móvil en modo avión y dáselo a guardar a [Player] durante las próximas 3 rondas.",
      "Haz 10 flexiones seguidas o bebe 2 tragos extra. Si te caes, empiezas de cero.",
      "Baila una canción de TikTok sin música, a cappella, intentando ser lo más seductor/a posible.",
      "Ponte un calcetín sucio en la mano como si fuera una marioneta. Solo puedes hablar a través de ella 2 rondas.",
      "Túmbate en el suelo, hazte el muerto y no te muevas ni hables hasta que sea tu turno de nuevo.",
      "Chúpale el dedo índice a [Player] mirándole fijamente a los ojos durante 3 segundos."
    ],
    bar: [
      "Acércate a una mesa de desconocidos y pídeles muy en serio que si te invitan a un chupito les cuentas el futuro.",
      "Ponte en medio del bar y da un brindis a gritos por 'la salud mental de los que estamos aquí'.",
      "Ve hacia el baño caminando de forma extremadamente coja y exagerada para que te vea la gente.",
      "Lanza miradas súper intensas y seductoras a un desconocido/a hasta que se incomode y aparte la mirada.",
      "Pregúntale al camarero/a qué bebida te recomienda para olvidar a tu ex. Que te la ponga y te la bebes.",
      "Haz que [Player] te dé de beber tu copa como si fueras un bebé, sin que tú toques el vaso.",
      "Levántate y pide una servilleta al camarero como si estuvieras sufriendo un atraco o emergencia grave.",
      "Graba un story llorando falsamente diciendo que tu vida es un desastre y súbelo 5 minutos.",
      "Dale tu móvil a [Player] para que le dé un 'Like' a una foto antigua del ex que elija.",
      "Siéntate en el regazo de [Player] durante todo tu turno como si fuera lo más normal del mundo."
    ],
    discoteca: [
      "Abre círculo en medio de la pista de baile y baila como un robot desengrasado durante 20 segundos.",
      "Acércate a la cabina del DJ (o lo más cerca que puedas) y suplícale a gritos que ponga el Aserejé.",
      "Busca a un desconocido/a con tu mismo color de camiseta, chócale los cinco y dile 'somos gemelos bro'.",
      "Perrea rozándote intensamente con [Player] durante el estribillo de la canción que esté sonando.",
      "Quítate la camiseta (o súbetela enseñando abdomen) y grita '¡Madre mía qué calor!' en mitad de la pista.",
      "Mándale un audio a tu ex (o a quien diga el grupo) con la música a tope de fondo diciendo 'Esta canción me recuerda a nosotros'.",
      "Haz de mimo fingiendo que estás encerrado en una caja de cristal en mitad del barullo de la disco.",
      "Pide a un desconocido que te abroche un botón de la camisa o te coloque bien el pelo de forma seductora.",
      "Tírate al suelo y simula hacer breakdance (la croqueta) aunque se te queden mirando mal los seguratas.",
      "Sácate un selfie con el flash a tope apuntando a un desconocido de fondo y ponlo de foto de perfil 10 minutos."
    ],
    parque: [
      "Abraza el tronco de un árbol y empieza a decirle cosas bonitas y guarras en voz alta durante 30 segundos.",
      "Descalzate y pisa la tierra o el césped quejándote dramáticamente de lo mucho que te pincha la vida.",
      "Dale un beso apasionado pero rápido en el cuello a [Player] detrás del árbol o banco más cercano.",
      "Haz la croqueta rodando por el césped durante 5 segundos y vuelve lleno de hojas.",
      "Simula que paseas a un perro invisible y grítale porque se ha meado en los zapatos de [Player].",
      "Sube a un banco (con cuidado) y declara a los cuatro vientos que eres el rey/reina de la naturaleza.",
      "Pon la ubicación del parque en el grupo de WhatsApp de tu familia con el mensaje: 'Me he fugado, no me busquéis'.",
      "Coge un palo, acércate a [Player], pon una rodilla en el suelo y nómbrale Caballero/Dama del parque.",
      "Haz 5 sentadillas gritando '¡Por el ecosistema!' en cada una de ellas.",
      "Túmbate apoyando la cabeza en las piernas de [Player] y que te acaricie el pelo hasta tu próximo turno."
    ],
    comodines: [
      "¡SALVACIÓN DIVINA! Elige a la persona que quieras para que se beba tu castigo enterito.",
      "¡FIESTA COMUNISTA! Aquí pringamos todos. Todos los jugadores, incluido tú, beben 2 tragos.",
      "¡DICTADOR! Obliga a [Player] a beber 3 tragos o a hacer un reto físico ahora mismo sin rechistar.",
      "¡AMNESIA! Pierdes tu turno de jugar pero te salvas de beber. La paz sea contigo.",
      "¡LEY DEL HIELO! Nadie puede mirarte a los ojos ni dirigirte la palabra hasta tu próximo turno. Si alguien falla, bebe."
    ]
  },
  duelos: [
    "Pulso de manos tradicional. El que toque la mesa pierde.",
    "Piedra, Papel o Tijera. Al mejor de 3. El perdedor bebe.",
    "Duelo de miradas. El primero que parpadee, pierde.",
    "Aguantar la risa. Los demás os pueden hacer caras. El primero que se ría, pierde.",
    "Batalla de pulgares. Agarraos las manos y el primero que atrape el pulgar del otro 3 segundos, gana.",
    "Cálculo mental rápido: 7 x 8 + 14. El último en decirlo correctamente, pierde.",
    "Duelo de marcas: Turnaos diciendo marcas de condones. El primero que repita o se quede en blanco, pierde.",
    "Imitar a un mono. El grupo vota quién lo ha hecho peor. El perdedor pringa.",
    "Piedra, Papel o Tijera (Versión Kamikaze a 1 sola ronda). A muerte.",
    "Cantar una canción infantil a pleno pulmón. El que desafine o se ría más, pierde.",
    "Decir el abecedario al revés lo más rápido posible. El que llegue más lejos sin fallar, gana.",
    "Duelo de insultos sin usar palabrotas. Turnaos. El primero que se ría o se quede en blanco, pierde.",
    "Adivinar el color de la ropa interior del otro. Si los dos fallan o aciertan, empate. Si uno acierta, el otro bebe.",
    "Pulso de fuerza de piernas (chocar los pies y empujar). El que ceda, pierde."
  ],
  encuestas: [
    "¿Quién de aquí tiene más probabilidades de acabar en la cárcel por una estupidez?",
    "¿Quién sería la peor pareja para tener una relación seria y estable?",
    "¿Quién de aquí es más probable que le ponga los cuernos a su pareja de fiesta?",
    "¿Quién tiene el historial de búsqueda de Google más turbio y asqueroso?",
    "¿Quién lloraría primero en una ruptura amorosa y daría más pena?",
    "¿Quién es más probable que acabe siendo un 'sugar daddy' o tenga un OnlyFans?",
    "¿Quién tiene el peor gusto y criterio absoluto para elegir a la gente con la que se lía?",
    "¿A quién le confiarías tu vida en un apocalipsis zombie?",
    "¿Quién de aquí posturea más en redes sociales y aparenta ser alguien que no es?",
    "¿Quién es el/la más falso/a del grupo o al que más le gusta el salseo tóxico?",
    "¿Quién tiene más probabilidades de volver con su ex tóxico en los próximos meses?",
    "¿Quién de aquí sería el primero en morir en una película de terror por hacer una estupidez?",
    "¿Quién es más probable que se lie con un profesor/a para aprobar una asignatura?",
    "¿A quién se le subiría más a la cabeza la fama si ganara un millón de euros mañana?",
    "¿Quién es el más 'pagafantas' o arrastrado/a cuando le gusta alguien?",
    "¿Quién se gastaría todos sus ahorros en una estafa piramidal o criptomonedas?",
    "¿Quién tiene más posibilidades de acabar siendo captado por una secta?",
    "¿Quién esconde el mayor secreto oscuro o la anécdota más ilegal del grupo?",
    "¿Quién sería capaz de sobrevivir menos tiempo a un mes sin móvil o internet?",
    "¿Quién se casaría por interés y dinero sin dudarlo ni un solo segundo?",
    "¿Quién sería el peor compañero de piso absoluto (por guarro o maniático)?",
    "¿Quién es más probable que termine viviendo aislado en el bosque como un ermitaño?",
    "¿Quién sería el primero en traicionar a este grupo de amigos por 1 millón de euros?",
    "¿Quién tiene más probabilidades de presentarse a un reality show (Isla de las Tentaciones, Gran Hermano)?",
    "¿A quién le huele peor los pies o es más probable que no se duche un fin de semana entero?",
    "¿Quién sería más capaz de robar comida en el supermercado por no pagar 3 euros?",
    "¿Quién es más probable que mande un mensaje a su ex borracho/a esta misma noche?"
  ]
};

// --- PERKS DE CUMPLEAÑOS DE IAN (MEJORADOS DIRECTOS)
const IAN_PERKS = [
  { title: "Reparte 3", desc: "Reparte 3 tragos entre quien quieras. Puedes dárselos todos a uno o dividirlos." },
  { title: "Doble o nada", desc: "Elige a alguien. O acepta beber 2 tragos ahora mismo, o hace 10 flexiones." },
  { title: "El señalado", desc: "Señala a alguien. Esa persona beberá 1 trago extra cada vez que alguien más beba durante 2 rondas." },
  { title: "Trago espejo", desc: "Elige a alguien. Todo lo que te toque beber a ti durante esta ronda, se lo bebe esa persona." },
  { title: "El impuesto de Ian", desc: "Todos los jugadores te deben 1 trago ahora mismo. Que beban a tu salud." },
  { title: "La víctima", desc: "Elige a una persona. Tiene que imitar a un mono durante 10 segundos o beber 3 tragos." },
  { title: "El campeón", desc: "Elige a dos personas para jugar un piedra, papel o tijera a 1 ronda. Quien pierda, bebe 2 tragos." },
  { title: "Inmunidad divina", desc: "Eres intocable. No bebes en las próximas 3 rondas bajo ningún concepto." },
  { title: "Maldición", desc: "Maldice a un jugador. Cada vez que tú hables, esa persona bebe 1 trago (dura 2 rondas)." },
  { title: "El rayo divino", desc: "Elige una víctima directa. Castigo instantáneo: bebe 4 tragos sin rechistar." },
  { title: "Rey del Silencio", desc: "Nadie puede decir tu nombre (IAN). El que se equivoque en las próximas 3 rondas, bebe." },
  { title: "Trono absoluto", desc: "Inventa una norma sencilla que todos deben cumplir (ej: no señalar). Dura 10 min. Quien falle, bebe." }
];

const FREQUENCIES = [
  { value: 0, label: "OFF" },
  { value: 1, label: "Bajo" },
  { value: 2, label: "Medio" },
  { value: 3, label: "¡A TOPE!" }
];

const PENALTY_LEVELS = [
  { value: 'bajo', title: 'Chill', subtitle: '(1 Trago)', min: 1, max: 1, colorClass: 'bg-green-500 text-gray-900 border-green-400 shadow-md shadow-green-500/20' },
  { value: 'medio', title: 'Al puntito', subtitle: '(1-2 Tragos)', min: 1, max: 2, colorClass: 'bg-yellow-500 text-gray-900 border-yellow-400 shadow-md shadow-yellow-500/20' },
  { value: 'alto', title: 'Al puntazo', subtitle: '(1-3 Tragos)', min: 1, max: 3, colorClass: 'bg-orange-500 text-gray-900 border-orange-400 shadow-md shadow-orange-500/20' },
  { value: 'fallo', title: 'AL FALLO', subtitle: '(2-5 Tragos)', min: 2, max: 5, colorClass: 'bg-red-600 text-white border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.7)] animate-pulse' }
];

// Índex dels reptes per categoria i entorn. Els pesos del selector determinen
// quantes vegades entra cada grup al sorteig, sense duplicar les frases al fitxer.
const DARE_CATEGORY_INDEXES = {
  casa: {
    chill: [0, 2, 5, 8],
    ridiculo: [3, 6, 7],
    picante: [1, 9],
    movil: [4]
  },
  bar: {
    chill: [0, 4],
    ridiculo: [0, 1, 2, 6],
    picante: [3, 5, 9],
    movil: [7, 8]
  },
  discoteca: {
    chill: [2],
    ridiculo: [0, 1, 6, 8],
    picante: [3, 4, 7],
    movil: [5, 9]
  },
  parque: {
    chill: [1, 3, 8],
    ridiculo: [0, 4, 5, 7],
    picante: [2, 9],
    movil: [6]
  }
};

// --- RENDERIZADOR AVANZADO DE TEXTO
const RenderFormattedText = ({ text, isVor = false }) => {
  if (!text) return null;
  let mainText = text;
  let explanation = null;

  if (text.includes('{{') && text.includes('}}')) {
    const parts = text.split('{{');
    mainText = parts[0].trim();
    explanation = parts[1].replace('}}', '').trim();
  }

  const renderNames = (str) => {
    const parts = str.split('|||');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className="text-yellow-400 font-black uppercase tracking-wider mx-1 animate-pulse drop-shadow-md">
            {part}
          </span>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full px-1 md:px-2 relative z-10">
      <span className={`font-black text-center leading-tight tracking-tight ${isVor ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'}`}>
        {renderNames(mainText)}
      </span>
      {explanation && (
        <div className="text-sm md:text-base text-gray-400 bg-gray-800/90 px-5 py-4 rounded-2xl border border-gray-700 shadow-inner w-full max-w-lg mt-4 animate-fade-in-up">
          <span className="font-bold text-gray-300">Diccionario de Fiesta:</span> <br />
          <span className="italic">{renderNames(explanation)}</span>
        </div>
      )}
    </div>
  );
};

// --- COMPONENTE DE CONFETI PARA MODO CUMPLEAÑOS
const ConfettiBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
     <div className="absolute top-[10%] left-[5%] text-4xl transform rotate-12 drop-shadow-md animate-pulse">🎉</div>
     <div className="absolute top-[20%] right-[10%] text-5xl transform -rotate-12 drop-shadow-md">✨</div>
     <div className="absolute top-[50%] left-[15%] text-3xl transform rotate-45 drop-shadow-md">🎊</div>
     <div className="absolute top-[70%] right-[20%] text-6xl transform -rotate-45 drop-shadow-md animate-pulse">🍻</div>
     <div className="absolute top-[85%] left-[30%] text-4xl transform rotate-12 drop-shadow-md">👑</div>
     <div className="absolute top-[40%] right-[5%] text-4xl transform -rotate-12 drop-shadow-md">🎉</div>
     <div className="absolute top-[15%] left-[40%] text-5xl transform rotate-45 drop-shadow-md">✨</div>
     <div className="absolute top-[60%] left-[45%] text-4xl transform rotate-12 drop-shadow-md">🎊</div>
  </div>
);

// --- COMPONENTE WRAPPER PARA ANIMACIONES FLUIDAS DE MODALES
const AnimatedModal = ({ isOpen, onClose, children, zIndex = "z-[100]" }) => {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setIsAnimatingOut(false);
    } else if (isRendered) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsRendered(false);
        setIsAnimatingOut(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isRendered]);

  if (!isRendered) return null;

  return (
    <div className={`fixed inset-0 bg-black/90 ${zIndex} flex items-center justify-center p-4 sm:p-6 backdrop-blur-md transition-opacity duration-250 ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className={`w-full max-w-md flex flex-col justify-center ${isAnimatingOut ? 'animate-shrink' : 'animate-expand'} relative z-10`}>
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [screen, setScreen] = useState('setup');
  const [closingScreen, setClosingScreen] = useState(false);
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");
  const [draggedPlayer, setDraggedPlayer] = useState(null);
  const [mode, setMode] = useState(null);
  const [environment, setEnvironment] = useState('casa');
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [showPlayerManager, setShowPlayerManager] = useState(false);
  const [activeSettings, setActiveSettings] = useState(null);

  // Global Tracker
  const [drinkCounts, setDrinkCounts] = useState({});
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  
  // Castigos Acumulativos
  const [enableAccumulativePenalty, setEnableAccumulativePenalty] = useState(false);
  const [globalStrikes, setGlobalStrikes] = useState({});
  const [supremePenaltyPlayer, setSupremePenaltyPlayer] = useState(null);

  const [ynDrinkers, setYnDrinkers] = useState([]);
  const [vorPenaltyCounted, setVorPenaltyCounted] = useState(false);

  // Contadores de rondas de juegos para el Modo Dios
  const [ynTurnCount, setYnTurnCount] = useState(1);
  const [bombaRoundCount, setBombaRoundCount] = useState(1);
  const [dueloRoundCount, setDueloRoundCount] = useState(1);
  const [encuestaRoundCount, setEncuestaRoundCount] = useState(1);

  // Configuraciones Juegos
  const [ynConfig, setYnConfig] = useState({ familiar: 1, estudiantil: 2, personales: 2, traumas: 2, trabajo: 0, salseo: 2, picante: 1, asco: 1, delitos: 1, cachondeo: 2 });
  const [vorTruthConfig, setVorTruthConfig] = useState({ normal: 2, salseo: 2, picante: 1, oscuro: 1 });
  const [vorDareConfig, setVorDareConfig] = useState({ chill: 2, ridiculo: 2, picante: 1, movil: 1 });
  const [penaltyIntensity, setPenaltyIntensity] = useState('alto');
  const [bombaConfig, setBombaConfig] = useState({ minTime: 10, maxTime: 45, showTimer: false, penaltyLevel: 'medio', showTable: false });
  
  const [bombaState, setBombaState] = useState({ phase: 'idle', topic: '', timeLeft: 0, penalty: 0, firstPlayer: '', direction: '' });
  const [showBombaTableConfig, setShowBombaTableConfig] = useState(false);
  
  // Duelo State
  const [dueloEnvironment, setDueloEnvironment] = useState('casa');
  const [dueloPenaltyLevel, setDueloPenaltyLevel] = useState('alto');
  const [dueloState, setDueloState] = useState({ p1: null, p2: null, challenge: null, phase: 'idle' });
  
  // Encuesta Brutal State
  const [encuestaEnvironment, setEncuestaEnvironment] = useState('casa');
  const [encuestaPenaltyLevel, setEncuestaPenaltyLevel] = useState('alto');
  const [encuestaState, setEncuestaState] = useState({ question: null, currentVoterIndex: 0, votes: {}, phase: 'idle', penalty: 0 });

  const [fbiMode, setFbiMode] = useState(false);
  const [fbiEvents, setFbiEvents] = useState([]);
  const [fbiAlerts, setFbiAlerts] = useState([]);
  const [showFbiPopup, setShowFbiPopup] = useState(false);
  const [hasTimerOnCurrentPhrase, setHasTimerOnCurrentPhrase] = useState(false);
  const [exitConfirm, setExitConfirm] = useState(null);
  const [exitTimer, setExitTimer] = useState(3);
  const [exitPhrase, setExitPhrase] = useState("");
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [easterEgg, setEasterEgg] = useState(null);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentPenalty, setCurrentPenalty] = useState(null);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [turnState, setTurnState] = useState('waiting');
  const [isVorTransitioning, setIsVorTransitioning] = useState(false);
  const [vorType, setVorType] = useState("");
  const [usedPhrases, setUsedPhrases] = useState([]);
  const [isAnimatingYN, setIsAnimatingYN] = useState(false);

  // --- MODO DIOS IAN
  const [isIansBirthday, setIsIansBirthday] = useState(false);
  const [hasAskedIanBirthday, setHasAskedIanBirthday] = useState(false);
  const [showIanBirthdayPrompt, setShowIanBirthdayPrompt] = useState(false);
  const [ianPromptPhase2, setIanPromptPhase2] = useState(false);
  const [showIanBoxes, setShowIanBoxes] = useState(false);
  const [ianBoxOptions, setIanBoxOptions] = useState([]);
  const [activeIanPerk, setActiveIanPerk] = useState(null);
  const [showIanModeInfo, setShowIanModeInfo] = useState(false);

  // La careta es tanca sola, però també es pot saltar tocant la pantalla.
  useEffect(() => {
    const introTimer = window.setTimeout(() => setShowIntro(false), 2800);
    return () => window.clearTimeout(introTimer);
  }, []);

  const exitPhrasesPool = [
    "¿Seguro que quieres salir de la partida actual? Perderás el progreso de la partida.",
    "¿Ya te has cansado? Si sales, la fiesta se reinicia.",
    "¿Nos vamos tan pronto? ¡Aún queda noche!",
    "Cobarde a la vista... ¿De verdad quieres abandonar la partida?",
    "¿Un descanso? Salir ahora significa perder los retos en curso."
  ];

  const handleNavigate = (targetScreen) => {
    setClosingScreen(true);
    setTimeout(() => {
      setScreen(targetScreen);
      setClosingScreen(false);
      
      // Chequear cumple de IAN al entrar a mode-select
      if (targetScreen === 'mode-select' && !hasAskedIanBirthday) {
        if (players.includes('IAN')) {
          setShowIanBirthdayPrompt(true);
        }
        setHasAskedIanBirthday(true);
      }
    }, 250);
  };

  const processPenalty = (player, tragosCount = 1) => {
    setDrinkCounts(prev => ({ ...prev, [player]: (prev[player] || 0) + tragosCount }));
    if (enableAccumulativePenalty) {
       setGlobalStrikes(prev => {
          const currentStrikes = prev[player] || 0;
          const newStrikes = currentStrikes + 1;
          if (newStrikes >= 3) {
             setSupremePenaltyPlayer(player);
             return { ...prev, [player]: 0 }; 
          }
          return { ...prev, [player]: newStrikes };
       });
    }
  };

  const processRevertPenalty = (player, tragosCount = 1) => {
    setDrinkCounts(prev => ({ ...prev, [player]: Math.max(0, (prev[player] || 0) - tragosCount) }));
    if (enableAccumulativePenalty) {
       setGlobalStrikes(prev => ({ ...prev, [player]: Math.max(0, (prev[player] || 0) - 1) }));
    }
  };

  const handleCountPenalty = (manualPenalty = null) => {
    const penaltyToCount = manualPenalty || currentPenalty;
    if (!penaltyToCount) return;
    const currentPlayer = players[currentPlayerIndex];

    if (vorPenaltyCounted) {
      processRevertPenalty(currentPlayer, penaltyToCount);
      setVorPenaltyCounted(false);
    } else {
      processPenalty(currentPlayer, penaltyToCount);
      setVorPenaltyCounted(true);
    }
  };

  useEffect(() => {
    let timer;
    if (exitConfirm && exitTimer > 0) {
      timer = setTimeout(() => setExitTimer(exitTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [exitConfirm, exitTimer]);

  const handleExitClick = (destination) => {
    setExitConfirm(destination);
    setExitTimer(3);
    setExitPhrase(exitPhrasesPool[Math.floor(Math.random() * exitPhrasesPool.length)]);
  };

  const confirmExit = () => {
    handleNavigate(exitConfirm);
    setExitConfirm(null);
  };

  const handleToggleAllYN = () => {
    if (ynDrinkers.length === players.length) setYnDrinkers([]);
    else setYnDrinkers([...players]);
  };

  useEffect(() => {
    if (!fbiMode || fbiEvents.length === 0) return;
    const interval = setInterval(() => {
      setFbiEvents(prev => {
        let changed = false;
        const newEvents = prev.map(ev => {
          if (ev.type === 'time' && ev.remaining > 0) {
            changed = true;
            return { ...ev, remaining: ev.remaining - 1 };
          }
          return ev;
        });
        return changed ? newEvents : prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [fbiMode, fbiEvents.length]);

  useEffect(() => {
    const expired = fbiEvents.filter(ev => ev.remaining <= 0);
    if (expired.length > 0) {
      setFbiAlerts(prev => [...prev, ...expired]);
      setFbiEvents(prev => prev.filter(ev => ev.remaining > 0));
    }
  }, [fbiEvents]);

  // --- GESTIÓN DE JUGADORES Y DRAG&DROP
  const addPlayer = (e) => {
    e.preventDefault();
    const normalizedName = newPlayer.trim().toUpperCase();
    if (normalizedName) {
      setPlayers(prev => prev.includes(normalizedName) ? prev : [...prev, normalizedName]);
    }
    setNewPlayer("");
  };

  const removePlayer = (playerToRemove, minimumPlayers = 0) => {
    if (players.length <= minimumPlayers) return;

    const removedIndex = players.indexOf(playerToRemove);
    const nextPlayers = players.filter(p => p !== playerToRemove);
    setPlayers(nextPlayers);
    setDrinkCounts(prev => { const next = { ...prev }; delete next[playerToRemove]; return next; });
    setGlobalStrikes(prev => { const next = { ...prev }; delete next[playerToRemove]; return next; });
    setYnDrinkers(prev => prev.filter(p => p !== playerToRemove));
    setFbiEvents(prev => prev.filter(ev => ev.player !== playerToRemove));
    setFbiAlerts(prev => prev.filter(ev => ev.player !== playerToRemove));
    if (supremePenaltyPlayer === playerToRemove) setSupremePenaltyPlayer(null);
    setCurrentPlayerIndex(prev => {
      const adjustedIndex = removedIndex < prev ? prev - 1 : prev;
      return nextPlayers.length ? Math.min(adjustedIndex, nextPlayers.length - 1) : 0;
    });
  };

  const movePlayer = (index, offset) => {
    const targetIndex = index + offset;
    if (targetIndex < 0 || targetIndex >= players.length) return;
    setPlayers(prev => {
      const next = [...prev];
      [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
      return next;
    });
  };

  const addDefaultPlayers = () => {
    const defaults = ["VALENTINO", "LLUNA", "GERARD", "IAN", "FERRAN"];
    const newPlayers = [...players];
    defaults.forEach(p => {
      if (!newPlayers.includes(p)) newPlayers.push(p);
    });
    setPlayers(newPlayers);
  };

  const handleDragStart = (e, index) => {
    setDraggedPlayer(index);
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", players[index]);
    }
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedPlayer === null || draggedPlayer === dropIndex) return;
    const newPlayers = [...players];
    const draggedItem = newPlayers.splice(draggedPlayer, 1)[0];
    newPlayers.splice(dropIndex, 0, draggedItem);
    setPlayers(newPlayers);
    setDraggedPlayer(null);
  };

  const getRandomPlayer = (excludePlayer = null, excludePlayer2 = null) => {
    const availablePlayers = players.filter(p => p !== excludePlayer && p !== excludePlayer2);
    if (availablePlayers.length === 0) return players[0] || "[Nadie]";
    return availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
  };

  const handleRandomizeYN = () => {
    if (isRandomizing) return;
    setIsRandomizing(true);
    let ticks = 0;
    const interval = setInterval(() => {
      const tempConfig = {};
      Object.keys(ynConfig).forEach(key => {
        tempConfig[key] = Math.floor(Math.random() * 4);
      });
      setYnConfig(tempConfig);
      ticks++;
      if (ticks >= 10) {
        clearInterval(interval);
        setIsRandomizing(false);
      }
    }, 100);
  };

  const setAllYNCategories = (value) => {
    const newConfig = {};
    Object.keys(ynConfig).forEach(key => newConfig[key] = value);
    setYnConfig(newConfig);
  };

  const setAllTruthConfig = (value) => {
    const newConfig = {};
    Object.keys(vorTruthConfig).forEach(key => newConfig[key] = value);
    setVorTruthConfig(newConfig);
  };

  const setAllDareConfig = (value) => {
    const newConfig = {};
    Object.keys(vorDareConfig).forEach(key => newConfig[key] = value);
    setVorDareConfig(newConfig);
  };

  const triggerEasterEgg = () => {
    const phrases = [
      "Al genio que acaba de apagar todos los filtros: te has ganado un premio especial por listillo.",
      "¿Te crees muy hacker tocando los ajustes y dejándolos en OFF? Paga las consecuencias.",
      "Para el graciosillo que tiene el móvil en la mano y ha desactivado todo: a beber se ha dicho."
    ];
    setEasterEgg({ shots: Math.floor(Math.random() * 3) + 1, phrase: phrases[Math.floor(Math.random() * phrases.length)] });
  };

  const checkHasTimer = (phrase) => /(?:(?:\d+)|(?:un|uno|una|dos|tres|cuatro|cinco|diez|quince|veinte|treinta))\s*(?:minuto|segundo|ronda|turno)s?/i.test(phrase);

  const addFbiEvent = (player, phrase) => {
    let type = 'manual';
    let amount = 1;
    const timeMatch = phrase.match(/(?:(\d+)|(un|uno|una|dos|tres|cuatro|cinco|diez|quince|veinte|treinta))\s*(minuto|segundo)s?/i);
    const roundMatch = phrase.match(/(?:(\d+)|(un|uno|una|dos|tres|cuatro|cinco|diez|quince|veinte|treinta))\s*(ronda|turno)s?/i);

    if (timeMatch) {
      type = 'time';
      let w = timeMatch[1]||timeMatch[2];
      amount = w==='un'||w==='uno'||w==='una'?1: parseInt(w)||2;
      if (timeMatch[3].toLowerCase() === 'minuto') amount *= 60;
    } else if (roundMatch) {
      type = 'round';
      let w = roundMatch[1]||roundMatch[2];
      let val = w==='un'||w==='uno'||w==='una'?1: parseInt(w)||2;
      amount = roundMatch[3].toLowerCase().startsWith('ronda') ? val * players.length : val;
    }
    setFbiEvents(prev => [...prev, { id: Date.now(), player, phrase, type, remaining: amount }]);
  };

  const triggerIanBoxes = () => {
    const shuffled = [...IAN_PERKS].sort(() => 0.5 - Math.random());
    setIanBoxOptions(shuffled.slice(0, 3));
    setShowIanBoxes(true);
    setActiveIanPerk(null);
  };

  const startGameYONunca = () => {
    const hasActiveCategories = Object.values(ynConfig).some(val => val > 0);
    if (!hasActiveCategories) {
      triggerEasterEgg();
      return;
    }
    setMode('yonunca');
    handleNavigate('game-yonunca');
    generateYNPhrase();
  };

  const startGameVOR = () => {
    const hasTruths = Object.values(vorTruthConfig).some(val => val > 0);
    const hasDares = Object.values(vorDareConfig).some(val => val > 0);
    if (!hasTruths && !hasDares) {
      triggerEasterEgg();
      return;
    }
    setMode('vor');
    handleNavigate('game-vor');
    setCurrentPlayerIndex(0);
    setTurnState('waiting');
    if (players[0] === 'IAN' && isIansBirthday) triggerIanBoxes();
  };

  const startGameBomba = () => {
    setMode('bomba');
    handleNavigate('game-bomba');
    startBombaRound();
  };

  // --- LOGICA JUEGOS INDIVIDUALES ---

  // 1. YO NUNCA
  const generateYNPhrase = (animate = false) => {
    let pool = [];
    Object.entries(ynConfig).forEach(([category, weight]) => {
      if (weight > 0 && PHRASES.yonunca[category]) {
        for (let i = 0; i < weight; i++) pool = pool.concat(PHRASES.yonunca[category]);
      }
    });

    if (pool.length === 0) return;

    let availablePhrases = pool.filter(p => !usedPhrases.includes(p));
    if (availablePhrases.length === 0) {
      availablePhrases = pool;
      setUsedPhrases([]);
    }

    const rawPhraseTemplate = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
    let phraseTemplate = rawPhraseTemplate;
    if (phraseTemplate.includes('[Player]')) {
      const randomTarget = getRandomPlayer();
      phraseTemplate = phraseTemplate.replace(/\[Player\]/g, `|||${randomTarget}|||`);
    }

    // Guardem la plantilla original, no el nom aleatori que s'hi hagi substituït.
    setUsedPhrases(prev => [...prev, rawPhraseTemplate]);

    if (animate) {
      setIsAnimatingYN(true);
      let ticks = 0;
      const animationInterval = setInterval(() => {
        const randomTemp = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
        setCurrentPhrase(randomTemp);
        ticks++;
        if (ticks >= 15) {
          clearInterval(animationInterval);
          setCurrentPhrase(phraseTemplate);
          setIsAnimatingYN(false);
        }
      }, 70);
    } else {
      setCurrentPhrase(phraseTemplate);
    }
  };

  const handleNextYNPhrase = () => {
    if (ynDrinkers.length > 0) {
      ynDrinkers.forEach(p => processPenalty(p, 1));
    }
    setYnDrinkers([]);
    
    // MODO REY IAN INVASION
    const nextCount = ynTurnCount + 1;
    setYnTurnCount(nextCount);
    if (isIansBirthday && players.includes('IAN') && nextCount % Math.max(2, players.length) === 0) {
       triggerIanBoxes();
    }
    
    generateYNPhrase(true);
  };

  // 2. VERDAD O RETO
  const generateVORPhrase = (choice, currentPlayerName) => {
    setVorPenaltyCounted(false);
    let pool = [];
    let finalPhrase = "";
    let isComodin = false;
    let finalType = choice;
    let tragosGenerados = null;

    if (choice === 'reto' && Math.random() < 0.20) {
      isComodin = true;
      finalType = 'comodin';
      pool = PHRASES.reto.comodines;
      finalPhrase = pool[Math.floor(Math.random() * pool.length)];
    } else {
      const config = choice === 'verdad' ? vorTruthConfig : vorDareConfig;
      const basePool = choice === 'verdad' ? PHRASES.verdad : (PHRASES.reto[environment] || PHRASES.reto.casa);

      if (choice === 'verdad') {
        Object.entries(config).forEach(([category, weight]) => {
          if (weight > 0 && basePool[category]) {
            for (let i = 0; i < weight; i++) pool = pool.concat(basePool[category]);
          }
        });
      } else {
        const categoryIndexes = DARE_CATEGORY_INDEXES[environment] || DARE_CATEGORY_INDEXES.casa;
        Object.entries(config).forEach(([category, weight]) => {
          const indexes = categoryIndexes[category] || [];
          for (let i = 0; i < weight; i++) {
            indexes.forEach(index => {
              if (basePool[index]) pool.push(basePool[index]);
            });
          }
        });
      }

      if (pool.length === 0) return;

      let availablePhrases = pool.filter(p => !usedPhrases.includes(p));
      if (availablePhrases.length === 0) {
        availablePhrases = pool;
        setUsedPhrases([]);
      }
      finalPhrase = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
      setUsedPhrases(prev => [...prev, finalPhrase]);

      const penaltyConfig = PENALTY_LEVELS.find(p => p.value === penaltyIntensity);
      tragosGenerados = Math.floor(Math.random() * (penaltyConfig.max - penaltyConfig.min + 1)) + penaltyConfig.min;
    }

    if (finalPhrase.includes('[Player]')) {
      const randomTarget = getRandomPlayer(currentPlayerName);
      finalPhrase = finalPhrase.replace(/\[Player\]/g, `|||${randomTarget}|||`);
    }

    setCurrentPhrase(finalPhrase);
    setCurrentPenalty(tragosGenerados);
    setVorType(finalType);
    setHasTimerOnCurrentPhrase(checkHasTimer(finalPhrase));
  };

  const handleVorChoice = (choice) => {
    const config = choice === 'verdad' ? vorTruthConfig : vorDareConfig;
    if (!Object.values(config).some(weight => weight > 0)) {
      triggerEasterEgg();
      return;
    }
    generateVORPhrase(choice, players[currentPlayerIndex]);
    setTurnState('showing');
  };

  const nextTurnVor = () => {
    setIsVorTransitioning(true);
    setTimeout(() => {
      const nextIdx = (currentPlayerIndex + 1) % players.length;
      setCurrentPlayerIndex(nextIdx);
      setTurnState('waiting');
      setIsVorTransitioning(false);
      
      if (fbiMode) {
        setFbiEvents(prev => prev.map(ev => {
          if (ev.type === 'round' && ev.remaining > 0) return { ...ev, remaining: ev.remaining - 1 };
          return ev;
        }));
      }

      // MODO REY IAN INVASION
      if (players[nextIdx] === 'IAN' && isIansBirthday) triggerIanBoxes();
    }, 250);
  };

  // 3. LA BOMBA
  const startBombaRound = () => {
    const topic = PHRASES.bomba[Math.floor(Math.random() * PHRASES.bomba.length)];
    const firstPlayer = getRandomPlayer();
    const direction = Math.random() > 0.5 ? 'Horario' : 'Antihorario';
    setBombaState({ phase: 'countdown', topic, timeLeft: 3, penalty: 0, firstPlayer, direction });
    setVorPenaltyCounted(false);
    setCurrentPlayerIndex(players.indexOf(firstPlayer));
    
    // MODO REY IAN INVASION (cada 2 rondas)
    const nextCount = bombaRoundCount + 1;
    setBombaRoundCount(nextCount);
    if (isIansBirthday && players.includes('IAN') && nextCount % 2 === 0) {
        triggerIanBoxes();
    }
  };

  const passBombToNextPlayer = () => {
    setCurrentPlayerIndex(prev => {
      if (bombaState.direction === 'Horario') return (prev + 1) % players.length;
      return (prev - 1 + players.length) % players.length;
    });
  };

  useEffect(() => {
    let timer;
    if (screen === 'game-bomba') {
      if (bombaState.phase === 'countdown' && bombaState.timeLeft > 0) {
        timer = setTimeout(() => setBombaState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 })), 1000);
      } else if (bombaState.phase === 'countdown' && bombaState.timeLeft === 0) {
        setBombaState(prev => ({ ...prev, phase: 'starting', timeLeft: 3 }));
      } else if (bombaState.phase === 'starting' && bombaState.timeLeft > 0) {
        timer = setTimeout(() => setBombaState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 })), 1000);
      } else if (bombaState.phase === 'starting' && bombaState.timeLeft === 0) {
        const totalTime = Math.floor(Math.random() * (bombaConfig.maxTime - bombaConfig.minTime + 1)) + bombaConfig.minTime;
        setBombaState(prev => ({ ...prev, phase: 'active', timeLeft: totalTime }));
      } else if (bombaState.phase === 'active' && bombaState.timeLeft > 0) {
        timer = setTimeout(() => {
          setBombaState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
        }, 1000);
      } else if (bombaState.phase === 'active' && bombaState.timeLeft <= 0) {
        const pConfig = PENALTY_LEVELS.find(p => p.value === bombaConfig.penaltyLevel);
        const penalty = Math.floor(Math.random() * (pConfig.max - pConfig.min + 1)) + pConfig.min;
        setBombaState(prev => ({ ...prev, phase: 'exploded', penalty }));
      }
    }
    return () => clearTimeout(timer);
  }, [bombaState, screen, bombaConfig]);

  // 4. DUELO 1V1
  const startDuelo = () => {
     setMode('duelo');
     handleNavigate('game-duelo');
     triggerNewDuelo();
  };
  const triggerNewDuelo = () => {
     const p1 = getRandomPlayer();
     const p2 = getRandomPlayer(p1);
     const challenge = PHRASES.duelos[Math.floor(Math.random() * PHRASES.duelos.length)];
     const pConfig = PENALTY_LEVELS.find(p => p.value === dueloPenaltyLevel);
     const penalty = Math.floor(Math.random() * (pConfig.max - pConfig.min + 1)) + pConfig.min;
     
     setDueloState({ p1, p2, challenge, penalty, phase: 'playing' });
     
     // MODO REY IAN INVASION (cada 3 rondas)
     const nextCount = dueloRoundCount + 1;
     setDueloRoundCount(nextCount);
     if (isIansBirthday && players.includes('IAN') && nextCount % 3 === 0) {
         triggerIanBoxes();
     }
  };

  const resolveDuelo = (loser) => {
     if (loser === 'draw') {
        processPenalty(dueloState.p1, dueloState.penalty);
        processPenalty(dueloState.p2, dueloState.penalty);
     } else {
        processPenalty(loser, dueloState.penalty);
     }
     setDueloState(prev => ({ ...prev, phase: 'resolved', loser }));
  };

  // 5. ENCUESTA BRUTAL
  const startEncuesta = () => {
     setMode('encuesta');
     handleNavigate('game-encuesta');
     triggerNewEncuesta();
  };

  const triggerNewEncuesta = () => {
     const question = PHRASES.encuestas[Math.floor(Math.random() * PHRASES.encuestas.length)];
     const pConfig = PENALTY_LEVELS.find(p => p.value === encuestaPenaltyLevel);
     const penalty = Math.floor(Math.random() * (pConfig.max - pConfig.min + 1)) + pConfig.min;
     
     setEncuestaState({ question, penalty, currentVoterIndex: 0, votes: {}, phase: 'pass' });
     
     // MODO REY IAN INVASION (cada 2 rondas)
     const nextCount = encuestaRoundCount + 1;
     setEncuestaRoundCount(nextCount);
     if (isIansBirthday && players.includes('IAN') && nextCount % 2 === 0) {
         triggerIanBoxes();
     }
  };

  const registerVote = (votedPlayer) => {
     setEncuestaState(prev => {
        const newVotes = { ...prev.votes, [votedPlayer]: (prev.votes[votedPlayer] || 0) + 1 };
        const nextIndex = prev.currentVoterIndex + 1;
        
        if (nextIndex >= players.length) {
           return { ...prev, votes: newVotes, phase: 'completed' };
        }
        return { ...prev, votes: newVotes, currentVoterIndex: nextIndex, phase: 'pass' };
     });
  };

  const applyEncuestaPenalty = () => {
     let maxVotes = 0;
     let losers = [];
     Object.entries(encuestaState.votes).forEach(([p, v]) => {
        if (v > maxVotes) { maxVotes = v; losers = [p]; }
        else if (v === maxVotes) { losers.push(p); }
     });
     
     losers.forEach(l => processPenalty(l, encuestaState.penalty));
     triggerNewEncuesta();
  };

  // --- HELPERS UI ---

  const EnvironmentSelector = ({ currentEnv, setEnv }) => {
    const envs = [
      { id: 'casa', icon: Home, label: 'Casa', border: 'border-purple-500', bg: 'bg-purple-500/20', text: 'text-purple-400' },
      { id: 'bar', icon: Beer, label: 'Bar', border: 'border-blue-500', bg: 'bg-blue-500/20', text: 'text-blue-400' },
      { id: 'discoteca', icon: Music, label: 'Disco', border: 'border-pink-500', bg: 'bg-pink-500/20', text: 'text-pink-400' },
      { id: 'parque', icon: TreePine, label: 'Parque', border: 'border-emerald-500', bg: 'bg-emerald-500/20', text: 'text-emerald-400' }
    ];
    return (
      <div className="flex flex-wrap gap-2 w-full relative z-10">
        {envs.map(env => {
          const Icon = env.icon;
          const isActive = currentEnv === env.id;
          return (
            <button
              key={env.id}
              onClick={() => setEnv(env.id)}
              className={`flex-1 min-w-[70px] flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border-2 transition-all ${isActive ? `${env.border} ${env.bg} ${env.text} shadow-lg` : 'border-gray-600 bg-gray-700/80 text-gray-400 hover:bg-gray-600'}`}
            >
              <Icon size={24} />
              <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider text-center">{env.label}</span>
            </button>
          );
        })}
      </div>
    );
  };

  const PenaltySelector = ({ currentLevel, setLevel }) => {
    return (
      <div className="grid grid-cols-2 gap-2 w-full relative z-10">
        {PENALTY_LEVELS.map(level => (
          <button key={level.value} onClick={() => setLevel(level.value)} className={`w-full py-3 px-1 text-sm font-bold rounded-xl transition-all flex flex-col items-center justify-center gap-1 border ${currentLevel === level.value ? level.colorClass : 'bg-gray-700/80 text-gray-400 border-gray-600 hover:bg-gray-600'}`}>
            <span className="flex items-center gap-1">{level.title} {level.value === 'fallo' && currentLevel === 'fallo' && <Flame size={14} className="animate-bounce" />}</span>
            <span className={`text-[10px] font-medium ${currentLevel === level.value ? 'opacity-90' : 'opacity-60'}`}>{level.subtitle}</span>
          </button>
        ))}
      </div>
    );
  };

  const FrequencyButton = ({ config, setConfig, catKey, value, label }) => {
    const isSelected = config[catKey] === value;
    const getBgColor = () => {
      if (!isSelected) return 'bg-gray-700/80 text-gray-400 hover:bg-gray-600 border border-transparent';
      if (value === 0) return 'bg-red-900/80 text-red-200 border border-red-700 shadow-inner';
      if (value === 1) return 'bg-blue-600 text-white border border-blue-500 shadow-md';
      if (value === 2) return 'bg-purple-600 text-white border border-purple-500 shadow-md';
      if (value === 3) return 'bg-gradient-to-r from-orange-500 to-red-600 text-white border border-red-400 shadow-lg';
    };
    return (
      <button
        onClick={() => !isRandomizing && setConfig({ ...config, [catKey]: value })}
        className={`flex-1 h-8 px-1 text-[10px] sm:text-xs font-bold rounded-md transition-all flex items-center justify-center m-0 box-border ${getBgColor()}`}
      >
        {label}
      </button>
    );
  };

  const SettingsRow = ({ config, setConfig, icon, title, catKey, color }) => (
    <div className={`bg-gray-800/90 p-3 rounded-xl border flex flex-col gap-2 transition-colors relative z-10 ${isRandomizing ? 'border-indigo-500/50 bg-gray-700/90' : 'border-gray-700'}`}>
      <div className="flex items-center gap-2">
        <span className={color}>{icon}</span>
        <span className="font-bold text-gray-200 text-sm">{title}</span>
      </div>
      <div className="flex gap-1 bg-gray-900 p-1 rounded-lg h-10 box-border">
        {FREQUENCIES.map(f => <FrequencyButton key={f.value} config={config} setConfig={setConfig} catKey={catKey} value={f.value} label={f.label} />)}
      </div>
    </div>
  );

  const getEnvStyle = (env) => {
    switch (env) {
      case 'casa': return { icon: Home, color: 'text-purple-300', bg: 'bg-purple-600/30 border-purple-500/50', label: 'CASA' };
      case 'bar': return { icon: Beer, color: 'text-blue-300', bg: 'bg-blue-600/30 border-blue-500/50', label: 'BAR' };
      case 'discoteca': return { icon: Music, color: 'text-pink-300', bg: 'bg-pink-600/30 border-pink-500/50', label: 'DISCO' };
      case 'parque': return { icon: TreePine, color: 'text-emerald-300', bg: 'bg-emerald-600/30 border-emerald-500/50', label: 'PARQUE' };
      default: return { icon: Home, color: 'text-gray-300', bg: 'bg-gray-600/30 border-gray-500/50', label: '' };
    }
  };

  const CircularTable = ({ activePlayerIndex, animatePulse }) => {
    const radius = players.length > 6 ? 120 : 100; 
    return (
      <div className="relative mx-auto flex items-center justify-center my-6" style={{ width: `${radius*2 + 60}px`, height: `${radius*2 + 60}px` }}>
        <div className={`z-10 bg-gray-800 p-4 rounded-full border-4 border-gray-700 shadow-2xl flex flex-col items-center justify-center ${animatePulse ? 'animate-pulse border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]' : ''}`}>
          <Bomb size={36} className={animatePulse ? "text-red-500" : "text-gray-400"} />
        </div>
        {players.map((p, i) => {
          const angle = (i * (360 / players.length) - 90) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isActive = i === activePlayerIndex;
          
          return (
            <div 
              key={p} 
              className={`absolute flex flex-col items-center justify-center transition-all duration-500 ${isActive ? 'scale-125 z-20' : 'opacity-60 scale-90'}`} 
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
               {isActive && <div className="absolute -top-6 text-red-500 animate-bounce">↓</div>}
               <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shadow-lg ${isActive ? 'bg-red-600 border-2 border-red-400' : 'bg-gray-700 border-2 border-gray-600'}`}>
                 <Users size={18} className={isActive ? "text-white" : "text-gray-400"} />
                 {isActive && <span className="text-[8px] font-black text-white mt-0.5 uppercase tracking-widest">AQUÍ</span>}
               </div>
               <span className={`text-[10px] font-black mt-1 bg-gray-900 px-2 py-0.5 rounded shadow uppercase ${isActive ? 'text-white border border-gray-600' : 'text-gray-400'}`}>{i+1}. {p}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const LeaderboardComponent = ({ onClose }) => {
    const sortedPlayers = Object.entries(drinkCounts).sort((a, b) => b[1] - a[1]);
    return (
      <>
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700 shrink-0">
          <h3 className="text-2xl font-black text-yellow-400 flex items-center gap-3"><Trophy size={28} /> Ranking Etílico</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white bg-gray-700/50 p-2 rounded-lg transition-colors"><X size={20} /></button>
        </div>
        <div className="overflow-y-auto custom-scrollbar flex-1 pb-4">
          {sortedPlayers.length === 0 ? (
            <div className="text-center py-10">
              <Beer size={56} className="text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 italic font-medium text-lg">Aún no hay borrachos registrados.<br />¡Empezad a beber!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center items-end gap-2 sm:gap-4 h-48 border-b border-gray-700/50 pb-2 px-2">
                {sortedPlayers[1] && (
                  <div className="flex flex-col items-center justify-end w-1/3 h-full animate-expand" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
                    <p className="text-white font-bold text-xs uppercase mb-1 truncate w-full text-center">{sortedPlayers[1][0]}</p>
                    <div className="w-full bg-gradient-to-t from-gray-500 to-gray-400 h-3/5 rounded-t-xl border-t border-l border-r border-gray-300 flex flex-col justify-between py-2 shadow-lg">
                      <Medal size={24} className="text-gray-200 mx-auto drop-shadow-md" />
                      <span className="font-black text-gray-900 text-xl text-center">{sortedPlayers[1][1]}</span>
                    </div>
                  </div>
                )}
                {sortedPlayers[0] && (
                  <div className="flex flex-col items-center justify-end w-1/3 h-full animate-expand z-10" style={{ animationFillMode: 'both' }}>
                    <Crown size={32} className="text-yellow-400 mb-1 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                    <p className="text-yellow-400 font-black text-sm uppercase mb-1 truncate w-full text-center drop-shadow-md">{sortedPlayers[0][0]}</p>
                    <div className="w-full bg-gradient-to-t from-yellow-600 to-yellow-400 h-4/5 rounded-t-xl border-t border-l border-r border-yellow-200 flex flex-col justify-between py-2 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                      <span className="font-black text-yellow-900 text-3xl text-center mt-2">1</span>
                      <span className="font-black text-yellow-900 text-2xl text-center">{sortedPlayers[0][1]}</span>
                    </div>
                  </div>
                )}
                {sortedPlayers[2] && (
                  <div className="flex flex-col items-center justify-end w-1/3 h-full animate-expand" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                    <p className="text-white font-bold text-xs uppercase mb-1 truncate w-full text-center">{sortedPlayers[2][0]}</p>
                    <div className="w-full bg-gradient-to-t from-amber-700 to-amber-600 h-2/5 rounded-t-xl border-t border-l border-r border-amber-400 flex flex-col justify-between py-2 shadow-lg">
                      <Medal size={20} className="text-amber-200 mx-auto drop-shadow-md" />
                      <span className="font-black text-amber-900 text-lg text-center">{sortedPlayers[2][1]}</span>
                    </div>
                  </div>
                )}
              </div>
              {sortedPlayers.length > 3 && (
                <div className="flex flex-col gap-2">
                  {sortedPlayers.slice(3).map(([player, drinks], index) => (
                    <div key={player} className="flex justify-between items-center bg-gray-800/80 px-4 py-3 rounded-xl border border-gray-700">
                      <div className="flex items-center gap-3">
                        <span className="font-black w-6 text-center text-gray-500 text-sm">#{index + 4}</span>
                        <span className="font-bold text-gray-300 uppercase tracking-wide text-sm">{player}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-gray-900 px-3 py-1 rounded-lg border border-gray-700">
                        <span className="font-black text-gray-400">{drinks}</span>
                        <Beer size={14} className="text-gray-500" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className={`relative min-h-screen overflow-hidden font-sans ${isIansBirthday && screen !== 'setup' ? 'bg-gray-950' : 'bg-gray-900'}`}>
      <style>{`
        @keyframes expand-in { 0% { transform: scale(0.85); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes shrink-out { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(0.85); opacity: 0; } }
        @keyframes slide-down { 0% { transform: translateY(-150%); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes slide-up { 0% { transform: translateY(150%); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        .animate-expand { animation: expand-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-shrink { animation: shrink-out 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-down { animation: slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }

        @keyframes pn-intro-beer {
          0% { opacity: 0; transform: translateY(42px) rotate(-16deg) scale(.62); }
          55% { opacity: 1; transform: translateY(-8px) rotate(7deg) scale(1.12); }
          75% { transform: translateY(3px) rotate(-3deg) scale(.96); }
          100% { transform: translateY(0) rotate(0) scale(1); }
        }
        @keyframes pn-intro-title {
          0% { opacity: 0; transform: translateY(22px); letter-spacing: .38em; }
          100% { opacity: 1; transform: translateY(0); letter-spacing: -.045em; }
        }
        @keyframes pn-intro-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes pn-intro-glow {
          0%, 100% { opacity: .45; transform: scale(.92); }
          50% { opacity: .9; transform: scale(1.12); }
        }
        @keyframes pn-intro-confetti {
          0% { opacity: 0; transform: translate3d(0, 24px, 0) rotate(0deg) scale(.4); }
          18% { opacity: 1; }
          100% { opacity: 0; transform: translate3d(18px, -115vh, 0) rotate(540deg) scale(1); }
        }
        @keyframes pn-intro-ring {
          0% { opacity: 0; transform: scale(.35); }
          40% { opacity: .65; }
          100% { opacity: 0; transform: scale(1.7); }
        }
        @keyframes pn-intro-exit {
          to { opacity: 0; visibility: hidden; transform: scale(1.025); }
        }
        .party-intro {
          position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center;
          overflow: hidden; color: white; text-align: center; cursor: pointer;
          padding: max(24px, env(safe-area-inset-top)) 24px max(24px, env(safe-area-inset-bottom));
          background: radial-gradient(ellipse at 50% 42%, #4a1742 0%, #211025 38%, #090a12 78%);
          animation: pn-intro-exit .38s ease-in 2.38s forwards;
          -webkit-tap-highlight-color: transparent;
        }
        .party-intro__glow {
          position: absolute; width: min(82vw, 390px); aspect-ratio: 1; border-radius: 9999px;
          background: radial-gradient(circle, rgba(236,72,153,.35), rgba(249,115,22,.10) 46%, transparent 70%);
          filter: blur(10px); animation: pn-intro-glow 1.8s ease-in-out infinite;
        }
        .party-intro__beer {
          position: relative; z-index: 2; font-size: clamp(92px, 27vw, 142px); line-height: 1;
          filter: drop-shadow(0 16px 28px rgba(249,115,22,.28));
          animation: pn-intro-beer .82s cubic-bezier(.2,.85,.25,1.2) both;
        }
        .party-intro__ring {
          position: absolute; z-index: 1; width: 180px; height: 180px; border-radius: 9999px;
          border: 2px solid rgba(251,191,36,.7); animation: pn-intro-ring 1.3s ease-out .35s both;
        }
        .party-intro__title {
          opacity: 0; animation: pn-intro-title .62s cubic-bezier(.2,.8,.2,1) .58s forwards;
          text-shadow: 0 4px 28px rgba(236,72,153,.25);
        }
        .party-intro__confetti {
          position: absolute; z-index: 1; bottom: -24px; border-radius: 3px; opacity: 0;
          animation-name: pn-intro-confetti; animation-timing-function: linear; animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .party-intro, .party-intro * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
        }
      `}</style>

      {showIntro && (
        <div className="party-intro" role="button" tabIndex={0} aria-label="Saltar la careta de Party Night" onClick={() => setShowIntro(false)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setShowIntro(false); }}>
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index} className="party-intro__confetti" style={{
              left: `${(index * 37 + 7) % 100}%`,
              width: `${5 + (index % 4) * 2}px`,
              height: `${9 + (index % 4) * 3}px`,
              backgroundColor: ['#fbbf24', '#fb7185', '#a78bfa', '#f97316', '#f8fafc'][index % 5],
              animationDuration: `${1.7 + (index % 4) * 0.25}s`,
              animationDelay: `${(index % 7) * -0.24}s`,
            }} />
          ))}
          <div className="party-intro__glow" />
          <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
            <div className="relative mb-7 flex h-44 w-44 items-center justify-center">
              <div className="party-intro__ring" />
              <div className="party-intro__beer">🍻</div>
            </div>
            <div className="party-intro__title text-5xl sm:text-6xl font-black uppercase leading-none">
              <span className="bg-gradient-to-r from-amber-300 via-pink-400 to-red-500 bg-clip-text text-transparent">Party Night</span>
            </div>
            <p className="mt-4 text-xs font-black uppercase tracking-[.32em] text-pink-200/90 opacity-0 animate-slide-up" style={{ animationDelay: '850ms', animationFillMode: 'forwards' }}>La noche acaba de empezar</p>
            <div className="mt-12 h-1.5 w-36 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full origin-left rounded-full bg-gradient-to-r from-amber-300 via-pink-400 to-red-500" style={{ animation: 'pn-intro-progress 2.35s linear both' }} />
            </div>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[.2em] text-white/45">Toca para saltar</p>
          </div>
          <p className="absolute bottom-7 text-[9px] font-semibold uppercase tracking-widest text-white/25" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>Juega con cabeza · Bebe con responsabilidad</p>
        </div>
      )}

      {/* FONDO DE CONFETI PARA MODO REY IAN */}
      {isIansBirthday && screen !== 'setup' && <ConfettiBackground />}

      {/* POPUP DE CUMPLEAÑOS DE IAN */}
      <AnimatedModal isOpen={showIanBirthdayPrompt} onClose={() => {}} zIndex="z-[120]">
        <div className="bg-gray-800 border-4 border-yellow-500 rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(234,179,8,0.4)]">
          {!ianPromptPhase2 ? (
            <>
              <PartyPopper size={64} className="text-yellow-400 mx-auto mb-4 animate-bounce" />
              <h2 className="text-3xl font-black text-white mb-2 uppercase">¡ALTO AHÍ!</h2>
              <p className="text-gray-300 text-lg mb-6">El sistema ha detectado a un tal <span className="text-yellow-400 font-black">IAN</span> en la partida. ¿Hoy es su cumpleaños?</p>
              <div className="flex gap-3">
                <button onClick={() => setShowIanBirthdayPrompt(false)} className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold text-gray-300 transition-colors uppercase shadow-lg">Ni de coña</button>
                <button onClick={() => setIanPromptPhase2(true)} className="flex-1 py-4 bg-yellow-500 hover:bg-yellow-400 rounded-xl font-black text-gray-900 transition-colors uppercase shadow-lg shadow-yellow-500/30">Sí, lo es</button>
              </div>
            </>
          ) : (
            <div className="animate-expand">
              <Crown size={80} className="text-yellow-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]" />
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2 uppercase leading-none">FELICIDADES JUDIOOOOOOO</h2>
              <p className="text-gray-300 text-sm mb-6 mt-4">¿Quieres ser el rey de la fiesta? (literalmente)</p>
              <div className="flex flex-col gap-3">
                <button onClick={() => { setIsIansBirthday(true); setShowIanBirthdayPrompt(false); }} className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 rounded-xl font-black text-gray-900 transition-all uppercase shadow-lg shadow-orange-500/40 transform hover:scale-105">SEEEEEEEEEE</button>
                <button onClick={() => { setIsIansBirthday(false); setShowIanBirthdayPrompt(false); }} className="w-full py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-xl font-bold text-gray-400 transition-colors uppercase text-xs">NO, VIVA ISRAEL</button>
              </div>
            </div>
          )}
        </div>
      </AnimatedModal>

      {/* POPUP INFO MODO REY IAN (DESACTIVAR) */}
      <AnimatedModal isOpen={showIanModeInfo} onClose={() => setShowIanModeInfo(false)} zIndex="z-[120]">
        <div className="bg-gray-800 border-4 border-yellow-500 rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(234,179,8,0.4)]">
          <Crown size={64} className="text-yellow-400 mx-auto mb-4 drop-shadow-md" />
          <h2 className="text-2xl font-black text-white mb-2 uppercase">Modo Rey Ian</h2>
          <p className="text-gray-300 text-sm mb-6">El cumpleañero tiene el control total. Aleatoriamente en todos los juegos, Ian recibirá cajas con poderes divinos para repartir castigos, crear reglas o salvarse de beber.</p>
          <div className="flex flex-col gap-3">
            <button onClick={() => setShowIanModeInfo(false)} className="w-full py-4 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold text-white transition-colors uppercase shadow-lg">Volver al menú</button>
            <button onClick={() => { setIsIansBirthday(false); setShowIanModeInfo(false); }} className="w-full py-3 border border-red-500/50 text-red-400 hover:bg-red-900/30 rounded-xl font-bold transition-colors uppercase text-xs">Desactivar Modo Rey</button>
          </div>
        </div>
      </AnimatedModal>

      {/* POPUP DE CAJAS MISTERIOSAS DE IAN */}
      <AnimatedModal isOpen={showIanBoxes} onClose={() => {}} zIndex="z-[115]">
        <div className="bg-gray-900 border-4 border-yellow-500 rounded-3xl p-6 md:p-8 max-w-sm w-full text-center shadow-[0_0_60px_rgba(250,204,21,0.6)] relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-500/10 pointer-events-none"></div>
          
          <Crown size={48} className="text-yellow-400 mx-auto mb-2 drop-shadow-lg" />
          <h2 className="text-2xl font-black text-white mb-1 uppercase tracking-widest relative z-10">MODO DIOS: IAN</h2>
          
          {!activeIanPerk ? (
            <>
              <p className="text-gray-400 text-sm mb-6 relative z-10">Es tu turno. Elige un regalo y descubre tu poder divino.</p>
              <div className="flex gap-3 justify-center mb-4 relative z-10">
                {ianBoxOptions.map((perk, idx) => (
                  <button key={idx} onClick={() => setActiveIanPerk(perk)} className="flex-1 aspect-square bg-gray-800 hover:bg-gray-700 border-2 border-yellow-500/50 rounded-2xl flex items-center justify-center shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-yellow-500/40 group">
                    <Gift size={40} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="animate-expand relative z-10">
              <p className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-2 mt-4">Has desbloqueado:</p>
              <div className="bg-gray-800 border border-yellow-500/50 rounded-2xl p-5 mb-6 shadow-inner">
                <h3 className="text-xl font-black text-white mb-2">{activeIanPerk.title}</h3>
                <p className="text-gray-300 italic text-sm">{activeIanPerk.desc}</p>
              </div>
              <button onClick={() => setShowIanBoxes(false)} className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-black rounded-xl uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                Aplicar y Seguir
              </button>
            </div>
          )}
        </div>
      </AnimatedModal>

      {/* POPUP DE CASTIGO SUPREMO (ACUMULATIVO) */}
      <AnimatedModal isOpen={!!supremePenaltyPlayer} onClose={() => setSupremePenaltyPlayer(null)} zIndex="z-[110]">
        <div className="bg-gray-800 border-4 border-red-500 rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(239,68,68,0.6)]">
          <AlertOctagon size={72} className="text-red-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 mb-2 uppercase tracking-tight">¡Límite Alcanzado!</h2>
          <p className="text-gray-300 text-sm mb-6">Has acumulado 3 castigos (o te ha tocado beber 3 veces). Es la hora del juicio final.</p>
          
          <div className="bg-red-900/40 border border-red-500/50 rounded-xl p-6 mb-6">
            <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Víctima:</span>
            <span className="text-3xl font-black text-white uppercase break-all">{supremePenaltyPlayer}</span>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-xl border border-gray-700 mb-6">
             <span className="block text-yellow-400 font-bold text-xl uppercase tracking-wider mb-2">CASTIGO FINAL</span>
             <p className="text-white italic">"Tómate un chupito de la mezcla que decida el grupo, o bebe 5 tragos seguidos sin respirar."</p>
          </div>

          <button
            onClick={() => setSupremePenaltyPlayer(null)}
            className="w-full py-4 bg-red-600 hover:bg-red-500 rounded-xl font-black text-white transition-colors uppercase tracking-widest shadow-lg active:scale-95"
          >
            Acepto mi destino
          </button>
        </div>
      </AnimatedModal>

      {/* POPUP DE CLASIFICACIÓN DENTRO DE JUEGOS Y MENÚ */}
      <AnimatedModal isOpen={showLeaderboard} onClose={() => setShowLeaderboard(false)} zIndex="z-[90]">
        <div className="bg-gray-800 border border-yellow-500/50 rounded-3xl p-6 w-full max-w-md shadow-[0_0_30px_rgba(234,179,8,0.3)] flex flex-col max-h-[85vh]">
          <LeaderboardComponent onClose={() => setShowLeaderboard(false)} />
        </div>
      </AnimatedModal>

      {/* POPUP DE CONFIRMACIÓN SALIDA DE JUEGO */}
      <AnimatedModal isOpen={!!exitConfirm} onClose={() => setExitConfirm(null)} zIndex="z-[80]">
        <div className="bg-gray-800 border border-gray-700 rounded-3xl p-6 w-full max-w-sm text-center shadow-2xl">
          <AlertTriangle size={48} className="text-yellow-500 mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-black text-white mb-2 uppercase">¿Huyendo tan pronto?</h3>
          <p className="text-gray-400 mb-6 text-sm">
            {screen === 'game-vor' && fbiMode && fbiEvents.length > 0
              ? "¡OJO! Tienes el Modo FBI activado. Si sales ahora, todos los registros temporales y pruebas se perderán."
              : exitPhrase}
          </p>
          <div className="flex flex-col gap-3">
            <button onClick={() => setExitConfirm(null)} className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold text-white transition-colors uppercase tracking-wider">
              Volver a la partida
            </button>
            <button
              disabled={exitTimer > 0}
              onClick={confirmExit}
              className={`w-full py-3 rounded-xl font-bold uppercase tracking-wider transition-colors ${exitTimer > 0 ? 'bg-red-900/50 text-red-500/50 cursor-not-allowed border border-red-900/30' : 'bg-red-600 hover:bg-red-500 text-white border-b-4 border-red-800 active:scale-95'}`}
            >
              {exitTimer > 0 ? `Salir (${exitTimer})` : 'Confirmar Salida'}
            </button>
          </div>
        </div>
      </AnimatedModal>

      {/* MODAL GESTIÓN DE JUGADORES RÁPIDA (CON DRAG & DROP) */}
      <AnimatedModal isOpen={showPlayerManager} onClose={() => {
        if (players.length >= 2) {
          if (currentPlayerIndex >= players.length) setCurrentPlayerIndex(0);
          setShowPlayerManager(false);
        }
      }} zIndex="z-[80]">
        <div className="bg-gray-800 border border-gray-700 rounded-3xl p-6 w-full max-w-md shadow-2xl flex flex-col max-h-[85vh]">
          <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3 shrink-0">
            <h3 className="text-xl font-black text-white flex items-center gap-2"><Users size={24} /> Editar Jugadores</h3>
            <button onClick={() => { if (players.length >= 2) { if (currentPlayerIndex >= players.length) setCurrentPlayerIndex(0); setShowPlayerManager(false); } }} className="text-gray-400 hover:text-white bg-gray-700/50 p-2 rounded-lg">
              <X size={20} />
            </button>
          </div>
          <form onSubmit={addPlayer} className="mb-2 relative shrink-0">
            <input type="text" value={newPlayer} onChange={(e) => setNewPlayer(e.target.value)} placeholder="Mete a un colega..." className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none pr-12 uppercase" />
            <button type="submit" className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-500 p-1.5 rounded-lg"><Users size={20} /></button>
          </form>
          <button type="button" onClick={addDefaultPlayers} className="text-[10px] uppercase tracking-widest font-bold bg-yellow-600/20 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-600/40 px-3 py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5 w-full mb-4 shrink-0">
            <Users size={14} /> Añadir los de siempre
          </button>
          <div className="overflow-y-auto custom-scrollbar flex-1 mb-4">
            {players.length === 0 ? (
              <p className="text-gray-500 text-center italic mt-2">Añade mínimo a 2 personas.</p>
            ) : (
              <div className="flex flex-col gap-2 justify-center pb-2">
                {players.map((player, idx) => (
                  <div key={`${player}-${idx}`} draggable onDragStart={(e) => handleDragStart(e, idx)} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, idx)} className="flex items-center gap-2 bg-gray-700/60 px-3 py-2.5 rounded-xl border border-gray-600 backdrop-blur-sm shadow-sm cursor-move animate-expand">
                    <GripHorizontal size={18} className="text-gray-500 shrink-0" />
                    <span className="font-black text-gray-500 w-4 text-right">{idx + 1}.</span>
                    <span className="font-bold text-sm text-yellow-400 uppercase tracking-wide drop-shadow-md select-none flex-1 truncate">{player}</span>
                    <div className="flex items-center gap-0.5 shrink-0">
                      <button type="button" disabled={idx === 0} aria-label={`Mou ${player} amunt`} onClick={() => movePlayer(idx, -1)} className="rounded-lg p-1 text-gray-300 disabled:opacity-25"><ChevronUp size={18} /></button>
                      <button type="button" disabled={idx === players.length - 1} aria-label={`Mou ${player} avall`} onClick={() => movePlayer(idx, 1)} className="rounded-lg p-1 text-gray-300 disabled:opacity-25"><ChevronDown size={18} /></button>
                      <button type="button" disabled={players.length <= 2} aria-label={`Elimina ${player}`} onClick={() => removePlayer(player, 2)} className="text-red-400 hover:text-red-300 p-1 rounded-full hover:bg-gray-600 transition-colors disabled:opacity-25 shrink-0"><X size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {players.length > 0 && <p className="text-center text-[10px] text-gray-500 italic mt-3">Usa las flechas para cambiar el orden. En partida, conserva mínimo 2 jugadores.</p>}
          </div>
          <button disabled={players.length < 2} onClick={() => { if (currentPlayerIndex >= players.length) setCurrentPlayerIndex(0); setShowPlayerManager(false); }} className={`w-full py-4 rounded-xl font-black text-lg transition-all shrink-0 ${players.length >= 2 ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg active:scale-95' : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}>Guardar y Volver</button>
        </div>
      </AnimatedModal>

      {/* MODAL CONFIGURACIÓN MESA (LA BOMBA) */}
      <AnimatedModal isOpen={showBombaTableConfig} onClose={() => setShowBombaTableConfig(false)} zIndex="z-[85]">
        <div className="bg-gray-800 border border-gray-700 rounded-3xl p-6 w-full max-w-md shadow-2xl flex flex-col max-h-[85vh]">
          <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3 shrink-0">
            <h3 className="text-xl font-black text-white flex items-center gap-2"><Settings size={24} /> Configurar Mesa</h3>
            <button onClick={() => setShowBombaTableConfig(false)} className="text-gray-400 hover:text-white bg-gray-700/50 p-2 rounded-lg"><X size={20} /></button>
          </div>
          <div className="overflow-y-auto custom-scrollbar flex-1 pb-2">
             <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">Vista Previa de la Mesa</p>
             <CircularTable activePlayerIndex={null} animatePulse={false} />
             <div className="mt-6 border-t border-gray-700 pt-4">
               <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3">Orden de Jugadores (Arrastrar)</p>
               <div className="flex flex-col gap-2">
                  {players.map((player, idx) => (
                    <div key={`mesa-${player}-${idx}`} draggable onDragStart={(e) => handleDragStart(e, idx)} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, idx)} className="flex items-center gap-3 bg-gray-700/60 px-4 py-2.5 rounded-xl border border-gray-600 backdrop-blur-sm shadow-sm cursor-move transition-transform hover:scale-[1.02]">
                      <GripHorizontal size={18} className="text-gray-500 shrink-0" />
                      <span className="font-black text-gray-500 w-4 text-right">{idx + 1}.</span>
                      <span className="font-bold text-sm text-yellow-400 uppercase tracking-wide drop-shadow-md select-none flex-1 truncate">{player}</span>
                    </div>
                  ))}
               </div>
             </div>
          </div>
          <button onClick={() => setShowBombaTableConfig(false)} className="w-full mt-4 py-4 rounded-xl font-black text-lg transition-all shrink-0 bg-blue-600 hover:bg-blue-500 text-white shadow-lg active:scale-95">Listo</button>
        </div>
      </AnimatedModal>

      {/* EASTER EGG POPUP */}
      <AnimatedModal isOpen={!!easterEgg} onClose={() => setEasterEgg(null)} zIndex="z-[60]">
        <div className="bg-gray-800 border-2 border-red-500 rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_30px_rgba(239,68,68,0.5)]">
          <Skull size={64} className="text-red-500 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-black text-white mb-2 uppercase">¡Hacker Pillado!</h2>
          <div className="my-6 text-white">{easterEgg && <RenderFormattedText text={easterEgg.phrase} isVor={true} />}</div>
          <div className="bg-red-900/50 rounded-xl p-4 mb-6 border border-red-500/50">
            <span className="text-6xl font-black text-red-400">{easterEgg?.shots}</span>
            <span className="block text-red-300 mt-1 uppercase font-bold tracking-widest">Trago{easterEgg?.shots > 1 ? 's' : ''}</span>
          </div>
          <button onClick={() => setEasterEgg(null)} className="w-full py-4 bg-red-600 hover:bg-red-500 rounded-xl font-black text-white transition-colors uppercase tracking-widest shadow-lg active:scale-95">Volver a los ajustes</button>
        </div>
      </AnimatedModal>

      {/* ALERTAS EXPIRADAS MODO FBI */}
      <AnimatedModal isOpen={fbiAlerts.length > 0} onClose={() => {}} zIndex="z-[75]">
        {fbiAlerts.length > 0 && (
          <div className="bg-gray-800 border-2 border-purple-500 rounded-3xl p-6 w-full max-w-sm text-center shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            <BellRing size={56} className="text-purple-500 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl font-black text-white mb-2 uppercase">¡Atención!</h2>
            <p className="text-gray-300 mb-6">El tiempo o los turnos se han agotado para este reto.</p>
            <div className="bg-purple-900/40 border border-purple-500/50 rounded-xl p-4 mb-6 text-left">
              <p className="text-yellow-400 font-black text-lg uppercase tracking-wider mb-1">{fbiAlerts[0]?.player}</p>
              <p className="text-gray-300 italic text-sm">"{fbiAlerts[0]?.phrase.replace(/\|\|\|/g, '')}"</p>
            </div>
            <button onClick={() => setFbiAlerts(prev => prev.slice(1))} className="w-full py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-black text-white transition-colors uppercase tracking-widest shadow-lg active:scale-95">Entendido</button>
          </div>
        )}
      </AnimatedModal>

      {/* POPUP DE MODO FBI */}
      <AnimatedModal isOpen={showFbiPopup} onClose={() => setShowFbiPopup(false)} zIndex="z-[70]">
        <div className="bg-gray-800 border border-purple-500/50 rounded-3xl p-6 w-full max-w-md shadow-2xl flex flex-col max-h-[80vh]">
          <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3">
            <h3 className="text-xl font-black text-purple-400 flex items-center gap-2"><Cctv size={24} /> FBI: Retos Activos</h3>
            <button onClick={() => setShowFbiPopup(false)} className="text-gray-400 hover:text-white bg-gray-700/50 p-2 rounded-lg"><X size={20} /></button>
          </div>
          <div className="overflow-y-auto custom-scrollbar flex-1 space-y-3 pr-2">
            {fbiEvents.length === 0 ? (
              <div className="text-center py-8">
                <Cctv size={48} className="text-gray-600 mx-auto mb-3" />
                <p className="text-gray-500 italic font-medium">Cámaras vacías.<br />No hay retos activos ahora mismo.</p>
              </div>
            ) : (
              fbiEvents.map(ev => (
                <div key={ev.id} className="bg-gray-700/50 p-4 rounded-xl border border-gray-600 relative flex flex-col gap-2 shadow-inner">
                  <div className="flex justify-between items-center border-b border-gray-600/50 pb-1">
                    <p className="text-yellow-400 font-black text-sm uppercase tracking-wider">{ev.player}</p>
                    {ev.type === 'time' && <span className="text-xs font-bold text-red-400 bg-red-900/30 px-2 py-0.5 rounded border border-red-500/30 flex items-center gap-1"><Clock size={12} /> {Math.floor(ev.remaining / 60)}:{(ev.remaining % 60).toString().padStart(2, '0')}</span>}
                    {ev.type === 'round' && <span className="text-xs font-bold text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded border border-blue-500/30 flex items-center gap-1"><Zap size={12} /> {ev.remaining} turnos</span>}
                    {ev.type === 'manual' && <span className="text-xs font-bold text-gray-400 bg-gray-800 px-2 py-0.5 rounded border border-gray-600">Manual</span>}
                  </div>
                  <p className="text-gray-300 text-sm italic">"{ev.phrase.replace(/\|\|\|/g, '')}"</p>
                  <button onClick={() => setFbiEvents(fbiEvents.filter(e => e.id !== ev.id))} className="w-full mt-2 bg-red-600/20 text-red-400 hover:bg-red-600/40 border border-red-500/30 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors">Finalizar / Eliminar</button>
                </div>
              ))
            )}
          </div>
        </div>
      </AnimatedModal>

      {/* MODAL DE NOTAS DEL PARCHE */}
      <AnimatedModal isOpen={isChangelogOpen} onClose={() => setIsChangelogOpen(false)} zIndex="z-[50]">
        <div className="bg-gray-800 p-6 rounded-3xl shadow-2xl border border-gray-700 w-full max-w-lg relative flex flex-col max-h-[85vh] z-10">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-700 shrink-0">
            <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center gap-2">
              <History size={24} className="text-emerald-400" /> Historial de Cambios
            </h2>
            <button onClick={() => setIsChangelogOpen(false)} className="text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-600 p-2 rounded-lg transition-colors"><X size={20} /></button>
          </div>
          <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar flex-1 pb-4">
            <div className="relative pl-4 border-l-2 border-emerald-500">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-gray-800"></div>
              <h3 className="text-lg font-black text-white mb-1">v1.68.0 (First Round Edition)</h3>
              <p className="text-sm text-gray-400">
                - <b>Careta animada:</b> nova entrada Party Night amb brindis, confeti i opció de saltar-la.<br/>
                - <b>Veritat o Repte:</b> corregida la selecció de reptes, que podia quedar sense cap frase disponible.<br/>
                - <b>Yo Nunca:</b> millor control de frases repetides quan inclouen noms aleatoris.<br/>
                - <b>Jugadors:</b> reordenació amb controls tàctils i neteja de puntuacions/registres en eliminar algú.<br/>
                - <b>FBI:</b> registre d'esdeveniments més robust quan s'afegeixen diversos controls seguits.
              </p>
            </div>
            <div className="relative pl-4 border-l-2 border-orange-500">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-gray-800"></div>
              <h3 className="text-lg font-black text-white mb-1">v1.67.1 (The Six Seven Edition)</h3>
              <p className="text-sm text-gray-400 space-y-1">
                - <b>Modo Dios Mejorado:</b> La interfaz del Modo Ian ahora tiene confeti real en todos los juegos, es oscuro para leerse perfectamente.<br/>
                - <b>Invasión del Rey:</b> El modo Dios salta ahora en Yo Nunca, La Bomba, Duelo y Encuestas de forma automatizada por rondas.<br/>
                - <b>Perks Pulidos:</b> Castigos y reglas de las cajas adaptados para ser rápidos, factibles y letales.<br/>
                - <b>UI Reordenada:</b> Menús de selección más cómodos, indicador del Rey arriba y mejor posicionado de la Clasificación.
              </p>
            </div>
            <div className="relative pl-4 border-l-2 border-orange-500">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-gray-800"></div>
              <h3 className="text-md font-bold text-gray-300 mb-1">v1.61 (Sin IA / Optimizado)</h3>
              <p className="text-xs text-gray-400 space-y-1">- Fix de Rendimiento Móvil: Funciones de IA eliminadas.</p>
            </div>
          </div>
        </div>
      </AnimatedModal>

      {/* --- PANTALLA INICIAL (NOMBRES) --- */}
      {screen === 'setup' && (
        <div className={`min-h-screen text-white p-6 flex flex-col items-center justify-center relative z-10 ${closingScreen ? 'animate-shrink' : 'animate-expand'}`}>
          <div className="max-w-md w-full bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden">
            <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-pink-600/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="text-center mb-8 relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 tracking-tighter pb-1 leading-tight drop-shadow-sm flex flex-col items-center">
                Party Night
              </h1>
              <div className="mt-3">
                <span className="text-[10px] md:text-xs text-white font-black tracking-widest bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1.5 rounded-md border border-pink-500 shadow-md uppercase flex items-center justify-center gap-1.5">
                  v1.68.0 • FIRST ROUND EDITION <Sparkles size={12} className="text-yellow-300" />
                </span>
              </div>
              <p className="text-gray-400 mt-4 font-medium italic text-sm md:text-base">para estudiantes con pretensiones alcohólicas</p>
            </div>
            <form onSubmit={addPlayer} className="mb-3 relative z-10">
              <input type="text" value={newPlayer} onChange={(e) => setNewPlayer(e.target.value)} placeholder="Mete a un colega..." className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12 backdrop-blur-sm uppercase" />
              <button type="submit" className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-500 p-1.5 rounded-lg transition-colors shadow-lg"><Users size={20} /></button>
            </form>
            <button type="button" onClick={addDefaultPlayers} className="text-[10px] uppercase tracking-widest font-bold bg-yellow-600/20 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-600/40 px-3 py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5 w-full mb-5 z-10 relative">
              <Users size={14} /> Añadir los de siempre
            </button>
            <div className="mb-6 min-h-[100px] max-h-[200px] overflow-y-auto pr-1 z-10 relative custom-scrollbar">
              {players.length === 0 ? (
                <p className="text-gray-500 text-center italic mt-6 text-sm">Añade mínimo a 2 personas (que no muerden).<br />Máximo una familia completa.</p>
              ) : (
                <div className="flex flex-wrap gap-2 justify-center pb-2">
                  {players.map((player, idx) => (
                    <div key={`${player}-${idx}`} draggable onDragStart={(e) => handleDragStart(e, idx)} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, idx)} className="flex items-center gap-1 bg-gray-700/60 px-2.5 py-1.5 rounded-full border border-gray-600 backdrop-blur-sm shadow-sm animate-expand">
                      <GripHorizontal size={13} className="text-gray-500" />
                      <span className="font-bold text-sm text-yellow-400 uppercase tracking-wide drop-shadow-md select-none">{idx + 1}. {player}</span>
                      <button type="button" disabled={idx === 0} aria-label={`Mou ${player} amunt`} onClick={() => movePlayer(idx, -1)} className="text-gray-300 p-0.5 rounded-full disabled:opacity-25"><ChevronUp size={14} /></button>
                      <button type="button" disabled={idx === players.length - 1} aria-label={`Mou ${player} avall`} onClick={() => movePlayer(idx, 1)} className="text-gray-300 p-0.5 rounded-full disabled:opacity-25"><ChevronDown size={14} /></button>
                      <button type="button" aria-label={`Elimina ${player}`} onClick={() => removePlayer(player)} className="text-red-400 hover:text-red-300 p-0.5 rounded-full hover:bg-gray-600 transition-colors"><X size={14} /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button disabled={players.length < 2} onClick={() => handleNavigate('mode-select')} className={`w-full py-4 mb-4 rounded-xl font-black text-xl flex items-center justify-center gap-3 transition-all z-10 relative ${players.length >= 2 ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-xl shadow-purple-500/40 active:scale-95 text-white' : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}>
              ¡Al lío! <ArrowRight size={22} />
            </button>
            <div className="flex justify-between items-center w-full z-20 relative mt-2">
              <button onClick={() => setIsChangelogOpen(true)} className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm uppercase tracking-widest font-bold bg-emerald-900/30 px-3 py-2 rounded-lg border border-emerald-500/30 transition-colors">
                <History size={16} /> NOVEDADES
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MENÚ DE SELECCIÓN DE JUEGO --- */}
      {screen === 'mode-select' && (
        <div className={`min-h-screen text-white p-4 sm:p-6 flex flex-col items-center justify-center relative z-10 ${closingScreen ? 'animate-shrink' : 'animate-expand'}`}>
          <div className="max-w-md w-full relative z-10">

            {/* AJUSTES GLOBALES PERSISTENTES (Castigo Acumulativo) */}
            <div className={`bg-gray-800/90 border-2 border-red-500/30 rounded-2xl p-4 mb-6 shadow-lg transition-all ${activeSettings ? 'max-h-0 opacity-0 overflow-hidden m-0 p-0 border-0' : ''}`}>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="bg-red-900/40 p-2 rounded-xl"><AlertOctagon size={20} className="text-red-400" /></div>
                     <div className="flex flex-col">
                        <span className="font-bold text-red-100 text-sm uppercase tracking-wider">Castigos Acumulativos</span>
                        <span className="text-[10px] text-gray-400">Pringar 3 veces = Castigo final</span>
                     </div>
                  </div>
                  <button onClick={() => setEnableAccumulativePenalty(!enableAccumulativePenalty)} className={`w-12 h-6 rounded-full transition-colors relative border shrink-0 ${enableAccumulativePenalty ? 'bg-red-600 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]' : 'bg-gray-700 border-gray-600'}`}>
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-[3px] transition-transform ${enableAccumulativePenalty ? 'translate-x-7' : 'translate-x-1'}`} />
                  </button>
               </div>
            </div>

            {/* Header Jugadores + Botones Clasificación/Modificar */}
            <div className={`transition-all duration-300 overflow-hidden ${activeSettings ? 'max-h-0 opacity-0 scale-95 mb-0' : 'max-h-[300px] opacity-100 scale-100 mb-6'}`}>
              <div className="bg-gray-800/90 p-5 rounded-2xl border border-gray-700 text-center shadow-lg relative flex flex-col items-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Las víctimas de hoy:</h2>
                <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                  {players.map((p, i) => (
                    <span key={i} className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 uppercase">{i+1}. {p}{i < players.length - 1 ? ',' : ''}</span>
                  ))}
                </div>
                
                {/* BOTONES REORDENADOS AQUÍ */}
                <div className="flex gap-2 w-full justify-center">
                   {Object.keys(drinkCounts).length > 0 && (
                      <button onClick={() => setShowLeaderboard(true)} className="flex-1 text-yellow-400 hover:text-yellow-300 text-[10px] md:text-xs uppercase tracking-widest font-bold bg-gray-700/50 hover:bg-gray-600 px-3 py-2.5 rounded-xl border border-gray-600 transition-colors flex items-center justify-center gap-1.5 shadow-inner active:scale-95">
                        <Trophy size={16} className="shrink-0" /> <span className="truncate">Ranking</span>
                      </button>
                   )}
                   <button onClick={() => setShowPlayerManager(true)} className="flex-1 text-gray-400 hover:text-white text-[10px] md:text-xs uppercase tracking-widest font-bold bg-gray-700/50 hover:bg-gray-600 px-3 py-2.5 rounded-xl border border-gray-600 transition-colors flex items-center justify-center gap-1.5 shadow-inner active:scale-95">
                     <Users size={16} className="shrink-0" /> <span className="truncate">Modificar</span>
                   </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/90 p-4 sm:p-6 rounded-2xl border border-gray-700 shadow-xl transition-all duration-500">
              <div className={`transition-all duration-300 overflow-hidden ${activeSettings ? 'max-h-0 opacity-0 mb-0' : 'opacity-100 mb-5'}`}>
                
                {/* BOTON MODO REY IAN ENCIMA DEL TITULO */}
                {isIansBirthday && (
                   <div className="flex justify-center mb-4">
                      <button onClick={() => setShowIanModeInfo(true)} className="animate-pulse flex items-center justify-center gap-2 bg-yellow-900/40 text-yellow-400 px-5 py-2.5 rounded-xl border-2 border-yellow-500/50 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:scale-105 transition-transform w-full">
                        <Crown size={20} /> <span className="font-black text-sm tracking-widest uppercase">Modo Rey Ian Activo</span>
                      </button>
                   </div>
                )}
                
                <h2 className="text-xl font-bold text-center text-gray-300 uppercase tracking-wider">¿A qué le damos?</h2>
              </div>

              {/* OPCIÓN YO NUNCA */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden origin-top ${activeSettings && activeSettings !== 'yn' ? 'max-h-0 opacity-0 scale-95 mb-0' : 'max-h-[1200px] opacity-100 scale-100 mb-4'}`}>
                <button onClick={() => setActiveSettings(activeSettings === 'yn' ? null : 'yn')} className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl border shadow-lg transition-all group active:scale-95 ${activeSettings === 'yn' ? 'bg-indigo-600 border-indigo-400' : 'bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 border-indigo-500/30'}`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-xl"><Beer size={28} className="text-white" /></div>
                    <span className="text-2xl font-black tracking-tight text-white">Yo Nunca</span>
                  </div>
                  {activeSettings === 'yn' ? <div className="flex items-center gap-1.5 text-indigo-100 font-bold bg-indigo-900/30 px-3 py-1.5 rounded-lg border border-indigo-500/30"><ChevronLeft size={18} /> Volver</div> : <Settings2 size={24} className="group-hover:rotate-90 transition-transform opacity-70 text-white" />}
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeSettings === 'yn' ? 'max-h-[70vh] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                  <div className="bg-gray-800/50 border border-indigo-500/30 rounded-2xl p-4 sm:p-5 shadow-inner overflow-y-auto custom-scrollbar max-h-[70vh] flex flex-col gap-4 relative">
                    <div className="flex justify-between items-center shrink-0">
                      <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Filtro de Frases</p>
                      <button onClick={handleRandomizeYN} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all ${isRandomizing ? 'bg-indigo-600 text-white border-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.5)] animate-pulse' : 'bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-gray-600 hover:text-white'}`}>
                        <Dices size={16} className={isRandomizing ? 'animate-spin' : ''} /> Aleatorio
                      </button>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => setAllYNCategories(1)} className="flex-1 py-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/40 rounded-xl text-[10px] font-bold uppercase transition-colors">Bajo</button>
                      <button onClick={() => setAllYNCategories(2)} className="flex-1 py-2 bg-purple-600/20 text-purple-400 border border-purple-500/30 hover:bg-purple-600/40 rounded-xl text-[10px] font-bold uppercase transition-colors">Medio</button>
                      <button onClick={() => setAllYNCategories(3)} className="flex-1 py-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 text-red-400 border border-red-500/30 hover:from-orange-500/40 hover:to-red-600/40 rounded-xl text-[10px] font-bold uppercase transition-all">¡A TOPE!</button>
                    </div>
                    <div className="space-y-3 shrink-0 relative z-10">
                      <SettingsRow config={ynConfig} setConfig={setYnConfig} catKey="familiar" icon={<FamilyIcon size={18} />} title="Vida Familiar" color="text-yellow-400" />
                      <SettingsRow config={ynConfig} setConfig={setYnConfig} catKey="estudiantil" icon={<Sparkles size={18} />} title="Estudiantil / BCN" color="text-blue-400" />
                      <SettingsRow config={ynConfig} setConfig={setYnConfig} catKey="personales" icon={<Ghost size={18} />} title="Traumas Personales" color="text-purple-400" />
                      <SettingsRow config={ynConfig} setConfig={setYnConfig} catKey="traumas" icon={<Skull size={18} />} title="Traumas del Pasado" color="text-red-400" />
                      <SettingsRow config={ynConfig} setConfig={setYnConfig} catKey="trabajo" icon={<Briefcase size={18} />} title="Curro / Jefes" color="text-gray-300" />
                      <SettingsRow config={ynConfig} setConfig={setYnConfig} catKey="salseo" icon={<Heart size={18} />} title="Salseo y Redes" color="text-pink-400" />
                      <SettingsRow config={ynConfig} setConfig={setYnConfig} catKey="picante" icon={<Flame size={18} />} title="Picante (+18)" color="text-red-500" />
                      <SettingsRow config={ynConfig} setConfig={setYnConfig} catKey="asco" icon={<AlertTriangle size={18} />} title="Asquerosidades" color="text-green-500" />
                      <SettingsRow config={ynConfig} setConfig={setYnConfig} catKey="delitos" icon={<Bomb size={18} />} title="Delitos Menores" color="text-orange-500" />
                      <SettingsRow config={ynConfig} setConfig={setYnConfig} catKey="cachondeo" icon={<Laugh size={18} />} title="Cachondeo / Humor Negro" color="text-indigo-400" />
                    </div>
                    <button onClick={startGameYONunca} className="w-full mt-2 py-4 rounded-xl font-black text-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-purple-500/30 active:scale-95 transition-all flex justify-center items-center gap-3 text-white shrink-0 relative z-10">
                      ¡A jugar! <Play fill="currentColor" size={22} />
                    </button>
                  </div>
                </div>
              </div>

              {/* OPCIÓN VERDAD O RETO */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden origin-top ${activeSettings && activeSettings !== 'vor' ? 'max-h-0 opacity-0 scale-95 mb-0' : 'max-h-[1200px] opacity-100 scale-100 mb-4'}`}>
                <button onClick={() => setActiveSettings(activeSettings === 'vor' ? null : 'vor')} className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl border shadow-lg transition-all group active:scale-95 ${activeSettings === 'vor' ? 'bg-orange-600 border-orange-400' : 'bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-500 hover:to-red-600 border-orange-500/30'}`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-xl"><Flame size={28} className="text-white" /></div>
                    <span className="text-2xl font-black tracking-tight text-white">Verdad o Reto</span>
                  </div>
                  {activeSettings === 'vor' ? <div className="flex items-center gap-1.5 text-orange-100 font-bold bg-orange-900/30 px-3 py-1.5 rounded-lg border border-orange-500/30"><ChevronLeft size={18} /> Volver</div> : <Settings2 size={24} className="group-hover:rotate-90 transition-transform opacity-70 text-white" />}
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeSettings === 'vor' ? 'max-h-[70vh] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                  <div className="bg-gray-800/50 border border-orange-500/30 rounded-2xl p-4 sm:p-5 shadow-inner overflow-y-auto custom-scrollbar max-h-[70vh] flex flex-col gap-5 relative">
                    <div className="shrink-0">
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">¿Dónde nos destruimos?</p>
                      <EnvironmentSelector currentEnv={environment} setEnv={setEnvironment} />
                    </div>
                    <div className="bg-gray-800/90 p-4 rounded-xl border border-gray-700 flex flex-col gap-2 shrink-0 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Cctv className="text-purple-400" size={20} />
                          <span className="font-bold text-gray-200">Modo FBI <span className="text-[10px] font-black tracking-widest bg-purple-600/30 border border-purple-500/50 text-purple-300 px-1.5 py-0.5 rounded ml-1">BETA</span></span>
                        </div>
                        <button onClick={() => setFbiMode(!fbiMode)} className={`w-12 h-6 rounded-full transition-colors relative border ${fbiMode ? 'bg-purple-600 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]' : 'bg-gray-700 border-gray-600'}`}>
                          <div className={`w-4 h-4 bg-white rounded-full absolute top-[3px] transition-transform ${fbiMode ? 'translate-x-7' : 'translate-x-1'}`} />
                        </button>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">Castigo si te rajas</p>
                      <PenaltySelector currentLevel={penaltyIntensity} setLevel={setPenaltyIntensity} />
                    </div>
                    <div className="shrink-0">
                      <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 text-center border-b border-gray-700 pb-1 mx-8">Potencia Verdades</p>
                      <div className="space-y-3 relative z-10">
                        <SettingsRow config={vorTruthConfig} setConfig={setVorTruthConfig} catKey="normal" icon={<MessageSquare size={16} />} title="Vida Estudiantil" color="text-blue-300" />
                        <SettingsRow config={vorTruthConfig} setConfig={setVorTruthConfig} catKey="salseo" icon={<Heart size={16} />} title="Salseos / Crushes" color="text-pink-400" />
                        <SettingsRow config={vorTruthConfig} setConfig={setVorTruthConfig} catKey="picante" icon={<Flame size={16} />} title="Incómodo / Picante" color="text-red-500" />
                        <SettingsRow config={vorTruthConfig} setConfig={setVorTruthConfig} catKey="oscuro" icon={<Skull size={16} />} title="Mentiras / Secretos" color="text-purple-500" />
                      </div>
                    </div>
                    <div className="shrink-0 relative z-10">
                      <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2 text-center border-b border-gray-700 pb-1 mx-8">Potencia Retos</p>
                      <div className="space-y-3">
                        <SettingsRow config={vorDareConfig} setConfig={setVorDareConfig} catKey="chill" icon={<Sparkles size={16} />} title="Tranqui / Físico" color="text-green-400" />
                        <SettingsRow config={vorDareConfig} setConfig={setVorDareConfig} catKey="ridiculo" icon={<Ghost size={16} />} title="Dar el Cante" color="text-yellow-400" />
                        <SettingsRow config={vorDareConfig} setConfig={setVorDareConfig} catKey="picante" icon={<Flame size={16} />} title="Contacto Físico" color="text-red-500" />
                        <SettingsRow config={vorDareConfig} setConfig={setVorDareConfig} catKey="movil" icon={<Smartphone size={16} />} title="Peligro Digital" color="text-blue-500" />
                      </div>
                    </div>
                    <button onClick={startGameVOR} className="w-full py-4 mt-2 rounded-xl font-black text-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-600 shadow-lg shadow-red-500/30 active:scale-95 transition-all flex justify-center items-center gap-3 text-white shrink-0 relative z-10">
                      ¡A sufrir! <Flame fill="currentColor" size={22} />
                    </button>
                  </div>
                </div>
              </div>

              {/* OPCIÓN LA BOMBA */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden origin-top ${activeSettings && activeSettings !== 'bomba' ? 'max-h-0 opacity-0 scale-95 mb-0' : 'max-h-[1200px] opacity-100 scale-100 mb-4'}`}>
                <button onClick={() => setActiveSettings(activeSettings === 'bomba' ? null : 'bomba')} className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl border shadow-lg transition-all group active:scale-95 ${activeSettings === 'bomba' ? 'bg-red-600 border-red-400' : 'bg-gradient-to-r from-red-600 to-rose-800 hover:from-red-500 hover:to-rose-700 border-red-500/30'}`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-xl"><Bomb size={28} className="text-white" /></div>
                    <span className="text-2xl font-black tracking-tight text-white">La Bomba</span>
                  </div>
                  {activeSettings === 'bomba' ? <div className="flex items-center gap-1.5 text-red-100 font-bold bg-red-900/30 px-3 py-1.5 rounded-lg border border-red-500/30"><ChevronLeft size={18} /> Volver</div> : <Settings2 size={24} className="group-hover:rotate-90 transition-transform opacity-70 text-white" />}
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeSettings === 'bomba' ? 'max-h-[70vh] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                  <div className="bg-gray-800/50 border border-red-500/30 rounded-2xl p-4 sm:p-5 shadow-inner overflow-y-auto custom-scrollbar max-h-[70vh] flex flex-col gap-5 relative">
                    <p className="text-sm text-gray-400 italic text-center shrink-0">Id diciendo por turnos palabras de la temática. A quien le explote, pringa.</p>
                    <div className="bg-gray-800/90 p-4 rounded-xl border border-gray-700 flex flex-col gap-4 shrink-0 relative z-10">
                      <p className="text-red-400 text-xs font-bold uppercase tracking-widest text-center">Tiempo Explosión</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 flex flex-col items-center">
                          <span className="text-[10px] text-gray-500 uppercase font-bold mb-1">Mínimo (s)</span>
                          <input type="number" min="5" max="100" value={bombaConfig.minTime} onChange={(e) => { const parsed = Number.parseInt(e.target.value, 10); const value = Number.isFinite(parsed) ? Math.min(100, Math.max(5, parsed)) : 5; setBombaConfig(prev => ({ ...prev, minTime: Math.min(value, prev.maxTime) })); }} className="w-full bg-gray-900 border border-gray-600 rounded-lg text-center py-2 font-black text-lg text-white" />
                        </div>
                        <span className="text-gray-500 font-bold mt-4">-</span>
                        <div className="flex-1 flex flex-col items-center">
                          <span className="text-[10px] text-gray-500 uppercase font-bold mb-1">Máximo (s)</span>
                          <input type="number" min="10" max="120" value={bombaConfig.maxTime} onChange={(e) => { const parsed = Number.parseInt(e.target.value, 10); const value = Number.isFinite(parsed) ? Math.min(120, Math.max(10, parsed)) : 10; setBombaConfig(prev => ({ ...prev, maxTime: Math.max(value, prev.minTime) })); }} className="w-full bg-gray-900 border border-gray-600 rounded-lg text-center py-2 font-black text-lg text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800/90 p-4 rounded-xl border border-gray-700 flex flex-col gap-4 shrink-0 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Timer className="text-yellow-400" size={20} />
                          <span className="font-bold text-gray-200">Reloj Visual</span>
                        </div>
                        <button onClick={() => setBombaConfig({ ...bombaConfig, showTimer: !bombaConfig.showTimer })} className={`w-12 h-6 rounded-full transition-colors relative border ${bombaConfig.showTimer ? 'bg-yellow-600 border-yellow-500' : 'bg-gray-700 border-gray-600'}`}>
                          <div className={`w-4 h-4 bg-white rounded-full absolute top-[3px] transition-transform ${bombaConfig.showTimer ? 'translate-x-7' : 'translate-x-1'}`} />
                        </button>
                      </div>
                      <div className="border-t border-gray-700 pt-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="font-bold text-gray-200 flex items-center gap-2"><Users className="text-blue-400" size={18} /> Mostrar Mesa</span>
                            <span className="text-[10px] text-gray-400">Ver círculo de jugadores interactivo.</span>
                          </div>
                          <button onClick={() => setBombaConfig({ ...bombaConfig, showTable: !bombaConfig.showTable })} className={`w-12 h-6 rounded-full transition-colors relative border shrink-0 ${bombaConfig.showTable ? 'bg-blue-600 border-blue-500' : 'bg-gray-700 border-gray-600'}`}>
                            <div className={`w-4 h-4 bg-white rounded-full absolute top-[3px] transition-transform ${bombaConfig.showTable ? 'translate-x-7' : 'translate-x-1'}`} />
                          </button>
                        </div>
                        {bombaConfig.showTable && (
                           <button onClick={() => setShowBombaTableConfig(true)} className="w-full py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-xl text-sm font-bold text-blue-300 transition-colors shadow-inner flex justify-center items-center gap-2 active:scale-95">
                             <Settings size={16} /> Configurar Mesa / Orden
                           </button>
                        )}
                      </div>
                    </div>
                    <div className="shrink-0 relative z-10">
                      <p className="text-orange-400 text-xs font-bold uppercase tracking-widest text-center mb-3">Castigo por Explotar</p>
                      <PenaltySelector currentLevel={bombaConfig.penaltyLevel} setLevel={(val) => setBombaConfig({...bombaConfig, penaltyLevel: val})} />
                    </div>
                    <button onClick={startGameBomba} className="w-full py-4 mt-2 rounded-xl font-black text-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 shadow-lg shadow-red-500/30 active:scale-95 transition-all flex justify-center items-center gap-3 text-white shrink-0 relative z-10">
                      ¡Encender mecha! <Bomb size={22} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* OPCIÓN DUELO 1V1 */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden origin-top ${activeSettings && activeSettings !== 'duelo' ? 'max-h-0 opacity-0 scale-95 mb-0' : 'max-h-[1200px] opacity-100 scale-100 mb-4'}`}>
                <button onClick={() => setActiveSettings(activeSettings === 'duelo' ? null : 'duelo')} className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl border shadow-lg transition-all group active:scale-95 ${activeSettings === 'duelo' ? 'bg-teal-600 border-teal-400' : 'bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-500 hover:to-emerald-600 border-teal-500/30'}`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-xl"><Swords size={28} className="text-white" /></div>
                    <div className="flex flex-col items-start">
                      <span className="text-2xl font-black tracking-tight text-white leading-none">Duelo 1v1</span>
                    </div>
                  </div>
                  {activeSettings === 'duelo' ? <div className="flex items-center gap-1.5 text-teal-100 font-bold bg-teal-900/30 px-3 py-1.5 rounded-lg border border-teal-500/30"><ChevronLeft size={18} /> Volver</div> : <Settings2 size={24} className="group-hover:rotate-90 transition-transform opacity-70 text-white" />}
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeSettings === 'duelo' ? 'max-h-[70vh] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                  <div className="bg-gray-800/50 border border-teal-500/30 rounded-2xl p-4 sm:p-5 shadow-inner overflow-y-auto custom-scrollbar max-h-[70vh] flex flex-col gap-5 relative">
                    <p className="text-sm text-gray-400 italic text-center shrink-0">Dos personas elegidas al azar se enfrentan en un mini-reto. Quien pierda, bebe.</p>
                    <div className="shrink-0 relative z-10">
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">¿Dónde nos enfrentamos?</p>
                      <EnvironmentSelector currentEnv={dueloEnvironment} setEnv={setDueloEnvironment} />
                    </div>
                    <div className="shrink-0 relative z-10">
                      <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">Castigo por perder</p>
                      <PenaltySelector currentLevel={dueloPenaltyLevel} setLevel={setDueloPenaltyLevel} />
                    </div>
                    <button onClick={startDuelo} className="w-full py-4 mt-2 rounded-xl font-black text-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 shadow-lg shadow-teal-500/30 active:scale-95 transition-all flex justify-center items-center gap-3 text-white shrink-0 relative z-10">
                      ¡A luchar! <Swords fill="currentColor" size={22} />
                    </button>
                  </div>
                </div>
              </div>

              {/* OPCIÓN ENCUESTA BRUTAL */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden origin-top ${activeSettings && activeSettings !== 'encuesta' ? 'max-h-0 opacity-0 scale-95 mb-0' : 'max-h-[1200px] opacity-100 scale-100 mb-4'}`}>
                <button onClick={() => setActiveSettings(activeSettings === 'encuesta' ? null : 'encuesta')} className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl border shadow-lg transition-all group active:scale-95 ${activeSettings === 'encuesta' ? 'bg-pink-600 border-pink-400' : 'bg-gradient-to-r from-pink-600 to-rose-700 hover:from-pink-500 hover:to-rose-600 border-pink-500/30'}`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-xl"><BarChart3 size={28} className="text-white" /></div>
                    <div className="flex flex-col items-start">
                      <span className="text-2xl font-black tracking-tight text-white leading-none">Encuesta Brutal</span>
                    </div>
                  </div>
                  {activeSettings === 'encuesta' ? <div className="flex items-center gap-1.5 text-pink-100 font-bold bg-pink-900/30 px-3 py-1.5 rounded-lg border border-pink-500/30"><ChevronLeft size={18} /> Volver</div> : <Settings2 size={24} className="group-hover:rotate-90 transition-transform opacity-70 text-white" />}
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeSettings === 'encuesta' ? 'max-h-[70vh] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                  <div className="bg-gray-800/50 border border-pink-500/30 rounded-2xl p-4 sm:p-5 shadow-inner overflow-y-auto custom-scrollbar max-h-[70vh] flex flex-col gap-5 relative">
                    <p className="text-sm text-pink-300 font-bold italic text-center shrink-0">"Ideal para destruir amistades, o reforzarlas. ¿Quién sabe?"</p>
                    <div className="shrink-0 relative z-10">
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">¿Dónde estamos?</p>
                      <EnvironmentSelector currentEnv={encuestaEnvironment} setEnv={setEncuestaEnvironment} />
                    </div>
                    <div className="shrink-0 relative z-10">                      <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">Castigo para el más votado</p>
                      <PenaltySelector currentLevel={encuestaPenaltyLevel} setLevel={setEncuestaPenaltyLevel} />
                    </div>
                    <button onClick={startEncuesta} className="w-full py-4 mt-2 rounded-xl font-black text-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-lg shadow-pink-500/30 active:scale-95 transition-all flex justify-center items-center gap-3 text-white shrink-0 relative z-10">
                      ¡Empezar Votación! <BarChart3 fill="currentColor" size={22} />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <div className={`transition-all duration-300 overflow-hidden ${activeSettings ? 'max-h-0 opacity-0 mb-0' : 'max-h-[200px] opacity-100 mt-4'}`}>
              <div className="flex flex-col gap-3 mt-4">
                <button onClick={() => handleNavigate('setup')} className="w-full text-gray-500 hover:text-red-400 text-xs uppercase tracking-widest font-bold bg-gray-800/50 hover:bg-red-900/20 px-4 py-4 rounded-xl border border-gray-700/50 hover:border-red-900/50 transition-colors flex justify-center items-center gap-2 shadow-inner active:scale-95">
                  <ChevronLeft size={18} /> Volver al Inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- JUEGO YO NUNCA --- */}
      {screen === 'game-yonunca' && (
        <div className={`min-h-screen text-white flex flex-col items-center justify-between p-4 relative z-10 ${closingScreen ? 'animate-shrink' : ''}`}>
          <div className="w-full flex justify-between items-center z-10 max-w-3xl animate-slide-down">
            <div className="bg-indigo-600/30 text-indigo-300 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider border border-indigo-500/50 flex items-center gap-2 shadow-sm">
              <Beer size={16} /> Yo Nunca
            </div>
            <div className="flex gap-2">
              <button onClick={() => setShowLeaderboard(true)} className="text-yellow-400 hover:text-yellow-300 bg-gray-800/80 p-2 md:p-2.5 rounded-xl border border-gray-700 backdrop-blur-sm transition-colors shadow-sm"><Trophy size={18} /></button>
              <button onClick={() => setShowPlayerManager(true)} className="text-gray-400 hover:text-white bg-gray-800/80 p-2 md:p-2.5 rounded-xl border border-gray-700 backdrop-blur-sm transition-colors shadow-sm"><Users size={18} /></button>
              <button onClick={() => handleExitClick('mode-select')} className="text-red-400 hover:text-white bg-red-900/30 hover:bg-red-600/50 p-2 md:p-2.5 rounded-xl border border-red-800/50 backdrop-blur-sm transition-colors shadow-sm"><X size={18} /></button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-3xl flex flex-col items-center justify-center py-6 z-10 gap-8 animate-expand" style={{ animationFillMode: 'both' }}>
            <div className={`transition-all duration-75 ${isAnimatingYN ? 'scale-105 blur-[1px] opacity-70' : 'scale-100 blur-none opacity-100'}`}>
              <RenderFormattedText text={currentPhrase} isVor={false} />
            </div>

            <div className="w-full flex flex-col items-center z-10 px-2 mt-4 relative">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">¿Quién ha pringado?</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <button onClick={handleToggleAllYN} disabled={isAnimatingYN} className={`px-4 py-2 rounded-full border-2 font-black text-xs uppercase tracking-wider transition-all ${ynDrinkers.length === players.length && players.length > 0 ? 'bg-indigo-600/30 border-indigo-500 text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.3)]' : 'bg-gray-800/90 border-gray-600 text-gray-400 hover:border-gray-500'}`}>
                  Todos
                </button>
                {players.map(p => {
                  const drank = ynDrinkers.includes(p);
                  return (
                    <button key={p} disabled={isAnimatingYN} onClick={() => setYnDrinkers(prev => drank ? prev.filter(x => x !== p) : [...prev, p])} className={`px-4 py-2 rounded-full border-2 font-bold text-xs uppercase tracking-wider transition-all ${drank ? 'bg-green-600/20 border-green-500 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]' : 'bg-red-900/40 border-red-800/50 text-red-400/80 hover:border-red-500 hover:text-red-400'}`}>
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full max-w-md pb-6 z-10 flex flex-col gap-3 animate-slide-up">
            <button onClick={handleNextYNPhrase} disabled={isAnimatingYN} className="w-full py-5 rounded-3xl font-black text-2xl md:text-3xl bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/40 active:scale-95 transition-all flex flex-col justify-center items-center border-b-4 border-indigo-800 text-white disabled:opacity-50">
              <div className="flex items-center gap-3">
                {isAnimatingYN ? <><Loader2 size={28} className="animate-spin" /> ¡CARGANDO!</> : <>¡SIGUIENTE! <ArrowRight size={28} /></>}
              </div>
              {ynDrinkers.length > 0 && <span className="text-[10px] md:text-xs font-bold text-indigo-200 mt-1 tracking-widest uppercase">Guardará {ynDrinkers.length} trago(s)</span>}
            </button>
          </div>
        </div>
      )}

      {/* --- JUEGO VERDAD O RETO --- */}
      {screen === 'game-vor' && (() => {
        const currentPlayer = players[currentPlayerIndex];
        const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
        const nextPlayer = players[nextPlayerIndex];

        const getHeaderInfo = () => {
          if (vorType === 'verdad') return { text: "Suelta la sopa...", color: "bg-blue-600 text-white border-blue-400 shadow-blue-500/50" };
          if (vorType === 'reto') return { text: "¡Prepárate, te toca...!", color: "bg-red-600 text-white border-red-400 shadow-red-500/50" };
          if (vorType === 'comodin') return { text: "¡COMODÍN SORPRESA!", color: "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 border-yellow-300 shadow-yellow-500/50" };
          return { text: "El desafío es...", color: "bg-gray-700 text-white border-gray-500" };
        };

        const header = getHeaderInfo();
        const envStyle = getEnvStyle(environment);
        const EnvIcon = envStyle.icon;

        let fbiButtonText = "";
        if (fbiEvents.length === 1) {
          const ev = fbiEvents[0];
          if (ev.type === 'time') {
            const m = Math.floor(ev.remaining / 60);
            const s = ev.remaining % 60;
            fbiButtonText = `${ev.player} : ${m}:${s < 10 ? '0' : ''}${s}`;
          } else if (ev.type === 'round') {
            fbiButtonText = `${ev.player}: ${ev.remaining} turnos`;
          } else {
            fbiButtonText = `${ev.player}`;
          }
        } else if (fbiEvents.length > 1) fbiButtonText = `${fbiEvents.length} Activos`;

        return (
          <div className={`min-h-screen text-white flex flex-col items-center justify-between p-4 relative z-10 ${closingScreen ? 'animate-shrink' : ''}`}>
            {fbiMode && (
              <button onClick={() => setShowFbiPopup(true)} className={`absolute top-[75px] md:top-[85px] right-4 bg-purple-600/90 text-white pl-3 pr-4 py-2.5 md:py-3 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center justify-center gap-2 hover:scale-105 transition-transform z-20 animate-slide-down ${fbiEvents.length > 0 && fbiEvents.some(e => e.type === 'time' && e.remaining < 10) ? 'animate-pulse bg-red-600' : ''}`}>
                <Cctv size={22} className={fbiEvents.length > 0 ? "text-purple-200" : "opacity-70"} />
                {fbiEvents.length > 0 && <span className="font-bold text-xs md:text-sm whitespace-nowrap uppercase tracking-wider">{fbiButtonText}</span>}
              </button>
            )}

            <div className="w-full flex justify-between items-center z-10 max-w-2xl animate-slide-down">
              <div className="flex gap-1.5 md:gap-2">
                <div className="bg-orange-600/30 text-orange-300 px-2.5 py-1.5 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-wider border border-orange-500/50 flex items-center gap-1.5 shadow-sm">
                  <Flame size={14} /> <span className="hidden xs:inline sm:inline">V. o R.</span>
                </div>
                <div className={`${envStyle.bg} ${envStyle.color} px-2.5 py-1.5 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-wider border flex items-center gap-1.5 shadow-sm`}>
                  <EnvIcon size={14} /> {envStyle.label}
                </div>
              </div>

              <div className="flex gap-1.5 md:gap-2">
                <button onClick={() => setShowLeaderboard(true)} className="text-yellow-400 hover:text-yellow-300 bg-gray-800/80 p-2 md:p-2.5 rounded-xl border border-gray-700 backdrop-blur-sm transition-colors shadow-sm"><Trophy size={16} className="md:w-[18px] md:h-[18px]" /></button>
                <button onClick={() => setShowPlayerManager(true)} className="text-gray-400 hover:text-white bg-gray-800/80 p-2 md:p-2.5 rounded-xl border border-gray-700 backdrop-blur-sm transition-colors shadow-sm"><Users size={16} className="md:w-[18px] md:h-[18px]" /></button>
                <button onClick={() => handleExitClick('mode-select')} className="text-red-400 hover:text-white bg-red-900/30 hover:bg-red-600/50 p-2 md:p-2.5 rounded-xl border border-red-800/50 backdrop-blur-sm transition-colors shadow-sm"><X size={16} className="md:w-[18px] md:h-[18px]" /></button>
              </div>
            </div>

            <div className={`flex-1 w-full max-w-2xl flex flex-col items-center justify-center py-6 z-10 transition-transform duration-300 ${isVorTransitioning ? 'animate-shrink' : ''}`}>
              
              <div key={`turno-${currentPlayer}`} className={`mb-6 text-center bg-gray-800/90 border border-gray-700/60 p-4 md:p-5 rounded-3xl w-full max-w-xs shadow-xl backdrop-blur-sm relative z-10 ${turnState === 'showing' ? 'animate-slide-up' : 'animate-expand'}`} style={{ animationFillMode: 'both' }}>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">TURNO ACTUAL</p>
                <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2 uppercase drop-shadow-md flex justify-center items-center gap-2">
                  {currentPlayer === 'IAN' && isIansBirthday && <Crown size={24} className="text-yellow-400 animate-pulse" />}
                  {currentPlayerIndex + 1}. {currentPlayer}
                </h2>
                <div className="mt-2 pt-2 border-t border-gray-700/50 flex items-center justify-center gap-2 text-gray-500 text-[10px] md:text-xs uppercase font-bold">
                  <span>Va después:</span>
                  <span className="text-gray-300">{nextPlayerIndex + 1}. {nextPlayer}</span>
                </div>
              </div>

              {turnState === 'waiting' ? (
                <div className="flex flex-col gap-4 w-full max-w-sm mt-2 relative z-10">
                  <button onClick={() => handleVorChoice('verdad')} className="w-full py-6 rounded-3xl font-black text-4xl bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 active:scale-95 transition-all flex flex-col items-center justify-center gap-2 border-b-8 border-blue-800 text-white animate-slide-up" style={{ animationFillMode: 'both' }}>
                    <MessageSquare size={32} className="opacity-80" /> VERDAD
                  </button>
                  <button onClick={() => handleVorChoice('reto')} className="w-full py-6 rounded-3xl font-black text-4xl bg-red-600 hover:bg-red-500 shadow-xl shadow-red-600/30 active:scale-95 transition-all flex flex-col items-center justify-center gap-2 border-b-8 border-red-800 text-white relative overflow-hidden group animate-slide-up delay-100" style={{ animationFillMode: 'both' }}>
                    <Flame size={32} className="opacity-80 group-hover:scale-110 transition-transform" /> RETO
                    <span className="absolute -bottom-4 -right-4 text-red-900 opacity-20 transform rotate-12"><Skull size={100} /></span>
                  </button>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center mt-2 pb-6 relative z-10">
                  <div className={`bg-gray-800/90 border-2 border-gray-700 shadow-2xl p-6 md:p-8 pt-8 md:pt-10 pb-6 md:pb-8 rounded-3xl w-full text-center relative mt-4 animate-expand`} style={{ animationFillMode: 'both' }}>
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-5 py-1.5 rounded-full border-2 shadow-lg font-black uppercase tracking-widest text-[10px] whitespace-nowrap ${header.color}`}>
                      {header.text}
                    </div>
                    <RenderFormattedText text={currentPhrase} isVor={true} />
                  </div>

                  {currentPenalty && (
                    <div className="mt-4 bg-gray-800/90 border border-gray-700 p-3 md:p-4 rounded-2xl w-full max-w-sm shadow-lg backdrop-blur-sm flex items-center justify-between gap-3 animate-slide-up delay-100" style={{ animationFillMode: 'both' }}>
                      <div className="flex flex-col items-center justify-center bg-gray-900/50 rounded-xl py-3 px-5 border border-gray-700/50 flex-1">
                        <span className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-widest mb-1 text-center">Castigo si te rajas</span>
                        <span className="text-yellow-400 text-5xl md:text-6xl font-black leading-none flex items-baseline gap-1">
                          {currentPenalty} <span className="text-lg md:text-xl font-bold tracking-widest">{currentPenalty === 1 ? 'TRAGO' : 'TRAGOS'}</span>
                        </span>
                      </div>
                      {vorType !== 'comodin' && (
                        <button onClick={() => handleCountPenalty()} className={`py-2 px-3 rounded-xl font-bold uppercase tracking-wider text-[10px] border transition-all h-full min-h-[60px] flex flex-col items-center justify-center gap-1.5 w-24 shrink-0 ${vorPenaltyCounted ? 'bg-green-600/20 text-green-400 border-green-500/50' : 'bg-yellow-600 hover:bg-yellow-500 text-gray-900 border-yellow-400 shadow-md active:scale-95'}`}>
                          {vorPenaltyCounted ? <><Undo2 size={18} /> Revertir</> : <><Beer size={18} /> Anotar</>}
                        </button>
                      )}
                    </div>
                  )}

                  <div className="w-full max-w-sm animate-slide-up delay-200" style={{ animationFillMode: 'both' }}>
                    {fbiMode && vorType === 'reto' && hasTimerOnCurrentPhrase ? (
                      <div className="mt-6 w-full flex flex-col gap-3">
                        <button onClick={() => { addFbiEvent(currentPlayer, currentPhrase); nextTurnVor(); }} className="w-full py-4 rounded-2xl font-black text-sm md:text-lg bg-purple-600 hover:bg-purple-500 shadow-lg active:scale-95 transition-all flex justify-center items-center gap-2 border-b-4 border-purple-800 text-white uppercase tracking-wider">
                          <Cctv size={22} /> Iniciar conteo y seguir
                        </button>
                        <button onClick={nextTurnVor} className="w-full py-3 md:py-4 rounded-2xl font-bold text-sm md:text-lg bg-gray-700 hover:bg-gray-600 shadow-lg active:scale-95 transition-all flex justify-center items-center gap-2 border-b-4 border-gray-800 text-gray-300 uppercase tracking-wider">
                          Seguir sin vigilar <ArrowRight size={20} />
                        </button>
                      </div>
                    ) : (
                      <button onClick={nextTurnVor} className="mt-6 w-full py-4 md:py-5 rounded-3xl font-black text-lg md:text-xl bg-gray-700 hover:bg-gray-600 shadow-xl active:scale-95 transition-all flex justify-center items-center gap-3 border-b-4 border-gray-800 text-white uppercase tracking-wider">
                        Siguiente Víctima <ArrowRight size={24} />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* --- JUEGO LA BOMBA --- */}
      {screen === 'game-bomba' && (() => {
        return (
          <div className={`min-h-screen text-white flex flex-col items-center justify-between p-4 relative z-10 ${closingScreen ? 'animate-shrink' : ''}`}>
            <div className="w-full flex justify-between items-center z-10 max-w-3xl animate-slide-down">
              <div className="bg-red-600/30 text-red-300 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider border border-red-500/50 flex items-center gap-2 shadow-sm">
                <Bomb size={16} /> La Bomba
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowLeaderboard(true)} className="text-yellow-400 hover:text-yellow-300 bg-gray-800/80 p-2 md:p-2.5 rounded-xl border border-gray-700 backdrop-blur-sm transition-colors shadow-sm"><Trophy size={18} /></button>
                <button onClick={() => setShowPlayerManager(true)} className="text-gray-400 hover:text-white bg-gray-800/80 p-2 md:p-2.5 rounded-xl border border-gray-700 backdrop-blur-sm transition-colors shadow-sm"><Users size={18} /></button>
                <button onClick={() => handleExitClick('mode-select')} className="text-red-400 hover:text-white bg-red-900/30 hover:bg-red-600/50 p-2 md:p-2.5 rounded-xl border border-red-800/50 backdrop-blur-sm transition-colors shadow-sm"><X size={18} /></button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center py-6 z-10 text-center relative">
              {bombaState.phase === 'countdown' && (
                <div className="animate-pulse">
                  <p className="text-gray-400 uppercase tracking-widest font-bold mb-4">El juego empieza en...</p>
                  <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-rose-600 drop-shadow-2xl">{bombaState.timeLeft}</h1>
                </div>
              )}

              {bombaState.phase === 'starting' && (
                <div className="animate-expand bg-gray-800/90 border-2 border-red-500 rounded-3xl p-8 w-full shadow-[0_0_40px_rgba(239,68,68,0.4)] relative z-10" style={{ animationFillMode: 'both' }}>
                  <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-wider flex items-center justify-center gap-3"><Zap className="text-yellow-400" /> ¡Prepárate!</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-900/50 p-4 rounded-2xl border border-gray-700">
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Empieza con la Bomba:</p>
                      <p className="text-2xl font-black text-yellow-400 uppercase">{bombaState.firstPlayer}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-2xl border border-gray-700">
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Pasar en sentido:</p>
                      <p className="text-xl font-bold text-white uppercase">{bombaState.direction}</p>
                    </div>
                  </div>
                </div>
              )}

              {bombaState.phase === 'active' && (
                <div className="w-full flex flex-col items-center animate-expand relative z-10" style={{ animationFillMode: 'both' }}>
                  <div className="bg-gray-800/90 border-2 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] p-6 rounded-3xl w-full mb-8 relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-5 py-1.5 rounded-full border-2 shadow-lg font-black uppercase tracking-widest text-[10px] bg-red-600 text-white border-red-400">TEMA A HABLAR</div>
                    <h2 className="text-2xl md:text-3xl font-black text-white mt-2 leading-tight uppercase">{bombaState.topic}</h2>
                  </div>

                  {bombaConfig.showTable ? (
                     <div className="w-full flex flex-col items-center mt-4">
                        <CircularTable activePlayerIndex={currentPlayerIndex} animatePulse={bombaState.timeLeft < 10} />
                        <div className="mt-8 flex flex-col items-center w-full max-w-[200px]">
                           {bombaConfig.showTimer && <span className="text-2xl font-black text-white bg-black/50 px-4 py-1.5 rounded-xl backdrop-blur-sm border border-white/10 mb-4">{bombaState.timeLeft}s</span>}
                           <button onClick={passBombToNextPlayer} className="w-full py-4 bg-red-600 hover:bg-red-500 rounded-full font-black text-xl shadow-lg border-b-4 border-red-800 text-white active:scale-95 transition-all flex items-center justify-center gap-2">Siguiente <ArrowRight size={22} /></button>
                        </div>
                     </div>
                  ) : (
                     <div className={`mt-4 relative flex items-center justify-center w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-gray-700 shadow-2xl ${bombaState.timeLeft < 10 ? 'animate-bounce border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.5)]' : 'animate-pulse'}`}>
                      <Bomb size={120} className={bombaState.timeLeft < 10 ? 'text-red-500' : 'text-gray-500'} />
                      <div className="absolute inset-0 flex items-center justify-center"><span className="text-4xl font-black text-white bg-black/50 px-4 py-2 rounded-2xl backdrop-blur-sm border border-white/10">{bombaConfig.showTimer ? bombaState.timeLeft : '?'}</span></div>
                    </div>
                  )}

                  {!bombaConfig.showTable && <p className="mt-8 text-gray-400 italic text-sm md:text-base">Pasad el móvil rápido diciendo palabras...</p>}
                </div>
              )}

              {bombaState.phase === 'exploded' && (
                <div className="w-full flex flex-col items-center animate-expand relative z-10" style={{ animationFillMode: 'both' }}>
                  {bombaConfig.showTable ? (
                    <div className="w-full flex flex-col items-center mb-6">
                      <div className="relative mb-2">
                        <Flame size={100} className="text-orange-500 mx-auto animate-pulse filter drop-shadow-[0_0_40px_rgba(249,115,22,0.8)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" />
                        <h1 className="text-4xl font-black text-white drop-shadow-2xl z-10 relative text-center">¡BOOM!</h1>
                      </div>
                      <CircularTable activePlayerIndex={currentPlayerIndex} animatePulse={false} />
                    </div>
                  ) : (
                    <div className="relative mb-6 mt-4">
                      <Flame size={150} className="text-orange-500 mx-auto animate-pulse filter drop-shadow-[0_0_40px_rgba(249,115,22,0.8)]" />
                      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-black text-white drop-shadow-2xl rotate-[-10deg]">¡BOOM!</h1>
                    </div>
                  )}

                  {!bombaConfig.showTable && <h2 className="text-2xl text-gray-300 font-bold mb-6 bg-gray-900/50 px-4 py-2 rounded-xl">El que tenga el móvil ahora mismo, pringa.</h2>}

                  <div className="mt-2 bg-gray-800/90 border border-red-500/50 p-4 rounded-3xl w-full shadow-lg backdrop-blur-sm flex flex-col gap-4 animate-slide-up">
                    <div className="flex flex-col items-center justify-center bg-gray-900/50 rounded-2xl py-4 border border-gray-700/50 w-full">
                      <span className="text-red-400 text-xs uppercase font-bold tracking-widest mb-1 text-center">Castigo por Explotar</span>
                      <span className="text-white text-6xl font-black leading-none flex items-baseline gap-2">{bombaState.penalty} <span className="text-xl font-bold text-gray-400 tracking-widest">{bombaState.penalty === 1 ? 'TRAGO' : 'TRAGOS'}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <select value={players[currentPlayerIndex]} onChange={(e) => setCurrentPlayerIndex(players.indexOf(e.target.value))} className="w-full bg-gray-900 border border-gray-600 rounded-xl px-4 py-3 text-white font-bold uppercase focus:outline-none">
                          {players.map((p, idx) => <option key={p} value={p}>{idx+1}. {p}</option>)}
                        </select>
                      </div>
                      <button onClick={() => handleCountPenalty(bombaState.penalty)} className={`py-3 px-4 rounded-xl font-bold uppercase tracking-wider text-xs border transition-all h-full shrink-0 flex items-center justify-center gap-2 ${vorPenaltyCounted ? 'bg-green-600/20 text-green-400 border-green-500/50' : 'bg-yellow-600 hover:bg-yellow-500 text-gray-900 border-yellow-400 shadow-md active:scale-95'}`}>
                        {vorPenaltyCounted ? <><Undo2 size={16} /> Revertir</> : <><Beer size={16} /> Anotar</>}
                      </button>
                    </div>
                  </div>

                  <button onClick={startBombaRound} className="mt-8 w-full py-5 rounded-3xl font-black text-xl bg-red-600 hover:bg-red-500 shadow-xl active:scale-95 transition-all flex justify-center items-center gap-3 border-b-4 border-red-800 text-white uppercase tracking-wider animate-slide-up">
                    Siguiente Ronda <ArrowRight size={24} />
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* --- JUEGO DUELO 1VS1 --- */}
      {screen === 'game-duelo' && (
        <div className={`min-h-screen text-white flex flex-col items-center justify-between p-4 relative z-10 ${closingScreen ? 'animate-shrink' : ''}`}>
           <div className="w-full flex justify-between items-center z-10 max-w-3xl animate-slide-down">
              <div className="flex gap-1.5 md:gap-2">
                <div className="bg-teal-600/30 text-teal-300 px-2.5 py-1.5 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-wider border border-teal-500/50 flex items-center gap-1.5 shadow-sm">
                  <Swords size={14} /> <span className="hidden xs:inline sm:inline">Duelo</span>
                </div>
                {(() => {
                  const envStyle = getEnvStyle(dueloEnvironment);
                  const EnvIcon = envStyle.icon;
                  return (
                    <div className={`${envStyle.bg} ${envStyle.color} px-2.5 py-1.5 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-wider border flex items-center gap-1.5 shadow-sm`}>
                      <EnvIcon size={14} /> {envStyle.label}
                    </div>
                  );
                })()}
              </div>
              <div className="flex gap-1.5 md:gap-2">
                <button onClick={() => setShowLeaderboard(true)} className="text-yellow-400 hover:text-yellow-300 bg-gray-800/80 p-2 md:p-2.5 rounded-xl border border-gray-700 backdrop-blur-sm transition-colors shadow-sm"><Trophy size={16} className="md:w-[18px] md:h-[18px]" /></button>
                <button onClick={() => setShowPlayerManager(true)} className="text-gray-400 hover:text-white bg-gray-800/80 p-2 md:p-2.5 rounded-xl border border-gray-700 backdrop-blur-sm transition-colors shadow-sm"><Users size={16} className="md:w-[18px] md:h-[18px]" /></button>
                <button onClick={() => handleExitClick('mode-select')} className="text-red-400 hover:text-white bg-red-900/30 hover:bg-red-600/50 p-2 md:p-2.5 rounded-xl border border-red-800/50 backdrop-blur-sm transition-colors shadow-sm"><X size={16} className="md:w-[18px] md:h-[18px]" /></button>
              </div>
           </div>

           <div className="flex-1 w-full max-w-lg flex flex-col items-center justify-center py-6 z-10 relative">
              {dueloState.phase === 'playing' ? (
                 <div className="w-full flex flex-col items-center animate-expand" style={{ animationFillMode: 'both' }}>
                    <div className="flex items-center justify-between w-full mb-8">
                       <div className="flex flex-col items-center justify-center flex-1 p-4 bg-gray-800/90 border-2 border-gray-600 rounded-3xl shadow-lg relative overflow-hidden">
                          {dueloState.p1 === 'IAN' && isIansBirthday && <Crown size={40} className="text-yellow-400/20 absolute -right-2 -bottom-2" />}
                          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 relative z-10">Jugador 1</span>
                          <span className="text-2xl font-black text-white text-center break-all relative z-10">{dueloState.p1}</span>
                       </div>
                       <div className="px-4">
                          <Swords size={40} className="text-teal-400 animate-pulse drop-shadow-[0_0_15px_rgba(45,212,191,0.6)]" />
                       </div>
                       <div className="flex flex-col items-center justify-center flex-1 p-4 bg-gray-800/90 border-2 border-gray-600 rounded-3xl shadow-lg relative overflow-hidden">
                          {dueloState.p2 === 'IAN' && isIansBirthday && <Crown size={40} className="text-yellow-400/20 absolute -left-2 -bottom-2" />}
                          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 relative z-10">Jugador 2</span>
                          <span className="text-2xl font-black text-white text-center break-all relative z-10">{dueloState.p2}</span>
                       </div>
                    </div>

                    <div className="bg-gray-800/90 border-2 border-teal-500 shadow-[0_0_30px_rgba(20,184,166,0.2)] p-8 rounded-3xl w-full text-center relative mb-8">
                       <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-5 py-1.5 rounded-full border-2 shadow-lg font-black uppercase tracking-widest text-[10px] bg-teal-600 text-white border-teal-400">
                          EL DESAFÍO
                       </div>
                       <p className="text-2xl font-black leading-tight">{dueloState.challenge}</p>
                    </div>

                    <div className="w-full flex flex-col gap-3 animate-slide-up">
                       <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-xs mb-1 bg-gray-900/50 py-1 rounded-full">¿Quién ha perdido?</p>
                       <div className="flex gap-3">
                          <button onClick={() => resolveDuelo(dueloState.p1)} className="flex-1 py-4 bg-gray-800/90 hover:bg-gray-700 border border-gray-600 rounded-2xl font-black text-xl text-white shadow-lg active:scale-95 transition-all">
                             {dueloState.p1}
                          </button>
                          <button onClick={() => resolveDuelo(dueloState.p2)} className="flex-1 py-4 bg-gray-800/90 hover:bg-gray-700 border border-gray-600 rounded-2xl font-black text-xl text-white shadow-lg active:scale-95 transition-all">
                             {dueloState.p2}
                          </button>
                       </div>
                       <button onClick={() => resolveDuelo('draw')} className="w-full py-4 mt-1 bg-yellow-600 hover:bg-yellow-500 border border-yellow-500 rounded-2xl font-black text-lg text-gray-900 shadow-lg active:scale-95 transition-all">
                          Empate (Beben los dos)
                       </button>
                    </div>
                 </div>
              ) : (
                 <div className="w-full flex flex-col items-center animate-expand" style={{ animationFillMode: 'both' }}>
                    <div className="relative mb-6">
                       <Skull size={100} className="text-red-500 mx-auto drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
                    </div>
                    <h2 className="text-3xl font-black text-white text-center mb-6 uppercase">
                       {dueloState.loser === 'draw' ? '¡Ambos Pringan!' : `¡${dueloState.loser} ha perdido!`}
                    </h2>
                    
                    <div className="bg-gray-800/90 border border-red-500/50 p-6 rounded-3xl w-full shadow-lg text-center mb-8">
                       <span className="text-red-400 text-xs uppercase font-bold tracking-widest block mb-2">Penalización</span>
                       <span className="text-white text-6xl font-black leading-none flex items-baseline justify-center gap-2">
                         {dueloState.penalty} <span className="text-xl font-bold text-gray-400 tracking-widest">{dueloState.penalty === 1 ? 'TRAGO' : 'TRAGOS'}</span>
                       </span>
                    </div>

                    <button onClick={triggerNewDuelo} className="w-full py-5 rounded-3xl font-black text-xl bg-teal-600 hover:bg-teal-500 shadow-xl active:scale-95 transition-all flex justify-center items-center gap-3 border-b-4 border-teal-800 text-white uppercase tracking-wider">
                       Siguiente Duelo <ArrowRight size={24} />
                    </button>
                 </div>
              )}
           </div>
        </div>
      )}

      {/* --- JUEGO ENCUESTA BRUTAL --- */}
      {screen === 'game-encuesta' && (
        <div className={`min-h-screen text-white flex flex-col items-center justify-between p-4 relative z-10 ${closingScreen ? 'animate-shrink' : ''}`}>
           <div className="w-full flex justify-between items-center z-10 max-w-3xl animate-slide-down">
              <div className="flex gap-1.5 md:gap-2">
                <div className="bg-pink-600/30 text-pink-300 px-2.5 py-1.5 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-wider border border-pink-500/50 flex items-center gap-1.5 shadow-sm">
                  <BarChart3 size={14} /> <span className="hidden xs:inline sm:inline">Encuesta</span>
                </div>
                {(() => {
                  const envStyle = getEnvStyle(encuestaEnvironment);
                  const EnvIcon = envStyle.icon;
                  return (
                    <div className={`${envStyle.bg} ${envStyle.color} px-2.5 py-1.5 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-wider border flex items-center gap-1.5 shadow-sm`}>
                      <EnvIcon size={14} /> {envStyle.label}
                    </div>
                  );
                })()}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowLeaderboard(true)} className="text-yellow-400 hover:text-yellow-300 bg-gray-800/80 p-2 md:p-2.5 rounded-xl border border-gray-700 backdrop-blur-sm transition-colors shadow-sm"><Trophy size={16} className="md:w-[18px] md:h-[18px]" /></button>
                <button onClick={() => setShowPlayerManager(true)} className="text-gray-400 hover:text-white bg-gray-800/80 p-2 md:p-2.5 rounded-xl border border-gray-700 backdrop-blur-sm transition-colors shadow-sm"><Users size={16} className="md:w-[18px] md:h-[18px]" /></button>
                <button onClick={() => handleExitClick('mode-select')} className="text-red-400 hover:text-white bg-red-900/30 hover:bg-red-600/50 p-2 md:p-2.5 rounded-xl border border-red-800/50 backdrop-blur-sm transition-colors shadow-sm"><X size={16} className="md:w-[18px] md:h-[18px]" /></button>
              </div>
           </div>

           <div className="flex-1 w-full max-w-lg flex flex-col items-center justify-center py-6 z-10 relative">
              
              {encuestaState.phase === 'pass' && (
                 <div className="w-full flex flex-col items-center animate-expand text-center" style={{ animationFillMode: 'both' }}>
                    <Smartphone size={80} className="text-pink-500 mb-6 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]" />
                    <h2 className="text-4xl font-black text-white mb-2 bg-gray-900/40 px-4 py-1 rounded-xl">¡Pasa el móvil!</h2>
                    <p className="text-xl text-gray-400 font-bold mb-8">
                       Es el turno de votar de: <span className="text-pink-400 uppercase font-black">{players[encuestaState.currentVoterIndex]}</span>
                    </p>
                    <button onClick={() => setEncuestaState(prev => ({...prev, phase: 'vote'}))} className="w-full py-5 bg-pink-600 hover:bg-pink-500 border-b-4 border-pink-800 rounded-3xl font-black text-xl text-white shadow-xl active:scale-95 transition-all">
                       Ya lo tengo, ¡A Votar!
                    </button>
                 </div>
              )}

              {encuestaState.phase === 'vote' && (
                 <div className="w-full flex flex-col items-center animate-expand" style={{ animationFillMode: 'both' }}>
                    <div className="mb-4 text-center">
                       <span className="text-xs font-bold text-gray-300 bg-gray-900/50 px-3 py-1 rounded-full uppercase tracking-widest block mb-2">Votando: <span className="text-pink-400">{players[encuestaState.currentVoterIndex]}</span></span>
                    </div>
                    <div className="bg-gray-800/90 border-2 border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.2)] p-6 rounded-3xl w-full text-center mb-6">
                       <p className="text-2xl font-black leading-tight text-white">{encuestaState.question}</p>
                    </div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest w-full text-left mb-3 bg-gray-900/50 pl-2 rounded">Elige a alguien en secreto:</p>
                    <div className="w-full flex flex-col gap-2 overflow-y-auto max-h-[40vh] custom-scrollbar pr-2">
                       {players.map(p => {
                          if (p === players[encuestaState.currentVoterIndex]) return null;
                          return (
                             <button key={`vote-${p}`} onClick={() => registerVote(p)} className="w-full py-4 bg-gray-800/90 hover:bg-gray-700 border border-gray-600 rounded-2xl font-black text-xl text-white shadow-md active:scale-95 transition-all text-left px-6 flex justify-between items-center">
                                {p} <ArrowRight size={20} className="text-gray-500" />
                             </button>
                          );
                       })}
                    </div>
                 </div>
              )}

              {encuestaState.phase === 'completed' && (
                 <div className="w-full flex flex-col items-center animate-expand text-center" style={{ animationFillMode: 'both' }}>
                    <AlertTriangle size={80} className="text-yellow-500 mb-6 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)] animate-pulse" />
                    <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tight bg-gray-900/40 px-4 py-1 rounded-xl">¡COMPLETADO!</h2>
                    <p className="text-xl text-gray-400 font-medium mb-8">
                       Todos habéis votado. Pasad el móvil al portavoz de la ronda.
                    </p>
                    <button onClick={() => setEncuestaState(prev => ({...prev, phase: 'results'}))} className="w-full py-5 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 border-b-4 border-rose-800 rounded-3xl font-black text-xl text-white shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
                       Revelar Resultados <BarChart3 size={24} />
                    </button>
                 </div>
              )}

              {encuestaState.phase === 'results' && (() => {
                 // Sort results
                 const sortedResults = Object.entries(encuestaState.votes).sort((a,b) => b[1] - a[1]);
                 const maxVotes = sortedResults[0]?.[1] || 0;
                 const winners = sortedResults.filter(r => r[1] === maxVotes).map(r => r[0]);

                 return (
                    <div className="w-full flex flex-col items-center animate-expand" style={{ animationFillMode: 'both' }}>
                       <div className="bg-gray-800/90 border-2 border-gray-600 p-6 rounded-3xl w-full text-center mb-6 opacity-80">
                          <p className="text-lg font-bold text-gray-300 italic">"{encuestaState.question}"</p>
                       </div>
                       
                       <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 mb-6 uppercase text-center bg-gray-900/50 px-6 py-2 rounded-xl">
                          Resultados
                       </h2>

                       <div className="w-full flex flex-col gap-3 mb-8">
                          {sortedResults.map(([p, count], idx) => {
                             const isWinner = count === maxVotes;
                             const percentage = Math.round((count / players.length) * 100);
                             return (
                                <div key={`res-${p}`} className={`relative overflow-hidden rounded-2xl border ${isWinner ? 'border-pink-500 bg-gray-800 shadow-[0_0_15px_rgba(236,72,153,0.3)]' : 'border-gray-700 bg-gray-800/70'}`}>
                                   <div className={`absolute top-0 left-0 h-full ${isWinner ? 'bg-pink-600/30' : 'bg-gray-600/30'} transition-all duration-1000`} style={{ width: `${percentage}%` }}></div>
                                   <div className="relative z-10 px-5 py-4 flex justify-between items-center">
                                      <span className={`font-black text-xl ${isWinner ? 'text-white' : 'text-gray-400'}`}>{p}</span>
                                      <div className="flex items-center gap-2">
                                         <span className={`font-bold ${isWinner ? 'text-pink-300' : 'text-gray-500'}`}>{count} voto{count > 1 ? 's' : ''}</span>
                                      </div>
                                   </div>
                                </div>
                             )
                          })}
                       </div>

                       <div className="w-full text-center bg-gray-800/90 border border-red-500/50 p-4 rounded-2xl mb-6 shadow-lg">
                          <span className="text-red-400 text-xs uppercase font-bold tracking-widest block mb-1">El Pueblo ha hablado</span>
                          <p className="text-white text-lg font-medium"><span className="font-black text-yellow-400">{winners.join(" y ")}</span> beben <span className="font-black text-red-400">{encuestaState.penalty} tragos</span>.</p>
                       </div>

                       <button onClick={applyEncuestaPenalty} className="w-full py-5 bg-pink-600 hover:bg-pink-500 border-b-4 border-pink-800 rounded-3xl font-black text-xl text-white shadow-xl active:scale-95 transition-all flex justify-center items-center gap-2">
                          Aplicar Castigo y Siguiente <ArrowRight size={24} />
                       </button>
                    </div>
                 );
              })()}
           </div>
        </div>
      )}

    </div>
  );
}