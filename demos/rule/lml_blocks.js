Blockly.Blocks['lml_const_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_opr_equal'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendValueInput("right")
        .setCheck(null)
        .appendField("Equals to");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_var_length'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LENGTH");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_family_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SIZE")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["SMALL","S"], ["MEDIUM","M"], ["LARGE","L"]]), "");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("Size of tshirt");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_if_then'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendField("If");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Then");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_opr_different'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendValueInput("right")
        .setCheck(null)
        .appendField("Different from");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_if_then_else'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendField("If");
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendField("Then");
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendField("Else");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_opr_lt'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Larger than");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_opr_lteq'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Larger or equal to");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_opr_gt'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Greater than");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_opr_gteq'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Greater or equal to");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_opr_and'] = {
  init: function() {
    this.appendValueInput("ARG0")
        .setCheck("Boolean")
        .appendField("Both");
    this.appendValueInput("ARG1")
        .setCheck("Boolean")
        .appendField("And");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("True when all input are true");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_opr_or'] = {
  init: function() {
    this.appendValueInput("ARG0")
        .setCheck("Boolean")
        .appendField("Either");
    this.appendValueInput("ARG1")
        .setCheck("Boolean")
        .appendField("Or");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("True when all input are true");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_var_width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WIDTH");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_family_market'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MARKET")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["US","US"], ["EUR","EUR"], ["ASIA","ASIA"]]), "");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("Market");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_family_tracking'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TRACKING")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["FULL","F"], ["PARTIAL","P"], ["NONE","N"]]), "");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(240);
 this.setTooltip("Tracking of goods");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_var_label'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LABEL");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour(330);
 this.setTooltip("Label on goods");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lml_const_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};