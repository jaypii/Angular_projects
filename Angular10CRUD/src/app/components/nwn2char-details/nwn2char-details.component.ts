import { Component, OnInit } from '@angular/core';
import { NWN2CharService } from 'src/app/services/nwn2char.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NWN2Char } from 'src/app/models/nwn2char.model';

@Component({
  selector: 'app-nwn2char-details',
  templateUrl: './nwn2char-details.component.html',
  styleUrls: ['./nwn2char-details.component.css']
})

export class NWN2CharDetailsComponent implements OnInit {
  currentNWN2Char: NWN2Char = {
    name: '',
  };

  message = '';

  constructor(
    private nwn2charService: NWN2CharService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getNWN2Char(this.route.snapshot.params.id);
  }

  getNWN2Char(id: string): void {
    this.nwn2charService.get(id)
      .subscribe(
        data => {
          this.currentNWN2Char = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateNWN2Char(): void {
    this.nwn2charService.update(this.currentNWN2Char.id, this.currentNWN2Char)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteNWN2Char(): void {
    this.nwn2charService.delete(this.currentNWN2Char.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/nwn']);
        },
        error => {
          console.log(error);
        });
  }
}
