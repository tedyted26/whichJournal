export class Conference {
public titulo: String;
public fecha: String;
public pais: String;
public ciudad: String;
public fechaInscripcion: String;
public organizacion: String;
public tipo: String;
public tags: String;
public precio: String;

constructor(titulo: String, fecha: String, pais: String, ciudad: String, fechaInscripcion: String,organizacion: String,
    tipo: String, tags: String, precio: String){
        this.titulo = titulo;
        this.fecha = fecha;
        this.pais = pais;
        this.ciudad = ciudad;
        this.fechaInscripcion = fechaInscripcion;
        this.organizacion = organizacion;
        this.tipo = tipo;
        this.tags = tags;
        this.precio = precio;
    }
}
