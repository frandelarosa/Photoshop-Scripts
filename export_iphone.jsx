﻿/*******************************************************  Francisco de la Rosa  24-09-12  Export files with iPhone Retina and no retina format.********************************************************/var doc = app.activeDocument;displayDialogs = DialogModes.NO;// General Settingsvar options = new PNGSaveOptions();options.compression = 0;options.interlaced = false;// Save current document statevar savedState = doc.activeHistoryState;// Export to retinavar saveFile = new File(decodeURI(activeDocument.fullName.fsName).slice(0, -4) + "@2x.png");app.activeDocument.saveAs(saveFile, options, false, Extension.LOWERCASE);// Copy file into new foldervar destFolder = activeDocument.fullName.parent + "/iphone/";if( !Folder(destFolder).exists ){	Folder(destFolder).create();}var destFile = new File(destFolder + activeDocument.fullName.name.slice(0, -4) + "@2x.png");saveFile.copy(destFile);saveFile.remove();saveFile.close();doc.activeHistoryState = savedState;// Export to no retinapreferences.rulerUnits = Units.PERCENT;var resize = doc.resizeImage(50, 50, null, ResampleMethod.BICUBIC);var saveFile = new File(decodeURI(activeDocument.fullName.fsName).slice(0, -4) + ".png");app.activeDocument.saveAs(saveFile, options, false, Extension.LOWERCASE);var destFile = new File(destFolder + activeDocument.fullName.name.slice(0, -4) + ".png");saveFile.copy(destFile);saveFile.remove();saveFile.close();doc.activeHistoryState = savedState;alert("Done.");