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
    dropdown.setBackground("#fcd299");
    dropdown.setValue(spend_points);
}

function CreateCell(cell, tier_point_max, poinst_left, cell_value) {
    var cell_value, tier, ss, mainSheet, dropdown, rule;
    tier = Generate_Buttons_Options(0, tier_point_max);
    ss = SpreadsheetApp.getActiveSpreadsheet();
    mainSheet = ss.getSheetByName("Talents");
    dropdown = mainSheet.getRange(cell);
    rule = SpreadsheetApp.newDataValidation()
        .requireValueInList(tier)
        .build();
    dropdown.setDataValidation(rule);
    dropdown.setBackground("#fcd299");
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
    return SpreadsheetApp.getActiveSheet().getRange(cell).getValue();
}

function Generate_Buttons_Options(start, end) {
    return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
}

function ResetTickButtons() {
    return {
        T4: "T4",
        T5: "T4",
        T6: "T6",
        T7: "T6",
        T8: "T8",
        T9: "T8",
        T10: "T10",
        T11: "T10",
    };
}

function GenerateSpec() {
    spec = {
        G7: [0, 0, 5],
        I7: [5, 5, 5],
        E11: [3, 3, 3],
        G11: [2, 2, 2],
        K11: [0, 0, 2],
        E15: [1, 0, 3],
        G15: [3, 0, 3],
        I15: [1, 1, 1],
        K15: [0, 0, 2],
        G19: [0, 0, 5],
        I19: [3, 0, 3],
        Q7: [2, 2, 2],
        S7: [3, 3, 3],
        U7: [0, 0, 5],
        Q11: [0, 0, 5],
        S11: [2, 2, 3],
        U11: [3, 3, 3],
        Q15: [3, 3, 3],
        S15: [1, 1, 1],
        U15: [2, 2, 2],
        S19: [1, 1, 5],
        U19: [3, 3, 3],
        Q23: [0, 1, 1],
        S23: [5, 5, 5],
        W23: [0, 0, 2],
        Q27: [2, 2, 2],
        U27: [5, 5, 5],
        Q31: [2, 3, 3],
        S31: [1, 1, 1],
        U31: [0, 2, 3],
        S35: [5, 5, 5],
        U35: [0, 3, 3],
        Q39: [3, 3, 3],
        S39: [1, 1, 1],
        U39: [3, 3, 3],
        Q43: [0, 0, 2],
        U43: [5, 5, 5],
        S47: [1, 1, 1],
    };
    return spec;
}

