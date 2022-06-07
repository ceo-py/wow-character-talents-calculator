function ResetCell(cell) {
    var tier, ss, mainSheet, dropdown, rule;
    tier = Generate_Buttons_Options(0, 0);
    ss = SpreadsheetApp.getActiveSpreadsheet();
    mainSheet = ss.getSheetByName("Talents");
    dropdown = mainSheet.getRange(cell);
    rule = SpreadsheetApp.newDataValidation().requireValueInList(tier).build();
    dropdown.setDataValidation(rule);
    dropdown.setBackground("#ff0000");
    dropdown.setBorder(true, true, true, true, false, false);
    dropdown.setFontSize(11);
    dropdown.setFontWeight("bold");
    dropdown.setValue(0);
}

function CreateSpec(cell, spend_points, max_points) {
    var tier, ss, mainSheet, dropdown, rule;
    tier = Generate_Buttons_Options(0, max_points);
    ss = SpreadsheetApp.getActiveSpreadsheet();
    mainSheet = ss.getSheetByName("Talents");
    dropdown = mainSheet.getRange(cell);
    rule = SpreadsheetApp.newDataValidation().requireValueInList(tier).build();
    dropdown.setDataValidation(rule);
    dropdown.setBackground("#d4f1f4");
    dropdown.setValue(spend_points);
}

function CreateCell(cell, tier_point_max, poinst_left, cell_value) {
    var tier, ss, mainSheet, dropdown, rule;
    tier = Generate_Buttons_Options(0, tier_point_max);
    ss = SpreadsheetApp.getActiveSpreadsheet();
    mainSheet = ss.getSheetByName("Talents");
    dropdown = mainSheet.getRange(cell);
    rule = SpreadsheetApp.newDataValidation()
        .requireValueInList(tier)
        .build();
    dropdown.setDataValidation(rule);
    dropdown.setBackground("#d4f1f4");
}

function ButtonReset(cell, sheet) {
    var checkbox = SpreadsheetApp.getActive().getRange(sheet + cell);
    checkbox.uncheck();
}

function ButtonCheck(cell, sheet) {
    var checkbox = SpreadsheetApp.getActive().getRange(sheet + cell);
    checkbox.check();
}

function AutoTickFourBonus(cell, sheet) {
    ButtonCheck(ResetTickButtons()[cell], sheet);
    for (const [key, _] of Object.entries(ResetTickButtons())) {
        if (key !== ResetTickButtons()[cell] && key !== cell) {
            ButtonReset(key, sheet);
        }
    }
}

function GetCellValue(cell) {
    return SpreadsheetApp.getActiveSheet().getRange(cell).getValue()
}

function Generate_Buttons_Options(start, end) {
    return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
}

function takeRangeToReset(tierRow, start, tierTree) {
    Object.keys(GenerateSpec()).slice(start, tierTree).forEach((cell) => {
        if (cell.includes(tierRow)) {
            ResetCell(cell);
        }
    });
}

function takeRangeToCreate(tierRow, start, tierTree) {
    for (const [key, value] of Object.entries(GenerateSpec()).slice(start, tierTree)) {
        Object.keys(GenerateSpec()).slice(start, tierTree).forEach((cell) => {
            if (key.includes(tierRow)) {
                CreateCell(key, value[2], value[2]);
            }
        });
    }
}

function ResetTickButtons() {
    return {
        V4: "V4",
        V5: "V4",
        V6: "V6",
        V7: "V6",
        V8: "V8",
        V9: "V8",
        V10: "V10",
        V11: "V10",
    };
}

