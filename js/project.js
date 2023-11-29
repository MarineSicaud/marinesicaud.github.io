// Change photo image Project

const photoProjects = [
    {
        id: 0,
        name: 'Photo Ombre  / Lumière',
        description: 'Cette photographie révèle la beauté mystérieuse d\'un lieu empreint d\'histoire, baigné dans une obscurité subtile et éclairé par la lueur douce d\'un lustre. L\'atmosphère intemporelle est capturée par le jeu magique de lumière et d\'ombre qui danse à travers la pièce. Le lustre, témoin silencieux du passé, projette des reflets délicats sur le sol, créant une toile d\'ombres éthérées. Chaque contour, chaque détail de l\'architecture se découvre dans ce ballet de lumières, évoquant une ambiance à la fois nostalgique et envoûtante. Cette photographie, telle une fenêtre ouverte sur le passé, célèbre la beauté poétique des espaces oubliés, où la lumière et l\'obscurité entrelacent leurs mystères pour créer une scène captivante et intemporelle.',
        img: "../../../assets/photo/light.jpg"

    },
    {
        id: 1,
        name: 'Photo Bordeaux',
        description: 'Cette photographie en noir et blanc, capturée sur la Place de la Bourse à Bordeaux, offre une vision captivante de la ville nocturne. La scène s\'illumine dans une palette monochrome, accentuant le contraste dramatique entre l\'obscurité de la nuit et les lumières qui embrasent le bâtiment et la fontaine. Les jeux d\'ombres et de lumière révèlent la majesté architecturale de la Place de la Bourse, tandis que les reflets dans l\'eau de la fontaine ajoutent une dimension poétique à la composition. Les détails sculpturaux et les contours des bâtiments se dessinent avec une élégance saisissante, créant une atmosphère intemporelle. ',
        img: "../../../assets/photo/bordeaux.jpg"

    },
    {
        id: 2,
        name: 'Photo Porsche',
        description: 'Capturée en noir et blanc, cette image saisit l\'essence intemporelle d\'une Porsche, symbole ultime de l\'élégance automobile. La carrosserie brillante agit comme un miroir, réfléchissant avec grâce les éléments de son environnement. Les lignes audacieuses de la voiture se marient harmonieusement avec les jeux de lumière et d\'ombre, créant une symphonie visuelle captivante. Les reflets subtils dans la carrosserie transmettent une histoire silencieuse. Cette photographie témoigne de l\'alliance entre la sophistication du design automobile et la subtilité artistique de la photographie en noir et blanc, capturant l\'instant où la puissance mécanique rencontre l\'esthétique intemporelle.',
        img: "../../../assets/photo/porche.jpg"
    },
    {
        id: 3,
        name: 'Photo Immeuble Londonien',
        description: 'Cette capture emblématique de l\'architecture londonienne transporte le spectateur dans les hauteurs de la ville, offrant une perspective saisissante. L\'immeuble majestueux se dresse vers le ciel, capturé avec un léger contre-plongée qui accentue son imposante verticalité. Les lignes architecturales épurées et les détails subtils se révèlent dans une harmonie visuelle, tandis que la perspective audacieuse crée une profondeur. Cette photographie transcende la simple représentation d\'un immeuble pour devenir une exploration visuelle, invitant le spectateur à contempler la grandeur de l\'urbanisme londonien avec une nouvelle perspective."',
        img: "../../../assets/photo/imeuble.jpg"

    },
    {
        id: 4,
        name: 'Photo Bateaux',
        description: 'Cette photographie, capturée à bord d\'un bateau, présente une scène maritime qui évoque l\'esprit de l\'aventure. Au premier plan, une bouée solitaire repose sur le couloir du navire. Les lignes épurées de la balustrade du bateau créent un motif géométrique qui guide le regard, tandis que le paysage en arrière-plan offre une toile de fond épique. L\'ensemble de l\'image harmonise l\'essence du voyage et de la découverte, capturant l\'interaction entre les éléments maritimes et la structure du bateau. Cette composition visuelle soigneusement orchestrée sert à la fois de témoignage du périple passé et d\'invitation à contempler l\'horizon infini qui s\'étend, symbolisant l\'infini potentiel des voyages à venir.',
        img: "../../../assets/photo/photo-bateau.jpeg"
    },
    {
        id: 5,
        name: 'Photo Vélo Rose',
        description: 'Cette photographie incarne l\'énergie vibrante et la singularité de la vie urbaine londonienne. Un vélo rose vif, audacieusement positionné au premier plan, crée un contraste saisissant avec l\'architecture imposante des immeubles londoniens en arrière-plan. La couleur éclatante du vélo devient une déclaration audacieuse au cœur de la métropole, un rappel de l\'individualité au sein de l\'urbanisme. Les tons rose vif et l\'environnement citadin monochrome se marient dans une composition visuelle dynamique, évoquant une atmosphère contemporaine et artistique. Cette photographie capture l\'instant où la modernité et le style personnel se rencontrent, célébrant la diversité et l\'éclat au cœur même de la capitale britannique.',
        img: "../../../assets/photo/veloRose.jpg"

    },
    {
        id: 6,
        name: 'Photo Flamants Roses',
        description: 'Cette photographie révèle la grâce naturelle des flamants roses, créant une symphonie visuelle avec les teintes vibrantes de la nature. Les flamants, majestueusement, prennent vie dans un ballet de couleurs éclatantes, harmonieusement intégrées à leur environnement. Les reflets du ciel matinal ou du crépuscule se mêlent aux eaux calmes, créant une palette de tons pastel qui encadrent élégamment les oiseaux rosés. Chaque plume resplendit dans la lumière douce, capturant l\'instant magique où la faune et la flore fusionnent en une danse artistique. Cette photographie évoque une sérénité enchanteresse, soulignant la beauté éphémère de la nature et laissant transparaître la délicate harmonie qui règne entre les flamants roses et leur environnement.',
        img: "../../../assets/photo/FlammentRose.jpeg"

    },
    {
        id: 7,
        name: 'Photo Londre Rose',
        description: 'Cette capture emblématique transporte le spectateur au cœur du quartier de Notting Hill, où l\'essence pittoresque de Londres s\'exprime à travers une maison d\'un rose délicat. L\'élégance classique de l\'architecture londonienne se dévoile dans chaque détail de cette demeure, soulignée par l\'audace du choix de couleur. Un escalier noir, comme une ligne de mélodie contrastante, guide le regard vers l\'entrée, ajoutant une touche dramatique à la scène. Les façades vibrantes des maisons environnantes se fondent harmonieusement dans le paysage urbain, créant une symphonie visuelle où la tradition architecturale rencontre l\'expression individuelle.',
        img: "../../../assets/photo/londonRose.jpg"

    },
    {
        id: 8,
        name: 'Photo cabane pecheur',
        description: 'Cette image saisissante témoigne de la symbiose entre l\'homme et la nature, capturant un pêcheur solitaire à proximité de sa cabane, tandis que le soleil fait ses adieux dans un spectaculaire dégradé de rose et de bleu. Le ciel envoûtant, teinté des derniers feux du coucher de soleil, crée une toile de fond irréelle pour cette scène maritime. Le pêcheur, silhouette robuste, incarne la quiétude d\'un quotidien inscrit dans le rythme des marées. La cabane, humble témoin de la vie maritime, se dresse avec simplicité face à la majesté du crépuscule. Les nuances délicates de rose et de bleu fusionnent dans un tableau céleste, créant une harmonie visuelle apaisante.',
        img: "../../../assets/photo/photo-cabanne-pecheur.jpeg"
    },
]