function onEdit(e) {
    var spreadSheet,
        sheetName,
        cell,
        a1,
        result_tier4,
        poinst_left_to_spend,
        tree_of_life,
        tier_three_row_result,
        tier_four_row_result,
        tier_five_row_result,
        tier_six_row_result,
        tier_seven_row_result,
        tier_eigth_row_result,
        tier_nine_row_result,
        tier_ten_row_result,
        cell,
        check_box_value,
        buttons_check_number;
    spreadSheet = e.source;
    sheetName = spreadSheet.getActiveSheet().getName();
    cell = SpreadsheetApp.getActiveSheet().getActiveCell();
    a1 = cell.getA1Notation();
    // var val = cell.getValue();
    // Browser.msgBox(a1)
    // Browser.msgBox(val)
    // Browser.msgBox(mainSheet.getRange(column, row).getValue())
    // var aaa = column + row
    // console.log(aaa)

    if (sheetName === "Talents" && Object.keys(GenerateSpec()).slice(0, 11).includes(a1)) {
        ButtonReset("AA11", "Talents!");
        ButtonReset("AA10", "Talents!");
        if (GetCellValue("G7") + GetCellValue("I7") < 5) {
            Object.keys(GenerateSpec()).slice(0, 11).forEach((cell) => {
                if (cell !== "I7" && cell !== "G7") {
                    ResetCell(cell);
                }
            });
        } else {
            CreateCell("E11", 3, poinst_left_to_spend);
            CreateCell("G11", 2, poinst_left_to_spend);
            CreateCell("K11", 2, poinst_left_to_spend);
            if (GetCellValue("B14") != 0) {
                ResetCell("E15");
                ResetCell("K15");
                ResetCell("G15");
                ResetCell("I15");
            } else {
                CreateCell("E15", 3, poinst_left_to_spend);
                CreateCell("K15", 2, poinst_left_to_spend);
                if (GetCellValue("G11") === 2) {
                    CreateCell("G15", 3, poinst_left_to_spend);
                    CreateCell("I15", 1, poinst_left_to_spend);
                }
                else {
                    ResetCell("G15");
                    ResetCell("I15");
                }
            }
            result_tier4 = GetCellValue("B18");
            if (result_tier4 !== 0) {
                ResetCell("G19");
                ResetCell("I19");
            } else {
                CreateCell("G19", 5, poinst_left_to_spend);
                CreateCell("I19", 3, poinst_left_to_spend);
            }
        }
    }
    if (sheetName === "Talents" && Object.keys(GenerateSpec()).slice(11).includes(a1)) {
        ButtonReset("AA11", "Talents!");
        ButtonReset("AA10", "Talents!");
        N10 = GetCellValue("N10")
        if (N10 != 0) {
            Object.keys(GenerateSpec()).slice(11).forEach(function (cell) {
                if (cell !== "Q7" && cell !== "S7" && cell !== "U7") {
                    ResetCell(cell);
                }
            });
        } else {
            if (N10 == 0) {
                CreateCell("Q11", 5, poinst_left_to_spend);
                CreateCell("S11", 3, poinst_left_to_spend);
                CreateCell("U11", 3, poinst_left_to_spend);
            }
            if (GetCellValue("N14") != 0) {
                ResetCell("Q15");
                ResetCell("S15");
                ResetCell("U15");
            } else {
                CreateCell("Q15", 3, poinst_left_to_spend);
                CreateCell("S15", 1, poinst_left_to_spend);

                if (GetCellValue("U11") !== 3) {
                    ResetCell("U15");
                } else {
                    CreateCell("U15", 2, poinst_left_to_spend);
                }
            }
            tier_three_row_result = GetCellValue("N18");
            if (tier_three_row_result !== 0) {
                ResetCell("U19");
                ResetCell("S19");
            } else {
                CreateCell("U19", 3, poinst_left_to_spend);
                CreateCell("S19", 5, poinst_left_to_spend);
            }
            tier_four_row_result = GetCellValue("N22");
            if (tier_four_row_result !== 0) {
                ResetCell("S23");
                ResetCell("W23");
                ResetCell("Q23");
            } else {
                CreateCell("S23", 5, poinst_left_to_spend);
                CreateCell("W23", 2, poinst_left_to_spend);

                if (GetCellValue("Q15") !== 3) {
                    ResetCell("Q23");
                } else if (GetCellValue("Q23") === 0) {
                    CreateCell("Q23", 1, poinst_left_to_spend);
                }
            }
            tier_five_row_result = GetCellValue("N26");
            if (tier_five_row_result !== 0) {
                ResetCell("Q27");
                ResetCell("U27");
            } else
                CreateCell("Q27", 2, poinst_left_to_spend);
            if (GetCellValue("U19") === 3 && tier_five_row_result === 0) {
                CreateCell("U27", 5, poinst_left_to_spend);
            } else {
                ResetCell("U27");
            }
            tier_six_row_result = GetCellValue("N30");
            if (tier_six_row_result !== 0) {
                ResetCell("Q31");
                ResetCell("S31");
                ResetCell("U31");
            } else {
                CreateCell("Q31", 3, poinst_left_to_spend);
                CreateCell("U31", 3, poinst_left_to_spend);

                if (GetCellValue("S23") !== 5) {
                    ResetCell("S31");
                } else
                    CreateCell("S31", 1, poinst_left_to_spend);

            }
            tier_seven_row_result = GetCellValue("N34");
            if (tier_seven_row_result !== 0) {
                ResetCell("S35");
                ResetCell("U35");
            } else {
                CreateCell("S35", 5, poinst_left_to_spend);
                CreateCell("U35", 3, poinst_left_to_spend);
            }
            tier_eigth_row_result = GetCellValue("N38");
            if (tier_eigth_row_result !== 0) {
                ResetCell("Q39");
                ResetCell("S39");
                ResetCell("U39");
            } else {
                CreateCell("Q39", 3, poinst_left_to_spend);
            }
            if (GetCellValue("S35") !== 5) {
                ResetCell("S39");
                ResetCell("S47");
                ResetCell("U39");
            } else if (tier_eigth_row_result === 0) {
                CreateCell("S39", 1, poinst_left_to_spend);
            }
            tier_nine_row_result = GetCellValue("N42");
            if (tier_nine_row_result !== 0) {
                ResetCell("Q43");
                ResetCell("U43");
            } else {
                CreateCell("Q43", 2, poinst_left_to_spend);
                CreateCell("U43", 5, poinst_left_to_spend);
            }
            tier_ten_row_result = GetCellValue("N46");
            tree_of_life = GetCellValue("S39")
            if (tier_ten_row_result !== 0) {
                ResetCell("S47");
            } else {
                if (tree_of_life === 1) {
                    CreateCell("S47", 1, poinst_left_to_spend);
                }
            }
            if (tree_of_life === 1) {
                CreateCell("U39", 3, poinst_left_to_spend);
            }
            if (tree_of_life !== 1) {
                ResetCell("S47");
                ResetCell("U39");
            }
        }
    }
    cell = SpreadsheetApp.getActiveSheet().getActiveCell();
    check_box_value = cell.getValue();
    if (sheetName === "Talents" && a1 === "AA10" && check_box_value === true) {
        for (const [key, value] of Object.entries(GenerateSpec())) {
            CreateSpec(key, value[0], value[2]);
        }
        ButtonReset("AA11", "Talents!");
    }
    if (sheetName === "Talents" && a1 === "AA11" && check_box_value === true) {
        for (const [key, value] of Object.entries(GenerateSpec())) {
            CreateSpec(key, value[1], value[2]);
        }
        ButtonReset("AA10", "Talents!");
        ResetCell("G19");
        ResetCell("I19");
    }
    if (
        sheetName === "Calculator" &&
        Object.keys(ResetTickButtons()).filter((_, i) => i % 2 === 1).includes(a1) &&
        check_box_value === true
    ) {
        AutoTickFourBonus(a1, "Calculator!");
    }

    if (sheetName === "Calculator" && Object.keys(ResetTickButtons()).filter((_, i) => i % 2 === 0).includes(a1)) {
        Object.keys(ResetTickButtons()).filter((_, i) => i % 2 === 1).forEach(function (cell) {
            ButtonReset(cell, "Calculator!");
        });
        buttons_check_number = 0;
        Object.keys(ResetTickButtons()).filter((_, i) => i % 2 === 0).forEach((cell) => {
            if (GetCellValue(cell)) {
                buttons_check_number++;
            }
        });
        if (buttons_check_number > 2) {
            Object.keys(ResetTickButtons()).filter((_, i) => i % 2 === 0).forEach((cell) => {
                if (cell !== a1) {
                    ButtonReset(cell, "Calculator!");
                }
            });
        }
    }
}