import { Component, OnInit } from "@angular/core";
import { TableData } from "./../md/md-table/md-table.component";

@Component({
  selector: "app-commandes-en-cours",
  templateUrl: "./commandes-en-cours.component.html",
  styleUrls: ["./commandes-en-cours.component.css"],
})
export class CommandesEnCoursComponent implements OnInit {
  public histo: TableData;

  constructor() {}

  ngOnInit(): void {
    this.histo = {
      headerRow: [
        "Date De Création",
        "Dernière modification	",
        "Technique",
        "Statut",
        "Prix",
        "Quantité",
        "Prix total",
        "Fichier",
      ],
      dataRows: [
        ["1", "1", "Fraisage", "a", "5", "5", "26.5 ", "f.png"],
        ["2", "2", "Découpe Laser", "a", "12", "45", "456", "f.png"],
        ["3", "3 ", "Impression 3D", "a", "6", "21", "165", "f.png"],
        ["4", "4 ", "Fraisage", "a", "3", "16", "47.6", "f.png"],
        ["5", "5 ", "Découpe Laser", "a", "2", "5", "10", "f.png"],
      ],
    };
  }
}
