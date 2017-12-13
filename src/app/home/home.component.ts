import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

    trigger('mojeCiasta[i].ingridients', [
      transition('* => *',[
        query(':enter',style({opacity:0}), {optional:true}),

        query(':enter', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity:0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity:.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity:1, transform: 'translateY(0)', offset: 1.0}),
          ]))]),{optional:true}),
        query(':leave', stagger('300ms', [
            animate('.6s ease-out', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
          
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  itemCount:number = 4;
  btnCakeText:string = 'Add an Cake';
  btnIngridientText:string = 'Add an Ingridient';
  recipeText: string = 'My first recipe'; 
  descriptionText:string = "";
  descriptionBtn:string = "Add your Recipe";
  cakeText:string = "";
  ingridients = [];
  ingridientsCount:number = 0;
  ingridientsText = "";
  mojeCiasta=[ ];






  constructor(private _data: DataService) { }

  ngOnInit() {

    this._data. ingrident.subscribe(res => this.ingridients = res);
    this._data.changeIngrid(this.ingridients);
    this.itemCount = this.ingridients.length;
  

  }
   
  clear(){
    this.ingridients = [];
    this.cakeText = "";
    this.descriptionText = "";
  }
  createObject(cakeText,ingridients,descriptionText){
    cakeText = new Object();
    cakeText = {
    name:this.cakeText,
    ingridients:this.ingridients,
    descriptionText:this.descriptionText
    };
    this.mojeCiasta.push(cakeText);
 

  };
  addIngridient(){
    
    this.ingridients.push(this.ingridientsText);
    this.ingridientsText = "";
    this.ingridientsCount=this.ingridients.length;
    this._data.changeIngrid(this.ingridients);
  }
  
  removeItem(i){

    this.ingridients.splice(i,1);
    this._data.changeIngrid(this.ingridients);
    this.ingridientsCount=this.ingridients.length;
    this._data.changeIngrid(this.ingridients);
  }
  editRecipe(i){
    
    this.ingridients = this.mojeCiasta[i].ingridients;
    this.cakeText = this.mojeCiasta[i].name;
    this.descriptionText = this.mojeCiasta[i].descriptionText;
    let edit= document.getElementById("myEditModal");
    edit.style.display="block";
    this.removeRecipe(i);
  
  }
  
  removeRecipe(i){
    this.mojeCiasta.splice(i,1);
    this._data.changeCake(this.mojeCiasta[i].name);
    this.itemCount=this.mojeCiasta.length;
    this._data.changeCake(this.mojeCiasta[i].name);
  
  }
  addDescription(i){
    this.descriptionText=this.descriptionText;
    this.descriptionText = "";
    this._data.changeDescription(this.descriptionText);
  }
  
  closeModal(){
  var close= document.getElementById("myModal");
  close.style.display="none";
 
  }
  closeEditModal(){
    var closeEdit= document.getElementById("myEditModal");
    closeEdit.style.display="none";
   
    }
  addObjectToArray(){
    this.closeModal();
    this.createObject(this.cakeText,this.ingridients,this.descriptionText);
    this.clear();
    this.closeEditModal();
  }
  openModal(){
    var close= document.getElementById("myModal");
    close.style.display="block";
    
    }
}
