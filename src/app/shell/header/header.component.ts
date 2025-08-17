import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MediaObserver } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  sidenav!: MatSidenav;

  @Output() collapse = new EventEmitter<boolean>();

  sidenavCollapsed = true;

  constructor(
    private titleService: Title,
    private router: Router,
    private media: MediaObserver
  ) {}

  ngOnInit(): void {}

  logout() {}

  get username(): string | null {
    return null;
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }
  toggleSidenavCollapse(sidenavCollapsed?: boolean) {
    this.sidenavCollapsed = sidenavCollapsed || !this.sidenavCollapsed;
    this.collapse.emit(this.sidenavCollapsed);
  }
}
