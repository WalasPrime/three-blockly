var BLOCK_DEFS = [];

function addObjectDefinition(def){
	BLOCK_DEFS.push(def)
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

function stripQuotes(str){
	console.log('strip '+str);
	if(str && str.substr(0) == '"' && str.substr(-1) == '"')
		return str.substr(1, str.length-2);
	return str;
}

function ObjectStringifyNoquotes(obj){
	return '{'+Object.keys(obj).map((k) => `"${k}": ${obj[k]}`)+'}';
}

function loadBlockDefinitions(){
	BLOCK_DEFS.forEach((def) => {
		Blockly.Blocks[def.name] = {
			init: function(){
				this.setInputsInline(true);
				this.setColour(def.transform ? 40 : 160);
				this.setNextStatement(true);
				this.setPreviousStatement(true);
				this.appendDummyInput()
					.appendField(def.name)
				def.attributes.forEach((attr) => {
					console.log(attr);
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
			var spawn_code;
			if(def.transform){
				return `if(obj)(${def.transform.toString()})(obj, ${ObjectStringifyNoquotes(attributes_resolved)});`;
			}else{
				spawn_code = `
				addToScene(
					${def.create.toString()},
					(obj) => {${attributes_resolved.initialization || ''}},
					(obj) => {${attributes_resolved.animation || ''}},
					${JSON.stringify(attributes_resolved) || null}
				);`;
			}
			return spawn_code;
		}
	});
}
