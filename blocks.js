addObjectDefinition({
	name: 'Cube',
	attributes: [
		{name: 'size', type: 'value', default: 1},
		{name: 'initialization', type: 'statement', default: 'obj.position.x = Math.random()*2-1;obj.position.y = Math.random()*2-1;obj.position.z = Math.random()*2-1;'},
		{name: 'animation', type: 'statement'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.BoxGeometry(attributes.size,attributes.size,attributes.size), graphics.MeshBasicMaterial({color: 0xFF0000}));
	}
});

loadBlockDefinitions();