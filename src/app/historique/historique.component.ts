import { Component, OnInit, AfterViewInit } from "@angular/core";

declare interface DataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;
@Component({
  selector: "app-historique",
  templateUrl: "./historique.component.html",
  styleUrls: ["./historique.component.css"],
})
export class HistoriqueComponent implements OnInit, AfterViewInit {
  public histo: DataTable;

  constructor() {}

  classTable(tech) {
    if (tech === "Fraisage") return "table-success";
    if (tech === "Découpe Laser") return "table-info";
    return "table-warning";
  }

  ngOnInit(): void {
    this.histo = {
      headerRow: [
        "Date",
        "Statut",
        "Technique",
        "Prix (DT)",
        "Quantité",
        "Actions",
      ],

      dataRows: [
        ["1", "Livré", "Découpe Laser", "26.5 ", "5", "f.png", "btn-round"],
        ["2", "Livré", "Impression 3D", "456", "45", "f.png", "btn-round"],
        ["3", "En cours", "Fraisage", "165", "21", "f.png", "btn-round"],
        ["4", "En cours", "Fraisage", "47.6", "3", "f.png", "btn-round"],
        ["5", "En cours", "Découpe Laser", "10", "5", "f.png", "btn-round"],
        ["6", "En cours", "Découpe Laser", "10", "5", "f.png", "btn-round"],
        ["7", "En cours", "Fraisage", "47.6", "3", "f.png", "btn-round"],
        ["8", "En cours", "Fraisage", "165", "21", "f.png", "btn-round"],
        ["9", "Livré", "Découpe Laser", "26.5 ", "5", "f.png", "btn-round"],
        ["10", "Livré", "Impression 3D", "456", "45", "f.png", "btn-round"],
      ],
    };
  }

  ngAfterViewInit() {
    $("#datatables").DataTable({
      pagingType: "full_numbers",
      bLengthChange: false,
      bInfo: false,
      lengthMenu: [
        [5, 10, 15, -1],
        [5, 10, 15, "All"],
      ],

      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Chercher",
      },
    });

    const table = $("#datatables").DataTable();

    // Edit record
    table.on("click", ".edit", function (e) {
      let $tr = $(this).closest("tr");
      if ($($tr).hasClass("child")) {
        $tr = $tr.prev(".parent");
      }

      var data = table.row($tr).data();
      alert(
        "You press on Row: " +
          data[0] +
          " " +
          data[1] +
          " " +
          data[2] +
          "'s row."
      );
      e.preventDefault();
    });

    // Delete a record
    table.on("click", ".remove", function (e) {
      const $tr = $(this).closest("tr");
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    //Like record
    table.on("click", ".like", function (e) {
      alert("You clicked on Like button");
      e.preventDefault();
    });

    $(".card .material-datatables label").addClass("form-group");
  }
}
