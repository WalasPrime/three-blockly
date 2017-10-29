Blockly.Blocks['cube'] = {
	init: function(){
		this.setInputsInline(true);
		this.appendDummyInput()
			.appendField('Object')
			.appendField(new Blockly.FieldDropdown([
				['Cube', 'cube'],
				['Sphere', 'sphere']
			]), 'MODEL');
		this.appendValueInput('SIZE')
			.appendField('size')
			.appendField(new Blockly.FieldNumber('100'), 'FIELDNAME');
		this.setColour(160);
		this.appendStatementInput('INIT')
			.appendField('initialize')
		this.appendStatementInput('ANIMATION')
			.appendField('animate')
	}
}

Blockly.JavaScript['cube'] = function(block){

}