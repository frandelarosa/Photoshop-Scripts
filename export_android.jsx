﻿/*******************************************************  Francisco de la Rosa  24-09-12  Export files to HDPI, MDPI and LDPI sizes. Base size is  XHDPI: 640x960.********************************************************/// Document referencevar doc = app.activeDocument;displayDialogs = DialogModes.NO;preferences.rulerUnits = Units.PERCENT;// PNG Settingsvar options = new PNGSaveOptions();options.compression = 0;options.interlaced = false;// Folders and sizesvar folderPaths = ["/xhdpi/", "/hdpi/", "/mdpi/", "/ldpi/"];var sizes = [100, 75, 50, 37.5];/***********************    Export Process***********************/// Save current document statevar defaultState = doc.activeHistoryState;for (var i=0; i<4; i++){	var resize = doc.resizeImage(sizes[i], sizes[i], null, ResampleMethod.BICUBIC);	// Create new File and save it	var saveFile = new File(decodeURI(activeDocument.fullName.fsName).slice(0, -4) + ".png");	app.activeDocument.saveAs(saveFile, options, false, Extension.LOWERCASE);	// Copy file into new folder	var destFolder = activeDocument.fullName.parent + folderPaths[i];	if( !Folder(destFolder).exists ){		Folder(destFolder).create();	}	var destFile = new File(destFolder + activeDocument.fullName.name.slice(0, -4) + ".png");	saveFile.copy(destFile);	saveFile.remove();	saveFile.close();	doc.activeHistoryState = defaultState;}alert("Done.");