const graphismeProjects = [
    {
        id: 0,
        name: 'Affiche chaussure Adidas',
        description: 'Cette affiche publicitaire incarne l\'essence dynamique de la paire de chaussures Adidas Campus, mettant en lumière la couleur vibrante verte de manière saisissante. La composition visuelle est méticuleusement conçue, avec un fond vert pastel qui crée un contraste visuel percutant, mettant en valeur chaque détail de la chaussure. Le choix stratégique des couleurs évoque à la fois la fraîcheur et l\'énergie, amplifiant l\'impact visuel de la campagne publicitaire. La typographie soigneusement intégrée complète l\'esthétique, communiquant un sentiment de modernité et de style urbain. ',
        img: "../../../assets/graphisme/affiche_paire_addi.jpg"
    },
    {
        id: 1,
        name: 'Affiche chaussure New Balance',
        description: 'Cette première page de magazine, conçue à des fins publicitaires pour la marque de chaussures New Balance, évoque un sentiment décontractée et d\'innovation. Le fond de papier froissé crée une texture visuelle unique, ajoutant une touche de spontanéité à la composition. Dans un équilibre subtil, les nuances vertes habillent la scène, évoquant la couleur distinctive de la paire de chaussures New Balance présentée. La mise en page soigneusement pensée, avec des éléments graphiques épurés, met en valeur la simplicité et l\'esthétique moderne de la marque. Cette première page de magazine est une invitation visuelle à découvrir l\'harmonie entre le style et le confort, incarnée par la paire de chaussures New Balance.',
        img: "../../../assets/graphisme/affichenewbalance.jpg"
    },
    {
        id: 2,
        name: 'Poster My Digital Week',
        description: 'Cette création artistique fusionne l\'élégance féminine avec la puissance naturelle de l\'eau, incarnant une vision captivante. Au premier plan, une femme mystérieuse, les yeux délibérément cachés, évoque une intrigue et une connexion intime avec son environnement. Derrière elle, un fond composé de vagues ondoyantes transmet un sentiment de fluidité et de calme. L\'énergie du mouvement de l\'eau est capturée avec précision, créant une toile dynamique qui encadre le portrait. L\'inscription "Only Water" ajoute une couche de signification, suggérant une relation profonde entre la femme et l\'élément aquatique. Cette fusion d\'éléments visuels et symboliques crée une expérience visuelle évocatrice, où la féminité, la nature et la tranquillité se rejoignent dans une harmonie artistique, invitant le spectateur à une contemplation réfléchie.',
        img: "../../../assets/graphisme/My_digital_week.jpg"
    },
    {
        id: 3,
        name: 'Poster Porsche',
        description: 'Cette création graphique allie la puissance iconique d\'une Porsche vert émeraude avec la majesté intemporelle des montagnes en arrière-plan. La voiture, élégante et dynamique, trône au centre de l\'image, capturant l\'essence de la performance et du style. En arrière-plan, les montagnes en noir et blanc sont intentionnellement floutées, créant un contraste visuel saisissant qui met en valeur la Porsche de manière encore plus percutante. L\'effet de flou confère une dimension artistique à la scène, accentuant la séparation entre la puissance de la machine et la sérénité de la nature environnante. Cette composition captivante incarne l\'harmonie entre la performance automobile et la beauté naturelle, où la Porsche devient le point focal d\'une expérience visuelle qui évoque à la fois l\'excitation de la conduite et la majesté des paysages qui défilent.',
        img: "../../../assets/graphisme/porche.jpg"
    },
    {
        id: 4,
        name: 'Portrait style comics',
        description: 'Cette création graphique célèbre la féminité avec une touche artistique contemporaine, fusionnant l\'esthétique du pointillisme avec l\'impact visuel propre aux comics. Une femme émerge de l\'affiche, capturée avec une technique pointilliste qui apporte une texture unique à son portrait. Les points dispersés forment une composition visuelle dynamique, rappelant l\'esthétique des bandes dessinées tout en ajoutant une dimension artistique et immersive. L\'effet de pointillisme confère à l\'image une vivacité presque tridimensionnelle, invitant le spectateur à s\'approcher et à découvrir les détails subtils de la création. ',
        img: "../../../assets/graphisme/portrait_a_point.jpg"
    },
    {
        id: 5,
        name: 'Portrait aspiré',
        description: 'Cette création graphique mystérieuse plonge le spectateur dans un univers introspectif et sombre. Le portrait évocateur d\'un homme, fixant intensément le ciel, est enveloppé d\'une atmosphère énigmatique. Les mains délicatement posées sur son visage, l\'homme est aspiré vers le haut, créant une tension visuelle puissante. Les tonalités sombres de l\'image accentuent l\'ambiance mystique, où chaque ombre et chaque nuance contribuent à l\'intensité émotionnelle de la scène. L\'aspiration vers l\'inconnu, symbolisée par le visage du protagoniste, plonge le spectateur dans une réflexion profonde sur la quête personnelle et la recherche constante de lumière même dans les ténèbres.',
        img: "../../../assets/graphisme/portrait_aspire.jpg"
    },
    {
        id: 6,
        name: 'Portrait effect vague',
        description: 'Cette composition visuelle offre une interprétation intrigante de la mystique et de l\'élégance. Le profil d\'un homme coiffé d\'un chapeau, dont une partie du visage se trouve délibérément cachée, insuffle une aura de mystère et d\'individualité. Les ombres en forme de vague qui s\'étendent sur toute la silhouette crée une dynamique unique, évoquant le mouvement et l\'énergie. L\'effet visuel de la vague confère une dimension artistique à la scène, accentuant la personnalité du sujet tout en ajoutant une touche d\'intrigue visuelle. ',
        img: "../../../assets/graphisme/portrait_vague.jpg"
    },
    {
        id: 7,
        name: 'Poster de rue',
        description: 'Cette affiche captivante offre une perspective aérienne unique de la vie urbaine, mettant en scène des passants dans la rue vus de haut. La composition visuelle offre une vision étonnante de l\'agitation quotidienne. Les silhouettes anonymes des passants créent une mosaïque humaine, chacun engagé dans sa propre histoire urbaine. L\'effet de prise de vue en hauteur ajoute une dimension artistique, soulignant la complexité et la beauté ordinaire de la vie citadine. ',
        img: "../../../assets/graphisme/poster_rue.jpg"
    },
    {
        id: 8,
        name: 'Poster Travis Scott',
        description: 'Cette affiche audacieuse incarne l\'univers artistique de Travis Scott. Dans un contraste saisissant de noir et blanc, l\'image met en scène l\'artiste tombant dans le vide avec l\'expression intrépide "Look mom I can fly". L\'effet épuré crée une atmosphère artistique minimaliste, soulignant l\'intensité de l\'instant capturé. En bas de l\'affiche, les titres emblématiques des chansons de Travis Scott sont soigneusement disposés, ajoutant une dimension sonore à la composition visuelle.',
        img: "../../../assets/graphisme/travis_scott_poster.jpg"
    },
    {
        id: 9,
        name: 'Portrait artistique',
        description: 'Cette composition captivante explore l\'essence de la féminité et de la nature, fusionnant harmonieusement le visage d\'une femme avec l\'éclat florissant des fleurs. Le visage délicatement séparé en deux évoque une dualité intrigante, tandis que des fleurs s\'épanouissent organiquement, symbolisant la beauté florissante et l\'épanouissement personnel. L\'utilisation habile de la composition et des éléments visuels crée une harmonie visuelle, où la féminité et la nature se fondent dans une expression artistique captivante.',
        img: "../../../assets/graphisme/visage_découpé.jpg"
    },
    {
        id: 10,
        name: 'Première page magazine vogue',
        description:'Cette première page de magazine Vogue représente l\'élégance révolutionnaire. En premier plan, la mannequin incarne la modernité propre à la maison de couture. Le titre audacieux "La Révolution des modèles" évoque un changement dynamique et énergique dans l\'industrie de la mode. L\'utilisation judicieuse de l\'espace et des éléments visuels crée une invitation qui reflète l\'esthétique sophistiquée de Vogue et d\'Yves Saint Laurent. Cette première page crée  une immersion immédiate dans un monde de style et de révolution, promettant une expérience visuelle et éditoriale à la hauteur des standards élevés de la mode internationale.',
        img: "../../../assets/graphisme/voguemagasine.jpg"
    },
    {
        id: 11,
        name: "Design Porsche",
        description: 'Cette affiche démontre l\'excellence automobile avec une représentation graphique de la marque emblématique Porsche. L\'esthétique sophistiquée et dynamique de la Porsche est mise en avant dans cette composition visuelle, capturant la fusion parfaite entre performance et élégance. L\'utilisation habile de l\'espace et des nuances renforce l\'impression globale, offrant une expérience visuelle qui suscite l\'admiration et l\'aspiration.',
        img: "../../../assets/graphisme/porche-design.webp"
    },
]

