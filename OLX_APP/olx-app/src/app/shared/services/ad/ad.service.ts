import { Injectable } from '@angular/core';
import { createLViewData } from '@angular/core/src/render3/instructions';

export interface Ad {
  id: number
  name: string
  // image:? string
  publisher: string
  createdAt: string
}

@Injectable({
  providedIn: 'root'
})
export class AdService {
  adList: Array<Ad> = [
    {
      id: Math.floor(Math.random() * 100),
      name: "Dog Ad",
      publisher: "Animal Media",
      createdAt: new Date().toISOString()
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Dog Ad",
      publisher: "Animal Media",
      createdAt: new Date().toISOString()
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Dog Ad",
      publisher: "Animal Media",
      createdAt: new Date().toISOString()
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Mausasauraus ",
      publisher: "Animal Media",
      createdAt: new Date().toISOString()
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Dinausaurs Extinction",
      publisher: "Animal Media",
      createdAt: new Date().toISOString()
    },
  ]

  constructor() { }

  getAdList() {
    return this.adList;
  }
}
