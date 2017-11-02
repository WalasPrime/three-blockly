var BLOCK_DEFS = [];

function addObjectDefinition(def){
	BLOCK_DEFS.push(def)
}

function loadBlockDefinitions(){
	BLOCK_DEFS.forEach((def) => {
		Blockly.Blocks[def.name] = {
			init: function(){
				this.setInputsInline(true);
				this.appendDummyInput()
					.appendField(def.name)
				this.appendValueInput('SIZE')
					.appendField('size')
					.appendField(new Blockly.FieldNumber('100'), 'FIELDNAME');
				this.setColour(160);
				this.appendStatementInput('INIT')
					.appendField('initialize')
				this.appendStatementInput('ANIMATION')
					.appendField('animate')
			}
		};
	});
}

function isKnownObjectType(type){
	return BLOCK_DEFS.filter((def) => def.name == type).length > 0;
}

function makeObject(type, attributes){
	return BLOCK_DEFS.filter((def) => def.name == type)[0].create(Graphics, attributes);
}