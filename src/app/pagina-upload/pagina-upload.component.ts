import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-upload',
  templateUrl: './pagina-upload.component.html',
  styleUrls: ['./pagina-upload.component.css']
})
export class PaginaUploadComponent implements OnInit {

  arquivo: File;

  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event) {
    for (let file of event.files) {
      this.arquivo = file;
    }

    console.log(this.arquivo);
  }

}
