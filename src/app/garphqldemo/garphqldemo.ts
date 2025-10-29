// garphqldemo.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Mockdata } from "../mockdata/mockdata";

@Component({
  selector: 'app-garphqldemo',
  standalone: true,
  imports: [CommonModule, Mockdata],
  templateUrl: './garphqldemo.html',
  styleUrl: './garphqldemo.css',
})
export class Garphqldemo {

}