addObjectDefinition({
	name: 'Cube',
	attributes: [
		{name: 'size', type: 'value', default: 1},
		{name: 'initialization', type: 'statement', default: 'obj.position.x = Math.random()*2-1;obj.position.y = Math.random()*2-1;obj.position.z = Math.random()*2-1;'},
		{name: 'animation', type: 'statement', default: 'obj.rotation.x += 0.01; obj.rotation.y += 0.02;'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.BoxGeometry(attributes.size,attributes.size,attributes.size), graphics.MeshBasicMaterial({color: 0xFF0000}));
	}
});

addObjectDefinition({
	name: 'Sphere',
	attributes: [
		{name: 'size', type: 'value', default: 1},
		{name: 'widthSegments ', type: 'value', default: 20},
		{name: 'heightSegments ', type: 'value', default: 20},
		{name: 'initialization', type: 'statement', default: 'obj.position.x = Math.random()*2-1;obj.position.y = Math.random()*2-1;obj.position.z = Math.random()*2-1;'},
		{name: 'animation', type: 'statement', default: 'obj.rotation.x += 0.01; obj.rotation.y += 0.02;'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.SphereGeometry(attributes.size,attributes.widthSegments,attributes.heightSegments), graphics.MeshBasicMaterial({color: 0x00FF00}));
	}
});

loadBlockDefinitions();