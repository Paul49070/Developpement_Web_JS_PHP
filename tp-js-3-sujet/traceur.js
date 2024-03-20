import {
    Echantillon
} from "./échantillonneur.js";
import {
    tracerGrille,
    point,
    tracer,
    dessiner
} from "./traceur_proto.js";

export class Traceur {
    constructor(canevas, contexte, marge, maxXY) {
        // Le canevas
        this.canevas = canevas;

        // Largeur du canevas
        this.L = this.canevas.getAttribute("width");

        // Hauteur du canevas
        this.H = this.canevas.getAttribute("height");

        // Contexte 2D du canevas
        this.contexte = contexte;

        // Les marges horizontales (gauche/droite) et verticales (haute/basse) sous la forme 
        // {"X" : marge_horizontale, "Y": marge_verticale}
        this.marge = marge;

        /*
        Objet {"X" : Mx, "Y": My} où Mx et My sont les valeurs maximum qui seront acceptées en abscisse et ordonnée :
        - un point (maxXY.X,0) correspondra sur le canevas au point situé à l'extrémité droite de l'axe des abscisses.
        - un point (0,maxXY.Y) correspondra sur le canevas au point situé à l'extrémité haute de l'axe des ordonnées.
        */
        this.maxXY = maxXY;

        /*
        Objet {"X":dX, "Y":dy} où dx et dy sont les coefficients multiplicatifs à appliquer aux coordonnées 
        de tout point (x,y) (-this.maxXY.X <= x <= this.maxXY.X, -this.maxXY.Y <= y <= this.maxXY.Y)
        pour obtenir un décalage en pixels (x*dX,y*dY) par rapport au centre du canevas (cad. l'origine du repère).
        */
        this.dimensionXY = {
            "X": ((this.L - (2 * this.marge.X))) / (2 * this.maxXY.X),
            "Y": ((this.H - (2 * this.marge.Y))) / (2 * this.maxXY.Y)
        };

        /*
        Le repère sous la forme 
            {"X":
                {   "gauche": point du canevas correspondant à l'abscisse minimum,
                    "centre": point du canevas correspondant à l'origine du repère,
                    "droit": point du canevas correspondant à l'abscisse maximum
                },
            "Y":
                {   "bas": point du canevas correspondant à l'ordonnée minimum,
                    "centre": point du canevas correspondant à l'origine du repère,
                    "haut": point du canevas correspondant à l'ordonnée maximum
                }
            }

            Note : X.centre === Y.centre
        */
        this.repère = {
            "X": {
                "gauche": [this.marge.X, Math.floor(this.H / 2)],
                "centre": [Math.floor(this.L / 2), Math.floor(this.H / 2)],
                "droit": [this.L - this.marge.X, Math.floor(this.H / 2)]
            },
            "Y": {
                "bas": [Math.floor(this.L / 2), this.H - this.marge.Y],
                "centre": [Math.floor(this.L / 2), Math.floor(this.H / 2)],
                "haut": [Math.floor(this.L / 2), this.marge.Y]
            }
        };
    }

    // Trace le repère (les 2 axes et leurs échelles de valeurs)
    tracerRepère() {
        // paramétrage du contexte
        this.contexte.strokeStyle = 'black';
        this.contexte.lineWidth = 2;
        this.contexte.setLineDash([]);

        // axe des abscisses
        this.contexte.beginPath();
        this.contexte.moveTo(this.repère.X.gauche[0], this.repère.X.gauche[1]);
        this.contexte.lineTo(this.repère.X.droit[0], this.repère.X.droit[1]);
        this.contexte.stroke();

        // axe des ordonnées
        this.contexte.beginPath();
        this.contexte.moveTo(this.repère.Y.bas[0], this.repère.Y.bas[1]);
        this.contexte.lineTo(this.repère.Y.haut[0], this.repère.Y.haut[1]);
        this.contexte.stroke();

        // échelle des abscisses (21 graduations)
        let point = this.point(this.repère.X.gauche[0], this.repère.X.gauche[1]);
        this.contexte.moveTo(point.X, point.Y);
        for (let x = -this.maxXY.X; x <= this.maxXY.X; x += 2 * this.maxXY.X / 10) {
            let pointTexte = this.point(x, 0);
            this.contexte.fillText(parseFloat(x).toFixed(2).toString(), pointTexte.X - 10, pointTexte.Y + 10);
            this.contexte.stroke();
        }

        // échelle des ordonnées (21 graduations)
        point = this.point(this.repère.Y.bas[0], this.repère.Y.bas[1]);
        this.contexte.moveTo(point.X, point.Y);
        for (let y = -this.maxXY.Y; y <= this.maxXY.Y; y += 2 * this.maxXY.Y / 10) {
            let pointTexte = this.point(0, y);
            this.contexte.fillText(parseFloat(y).toFixed(2).toString(), pointTexte.X - 10, pointTexte.Y + 10);
            this.contexte.stroke();
        }
    };

