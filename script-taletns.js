function ResetCell(cell) {
  var tier = Generate_Buttons_Options(0, 0)
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var mainSheet = ss.getSheetByName("Talents");
  mainSheet.getRange(cell).clear();
  var dropdown = mainSheet.getRange(cell);
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(tier).build();
  dropdown.setDataValidation(rule);
  dropdown.setBackground('#ff0000')
  dropdown.setBorder(true, true, true, true, false, false)
  dropdown.setFontSize(11)
  dropdown.setFontWeight('bold')
  dropdown.setValue(0);
}

function CreateSpec(cell, spend_points, max_points) {
  tier = Generate_Buttons_Options(0, max_points)
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var mainSheet = ss.getSheetByName("Talents");
  var dropdown = mainSheet.getRange(cell);
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(tier).build();
  dropdown.setDataValidation(rule);
  dropdown.setBackground('#fcd299')
  dropdown.setValue(spend_points);;
}

function CreateCell(cell, tier_point_max, poinst_left) {
  var cell_value = GetCellValue(cell)
  if (cell_value == 0) {
    tier = Generate_Buttons_Options(0, tier_point_max)
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var mainSheet = ss.getSheetByName("Talents");
    var dropdown = mainSheet.getRange(cell);
    var rule = SpreadsheetApp.newDataValidation().requireValueInList(tier).build();
    dropdown.setDataValidation(rule);
    dropdown.setBackground('#fcd299')
    dropdown.setValue(cell_value);;
  }
}


// 735 'AA10' 856 'AA11'
function ButtonReset(cell, sheet) {
    var checkbox = SpreadsheetApp.getActive().getRange(sheet+cell);
    checkbox.uncheck();
    }

function ButtonCheck(cell, sheet) {
    var checkbox = SpreadsheetApp.getActive().getRange(sheet+cell);
    checkbox.check();
    }

function AutoTickFourBonus(cell, sheet){
  ButtonCheck(ResetTickButtons()[cell], sheet)
    for (const [key, _] of Object.entries(ResetTickButtons())) {
      if(key != ResetTickButtons()[cell] && key != cell){
        ButtonReset(key, sheet)
    }}
}

function GetCellValue(cell) {
  return SpreadsheetApp.getActiveSheet().getRange(cell).getValue()
}

