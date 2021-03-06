import { Component } from '@angular/core';

@Component({
  selector: 'app-router-link-snippet',
  template: `
  <div id="html" class="col s12 m9 l12">
    <h4 class="header">HTML</h4>
    <section [innerHTML]="htmlSnippet" hljsContent=".xml"></section>
  </div>
  <div id="ts" class="col s12 m9 l12">
    <h4 class="header">Typescript (Angular v9.x and below)</h4>
    <section [innerHTML]="tsSnippet" hljsContent=".typescript"></section>
    <h4 class="header">Typescript (Angular v10.x and above)</h4>
    <section [innerHTML]="tsSnippetFor10Above" hljsContent=".typescript"></section>
  </div>
  `
})
export class RouterLinkSnippetComponent {
  htmlSnippet = `
<pre>
<code class="xml highlight">
&lt;table datatable [dtOptions]="dtOptions" [dtTrigger]="dtTrigger" class="row-border hover"&gt;&lt;/table&gt;</code>
</pre>
  `;

  tsSnippet = `
<pre>
<code class="typescript highlight">import { AfterViewInit, Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-link',
  templateUrl: 'router-link.component.html'
})
export class RouterLinkComponent implements AfterViewInit, OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private renderer: Renderer, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'data/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          return '<button class="waves-effect btn" view-person-id="' + full.id + '">View</button>';
        }
      }]
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }
}</code>
</pre>
  `;

  tsSnippetFor10Above = `
<pre>
<code class="typescript highlight">import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-link',
  templateUrl: 'router-link.component.html'
})
export class RouterLinkComponent implements AfterViewInit, OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'data/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          return '<button class="waves-effect btn" view-person-id="' + full.id + '">View</button>';
        }
      }]
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }
}</code>
</pre>
  `;
}
