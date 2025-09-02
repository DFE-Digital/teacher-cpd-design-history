---
title: How we validate bulk upload data 
description: "Explanation of the error hierarchy logic used to validate data in RIAB" 
date: 2025-08-27
---
# How we validate bulk upload data (error hierarchy) 
 
The RIAB service is supported by data captured in the Teaching Regulation Service (TRS) database – we use this to check and validate the data uploaded to RIAB. 
 
When checking Early Career Teaching (ECT) records, to ensure the backend system effectively prioritises what to validate and when to call the TRS API, we mapped out an error hierarchy. This hierarchy gives the backend clear, step-by-step rules for checking information against the TRS database—while minimising unnecessary API calls.   
 
## How RIAB’s error validation works 

There are 3 steps in the error validation process:  

1. **CSV errors:** the backend first validates the structure of the uploaded CSV file. This includes checks for issues like duplicate rows. These structural problems are flagged before any API calls are made  

2. **TRS API checks:** if the CSV passes the initial check the backend calls the TRS API to validate ECT details and confirm that the appropriate body is matched correctly. Any errors will be flagged in a downloadable CSV, alongside the row they apply to 

3. **Formatting errors:** once the TRS validation is complete, the system checks the formatting and content of individual rows to ensure the data aligns with expected values and formats. Any errors will appear in a downloadable CSV, alongside the row they apply to 

When all these steps are complete, any data rows, without errors, will successfully upload to the service. 


### CSV template  

To help users with accuracy of data, we provide a downloadable template with pre-populated headings showing the required information.  

We didn’t ask for the teacher’s name, because a teacher’s name can change through marriage or be misspelt and could create more errors. Instead, the teacher reference number (TRN) and date of birth were selected for validation against the Teacher Record Service API as these are the most stable sources of data. 

![image](https://github.com/DFE-Digital/teacher-cpd-design-history/blob/main/app/images/ecf-v2/Screenshot%202025-07-18%20114805.png)

We also provide guidance, in an accordion, so that users can read more detail if required. In testing, users preferred the information to be in the accordion, so that you could expand it if needed, but you’re not overwhelmed with content on the initial view. 
 
![image](https://github.com/DFE-Digital/teacher-cpd-design-history/blob/main/app/images/ecf-v2/what%20to%20include%20in%20your%20CSV%20file.png)


## Error levels and their rules  

When there are errors detected in the CSV file the user is uploading, the rows with errors are added to a separate CSV which the user can then download. This is known as the downloadable ‘error CSV’. 
 
The error CSV will show the user specific error messages relating to the detected error. The user needs to correct these errors before uploading the CSV again.   

A key insight from user research highlighted that if either the TRN or date of birth are entered incorrectly, without the teacher’s name, it becomes difficult for users to identify the correct teacher within their own systems. As a result, the teacher’s name is included against each error in the error CSV, allowing users to easily identify the teacher and resolve the issue more easily. 

[View this document to see all the error messages](https://educationgovuk.sharepoint.com/:x:/r/sites/TeacherServices/_layouts/15/Doc.aspx?sourcedoc=%7B4932BA14-2BE0-4295-9587-74DD7CF4D6C3%7D&file=Error%20messages%20-%20bulk%20upload%20all%20journeys.xlsx&action=default&mobileredirect=true) 

### CSV level errors  

Any errors with the CSV file will result in the rejection of the whole file, with no rows processed.  

CSV error types: 

* No file selected  

* Wrong file type – only CSV files will be accepted 

* Empty file – If the file has no inputted data, it will be blocked  

* File too big - 1000 rows limit per CSV and 100kb file size limit 

* Duplicate TRNs in the file 

* Incorrect headers – only headers shown in the template summary will be accepted 

* Missing columns – If any column headers are missing, the file will be rejected.   
 

### Formatting rules 

Formatting errors are captured in the error CSV, alongside the row they apply to. If there are multiple formatting errors, we show multiple error messages. The service requires all formatting rules are met before the CSV file is processed. 

**TRN**  

* TRN must be 7 digits 

* TRN must not contain any letters 

* Field must be completed  

**Date of birth (DoB)**  

* Date of birth must be in YYYY-MM-DD format 

* Field must be completed 

**Induction end date** 

* End date must be in YYYY-MM-DD format 

* Field must be completed 

**Number of terms** 

* Number of terms must be between 1 and 16 

* Number of terms must not be more than 1 decimal place 

* Field must be completed 

**Outcome**  

* Outcome must be ‘Pass’, ‘Fail’ or ‘Release’ 

* Field must be completed  
 

### Validation rules 

Validation errors appear in the error CSV. If there are multiple validation errors, we show multiple error messages. Where the service matched the teacher record number (TRN) and date of birth (DoB) to the ECT record, the error message shows the ECT’s name, to help the user reference and resolve issues. 

* TRN and DoB must match a record on the TRS 

* Induction end date must not be in the future 

* Induction end date must not be before the start date 

* ECT must be claimed by the same appropriate body attempting to pass, fail or release them 

* ECT must not have already passed or failed induction 

* ECT must have an open induction period   
