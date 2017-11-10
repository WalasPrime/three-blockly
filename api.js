var BLOCK_DEFS = [];

function addObjectDefinition(def){
	BLOCK_DEFS.push(def);
}

function defaultForType(type){
	switch(type){
		case 'value': return '0';
		case 'statement': return '';
	}
}

function getCodeForType(type, block, name){
	switch(type){
		case 'value': return Blockly.JavaScript.valueToCode(block, name);
		case 'statement': return Blockly.JavaScript.statementToCode(block, name);
	}
}

function loadBlockDefinitions(){
	BLOCK_DEFS.forEach((def) => {
		Blockly.Blocks[def.name] = {
			init: function(){
				this.setInputsInline(false);
				this.setColour(160);
				this.setNextStatement(true);
				this.setPreviousStatement(true);
				this.appendDummyInput()
					.appendField(def.name)
				def.attributes.forEach((attr) => {
					var f = null;
					switch(attr.type){
						case 'value':
							this.appendValueInput(attr.name)
								.appendField(attr.name)
						break;
						case 'statement':
							this.appendStatementInput(attr.name)
								.appendField(attr.name)
						break;
					}
				});
			}
		};
		Blockly.JavaScript[def.name] = function(block) {
			var attributes_resolved = {};
			def.attributes.forEach((attr) => {
				attributes_resolved[attr.name] = getCodeForType(attr.type, block, attr.name) || attr.default || defaultForType(attr.type);
			});
			var spawn_code = `addToScene(${def.create.toString()}, (obj) => {${attributes_resolved.initialization}}, (obj) => {${attributes_resolved.animation}}, ${JSON.stringify(attributes_resolved)});`;
			return spawn_code;
		}
	});
}