const autreProjects = [
    {
        id: 0,
        name: 'Infographie sur le métier de Web Designer',
        description: 'Cette infographie offre une représentation visuelle motivante du chemin à suivre pour devenir web designer, guidant les aspirants à travers les étapes clés qui mènent au succès dans ce domaine dynamique et créatif. À mesure que la route se déroule, des points stratégiques marquent les jalons importants, tels que les formations recommandées, les contraintes éventuels que peut rencontrer un web designer et les possibilités d\'évolutions. Des panneaux indicateurs illustrent également des moments d\'apprentissage et de développement professionnel.',
        img: "../../../assets/autre/InforgraphieDesigner1.png"
    },
    {
        id: 1,
        name: 'Infographie sur les compétences requises pour être web Designer',
        description: 'Cette infographie visuellement captivante constitue une cartographie complète des compétences essentielles pour un web designer moderne, évoquant l\'équilibre subtil entre expertise technique, compétences relationnelles et traits comportementaux. Divisée en trois axes clés, chaque section de l\'infographie offre un aperçu visuel des domaines cruciaux à maîtriser pour exceller dans le domaine du design web.',
        img: "../../../assets/autre/InfographieDesgin2.jpg"

    },
    {
        id: 2,
        name: 'Moodboard pour le projet EcoLife',
        description: 'Cette création visuelle immersive est le moodboard captivant conçu pour \'Écolife\', une entreprise fictive dédiée à promouvoir un mode de vie écologique et durable. Les éléments soigneusement sélectionnés convergent pour évoquer une esthétique épurée, dynamique et en harmonie avec la nature.\n' +
            'La palette de couleurs, composée de verts apaisants et de tons terreux, font écho à l\'environnement. Des visuels de végétations luxuriantes expriment la beauté de la nature, soulignant le lien essentiel entre l\'homme et son écosystème.\n' +
            'Des textures organiques, telles que des fibres naturelles, créent une sensibilité tactile, représentant l\'engagement de "Écolife" envers des pratiques durables. De plus, une citation est placées dans le moodboard afin de créer une  sources d\'inspiration et de motivation. Elle rappelle l\'importance de l\'engagement envers des pratiques écologiques, qui inspire un changement de comportement en faveur de la durabilité.',
        img: "../../../assets/autre/MoodBoardEcolife.jpg"
    },
    {
        id: 3,
        name: 'Moodboard de ma personalité',
        description: 'Ce moodboard somptueux incarne l\'essence même de ma personnalité déterminée et orientée vers la réussite, avec une passion manifeste pour le luxe et la haute couture. Les tons beiges et marrons clairs évoquent une palette raffinée et intemporelle, tandis que les éléments soigneusement choisis créent une symphonie visuelle élégante et inspirante. Des typographies soigneusement sélectionnées, renforcent l\'élégant du moodboard. Des citations inspirantes sur la détermination et le succès sont intégrées pour soutenir visuellement mon engagement envers l\'accomplissement professionnel. Nous retrouvons également des visuels de Vogue, symbole de la haute couture, ajoutent une touche de sophistication, qui reflètent mon intérêt pour l\'industrie de la mode et l\'excellence artistique.',
        img: "../../../assets/autre/MyMoodboard.png"

    },
]