function GenerateSpec() {
    spec = {
        E7: [0, 0, 3],
        G7: [0, 0, 2],
        I7: [0, 5, 5],
        E11: [0, 0, 2],
        G11: [0, 5, 5],
        I11: [0, 0, 2],
        K11: [0, 3, 3],
        E15: [0, 0, 3],
        I15: [0, 0, 1],
        K15: [0, 0, 3],
        G19: [0, 0, 5],
        I19: [0, 0, 5],
        S7: [0, 5, 5],
        U7: [0, 0, 5],
        Q11: [0, 0, 2],
        S11: [0, 0, 3],
        U11: [0, 5, 5],
        Q15: [0, 3, 3],
        S15: [0, 3, 3],
        U15: [0, 1, 1],
        W15: [0, 3, 3],
        S19: [0, 3, 3],
        U19: [0, 5, 5],
        Q23: [0, 3, 3],
        U23: [0, 1, 1],
        W23: [0, 0, 3],
        U27: [0, 5, 5],
        Q31: [0, 0, 5],
        S31: [0, 1, 1],
        U31: [0, 1, 1],
        Q35: [0, 2, 2],
        S35: [0, 2, 2],
        U35: [0, 3, 3],
        Q39: [0, 3, 3],
        S39: [0, 1, 1],
        U39: [0, 2, 2],
        S43: [0, 5, 5],
        S47: [0, 1, 1]
    };
    return spec;
}

function tier1() {
    if (GetCellValue('N14') != 0) {
        takeRangeToReset("15", 12, -1);
    } else {
        takeRangeToCreate("15", 12, -1);
    }
}

function tier2() {
    if (GetCellValue('N18') != 0) {
        takeRangeToReset("19", 12, -1);
    } else {
        takeRangeToCreate("19", 12, -1);
    }
}

function tier3() {
    if (GetCellValue('N22') != 0) {
        takeRangeToReset("23", 12, -1);
    } else {
        takeRangeToCreate("23", 12, -1);
    }
}

function tier4() {
    if (GetCellValue('N26') != 0) {
        takeRangeToReset("27", 12, -1);
    } else {
        takeRangeToCreate("27", 12, -1);
    }
}

function tier5() {
    if (GetCellValue('N30') != 0) {
        takeRangeToReset("31", 12, -1);
    } else {
        CreateCell("Q31", 5, 0);
        if (GetCellValue('S19') != 3) {
            ResetCell("S31");
        } else {
            CreateCell("S31", 1, 0);
        }
        if (GetCellValue('U27') != 5) {
            ResetCell("U31");
        } else {
            CreateCell("U31", 1, 0);
        }
    }
}


function tier6() {
    if (GetCellValue('N34') != 0) {
        takeRangeToReset("35", 12, -1);
    } else {
        takeRangeToCreate("35", 12, -1);
    }
}

function tier7() {
    if (GetCellValue('N38') != 0) {
        takeRangeToReset("39", 12, -1);
    } else {
        CreateCell("Q39", 3, 0);
        CreateCell("S39", 1, 0);
        if (GetCellValue('S39') != 1) {
            ResetCell("U39");
        } else {
            CreateCell("U39", 2, 0);
        }
    }
}


function tier8() {
    if (GetCellValue('N42') != 0) {
        takeRangeToReset("43", 12, -1);
    } else {
        takeRangeToCreate("43", 12, -1);
    }
}

function tier9() {
    if (GetCellValue('N46') != 0) {
        ResetCell("S47");
    } else {
        CreateCell("S47", 1, 0);
    }
}


