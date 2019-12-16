import { Injectable } from '@angular/core';
import { Workbook } from  "exceljs/dist/exceljs.min.js";
import * as fs from 'file-saver';
import * as logoFile from '../../assets/js/swmslogo.js';
import { DatePipe } from '../../../node_modules/@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor(private datePipe: DatePipe) {
  }
  generateExcel(data,tallyInfo) { 
    //Excel Title, Header, Data
    const title = 'SWMS';
    const header = ["Drill Pipe #", "Description", "Length", "Acc. Ln", "String weight", "IN","OUT","Comments"]
    

    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Car Data');


    //Add Row and formatting
    let titleRow = worksheet.addRow([title]);
    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true }
    worksheet.addRow([]);


    let titleRow2 = worksheet.addRow(["Rig: "+tallyInfo.rig_name]);
    titleRow2.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true }


    let titleRow3 = worksheet.addRow(['Date : ' + this.datePipe.transform(tallyInfo.date, 'medium')])
    titleRow3.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true }

    let titleRow4 = worksheet.addRow([ tallyInfo.tally_code])
    titleRow4.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true }

    let titleRow5 = worksheet.addRow([ tallyInfo.tally_name])
    titleRow5.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true }


    



    //Add Image
    let logo = workbook.addImage({
      base64: logoFile.logoBase64,
      extension: 'png',
    });

    worksheet.addImage(logo, 'E1:F3');
    worksheet.mergeCells('A1:D2');


    //Blank Row 
    worksheet.addRow([]);

    //Add Header Row
    let headerRow = worksheet.addRow(header);
    
    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    // worksheet.addRows(data);


    // Add Data and Conditional Formatting
    data.forEach(d => {
      let row = worksheet.addRow(d);
      // let qty = row.getCell(5);
      // let color = 'FF99FF99';
      // if (+qty.value < 500) {
      //   color = 'FF9999'
      // }

      // qty.fill = {
      //   type: 'pattern',
      //   pattern: 'solid',
      //   fgColor: { argb: color }
      // }
    }

    );

    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 30;
    worksheet.addRow([]);


    //Footer Row
    let footerRow = worksheet.addRow(['Drill pipe total:0.00']);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFCCFFE5' }
    };
    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }

    //Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);
    var currentdate = new Date();
    var hour = currentdate.getHours();
    var minute = currentdate.getMinutes();
    var newcurrentdate = currentdate.toISOString().slice(0,10)+'-'+hour+'-'+minute;
    var tally_name = 'TallySheet-'+newcurrentdate+'.xlsx';
    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, tally_name);
    })

  }
}


