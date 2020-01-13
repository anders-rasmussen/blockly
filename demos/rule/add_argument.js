Blockly.Constants.LML.ADD_ARG_MUTATOR_EXTENSION = function () {
  this.getField('ARG1').setValidator(function (option) {
    if (this.getFieldValue) {
    }
  });
};

// Register mutator
Blockly.Extensions.registerMutator(
  'add_arg_mutator',
  Blockly.Constants.LML.ADD_ARG_MUTATOR_MIXIN,
  Blockly.Constants.LML.ADD_ARG_MUTATOR_EXTENSION);

Blockly.Constants.LML.ADD_ARG_MUTATOR_MIXIN = {
  /**
   * Create XML to represent whether an argument should be visible
   */
  mutationToDom: function () {
    var container = Blockly.utils.xml.createElement('mutation');
    var hasArg1 = this.getFieldValue('ARG1') ? 'true' : 'false';
    container.setAttribute('harArg1', hasArg1);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function (xmlElement) {
    var hasArg1 = (xmlElement.getAttribute('hasArg1') == 'true');
    this.updateShape_(hasArg1);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function (hasArg1) {
    this.getField('ARG1').setVisible(hasArg1 == 'true');
  }
};