const projectImage = document.querySelector('#project-image')
const projectTitle = document.querySelector('#project-title')
const projectDescription = document.querySelector('#project-description')
const buttonLeft = document.querySelector('.left-button')
const buttonRight = document.querySelector('.right-button')

const getUrl = window.location.pathname
const getPath = getUrl.replace('/portfolio/project-pages/', '')
const pathParams = getPath.split('/')
const getIndex = pathParams[1].replace('.html', '')
let index = getIndex
const getCategorie = pathParams[0]
console.log(getCategorie, index)
loadNewInformation()

console.log(getCategorie)

function loadNewInformation(){
    switch (getCategorie){
        case 'graphisme':
            projectImage.src = graphismeProjects[index - 1].img
            projectTitle.innerText = graphismeProjects[index - 1].name
            projectDescription.innerText = graphismeProjects[index - 1].description
            break
        case 'photographie':
            projectImage.src = photoProjects[index - 1].img
            projectTitle.innerText = photoProjects[index - 1].name
            projectDescription.innerText = photoProjects[index - 1].description
            break
        case 'autre':
            projectImage.src = autreProjects[index - 1].img
            projectTitle.innerText = autreProjects[index - 1].name
            projectDescription.innerText = autreProjects[index - 1].description
            break
        default:
            break
    }
}


