import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  title = 'Config Management';

  columnDefs: any = [
    {
      headerName : 'Configuration Name',
      field : 'configName'
    },
    {
      headerName : 'OS Platform',
      field : 'platform'
    },
    {
      headerName : 'OS Version',
      field : 'version'
    },
    {
      headerName : 'UUID',
      field : 'uuid'
    }
  ];

  rowData: any = [
    {
      configName : 'Config 1',
      platform : 'IOS-XR',
      version : '1.1',
      uuid : '177bb8b8-3941-40a7-a533-64905c333f49'
    },
    {
      configName : 'Config 2',
      platform : 'IOS-XE',
      version : '7.1',
      uuid : '94ca3411-7ada-46e6-9add-3e6ff77e6e21'
    },
    {
      configName : 'Config 3',
      platform : 'IOS-XR',
      version : '1.3',
      uuid : '0285ec1d-8fba-4886-a34a-97294312f66b'
    },
    {
      configName : 'Config 4',
      platform : 'IOS-XE',
      version : '7.2',
      uuid : '177bb8b8-3941-40a7-a533-64905c333f49'
    },
    {
      configName : 'Config 5',
      platform : 'IOS-XR',
      version : '7.3',
      uuid : '854565ce-91b6-4330-8e36-ceccc827db84'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
