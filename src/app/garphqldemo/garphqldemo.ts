// garphqldemo.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Mockdata } from "../mockdata/mockdata";
import { Apidata } from '../apidata/apidata';

@Component({
  selector: 'app-garphqldemo',
  standalone: true,
  imports: [CommonModule, Mockdata, Apidata],
  templateUrl: './garphqldemo.html',
  styleUrl: './garphqldemo.css',
})
export class Garphqldemo {
  isMockDataVisible: boolean = true
}