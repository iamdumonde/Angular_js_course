import { Component, OnInit } from '@angular/core';

//importez la définition de la classe et les albums
import { Album, List } from '../album';
import { ALBUMS, ALBUM_LISTS } from '../mock-albums';
import { AlbumDetailsComponent } from '../album-details/album-details.component';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})


export class AlbumsComponent implements OnInit{
  titlePage: string ="Page principale Albums Music";
  title: string = "app-music";
  albums: Album[] = ALBUMS;
  lists: List[] = ALBUM_LISTS;
  selectedAlbum: any;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(P:Album):void{
    this.selectedAlbum=Album;
    console.log(this.selectedAlbum);
  }
}
