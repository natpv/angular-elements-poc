import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

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

  rowData: any = [];

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe(data => {
      this.rowData = data.content;
    });
    console.log(this.rowData);
  }

}
