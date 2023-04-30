export class Conference {
public url: String;
public title: String;
public date: String;
public location: String;
public dueDate: String;
public organization: String;
public type: String;
public tags: String;

constructor(url: String, title: String, date: String, location: String, dueDate: String, organization: String,type: String, tags: String){
        this.url = url;
        this.title = title;
        this.date = date;
        this.location = location;
        this.dueDate = dueDate;
        this.organization = organization;
        this.type = type;
        this.tags = tags;
    }
}
