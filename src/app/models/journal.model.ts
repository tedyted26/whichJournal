export class Journal {
public url: String;
public imagePath: String;
public title: String;
public issn: String;
public type: String;
public price: String;
public impactFactor: String;
public otherMetric: String;
public nameOtherMetric: String;
public acceptanceRate: String;
public timeDecision: String;
public timePublication: String;
public timeReview: String;
public quartil: String;
public sjr_ranking: String;
public predator: String;


constructor(url: String,imagePath: String, title: String, issn: String, type: String, price: String, impactFactor: String, 
    otherMetric: String, nameOtherMetric: String, acceptanceRate: String, timeDecision: String, timePublication: String,
    timeReview: String, quartil: String, sjr_ranking: String, predator: String){
        this.url = url;
        this.imagePath = imagePath;
        this.title = title;
        this.issn = issn;
        this.type = type;
        this.price = price;
        this.impactFactor = impactFactor;
        this.otherMetric = otherMetric;
        this.nameOtherMetric = nameOtherMetric;
        this.acceptanceRate = acceptanceRate;
        this.timeDecision = timeDecision;
        this.timePublication = timePublication;
        this.timeReview = timeReview;
        this.quartil = quartil;
        this.sjr_ranking = sjr_ranking;
        this.predator = predator;
    }
}
