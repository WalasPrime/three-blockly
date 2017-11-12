addObjectDefinition({
	name: 'Cube',
	attributes: [
		{name: 'size', type: 'value', default: 1},
		{name: 'initialization', type: 'statement'},
		{name: 'animation', type: 'statement'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.BoxGeometry(attributes.size,attributes.size,attributes.size), graphics.MeshBasicMaterial({color: 0xFF0000}));
	}
});

addObjectDefinition({
	name: 'Rotate',
	attributes: [
		{name: 'rx', type: 'value', default: 0},
		{name: 'ry', type: 'value', default: 0},
		{name: 'rz', type: 'value', default: 0}
	],
	transform: function(object, attributes){
		if(object){
			object.rotateX((attributes.rx));
			object.rotateY((attributes.ry));
			object.rotateZ((attributes.rz));
		}
	}
});

addObjectDefinition({
	name: 'Translate',
	attributes: [
		{name: 'dx', type: 'value', default: 0},
		{name: 'dy', type: 'value', default: 0},
		{name: 'dz', type: 'value', default: 0}
	],
	transform: function(object, attributes){
		if(object){
			object.position.x += (attributes.dx);
			object.position.y += (attributes.dy);
			object.position.z += (attributes.dz);
		}
		//console.log('Moving by '+attributes.rx);
	}
});

loadBlockDefinitions();