function Generate_Buttons_Options(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function ResetTickButtons(){
  return {
    'T4': 'T4',
    'T5': 'T4',
    'T6': 'T6',
    'T7': 'T6',
    'T8': 'T8',
    'T9': 'T8',
    'T10': 'T10',
    'T11': 'T10',
  }
}


function GenerateSpec(type) {
  if (type == 735) {
    spec_735 = {
      'G7': [0, 5],
      'I7': [5, 5],
      'E11': [3, 3],
      'G11': [2, 2],
      'K11': [0, 2],
      'E15': [1, 3],
      'G15': [3, 3],
      'I15': [1, 1],
      'K15': [0, 2],
      'G19': [0, 5],
      'I19': [3, 3],
      'Q7': [2, 2],
      'S7': [3, 3],
      'U7': [0, 5],
      'Q11': [0, 5],
      'S11': [2, 3],
      'U11': [3, 3],
      'Q15': [3, 3],
      'S15': [1, 1],
      'U15': [2, 2],
      'S19': [1, 5],
      'U19': [3, 3],
      'Q23': [0, 1],
      'S23': [5, 5],
      'W23': [0, 2],
      'Q27': [2, 2],
      'U27': [5, 5],
      'Q31': [2, 3],
      'S31': [1, 1],
      'U31': [0, 3],
      'S35': [5, 5],
      'U35': [0, 3],
      'Q39': [3, 3],
      'S39': [1, 1],
      'U39': [3, 3],
      'Q43': [0, 2],
      'U43': [5, 5],
      'S47': [1, 1]

    }
    return spec_735
  }
  if (type == 856) {
    spec_856 = {
      'G7': [0, 5],
      'I7': [5, 5],
      'E11': [3, 3],
      'G11': [2, 2],
      'K11': [0, 2],
      'E15': [0, 3],
      'G15': [0, 3],
      'I15': [1, 1],
      'K15': [0, 2],
      'G19': [0, 5],
      'I19': [0, 3],
      'Q7': [2, 2],
      'S7': [3, 3],
      'U7': [0, 5],
      'Q11': [0, 5],
      'S11': [2, 3],
      'U11': [3, 3],
      'Q15': [3, 3],
      'S15': [1, 1],
      'U15': [2, 2],
      'S19': [1, 5],
      'U19': [3, 3],
      'Q23': [1, 1],
      'S23': [5, 5],
      'W23': [0, 2],
      'Q27': [2, 2],
      'U27': [5, 5],
      'Q31': [3, 3],
      'S31': [1, 1],
      'U31': [2, 3],
      'S35': [5, 5],
      'U35': [3, 3],
      'Q39': [3, 3],
      'S39': [1, 1],
      'U39': [3, 3],
      'Q43': [0, 2],
      'U43': [5, 5],
      'S47': [1, 1]

    }

    return spec_856
  }
}


function onEdit(e) {

  var spreadSheet = e.source;
  var sheetName = spreadSheet.getActiveSheet().getName();
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  var a1 = cell.getA1Notation();
  // var val = cell.getValue();
  // Browser.msgBox(a1)
  // Browser.msgBox(val)
  // Browser.msgBox(mainSheet.getRange(column, row).getValue())
  // var aaa = column + row
  // console.log(aaa)
  const buttonscells = ['G7', 'I7', 'E11', 'G11', 'K11', 'E15', 'G15', 'I15', 'K15', 'G19', 'I19'];
  const buttons_resto = ['Q11', 'S11', 'U11', 'Q15', 'S15', 'U15', 'S19', 'U19', 'Q23', 'S23', 'W23', 'Q27', 'U27', 'Q31', 'S31', 'U31', 'S35', 'U35', 'Q39', 'S39', 'U39', 'Q43', 'U43', 'S47', 'Q7', 'S7', 'U7'];
  const buttons_four_peace = ['T5', 'T7', 'T9', 'T11']
  const buttons_two_peace = ['T4', 'T6', 'T8', 'T10']

  if (sheetName == 'Talents' && buttonscells.includes(a1)) {
    ButtonReset('AA11', 'Talents!')
    ButtonReset('AA10', 'Talents!')
    var poinst_left_to_spend = GetCellValue('AC2');
    // CreateCell('G7', 5, poinst_left_to_spend);
    // CreateCell('I7', 5, poinst_left_to_spend);
    var starlight = GetCellValue('G7');
    var genesis = GetCellValue('I7');
    var moonglow = GetCellValue('E11');
    var nature_majesty = GetCellValue('G11');
    var improved_moonfire = GetCellValue('K11');
    // var brambles = GetCellValue('E15');
    // var nature_grace = GetCellValue('G15');
    // var nature_spelndor = GetCellValue('I15');
    // var nature_reach = GetCellValue('K15');
    // var vengeance = GetCellValue('G19');
    // var celestial_focus = GetCellValue('I19');
    var tier_one_and_two_result = starlight + genesis + moonglow + nature_majesty + improved_moonfire
    // var test123 = GetCellValue('B18');
    if (starlight + genesis < 5) {
      buttonscells.forEach(function (cell) {
        if (cell != 'I7' && cell != 'G7') {
          ResetCell(cell);
        }
      });
    }
    else {
      CreateCell('E11', 3, poinst_left_to_spend);
      CreateCell('G11', 2, poinst_left_to_spend);
      CreateCell('K11', 2, poinst_left_to_spend);

      if (tier_one_and_two_result < 10) {
        ResetCell('E15');
        ResetCell('K15');
        ResetCell('G15');
        ResetCell('I15');
      }
      else {
        CreateCell('E15', 3, poinst_left_to_spend);
        CreateCell('K15', 2, poinst_left_to_spend);
        if (nature_majesty == 2) {
          CreateCell('G15', 3, poinst_left_to_spend);
          CreateCell('I15', 1, poinst_left_to_spend);
        }
        if (nature_majesty != 2) {
          ResetCell('G15');
          ResetCell('I15');
        }
      }
      var result_tier4 = GetCellValue('B18');
      if (result_tier4 != 0) {
        ResetCell('G19');
        ResetCell('I19');
      }
      else {
        CreateCell('G19', 5, poinst_left_to_spend);
        CreateCell('I19', 3, poinst_left_to_spend);
      }
    }
  }
  if (sheetName == 'Talents' && buttons_resto.includes(a1)) {
    ButtonReset('AA11', 'Talents!')
    ButtonReset('AA10', 'Talents!')
    var naturalice = GetCellValue('Q11');
    var subtlety = GetCellValue('S11');
    var nature_shape_shifter = GetCellValue('U11');
    var intensity = GetCellValue('Q15');
    // var clear_casting = GetCellValue('S15');
    var master_shape_shifte = GetCellValue('U15');
    // var tranquil_spirit = GetCellValue('S19');
    var imp_rej = GetCellValue('U19');
    var nature_switfness = GetCellValue('Q23');
    var gift_of_nature = GetCellValue('S23');
    // var imp_tranq = GetCellValue('W23');
    var emp_touch = GetCellValue('Q27');
    // var natures_bounty = GetCellValue('U27');
    // var living_spirit = GetCellValue('Q31');
    var swiftmend = GetCellValue('S31');
    // var nature_perfection = GetCellValue('U31');
    var emp_rej = GetCellValue('S35');
    // var living_seed = GetCellValue('U35');
    var revitalize = GetCellValue('Q39');
    var tree_of_life = GetCellValue('S39');
    var imp_tree_of_life = GetCellValue('U39');
    // var imp_barkskin = GetCellValue('Q43');
    // var gote = GetCellValue('U43');
    var wild_growth = GetCellValue('S47');
    var mark_of_wild = GetCellValue('Q7');
    var nature_focus = GetCellValue('S7');
    var furor = GetCellValue('U7');
    var tier_first_row = mark_of_wild + nature_focus + furor
    var tier_second_row = tier_first_row + naturalice + subtlety + nature_shape_shifter
    // var tier_three_row = tier_second_row + intensity + clear_casting + master_shape_shifte
    // var tier_four_row = tier_three_row + tranquil_spirit + imp_rej
    // var tier_five_row = tier_four_row + gift_of_nature + nature_switfness + imp_tranq
    // var tier_six_row = tier_five_row + emp_touch + natures_bounty
    // var tier_seven_row = tier_six_row + living_spirit + swiftmend + nature_perfection
    // var tier_eigth_row = tier_seven_row + emp_rej + living_seed
    // var tier_nine_row = tier_eigth_row + revitalize + tree_of_life + imp_tree_of_life
    // var tier_ten_row = tier_nine_row + imp_barkskin + gote
    if (tier_first_row < 5)
      buttons_resto.forEach(function (cell) {
        if (cell != 'Q7' && cell != 'S7' && cell != 'U7') {
          ResetCell(cell);
        }
      });
    else {
      if (tier_first_row > 4) {
        CreateCell('Q11', 5, poinst_left_to_spend);
        CreateCell('S11', 3, poinst_left_to_spend);
        CreateCell('U11', 3, poinst_left_to_spend);
      }
      if (tier_second_row < 10) {
        ResetCell('Q15');
        ResetCell('S15');
        ResetCell('U15');
      }
      else {
        CreateCell('Q15', 3, poinst_left_to_spend);
        CreateCell('S15', 1, poinst_left_to_spend);

        if (nature_shape_shifter != 3) {
          ResetCell('U15');
        }
        else if (master_shape_shifte == 0) {
          CreateCell('U15', 2, poinst_left_to_spend);
        }
      }
      var tier_three_row_result = GetCellValue('N18');
      if (tier_three_row_result != 0) {
        ResetCell('U19');
        ResetCell('S19');
      }
      else {
        CreateCell('U19', 3, poinst_left_to_spend);
        CreateCell('S19', 5, poinst_left_to_spend);
      }
      var tier_four_row_result = GetCellValue('N22');
      if (tier_four_row_result != 0) {
        ResetCell('S23');
        ResetCell('W23');
        ResetCell('Q23');
      }
      else {
        CreateCell('S23', 5, poinst_left_to_spend);
        CreateCell('W23', 2, poinst_left_to_spend);

        if (intensity != 3) {
          ResetCell('Q23');
        }
        else if (nature_switfness == 0) {
          CreateCell('Q23', 1, poinst_left_to_spend);
        }
      }
      var tier_five_row_result = GetCellValue('N26');
      if (tier_five_row_result != 0) {
        ResetCell('Q27');
        ResetCell('U27');
      }
      else if (emp_touch == 0) {
        CreateCell('Q27', 2, poinst_left_to_spend);
      }

      if (imp_rej == 3 && tier_five_row_result == 0) {
        CreateCell('U27', 5, poinst_left_to_spend);
      }
      else { ResetCell('U27'); }
      var tier_six_row_result = GetCellValue('N30');
      if (tier_six_row_result != 0) {
        ResetCell('Q31');
        ResetCell('S31');
        ResetCell('U31');
      }
      else {
        CreateCell('Q31', 3, poinst_left_to_spend);
        CreateCell('U31', 3, poinst_left_to_spend);

        if (gift_of_nature != 5) {
          ResetCell('S31');
        }
        else if (swiftmend == 0) {
          CreateCell('S31', 1, poinst_left_to_spend);
        }
      }
      var tier_seven_row_result = GetCellValue('N34');
      if (tier_seven_row_result != 0) {
        ResetCell('S35');
        ResetCell('U35');
      }
      else {
        CreateCell('S35', 5, poinst_left_to_spend);
        CreateCell('U35', 3, poinst_left_to_spend);
      }
      var tier_eigth_row_result = GetCellValue('N38');
      if (tier_eigth_row_result != 0) {
        ResetCell('Q39');
        ResetCell('S39');
        ResetCell('U39');
      }
      else if (revitalize == 0) {
        CreateCell('Q39', 3, poinst_left_to_spend);
      }

      if (emp_rej != 5) {
        ResetCell('S39');
        ResetCell('S47');
        ResetCell('U39');
      }
      else if(tier_eigth_row_result == 0){
        CreateCell('S39', 1, poinst_left_to_spend);}
      var tier_nine_row_result = GetCellValue('N42');
      if (tier_nine_row_result != 0) {
        ResetCell('Q43');
        ResetCell('U43');
      }
      else {
        CreateCell('Q43', 2, poinst_left_to_spend);
        CreateCell('U43', 5, poinst_left_to_spend);
      }
      var tier_ten_row_result = GetCellValue('N46');
      if (tier_ten_row_result != 0) {
        ResetCell('S47');
      }
      else {
        if (tree_of_life == 1 && wild_growth == 0) {
          CreateCell('S47', 1, poinst_left_to_spend);
        }
      }
      if (tree_of_life == 1 && imp_tree_of_life == 0) {
        CreateCell('U39', 3, poinst_left_to_spend);
      }
      if (tree_of_life != 1) {
        ResetCell('S47');
        ResetCell('U39');
      }
    }
  }
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  var check_box_value = cell.getValue();
  if (sheetName == 'Talents' && a1 == 'AA10' && check_box_value == true) {
    for (const [key, value] of Object.entries(GenerateSpec(735))) {
      CreateSpec(key, value[0], value[1])
    }
    ButtonReset('AA11', 'Talents!')
  }
  if (sheetName == 'Talents' && a1 == 'AA11' && check_box_value == true) {
    for (const [key, value] of Object.entries(GenerateSpec(856))) {
      CreateSpec(key, value[0], value[1])
    }
    ButtonReset('AA10', 'Talents!')
    ResetCell('G19');
    ResetCell('I19');
  }
  if (sheetName == 'Calculator' && buttons_four_peace.includes(a1) && check_box_value == true) {
    AutoTickFourBonus(a1, 'Calculator!')
  }

  if (sheetName == 'Calculator' && buttons_two_peace.includes(a1)) {
      buttons_four_peace.forEach(function (cell) {
        ButtonReset(cell, 'Calculator!');
      });
      var buttons_check_number = 0
      buttons_two_peace.forEach(function (cell) {
        if(GetCellValue(cell)){
          buttons_check_number++
        };
      });
      if(buttons_check_number > 2){
        buttons_two_peace.forEach(function (cell) {
          if(cell != a1){
            ButtonReset(cell, 'Calculator!');}
      });
      }

    }











}
