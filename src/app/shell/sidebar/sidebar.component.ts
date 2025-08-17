import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
type PermissionMap = {
  [key: string]: boolean;
};
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  // public changeSideBarFlag = false;
  // submenuEmployeeOpen = false;
  // submenuTaskOpen = false;
  // @Input() sidenav: MatSidenav | undefined;
  // /** True if sidenav is in collapsed state. */
  // @Input() sidenavCollapsed: boolean | undefined;
  // submenuTopPosition = 0;
  // collapsedSidebarWidth = 63;
  // hoverTimeout: any;
  // floatingMenuOpen = false;
  // constructor(
  //   private router: Router,
  //   private elementRef: ElementRef,
  //   private route: ActivatedRoute,
  //   private ref: ElementRef
  // ) {}
  // ngOnInit(): void {}
  // // get username(): string | null {
  // //   // const credentials = this.credentialsService.credentials;
  // //   // return credentials ? credentials.username : null;
  // // }
  // // get isMobile(): boolean {
  // //   // return this.media.isActive('xs') || this.media.isActive('sm');
  // // }
  // changeSideBar() {}
  // toggleSubmenu(type: any, event?: any) {
  //   if (type === 'employee') {
  //     this.submenuEmployeeOpen = !this.submenuEmployeeOpen;
  //     this.submenuTaskOpen = false;
  //     this.floatingMenuOpen = this.submenuEmployeeOpen;
  //   } else if (type === 'task') {
  //     this.submenuTaskOpen = !this.submenuTaskOpen;
  //     this.submenuEmployeeOpen = false;
  //     this.floatingMenuOpen = this.submenuTaskOpen;
  //   } else {
  //     this.closeSubmenus();
  //   }
  //   if (
  //     (this.submenuEmployeeOpen || this.submenuTaskOpen) &&
  //     this.sidenavCollapsed
  //   ) {
  //     const target = event.currentTarget as HTMLElement;
  //     const rect = target.getBoundingClientRect();
  //     this.submenuTopPosition = rect.top;
  //   }
  // }
  // isEmployeeRouteActive(): boolean {
  //   return (
  //     this.router.url.startsWith('/employee/') ||
  //     this.router.url.startsWith('/bulk-import/Employee')
  //   );
  // }
  // isClientRouteActive(): boolean {
  //   return (
  //     this.router.url.startsWith('/client/') ||
  //     this.router.url.startsWith('/bulk-import/Client')
  //   );
  // }
  // isTaskRouteActive(): boolean {
  //   return this.router.url.startsWith('/task/');
  // }
  // isConfigRouteActive(): boolean {
  //   const currentUrl = this.router.url;
  //   return currentUrl.includes('/config');
  // }
  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   const clickedInside = this.elementRef.nativeElement.contains(event.target);
  //   if (!clickedInside) {
  //     this.closeSubmenus();
  //   }
  // }
  // closeSubmenus() {
  //   this.submenuEmployeeOpen = false;
  //   this.submenuTaskOpen = false;
  //   this.floatingMenuOpen = false;
  // }
  // onHoverEnter(menu: string): void {
  //   clearTimeout(this.hoverTimeout);
  //   // if (menu === 'employee') {
  //   //   this.submenuEmployeeOpen = true;
  //   //   const target = event.currentTarget as HTMLElement;
  //   //   const rect = target.getBoundingClientRect();
  //   //   this.submenuTopPosition = rect.top;
  //   // }
  // }
  // onHoverLeave(): void {
  //   this.hoverTimeout = setTimeout(() => {
  //     this.submenuEmployeeOpen = false;
  //   }, 300);
  // }
  /***permission */

  @Input() sidenav: MatSidenav | undefined;
  @Input() sidenavCollapsed: boolean | undefined;

  submenuTopPosition = 0;
  collapsedSidebarWidth = 63;
  floatingMenuOpen = false;
  openSubmenus: { [key: string]: boolean } = {};

  // Permissions (could be loaded from API)
  permissions: PermissionMap = {
    dashboard: false,
    employee: true,
    employee_view: true,
    employee_document: false,
    client: true,
    task: false,
    task_calendar: true,
    task_table: true,
    task_board: false,
    task_folder: false,
    report: false,
    config: true,
    system_setting: true,
  };

  // Menu definition
  menus: {
    label: string;
    icon: string;
    route?: string;
    permissionKey: keyof PermissionMap | string;
    submenu?: {
      label: string;
      route: string;
      permissionKey: keyof PermissionMap | string;
    }[];
  }[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/home',
      permissionKey: 'dashboard',
    },
    {
      label: 'Employees',
      icon: 'supervisor_account',
      permissionKey: 'employee',
      submenu: [
        {
          label: 'Employee',
          route: '/employee/user',
          permissionKey: 'employee_view',
        },
        {
          label: 'Document',
          route: '/user/user/settings',
          permissionKey: 'employee_document',
        },
      ],
    },
    {
      label: 'Clients',
      icon: 'business_center',
      route: '/client/client',
      permissionKey: 'client',
    },
    {
      label: 'Task',
      icon: 'assignment',
      permissionKey: 'task',
      submenu: [
        {
          label: 'Calendar',
          route: '/task/task',
          permissionKey: 'task_calendar',
        },
        {
          label: 'Table',
          route: '/task/viewTask',
          permissionKey: 'task_table',
        },
        {
          label: 'Board',
          route: '/user/user/settings',
          permissionKey: 'task_board',
        },
        {
          label: 'Work Folder',
          route: '/user/user/settings',
          permissionKey: 'task_folder',
        },
      ],
    },
    { label: 'Report', icon: 'assessment', permissionKey: 'report' },
    {
      label: 'Config',
      icon: 'build',
      route: '/config',
      permissionKey: 'config',
    },
    {
      label: 'System Setting',
      icon: 'settings',
      route: '/systemSetting',
      permissionKey: 'system_setting',
    },
  ];

  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit(): void {}

  toggleSubmenu(menuLabel: string, event?: MouseEvent) {
    this.openSubmenus[menuLabel] = !this.openSubmenus[menuLabel];

    if (this.openSubmenus[menuLabel] && this.sidenavCollapsed && event) {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      this.submenuTopPosition = rect.top;
      this.floatingMenuOpen = true;
    } else {
      this.floatingMenuOpen = false;
    }
  }

  isSubmenuOpen(menuLabel: string): boolean {
    return !!this.openSubmenus[menuLabel];
  }

  isRouteActive(route?: string): boolean {
    return route ? this.router.url.startsWith(route) : false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeSubmenus();
    }
  }

  closeSubmenus() {
    this.openSubmenus = {};
    this.floatingMenuOpen = false;
  }
}
