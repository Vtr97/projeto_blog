import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { routes } from "../../app.routes";
import { dataFake } from "../../data/dataFake";

@Component({
    selector: "app-content",
    imports: [RouterLink],
    templateUrl: "./content.component.html",
    styleUrl: "./content.component.css",
})
export class ContentComponent {
    photoCover: string = "";
    contentTitle: string = "";
    contentText: string = "";
    private id: number = 0;
    constructor(private route: ActivatedRoute) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe(
            (value) => (this.id = Number(value.get("id")))
        );

        this.setValuesToCOmponent(this.id);
    }

    setValuesToCOmponent(id: number) {
        const result = dataFake.filter((article) => article.id === id)[0];
        console.log(result);
        this.contentTitle = result.title;
        this.contentText = result.text;
        this.photoCover = result.photo;
    }
}
