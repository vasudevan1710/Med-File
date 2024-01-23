import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApicommonserviceService } from 'app/shared/apicommonservice.service';
import { IndividualregistrationComponent } from '../individualregistration/individualregistration.component';
import { NewpatientaddComponent } from '../newpatientadd/newpatientadd.component';

@Component({
  selector: 'app-manualregistration',
  templateUrl: './manualregistration.component.html',
  styleUrls: ['./manualregistration.component.scss']
})
export class ManualregistrationComponent implements OnInit {
  hideandshow: boolean = true;
  visitData: any[] = [];
  patientlist: any = [];
  addresslist: any = [];
 
  SearchValue: string = '';
  objload: any = {
    HRN: '',
    NAME:'',
    IDNO:'',
    IDTYPE:'',

  }
 

  objAction: any = {
    isEditing: false,
    isView: false
  }

  objActionUnchanged: any = {
    isEditing: false,
    isView: false,
  }

  dataSource: any = new MatTableDataSource([]);

  isLinear = false;
  displayedColumns: string[] = ['HRN_No', 'Name', 'DOB', 'Sex', 'Speaking_English', 'Action'];
  displayedColumns1: string[] = [ 'line', 'action'];

  @ViewChild(MatPaginator) _paginator!: MatPaginator;
  @ViewChild(MatSort) _sort!: MatSort;

  patientData: any ='';
  patientName: any ='';
  pt:any[]=[];
  
  constructor(
    private _formBuilder: FormBuilder,
    public _matDialog: MatDialog,
    public _ApiCall: ApicommonserviceService,
  ) { }

  ngOnInit(): void {
    this.searchfield();
    this.searchfields();
    this.getPatientName();
    this.getPatientHRN();
    this.getpatientidPt('PT');
    // this.getPatientID();
  }
  getPatientHRN(){
    this._ApiCall.getpatients(this.patientData).subscribe(
      (response = this.patientData) => {
        console.log(response)
       
      },
       // console.error('Error fetching patient id');

    );
  }
  // getPatientID(){
  //   this._ApiCall.getpatients(this.patientData).subscribe(
  //     (response = this.patientData) => {
  //       console.log(response)
       
  //     },
  //      // console.error('Error fetching patient id');

  //   );
  // }
  getPatientName()
  {
    this._ApiCall.getPatientsName(this.patientName).subscribe(
      (response = this.patientName) => {
        console.log(response)
      },
    )
  }

  public newClick(): void {
    debugger
    this.hideandshow = !this.hideandshow;
    this.objAction.isEditing = false;
    // this.resetScreen();
  }

  private matTableConfig(tableRecords: any[]): void {
    this.dataSource = new MatTableDataSource(tableRecords);
  }

  applyFilter(filterValue: string) {
    this.patientlist.filter = filterValue.trim().toLowerCase();
    // this.getContractList();
  }

  // getmethod for main table
  public searchfield(): void {
    debugger
    this.patientlist = [];
    // let obj = {
    //   HRN: this.objload.HRN,
    //   // HRN: "SC   9879829"
    // };
    this._ApiCall.getpatients(this.patientData).subscribe((result) => {
      debugger
      if (result) {
        this.patientlist = result;
        console.log(this.patientlist, 'checktext');
        this.patientlist = result;
        this.patientlist = new MatTableDataSource<any>(this.patientlist);
        this.patientlist.paginator = this._paginator;
        this.patientlist.sort = this._sort;
        this.matTableConfig(this.patientlist);
      }
    })
  }
  public searchfields(): void {
    debugger
    this.patientlist = [];
    // let obj = {
    //   HRN: this.objload.HRN,
    //   // HRN: "SC   9879829"
    // };
    this._ApiCall.getPatientsName(this.patientName).subscribe((result) => {
      debugger
      if (result) {
        this.patientlist = result;
        console.log(this.patientlist, 'checktext');
        this.patientlist = result;
        this.patientlist = new MatTableDataSource<any>(this.patientlist);
        this.patientlist.paginator = this._paginator;
        this.patientlist.sort = this._sort;
        this.matTableConfig(this.patientlist);
      }
    })
  }
  public fetchVisitData(search: string) {
    this._ApiCall.getVisits(search).subscribe(
      (data: any) => {
        debugger
        this.visitData = data?.Codes?.[search]; // Assign the fetched data to the local variable
        // Perform any additional processing or operations here
        console.log(this.visitData)
      }, (error) => {
        console.error('Error fetching visit data:', error);
        // Handle error scenarios if needed
      }
    );
  }
// ****************************************LookUp Add Individual******************************//
public openDialog( data?: any, editflag?: boolean, viewflag?: boolean): void {
  debugger
   const dialogRef = this._matDialog.open(IndividualregistrationComponent
          ,{
        width: "2500px",
        height: "850px",
        panelClass: "custom-dialog-container",
        data:{
          // name:name,
          editflag:editflag,
          viewflag:viewflag,
          list:data ? data :{},
        }
      }
      );
      dialogRef.afterClosed().subscribe((result) => {
          console.log(result);
      });
    }
    // ****************************************LookUp Add NewPatientAdd******************************//
public openDialogNew( data?: any, editflag?: boolean, viewflag?: boolean): void {
  debugger
   const dialogRef = this._matDialog.open(NewpatientaddComponent
          ,{
        width: "2500px",
        height: "850px",
        panelClass: "custom-dialog-container",
        data:{
          // name:name,
          editflag:editflag,
          viewflag:viewflag,
          list:data ? data :{},
        }
      }
      );
      dialogRef.afterClosed().subscribe((result) => {
          console.log(result);
      });
    }

    public accountNameFilter(): void {
      debugger;
      // this.SearchValue = this.SearchValue.toString().trim() ? this.SearchValue.toString().toLocaleLowerCase() : "";
      // let filteredAccountNameList = [];
      // filteredAccountNameList = this.accountsList.filter((item: any) =>
      //   item.account_name.toLocaleLowerCase().includes(this.SearchValue.toLocaleLowerCase()));
      // this.matTableConfig(filteredAccountNameList);
    }
  
    public onSatPopClear() {
      // this.SearchValue = "";
      // this.matTableConfig(this.accountsList);
    }
    getpatientidPt(search:string){
   
      this._ApiCall.getPatientsIDType(search).subscribe((data:any)=>{
        this.pt=data?.Codes?.[search];
        console.log(this.pt)
        console.error();
        
      });
    }

}