    // Trace la grille
    tracerGrille() {

        this.contexte.strokeStyle = 'lightgray';
        this.contexte.lineWidth = 2;
        this.contexte.setLineDash([5]);

        for (let y = -this.maxXY.Y; y <= this.maxXY.Y; y += 2 * this.maxXY.Y / 10) 
        {

            let p1 = this.point(this.maxXY.X, y);
            let p2 = this.point(-this.maxXY.X, y);

            this.contexte.beginPath();
            this.contexte.moveTo(p1.X, p1.Y);
            this.contexte.lineTo(p2.X, p2.Y);
            this.contexte.stroke();
        }

        for (let x = -this.maxXY.X; x <= this.maxXY.X; x += 2 * this.maxXY.X / 10) {

            let p1 = this.point(x, this.maxXY.Y);
            let p2 = this.point(x, -this.maxXY.Y);

            this.contexte.beginPath();
            this.contexte.moveTo(p1.X, p1.Y);
            this.contexte.lineTo(p2.X, p2.Y);
            this.contexte.stroke();
        }
    };

    /*
    Transforme un point (x,y) en un point du canevas (u,v) au format objet {"X": u, "Y": v} par 
    - dimensionnement en appliquant this.dimensionXY
    - et décalage par rapport au centre du canevas.
    Emet un message d'avertissement en console et renvoie {"X": false, "Y": false} pour tout point (x,y) hors-limite,
    cad. si l'une au moins de ses coordonnées vaut NaN ou +/-Infinity ou si |x| > this.maxXY.X ou |y| > this.maxXY.Y.
    */
    point(x, y) {
        
        if(x !== NaN && y !== NaN && x !== Infinity && y !== Infinity && 
            Math.abs(x) <= this.maxXY.X && Math.abs(y) <= this.maxXY.Y){

            const u = x * this.dimensionXY["X"] + this.repère["X"]["centre"][0]
            const v = this.repère["Y"]["centre"][1] - y * this.dimensionXY["Y"]

            return {
                "X": u,
                "Y": v
            }
        }

        console.warn("Le point (" + x + ";" + y + ")" + " est hors limite.")

        return {
            "X": false,
            "Y": false
        }
    };

    /*
    - Transforme le tableau P=[...,[u,v],...] de n points passé en paramètre en un tableau Q de points du canevas par appel à la méthode `this.point`.
    - Trace la courbe correspondante à Q en reliant les ordonnées des points successifs (Q[i].Y, Q[i+1].Y) par des segments (1<=i<n).
    
    Remarques :
    - Le tracé utilise la couleur CSS `strokeStyle`.
    - Une exception est levée si P ne vérifie pas P[i].X < P[i+1].X (1<=i<n).
    - Les points hors limite sont omis du tracé et donne lieu à un avertissement en console.
    */
    tracer(P, strokeStyle) {


        this.contexte.strokeStyle = strokeStyle;
        this.contexte.lineWidth = 2;
        this.contexte.setLineDash([]);

        let isOrdonnee = true

        for(let i = 1; i<P.length; ++i)
        {

            console.log(P[i])

            if(P[i-1][0] === false || P[i-1][1] === false || P[i][0] === false || P[i][1] === false)
            {
                //throw smth
            }

            else {

                let p1 = this.point(P[i-1][0], P[i-1][1]);
                let p2 = this.point(P[i][0], P[i][1]);
                
                this.contexte.beginPath();
                this.contexte.moveTo(p1.X, p1.Y);
                this.contexte.lineTo(p2.X, p2.Y);
                this.contexte.stroke();
            }
        }
    };

    /* 
    Procède en 3 étapes :
    (1) Génère pour la fonction mathématique décrite par `meta_f` un échantillon de `n` points 
            dont les abscisses sont répartis sur l'intervalle [-this.maxXY.X,this.maxXY.X]
    (2) Trace la courbe échantillonnée sur le canevas selon la fréquence renseignée par le visiteur
    (3) Ajoute `meta_f` au tableau `log` et ajoute une ligne au tableau HTML contenant la formulation de la fonction.

    `meta_f` est un descripteur de fonction réelle au format
        {
            "type": chaîne de l'ensemble {"linéaire", "exponentiation", "racine", "e", "logarithme", "sinus"}
            "f": fonction de rappel JS implémentant la fonction mathématique décrite
            "paramètres": tableau (potentiellement vide) des paramètres de la fonction dans l'ordre des champs HTML correspondants
            "strokeStyle": code couleur CSS pour tracer et tabuler la fonction (p. ex. "orange" ou un code RGB "rgb(5,200,89)")
        }

    Remarques :
    - L'échantillonnage s'effectue par invocation de la méthode `points` sur une instance d'`Echantillon`.
    - Si la fréquence de tracé F (telle que renseignée dans le champ du formulaire) est > 0, le tracé est non-bloquant 
        (cad. asynchrone en utilisant `setInterval`) et chaque segment de la courbe en commençant par le point le plus à gauche 
        est tracé toutes les F/10 secondes.
    - La ligne (mono-cellule) à ajouter au tableau HTML contiendra une chaîne de caractères construite à partir
        du type de la fonction et de la valeur de ses arguments (p. ex. "2x + 1", "3 sin(2Pix/4 + 1.07").
    - La couleur `meta_f.strokeStyle` est utlisée pour le tracé et comme couleur de fond de la ligne HTML.
    */
    dessiner(n, meta_f, log) {
        // A REMPLACER
        return dessiner.call(this, n, meta_f, log);

        // Absisses min et max

        // Génération d'un échantillon de n points de la fonction f

        // Tracé de l'échantillon

        // Log de la fonction et affichage dans le tableau
    };
}