buttonLeft.addEventListener('click', () => {
    if (index == 1){
        index = getLength(getCategorie)
        loadNewInformation()
    }else{
        index--
        loadNewInformation()
    }

    if (getCategorie === 'autre' && index === 3 || getCategorie === 'autre' && index === 4){
        projectImage.style.width = '100%'
        projectImage.style.height = 'unset'
    }else{
        projectImage.style.width = 'unset'
        projectImage.style.height = '100%'
    }
})

console.log(getLength(getCategorie))

buttonRight.addEventListener('click', () => {
    if (index == getLength(getCategorie)){
        index = 1
        loadNewInformation()
    }else{
        index++
        loadNewInformation()
    }

    if (getCategorie === 'autre' && index === 3 || getCategorie === 'autre' && index === 4){
        projectImage.style.width = '100%'
        projectImage.style.height = 'unset'
    }else{
        projectImage.style.width = 'unset'
        projectImage.style.height = '100%'
    }
})

function getLength(category){
    switch (category){
        case 'photographie':
            return photoProjects.length
        case 'graphisme':
            return graphismeProjects.length
        case 'autre':
            return autreProjects.length
        default:
            break
    }
}

const imgContainer = document.querySelector('.img-container')
const imgContent = document.querySelector('#project-image')

imgContainer.addEventListener('mousemove', (e) => {
    let clientX = e.clientX - imgContainer.offsetLeft
    let clientY = e.clientY - imgContainer.offsetTop

    clientX = (clientX / imgContainer.offsetWidth) * 100
    clientY = (clientY / imgContainer.offsetHeight) * 100

    if (window.innerWidth > 800){
        imgContent.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2)`
    }
})

imgContainer.addEventListener('mouseleave', () => {

    imgContent.style.transform = 'translate(-50%, -50%) scale(1)'
})