function onEdit(e) {
    var spreadSheet,
        sheetName,
        cell,
        a1,
        poinst_left_to_spend,
        cell,
        check_box_value,
        buttons_check_number;
    spreadSheet = e.source;
    sheetName = spreadSheet.getActiveSheet().getName();
    cell = SpreadsheetApp.getActiveSheet().getActiveCell();
    a1 = cell.getA1Notation();
    if (sheetName === "Talents" && Object.keys(GenerateSpec()).slice(0, 12).includes(a1)) {
        ButtonReset('AA9', 'Talents!')
        if (GetCellValue("B6") < 5) {
            Object.keys(GenerateSpec()).slice(0, 12).forEach((cell) => {
                if (cell !== "I7" && cell !== "G7" && cell !== "E7") {
                    ResetCell(cell);
                }
            });
        } else {
            takeRangeToCreate("11", 0, 12);
        }
        if (GetCellValue("B14") != 0) {
            takeRangeToReset("15", 0, 12);
        } else {
            takeRangeToCreate("15", 0, 12);
        }
        if (GetCellValue('B18') != 0) {
            takeRangeToReset("19", 0, 12);
        } else {
            CreateCell("I19", 5, poinst_left_to_spend);
            if (GetCellValue('G11') != 5) {
                ResetCell("G19");
            } else {
                CreateCell("G19", 5, poinst_left_to_spend);
            }
        }
    }
    if (sheetName === "Talents" && Object.keys(GenerateSpec()).slice(12, -1).includes(a1)) {
        ButtonReset('AA9', 'Talents!')
        if (GetCellValue('N10') != 0) {
            Object.keys(GenerateSpec()).slice(12).forEach(function(cell) {
                if (cell !== "Q7" && cell !== "S7" && cell !== "U7") {
                    ResetCell(cell);
                }
            });
        } else {
            takeRangeToCreate("11", 12, -1);
            if (Object.keys(GenerateSpec()).slice(12, 17).includes(a1)) {
                tier1()
                tier2()
                tier3()
                tier4()
                tier5()
                tier6()
                tier7()
                tier8()
                tier9()
            }
            if (Object.keys(GenerateSpec()).slice(12, 21).includes(a1)) {
                tier2()
                tier3()
                tier4()
                tier5()
                tier6()
                tier7()
                tier8()
                tier9()
            }
            if (Object.keys(GenerateSpec()).slice(12, 23).includes(a1)) {
                tier3()
                tier4()
                tier5()
                tier6()
                tier7()
                tier8()
                tier9()
            }
            if (Object.keys(GenerateSpec()).slice(12, 26).includes(a1)) {
                tier4()
                tier5()
                tier6()
                tier7()
                tier8()
            }
            if (Object.keys(GenerateSpec()).slice(12, 27).includes(a1)) {
                tier5()
                tier6()
                tier7()
                tier8()
                tier9()
            }
            if (Object.keys(GenerateSpec()).slice(12, 30).includes(a1)) {
                tier6()
                tier7()
                tier8()
                tier9()
            }
            if (Object.keys(GenerateSpec()).slice(12, 36).includes(a1)) {
                tier7()
                tier8()
                tier9()
            }
            if (Object.keys(GenerateSpec()).slice(12, 36).includes(a1)) {
                tier8()
                tier9()
            }
            if (Object.keys(GenerateSpec()).slice(12, 37).includes(a1)) {
                tier9()
            }
        }
    }
    cell = SpreadsheetApp.getActiveSheet().getActiveCell();
    check_box_value = cell.getValue();
    if (sheetName === "Talents" && a1 === "AA9" && check_box_value === true) {
        for (const [key, value] of Object.entries(GenerateSpec())) {
            CreateSpec(key, value[1], value[2]);
        }
    }
    if (
        sheetName === "Calculator" &&
        Object.keys(ResetTickButtons()).filter((_, i) => i % 2 == 1).includes(a1) &&
        check_box_value == true
    ) {
        AutoTickFourBonus(a1, "Calculator!");
    }

    if (sheetName === "Calculator" && Object.keys(ResetTickButtons()).filter((_, i) => i % 2 == 0).includes(a1)) {
        Object.keys(ResetTickButtons()).filter((_, i) => i % 2 == 1).forEach(function(cell) {
            ButtonReset(cell, "Calculator!");
        });
        buttons_check_number = 0;
        Object.keys(ResetTickButtons()).filter((_, i) => i % 2 == 0).forEach((cell) => {
            if (SpreadsheetApp.getActiveSheet().getRange(cell).getValue()) {
                buttons_check_number++;
            }
        });
        if (buttons_check_number > 2) {
            Object.keys(ResetTickButtons()).filter((_, i) => i % 2 == 0).forEach((cell) => {
                if (cell != a1) {
                    ButtonReset(cell, "Calculator!");
                }
            });
        }
    }
}