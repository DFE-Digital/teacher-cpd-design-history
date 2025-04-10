---
title: Pass, Fail, Release and Extensions Design History
description: "How we built the Pass, Fail and Extensions Journeys of the service ."
date: 2025-03-20
---

The 'record induction as an appropriate body' service (RIAB) was designed to replace the 'Appropriate Body Portal' (AB) held by the Teaching Regulation Agency (TRA) due to the decommissioning of the legacy Database for Qualified Teachers (DQT). RIAB contains part of the data from the DQT (now called TRS) relating to induction periods, but not the overall induction results.

RIAB allows appropriate bodies to record an induction outcome once they have claimed an ECT. They are able to record either a Pass, a Fail or an extension through the 'record an outcome' journey.

# The 'record induction outcome' journey in the TRA AB portal

The TRA AB portal allowed you to:
1. Search for a claimed ECT by using their Teacher Reference Number (TRN) and their Date of Birth.
2. Click on the 'Update induction details' button
3. From the drop down list they can select the induction outcome as either; Fail, Induction Extended; Not Yet Completed; Pass or In Progress.
4. Once they have selected an outcome, they enter the induction date, number of terms completed and the induction programme type and submit

### TRA AB Update induction details button

![TRA AB Update induction details button](/ecf-v2/pass-fail-extensions-release/TRA-AB-update-induction-details-button.png)

### TRA AB Record outcome dropdown:

![TRA AB Record outcome dropdown](/ecf-v2/pass-fail-extensions-release/TRA-AB-record-outcome-dropdown.png)

### TRA AB Record outcome page:

![TRA AB Record outcome page](/ecf-v2/pass-fail-extensions-release/screenshot-of-TRA-AB-record-outcome.png)

# The 'record an outcome' journey in the RIAB service.

The new RIAB service has some overlap with the recording induction outcomes journey in the TRA AB portal but differs by splitting out the different outcome options into separate journeys.  The RIAB service displays separate buttons for recording a 'pass' and a 'fail' on an ECT's record, as well as adding an extension and 'releasing' an ECT.

The other big change we made for the RIAB service was allowing term values to be entered to one decimal place. This decision was made following user research, where appropriate bodies made it clear that whole values didn't allow accurate reflection of time spent on induction due to the differences in induction served to school term lengths. We changed this to allow term values to be entered to one decimal place which aligns to the system used on ECT manager and added content to make it clear that the value refers to full time equivalent (FTE) terms.

## Pass and Fail Journey

The RIAB service now splits the pass and fail journeys into two separate routes with separate buttons for pass and fail on an ECT's record. This change in user interface was made following heuristic testing and design sessions that agreed that having a big decision controlled by two close radio buttons might be problematic. We decided that we would split this into two separate journeys that would look and act similarly but with highlight the 'passing' outcome in green and the 'failing' outcome in red on their respective pages to make it as clear to the user as possible what action they are carrying out.

The journey as is:
1. Select a claimed ECT by searching for their teacher reference number (TRN) or name.
2. Once on the claimed ECT page, you can select the pass or fail button.
3. Once on the record a pass or fail page you enter the date the induction was passed or failed and the number of terms of induction that were spent with the appropriate body.

![Pass and Fail buttons](/ecf-v2/pass-fail-extensions-release/screenshot-of-RIAB-pass-fail-buttons.png)

### Pass page:

![Pass induction page](/ecf-v2/pass-fail-extensions-release/screenshot-of-RIAB-pass-page.png)

### Fail page:

![Fail induction page](/ecf-v2/pass-fail-extensions-release/screenshot-of-RIAB-fail-page.png)

## The 'add an extension' journey:

The RIAB service splits out 'add an extension' into it's own journey. This change was made to display extensions on an ECT's record and add a view button to see a detailed historical extensions record. This was done following design reviews in order to simplify the page when viewing a claimed ECT's record. An appropriate body can now edit historical extensions, changing the number of terms of extension.

The journey as is:
1. Select a claimed ECT by searching either teacher reference number (TRN) or name.
2. Once on a claimed ECT page, you can select the 'view' button on the extensions row in the induction summary table.
3. Once on the extensions page, you can add a new extension or edit a previous extension.
4. When adding an extension, you enter the number of FTE terms and select the button to add an extension.

### The extensions button:

![The extensions button](/ecf-v2/pass-fail-extensions-release/screenshot-of-RIAB-extensions-button.png)

### The extensions page:

![The extensions page](/ecf-v2/pass-fail-extensions-release/screenshot-of-RIAB-extensions-page.png)

## The 'release' journey:

The RIAB service splits out the 'release an ECT' function into it's own journey. This change was made to make it clearer to an appropriate body how to 'release' an ect so they can be claimed by another appropriate body.

The journey as is:
1. Select a claimed ECT by searching for either teacher reference number (TRN) or name.
2. Once on a claimed ECT page, you select the 'release' link in the current induction period table.
3. Once on the release page, enter the date of release and the number of FTE terms spent at the appropriate body during induction.

### The release button:

![The release button](/ecf-v2/pass-fail-extensions-release/screenshot-of-RIAB-release-button.png)

### The release page:

![The release page](/ecf-v2/pass-fail-extensions-release/RIAB-release-page.png)
