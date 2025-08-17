import { ChangeDetectorRef, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MediaObserver } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  sidenavCollapsed = true;
  fileLevel = false;
  constructor(
    private media: MediaObserver,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }

  toggleCollapse($event: boolean) {
    this.sidenavCollapsed = $event;
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
