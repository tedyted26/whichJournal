export class Journal {
public imagePath: String;
public title: String;
public ssn: String;
public releaseYear: String;
public type: String;
public price: String;
public impactFactor: String;
public quartil: String;
public otherMetrics: String;
public acceptanceRate: String;
public timeDecision: String;
public timePublication: String;

constructor(imagePath: String, title: String, ssn: String, releaseYear: String, type: String, price: String, impactFactor: String, quartil: String, 
    otherMetrics: String, acceptanceRate: String, timeDecision: String, timePublication: String ){
        this.imagePath = imagePath;
        this.title = title;
        this.ssn = ssn;
        this.releaseYear = releaseYear;
        this.type = type;
        this.price = price;
        this.impactFactor = impactFactor;
        this.quartil = quartil;
        this.otherMetrics = otherMetrics;
        this.acceptanceRate = acceptanceRate;
        this.timeDecision = timeDecision;
        this.timePublication = timePublication;
    }
}
